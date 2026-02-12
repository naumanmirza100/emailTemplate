import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import * as XLSX from 'xlsx';
import { Upload, Mail, Send, FileSpreadsheet, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { API_BASE_URL } from '@/config/api';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Parse Excel/CSV and return rows with companyName and email (case-insensitive headers)
function parseRecipientsFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        const rows = XLSX.utils.sheet_to_json(firstSheet, { header: 1, defval: '' });
        if (!rows.length) {
          resolve([]);
          return;
        }
        const headers = rows[0].map((h) => String(h || '').trim().toLowerCase());
        const companyIdx = headers.findIndex(
          (h) => h === 'companyname' || h === 'company name' || h === 'company'
        );
        const emailIdx = headers.findIndex(
          (h) => h === 'email' || h === 'email address' || h === 'emailaddress'
        );
        if (companyIdx === -1 || emailIdx === -1) {
          reject(
            new Error(
              'Excel must have two columns: "companyName" (or Company Name) and "email" (or Email Address).'
            )
          );
          return;
        }
        const result = [];
        for (let i = 1; i < rows.length; i++) {
          const row = rows[i];
          const companyName = String(row[companyIdx] ?? '').trim();
          const email = String(row[emailIdx] ?? '').trim();
          if (email) result.push({ companyName: companyName || 'Valued Customer', email });
        }
        resolve(result);
      } catch (err) {
        reject(err);
      }
    };
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsArrayBuffer(file);
  });
}

export function SendEmailList() {
  const { toast } = useToast();
  const fileInputRef = useRef(null);
  const [recipients, setRecipients] = useState([]);
  const [fileName, setFileName] = useState('');
  const [subject, setSubject] = useState('');
  const [htmlBody, setHtmlBody] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sendProgress, setSendProgress] = useState({ sent: 0, failed: 0 });

  const handleFileChange = async (e) => {
    const file = e.target?.files?.[0];
    if (!file) return;
    const ext = (file.name || '').toLowerCase();
    if (!ext.endsWith('.xlsx') && !ext.endsWith('.xls') && !ext.endsWith('.csv')) {
      toast({
        title: 'Invalid file',
        description: 'Please upload an Excel file (.xlsx, .xls) or CSV with columns: companyName, email',
        variant: 'destructive',
      });
      return;
    }
    try {
      const list = await parseRecipientsFile(file);
      setRecipients(list);
      setFileName(file.name);
      toast({
        title: 'File loaded',
        description: `Found ${list.length} recipient(s).`,
      });
    } catch (err) {
      toast({
        title: 'Parse error',
        description: err.message || 'Could not parse file. Ensure columns: companyName, email',
        variant: 'destructive',
      });
      setRecipients([]);
      setFileName('');
    }
    e.target.value = '';
  };

  const sendOne = async (to, html) => {
    const res = await fetch(`${API_BASE_URL}/send-email`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ to, subject: subject || 'Email from Laskon Technologies', html }),
    });
    const data = await res.json().catch(() => ({}));
    return data.success;
  };

  const handleSendAll = async () => {
    if (!recipients.length) {
      toast({
        title: 'No recipients',
        description: 'Upload an Excel file with companyName and email columns first.',
        variant: 'destructive',
      });
      return;
    }
    const html = htmlBody.trim();
    if (!html) {
      toast({
        title: 'No content',
        description: 'Paste your HTML email content in the box below.',
        variant: 'destructive',
      });
      return;
    }
    const valid = recipients.filter((r) => emailRegex.test(r.email));
    if (valid.length === 0) {
      toast({
        title: 'No valid emails',
        description: 'None of the uploaded emails are valid.',
        variant: 'destructive',
      });
      return;
    }
    setIsSending(true);
    setSendProgress({ sent: 0, failed: 0 });
    let sent = 0;
    let failed = 0;
    for (const r of valid) {
      const personalizedHtml = html.replace(/\{\{companyName\}\}/gi, r.companyName);
      try {
        const ok = await sendOne(r.email, personalizedHtml);
        if (ok) sent++;
        else failed++;
      } catch {
        failed++;
      }
      setSendProgress({ sent, failed });
    }
    setIsSending(false);
    toast({
      title: 'Bulk send complete',
      description: `Sent: ${sent}, Failed: ${failed}.`,
      variant: failed > 0 ? 'destructive' : 'default',
    });
  };

  return (
    <div className="container mx-auto max-w-4xl px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-1">
            Send Email to List
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Upload an Excel file with <strong>companyName</strong> and <strong>email</strong> columns, paste your HTML, then send to all.
          </p>
        </div>

        {/* File upload */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-sm">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Recipients (Excel / CSV)
          </label>
          <div className="flex flex-wrap items-center gap-3">
            <input
              ref={fileInputRef}
              type="file"
              accept=".xlsx,.xls,.csv"
              onChange={handleFileChange}
              className="hidden"
            />
            <Button
              type="button"
              variant="outline"
              onClick={() => fileInputRef.current?.click()}
              className="gap-2"
            >
              <Upload className="w-4 h-4" />
              Browse
            </Button>
            {fileName && (
              <span className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <FileSpreadsheet className="w-4 h-4 text-emerald-500" />
                {fileName} — {recipients.length} recipient(s)
              </span>
            )}
          </div>
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-500">
            Excel must have two columns: <strong>companyName</strong> (or Company Name) and <strong>email</strong> (or Email Address).
          </p>
        </div>

        {/* Subject */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-sm">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Subject
          </label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Email subject line"
            className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 py-2 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* HTML body */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-sm">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Email body (HTML) — paste your full HTML here
          </label>
          <textarea
            value={htmlBody}
            onChange={(e) => setHtmlBody(e.target.value)}
            placeholder="Paste your HTML email content here (e.g. from an existing template). Use {{companyName}} to insert the company name per recipient."
            rows={14}
            className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 py-3 font-mono text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-y"
          />
        </div>

        {/* Send */}
        <div className="flex flex-wrap items-center gap-4">
          <Button
            onClick={handleSendAll}
            disabled={isSending || !recipients.length || !htmlBody.trim()}
            className="gap-2 bg-indigo-600 hover:bg-indigo-700"
          >
            {isSending ? (
              <>
                <span className="animate-pulse">Sending…</span>
                <span className="text-xs opacity-90">
                  {sendProgress.sent + sendProgress.failed} / {recipients.length}
                </span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send to all ({recipients.length} recipients)
              </>
            )}
          </Button>
          {isSending && (
            <span className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              {sendProgress.sent} sent
              {sendProgress.failed > 0 && (
                <>
                  <AlertCircle className="w-4 h-4 text-amber-500" />
                  {sendProgress.failed} failed
                </>
              )}
            </span>
          )}
        </div>
      </motion.div>
    </div>
  );
}
