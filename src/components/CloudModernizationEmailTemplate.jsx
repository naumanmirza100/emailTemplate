import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Download, Eye, Cloud, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { getFooterHTML } from '@/components/FooterSnippet';

const CloudModernizationEmailTemplate = () => {
  const { toast } = useToast();
  const [showPreview, setShowPreview] = useState(true);
  const [recipientEmail, setRecipientEmail] = useState('');
  const [emailSubject, setEmailSubject] = useState('Accelerate Your Digital Future: Cloud & Modernization Solutions');
  const [isSending, setIsSending] = useState(false);

  const emailHTML = `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="x-apple-disable-message-reformatting">
  <title>Cloud & Digital Modernization | Laskon Tech</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet">
  <!--[if mso]>
  <style type="text/css">
    body, table, td, h1, h2, h3, p, li {font-family: Arial, sans-serif !important;}
  </style>
  <![endif]-->
  <style type="text/css">
    /* BASE STYLES */
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { margin: 0 !important; padding: 0 !important; width: 100% !important; font-family: 'Inter', Arial, sans-serif; background-color: #0f172a; -webkit-font-smoothing: antialiased; color: #e2e8f0; }
    table { border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    td { padding: 0; }
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; display: block; }
    a { color: #38bdf8; text-decoration: none; }
    
    /* LAYOUT */
    .wrapper { width: 100%; table-layout: fixed; background-color: #0f172a; padding: 40px 0; }
    .main { background-color: #1e293b; margin: 0 auto; width: 100%; max-width: 640px; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.5); border: 1px solid #334155; }
    
    /* HEADER */
    .header { 
      background: #0f172a; /* Dark background */
      padding: 20px 20px; /* Reduced padding */
      text-align: center; 
      border-bottom: 2px solid #38bdf8; /* Thinner, consistent border */
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); /* Added shadow */
    }
    .logo { 
      max-width: 160px; /* Slightly smaller logo */
      width: 100%;
      height: auto; 
      margin: 0 auto; 
      display: block;
    }
    
    /* HERO */
    .hero { 
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); 
      padding: 50px 30px; 
      text-align: center; 
      border-bottom: 1px solid #334155;
    }
    .hero-title { 
      font-size: 28px; 
      font-weight: 800; 
      line-height: 1.3; 
      margin: 0 0 15px 0; 
      color: #ffffff !important; 
      letter-spacing: -0.5px;
    }
    .hero-subtitle { font-size: 16px; font-weight: 400; color: #94a3b8; margin: 0 auto; line-height: 1.6; max-width: 500px; }
    
    /* CONTENT */
    .content-wrapper { padding: 40px 30px; background-color: #1e293b; }
    
    /* INTRO */
    .intro-text { font-size: 16px; line-height: 1.7; color: #cbd5e1; margin-bottom: 35px; }
    .highlight { color: #38bdf8; font-weight: 700; }

    /* SECTION HEADERS */
    .section-header { text-align: center; margin-bottom: 25px; margin-top: 10px; }
    .section-title { 
      font-size: 22px; 
      font-weight: 700; 
      color: #ffffff; 
      margin: 0; 
      padding-bottom: 10px;
      border-bottom: 2px solid #38bdf8;
      display: inline-block;
    }

    /* SERVICES GRID (2 Col) */
    .grid-container { font-size: 0; text-align: center; margin-bottom: 30px; }
    
    .service-card {
      display: inline-block;
      width: 48%;
      vertical-align: top;
      background: #0f172a;
      border: 1px solid #334155;
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 15px;
      box-sizing: border-box;
      text-align: left;
      min-height: 160px;
    }
    .service-card:nth-child(odd) { margin-right: 2%; }
    .service-icon { font-size: 20px; margin-bottom: 10px; display: block; color: #38bdf8; }
    .service-title { color: #f1f5f9; font-size: 15px; font-weight: 700; display: block; margin-bottom: 8px; line-height: 1.3; }
    .service-desc { color: #94a3b8; font-size: 13px; line-height: 1.4; }

    /* STAFF AUG */
    .staff-box {
      background: #0f172a;
      border-left: 4px solid #38bdf8;
      padding: 25px;
      margin-bottom: 30px;
      border-radius: 0 8px 8px 0;
    }
    .staff-title { font-size: 18px; font-weight: 700; color: #ffffff; margin-bottom: 10px; }
    .staff-text { font-size: 14px; line-height: 1.6; color: #cbd5e1; }
    .role-list { margin-top: 15px; }
    .role-tag { 
      display: inline-block; 
      background: #1e293b; 
      border: 1px solid #475569; 
      color: #38bdf8; 
      font-size: 12px; 
      font-weight: 600; 
      padding: 6px 10px; 
      border-radius: 4px; 
      margin: 3px; 
    }
    
    /* COST SAVINGS BANNER */
    .savings-banner {
      background-color: rgba(56, 189, 248, 0.1); /* Sky blue tint */
      border: 1px solid rgba(56, 189, 248, 0.3);
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 25px;
    }
    .savings-icon-cell {
      width: 90px;
      text-align: center;
      vertical-align: middle;
      border-right: 1px solid rgba(56, 189, 248, 0.3);
      padding-right: 20px;
    }
    .savings-text-cell {
      padding-left: 20px;
      vertical-align: middle;
    }
    .savings-big-text {
      font-size: 36px;
      font-weight: 800;
      color: #38bdf8; /* Sky 400 */
      display: block;
      line-height: 1;
    }
    .savings-headline {
      color: #ffffff;
      font-size: 16px;
      font-weight: 700;
      display: block;
      margin-bottom: 4px;
      text-transform: uppercase;
    }
    .savings-subtext {
      color: #cbd5e1;
      font-size: 13px;
      line-height: 1.4;
      display: block;
    }

    /* CTA */
    .cta-section { 
      background: #0f172a; 
      padding: 40px 30px; 
      text-align: center; 
      border-top: 1px solid #334155;
    }
    .cta-btn {
      display: inline-block;
      background: #0284c7;
      color: #ffffff !important;
      font-weight: 700;
      font-size: 16px;
      padding: 16px 32px;
      border-radius: 6px;
      text-decoration: none;
      box-shadow: 0 4px 0 #0369a1;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin: 20px 0;
    }
    .cta-btn:hover { background: #0369a1; }

    /* FOOTER */
    .footer { background: #020617; padding: 30px 20px; text-align: center; color: #64748b; font-size: 12px; border-top: 1px solid #1e293b; }
    .footer-link { color: #94a3b8; text-decoration: none; margin: 0 5px; }
    .footer-link:hover { color: #ffffff; }
    
    /* BADGE */
    .badge-container { margin-top: 25px; padding-top: 20px; border-top: 1px solid #1e293b; }
    .badge-img { width: 120px; height: auto; margin: 0 auto; }

    @media screen and (max-width: 600px) {
      .header { padding: 15px 15px; } /* Further reduced padding for mobile */
      .logo { max-width: 120px; }
      .hero-title { font-size: 24px !important; }
      .service-card { width: 100% !important; margin-right: 0 !important; display: block !important; min-height: auto; }
      .content-wrapper { padding: 30px 20px; }
      
       /* Savings Banner Mobile */
      .savings-icon-cell { display: block; width: 100%; border-right: none; border-bottom: 1px solid rgba(56, 189, 248, 0.3); padding: 0 0 15px 0; margin-bottom: 15px; }
      .savings-text-cell { display: block; padding-left: 0; text-align: center; }
    }
  </style>
</head>
<body>
  <center class="wrapper">
    <div style="display:none; font-size:1px; color:#0f172a; line-height:1px; max-height:0px; max-width:0px; opacity:0; overflow:hidden;">
      Accelerate your digital transformation with scalable cloud solutions and elite tech talent.
    </div>

    <table class="main" cellpadding="0" cellspacing="0" role="presentation">
      <!-- HEADER -->
      <tr>
        <td class="header">
          <img src="https://horizons-cdn.hostinger.com/90edfe98-bc38-4e5c-939e-3b2f88663c35/66e33d06cd984435ee08a0d766ddb17c.png" alt="Laskon Technologies" class="logo">
        </td>
      </tr>

      <!-- HERO -->
      <tr>
        <td class="hero">
          <h1 class="hero-title">Cloud & Digital Modernization Solutions</h1>
          <p class="hero-subtitle">Future-proof your enterprise with scalable cloud architecture and intelligent process automation.</p>
        </td>
      </tr>

      <!-- CONTENT -->
      <tr>
        <td class="content-wrapper">
          <!-- Intro -->
          <p class="intro-text">
            <strong>Hello,</strong><br><br>
            The pace of technological change is accelerating. To stay competitive, modern enterprises must not only adopt the cloud but fully optimize it. At Laskon Technologies, we specialize in <span class="highlight">Cloud Transformation and Strategic Staff Augmentation</span>, helping businesses modernize legacy systems and scale their engineering capabilities on demand.
          </p>

          <!-- SECTION 1: CLOUD & BPA -->
          <div class="section-header">
            <h2 class="section-title">Cloud & Business Process Automation</h2>
          </div>

          <div class="grid-container">
            <div class="service-card">
              <span class="service-icon">⚙️</span>
              <span class="service-title">CloudOps & Workflow</span>
              <span class="service-desc">CloudOps and workflow automation.</span>
            </div>
            <div class="service-card">
              <span class="service-icon">☁️</span>
              <span class="service-title">Cloud Migration</span>
              <span class="service-desc">Cloud migration across AWS, Azure, and GCP.</span>
            </div>
            <div class="service-card">
              <span class="service-icon">🤖</span>
              <span class="service-title">Business Automation</span>
              <span class="service-desc">Business process automation to reduce operational overhead.</span>
            </div>
            <div class="service-card">
              <span class="service-icon">⚡</span>
              <span class="service-title">Serverless Architecture</span>
              <span class="service-desc">Serverless computing architecture and deployment.</span>
            </div>
          </div>

          <!-- SECTION 2: DIGITAL MOD -->
          <div class="section-header">
            <h2 class="section-title">Digital & Technology Modernization</h2>
          </div>

          <div class="grid-container">
            <div class="service-card">
              <span class="service-icon">🏗️</span>
              <span class="service-title">Legacy Refactoring</span>
              <span class="service-desc">Legacy system refactoring and modernization.</span>
            </div>
            <div class="service-card">
              <span class="service-icon">🏢</span>
              <span class="service-title">Enterprise Architecture</span>
              <span class="service-desc">Enterprise application architecture improvements.</span>
            </div>
            <div class="service-card">
              <span class="service-icon">🎨</span>
              <span class="service-title">UX Modernization</span>
              <span class="service-desc">User experience (UX) modernization and interface upgrades.</span>
            </div>
            <div class="service-card">
              <span class="service-icon">🚀</span>
              <span class="service-title">Cloud-Native Redesigns</span>
              <span class="service-desc">Cloud-native redesigns for scalability and performance.</span>
            </div>
          </div>

          <!-- STAFF AUGMENTATION -->
          <div class="staff-box">
            <div class="staff-title">Elite Technical Staff Augmentation</div>
            <p class="staff-text">
              Bridging the talent gap is critical for modernization success. We provide pre-vetted, senior-level experts ready to integrate seamlessly into your existing teams.
            </p>
            <div class="role-list">
              <span class="role-tag">Cloud Engineers</span>
              <span class="role-tag">Solution Architects</span>
              <span class="role-tag">DevOps Specialists</span>
              <span class="role-tag">Automation Experts</span>
              <span class="role-tag">Full-Stack Developers</span>
            </div>
          </div>

          <!-- COST SAVINGS BANNER -->
          <div class="savings-banner">
             <table width="100%" cellpadding="0" cellspacing="0">
               <tr>
                 <td class="savings-icon-cell">
                   <span class="savings-big-text">50%</span>
                 </td>
                 <td class="savings-text-cell">
                   <span class="savings-headline">Reduce Cloud Costs</span>
                   <span class="savings-subtext">Optimize infrastructure spend and lower overhead by up to 50% with our modernization experts.</span>
                 </td>
               </tr>
             </table>
          </div>

          <!-- CLOSING TEXT -->
          <p class="intro-text" style="text-align: center; margin-bottom: 10px;">
            Let's discuss how Laskon Tech can accelerate your digital roadmap.
          </p>
        </td>
      </tr>

      <!-- CTA SECTION -->
      <tr>
        <td class="cta-section">
          <a href="mailto:sales@laskontech.com" class="cta-btn">Schedule a Consultation</a>
          
          <div style="margin-top: 20px; color: #94a3b8; font-size: 14px;">
             <p style="margin-bottom: 5px; color: #e2e8f0; font-weight: bold;">Emma W.</p>
             <p>Laskon Technologies</p>
          </div>
        </td>
      </tr>

      <!-- FOOTER -->
      ${getFooterHTML()}
    </table>
  </center>
</body>
</html>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailHTML).then(() => {
      toast({ title: "Success!", description: "HTML copied to clipboard" });
    });
  };

  const downloadHTML = () => {
    const blob = new Blob([emailHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'laskon-cloud-modernization.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast({ title: "Downloaded!", description: "Template saved." });
  };

  const sendEmail = async () => {
    if (!recipientEmail) {
      toast({ title: "Error", description: "Please enter a recipient email address", variant: "destructive" });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(recipientEmail)) {
      toast({ title: "Error", description: "Please enter a valid email address", variant: "destructive" });
      return;
    }
    setIsSending(true);
    try {
      const response = await fetch('http://localhost:3001/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ to: recipientEmail, subject: emailSubject, html: emailHTML }),
      });
      const data = await response.json();
      if (data.success) {
        toast({ title: "Success!", description: `Email sent successfully to ${recipientEmail}` });
        setRecipientEmail('');
      } else {
        let errorMessage = data.error || "Failed to send email";
        if (data.code === 'EAUTH' || data.details?.includes('Authentication')) {
          errorMessage = "Email authentication failed. Please verify your Hostinger email credentials in .env file.";
        } else if (data.details) {
          errorMessage = data.details;
        }
        toast({ title: "Error", description: errorMessage, variant: "destructive" });
      }
    } catch (error) {
      toast({ title: "Error", description: "Failed to connect to email server. Make sure the server is running.", variant: "destructive" });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="container mx-auto max-w-7xl px-2 sm:px-4 py-4 sm:py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-4 sm:space-y-8">
        {/* UI Controls */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 p-4 sm:p-6 transition-colors">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3 sm:gap-4 w-full md:w-auto">
              <div className="p-2 sm:p-3 bg-sky-100 dark:bg-sky-900/30 rounded-lg border border-sky-200 dark:border-sky-800">
                <Cloud className="w-6 h-6 sm:w-8 sm:h-8 text-sky-600 dark:text-sky-400" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">Cloud & Modernization</h1>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Premium dark-themed template for enterprise tech solutions.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3 w-full md:w-auto">
               <Button onClick={() => setShowPreview(!showPreview)} variant="outline" className="border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 flex-1 sm:flex-initial">
                <Eye className="w-4 h-4 mr-2" /> <span className="hidden xs:inline">{showPreview ? 'Hide' : 'Show'} Preview</span>
              </Button>
              <Button onClick={copyToClipboard} variant="outline" className="border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 flex-1 sm:flex-initial">
                <Copy className="w-4 h-4 mr-2" /> <span className="hidden xs:inline">Copy Code</span>
              </Button>
              <Button onClick={downloadHTML} className="bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 text-white flex-1 sm:flex-initial">
                <Download className="w-4 h-4 mr-2" /> <span className="hidden xs:inline">Download</span>
              </Button>
            </div>
          </div>
          
          {/* Subject Line Options */}
          <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-700">
            <h3 className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">Recommended Subject Lines:</h3>
            <div className="grid md:grid-cols-2 gap-2 sm:gap-3">
              <div className="p-2 sm:p-3 bg-slate-50 dark:bg-slate-900/50 rounded border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-medium cursor-pointer hover:border-sky-300 dark:hover:border-sky-600 hover:bg-sky-50 dark:hover:bg-sky-900/50 transition-colors" onClick={() => navigator.clipboard.writeText("Accelerate Your Digital Future: Cloud & Modernization Solutions")}>
                Accelerate Your Digital Future: Cloud & Modernization Solutions
              </div>
              <div className="p-2 sm:p-3 bg-slate-50 dark:bg-slate-900/50 rounded border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-medium cursor-pointer hover:border-sky-300 dark:hover:border-sky-600 hover:bg-sky-50 dark:hover:bg-sky-900/50 transition-colors" onClick={() => navigator.clipboard.writeText("Scale Faster with Laskon: Elite Cloud Talent & Automation")}>
                Scale Faster with Laskon: Elite Cloud Talent & Automation
              </div>
            </div>
          </div>

          {/* Email Sending Form */}
          <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-700">
            <div className="flex items-center gap-2 mb-4">
              <Mail className="w-5 h-5 text-sky-600 dark:text-sky-400" />
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100">Send Email</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="recipient-email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Recipient Email Address</label>
                <input id="recipient-email" type="email" value={recipientEmail} onChange={(e) => setRecipientEmail(e.target.value)} placeholder="recipient@example.com" className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-sky-500 dark:focus:ring-sky-400 focus:border-sky-500 dark:focus:border-sky-400 outline-none transition-colors" />
              </div>
              <div>
                <label htmlFor="email-subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Subject</label>
                <input id="email-subject" type="text" value={emailSubject} onChange={(e) => setEmailSubject(e.target.value)} placeholder="Email subject" className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-sky-500 dark:focus:ring-sky-400 focus:border-sky-500 dark:focus:border-sky-400 outline-none transition-colors" />
              </div>
              <Button onClick={sendEmail} disabled={isSending || !recipientEmail} className="w-full bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 text-white gap-2">
                <Send className="w-4 h-4" />
                {isSending ? 'Sending...' : 'Send Email'}
              </Button>
            </div>
          </div>
        </div>

        {/* Live Preview */}
        {showPreview && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-900 shadow-inner transition-colors">
            <div className="p-2 sm:p-4 flex justify-center bg-slate-950">
              <iframe srcDoc={emailHTML} title="Preview" className="w-full max-w-[720px]" style={{ border: 'none', height: '1800px', minHeight: '600px', background: 'transparent' }} />
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default CloudModernizationEmailTemplate;