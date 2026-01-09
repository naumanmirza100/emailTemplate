import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Download, Eye, Code2, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { getFooterHTML } from '@/components/FooterSnippet';
import { API_BASE_URL } from '@/config/api';

const SoftwareDevAIEmailTemplate = () => {
  const { toast } = useToast();
  const [showPreview, setShowPreview] = useState(true);
  const [recipientEmail, setRecipientEmail] = useState('');
  const [emailSubject, setEmailSubject] = useState('Transform Your Business with Custom Software & AI');
  const [isSending, setIsSending] = useState(false);

  const emailHTML = `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="x-apple-disable-message-reformatting">
  <title>Software Development & AI Solutions | Laskon Tech</title>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <!--[if mso]>
  <style type="text/css">
    body, table, td, h1, h2, h3, p, li {font-family: Arial, sans-serif !important;}
  </style>
  <![endif]-->
  <style type="text/css">
    /* BASE STYLES */
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      margin: 0 !important; 
      padding: 0 !important; 
      width: 100% !important; 
      font-family: 'Plus Jakarta Sans', 'Inter', Arial, sans-serif; 
      background-color: #020617; 
      -webkit-font-smoothing: antialiased; 
      color: #e2e8f0; 
    }
    table { border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    td { padding: 0; }
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; display: block; }
    a { color: #7c3aed; text-decoration: none; transition: color 0.2s ease; }
    a:hover { color: #a78bfa; }
    
    /* LAYOUT */
    .wrapper { width: 100%; table-layout: fixed; background-color: #020617; padding: 40px 0; }
    .main { 
      background-color: #0f172a; 
      margin: 0 auto; 
      width: 100%; 
      max-width: 640px; 
      border-radius: 20px; 
      overflow: hidden; 
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7); 
      border: 1px solid #1e293b; 
    }
    
    /* HEADER */
    .header { 
      background: linear-gradient(to right, #0f172a, #1e293b);
      padding: 25px 30px;
      text-align: center; 
      border-bottom: 1px solid #334155;
    }
    .logo { 
      max-width: 150px;
      width: 100%;
      height: auto; 
      margin: 0 auto; 
      display: block;
      filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
    }
    
    /* HERO */
    .hero { 
      background: radial-gradient(circle at center, #1e293b 0%, #0f172a 100%); 
      padding: 50px 35px; 
      text-align: center; 
      border-bottom: 1px solid #1e293b;
      position: relative;
    }
    .hero-title { 
      font-size: 30px; 
      font-weight: 800; 
      line-height: 1.25; 
      margin: 0 0 18px 0; 
      color: #ffffff !important; 
      letter-spacing: -0.03em;
      text-shadow: 0 2px 4px rgba(0,0,0,0.3);
    }
    .hero-subtitle { 
      font-size: 17px; 
      font-weight: 400; 
      color: #94a3b8; 
      margin: 0 auto; 
      line-height: 1.6; 
      max-width: 500px; 
    }
    
    /* CONTENT */
    .content-wrapper { padding: 45px 35px; background-color: #0f172a; }
    
    /* INTRO */
    .intro-text { font-size: 16px; line-height: 1.75; color: #cbd5e1; margin-bottom: 35px; font-weight: 400; }
    .highlight { color: #a78bfa; font-weight: 700; }

    /* SECTION HEADERS */
    .section-header { text-align: left; margin-bottom: 20px; margin-top: 15px; padding-bottom: 12px; border-bottom: 2px solid #334155; display: flex; align-items: center; }
    .section-title { 
      font-size: 20px; 
      font-weight: 700; 
      color: #f8fafc; 
      margin: 0; 
      text-transform: uppercase;
      letter-spacing: 0.02em;
    }

    /* SERVICES LIST */
    .services-list { list-style: none; margin: 0 0 40px 0; padding: 0; }
    .service-item {
      background: #1e293b;
      border: 1px solid #334155;
      border-radius: 10px;
      padding: 16px 22px;
      margin-bottom: 14px;
      display: block;
      color: #e2e8f0;
      font-size: 15px;
      font-weight: 500;
      transition: transform 0.2s;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2);
    }
    .service-bullet { 
      color: #a78bfa; 
      margin-right: 12px; 
      font-weight: 800; 
      font-size: 14px;
      background: rgba(167, 139, 250, 0.1);
      padding: 2px 8px;
      border-radius: 4px;
    }

    /* BENEFITS */
    .benefits-box {
      background: linear-gradient(180deg, #172033 0%, #0f172a 100%);
      border: 1px solid #334155;
      border-radius: 12px;
      padding: 30px;
      margin-bottom: 40px;
      text-align: center;
      box-shadow: inset 0 0 20px rgba(0,0,0,0.2);
    }
    .benefits-text { font-size: 15px; line-height: 1.8; color: #cbd5e1; }
    .benefits-text strong { color: #a78bfa; font-weight: 700; }
    
    /* STAFF AUG */
    .staff-box {
      background: #0f172a;
      border-left: 4px solid #7c3aed;
      padding: 28px;
      margin-bottom: 35px;
      border-radius: 0 12px 12px 0;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
      position: relative;
      overflow: hidden;
    }
    .staff-box:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, rgba(124, 58, 237, 0.05) 0%, transparent 100%);
        z-index: 0;
    }
    .staff-content { position: relative; z-index: 1; }
    .staff-title { font-size: 19px; font-weight: 700; color: #f8fafc; margin-bottom: 12px; }
    .staff-text { font-size: 15px; line-height: 1.6; color: #94a3b8; margin-bottom: 18px; }
    .role-list { margin-top: 15px; }
    .role-tag { 
      display: inline-block; 
      background: #1e293b; 
      border: 1px solid #475569; 
      color: #a78bfa; 
      font-size: 12px; 
      font-weight: 600; 
      padding: 7px 12px; 
      border-radius: 6px; 
      margin: 0 6px 8px 0; 
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
    
    /* COST SAVINGS BANNER */
    .savings-banner {
      background-color: rgba(124, 58, 237, 0.1); /* Violet tint */
      border: 1px solid rgba(124, 58, 237, 0.3);
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 35px;
    }
    .savings-icon-cell {
      width: 90px;
      text-align: center;
      vertical-align: middle;
      border-right: 1px solid rgba(124, 58, 237, 0.3);
      padding-right: 20px;
    }
    .savings-text-cell {
      padding-left: 20px;
      vertical-align: middle;
    }
    .savings-big-text {
      font-size: 36px;
      font-weight: 800;
      color: #8b5cf6; /* Violet 500 */
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
      background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%); 
      padding: 50px 35px; 
      text-align: center; 
      border-top: 1px solid #334155;
    }
    .cta-btn {
      display: inline-block;
      background: #7c3aed;
      color: #ffffff !important;
      font-weight: 700;
      font-size: 16px;
      padding: 18px 36px;
      border-radius: 8px;
      text-decoration: none;
      box-shadow: 0 4px 0 #5b21b6, 0 10px 20px rgba(124, 58, 237, 0.3);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin: 20px 0 30px 0;
      transition: all 0.3s ease;
    }
    .cta-btn:hover { background: #6d28d9; box-shadow: 0 2px 0 #5b21b6, 0 5px 10px rgba(124, 58, 237, 0.3); transform: translateY(2px); }

    /* CONTACT BLOCK */
    .contact-block {
        border-top: 1px solid #334155;
        margin-top: 10px;
        padding-top: 30px;
        color: #94a3b8; 
        font-size: 14px; 
        line-height: 1.7;
    }
    .contact-name { color: #f8fafc; font-weight: 700; font-size: 16px; margin-bottom: 4px; display: block; }
    .contact-role { color: #64748b; font-size: 13px; margin-bottom: 15px; display: block; text-transform: uppercase; letter-spacing: 1px; font-weight: 600; }
    .contact-link { color: #a78bfa; text-decoration: none; font-weight: 500; }

    /* FOOTER */
    .footer { background: #020617; padding: 40px 20px; text-align: center; color: #475569; font-size: 12px; border-top: 1px solid #1e293b; }
    .footer-link { color: #64748b; text-decoration: none; margin: 0 8px; transition: color 0.2s; }
    .footer-link:hover { color: #e2e8f0; }
    
    /* BADGE */
    .badge-container { margin-bottom: 25px; padding-bottom: 25px; border-bottom: 1px solid #1e293b; }
    .badge-img { width: 140px; height: auto; margin: 0 auto; filter: drop-shadow(0 0 10px rgba(255,255,255,0.05)); }

    @media screen and (max-width: 600px) {
      .header { padding: 20px 15px; }
      .logo { max-width: 130px; }
      .hero-title { font-size: 24px !important; }
      .content-wrapper { padding: 35px 20px; }
      .service-item { padding: 14px 18px; font-size: 14px; }
      .benefits-box { padding: 20px; }
      
      /* Savings Banner Mobile */
      .savings-icon-cell { display: block; width: 100%; border-right: none; border-bottom: 1px solid rgba(124, 58, 237, 0.3); padding: 0 0 15px 0; margin-bottom: 15px; }
      .savings-text-cell { display: block; padding-left: 0; text-align: center; }
    }
  </style>
</head>
<body>
  <center class="wrapper">
    <div style="display:none; font-size:1px; color:#0f172a; line-height:1px; max-height:0px; max-width:0px; opacity:0; overflow:hidden;">
      Empowering enterprises with custom software engineering and advanced AI solutions.
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
          <h1 class="hero-title">Software Development &<br>AI Solutions</h1>
          <p class="hero-subtitle">Driving digital innovation through custom engineering and intelligent technologies.</p>
        </td>
      </tr>

      <!-- CONTENT -->
      <tr>
        <td class="content-wrapper">
          <!-- Intro -->
          <p class="intro-text">
            <strong>Hello,</strong><br><br>
            In an era defined by rapid technological evolution, tailored software and intelligent systems are no longer optional—they are essential for growth. At Laskon Technologies, we deliver <span class="highlight">enterprise-grade software and AI solutions</span> designed to solve complex challenges and unlock new opportunities.
          </p>

          <!-- SECTION 1: CUSTOM SOFTWARE -->
          <div class="section-header">
            <h2 class="section-title">Custom Software & Product Engineering</h2>
          </div>
          <ul class="services-list">
            <li class="service-item"><span class="service-bullet">01</span> Full-Cycle Custom Software Development</li>
            <li class="service-item"><span class="service-bullet">02</span> Enterprise Mobile & Web Applications</li>
            <li class="service-item"><span class="service-bullet">03</span> Scalable SaaS Product Architectures</li>
            <li class="service-item"><span class="service-bullet">04</span> API Integration & Microservices</li>
            <li class="service-item"><span class="service-bullet">05</span> Legacy System Modernization</li>
          </ul>

          <!-- SECTION 2: AI SOLUTIONS -->
          <div class="section-header">
            <h2 class="section-title">AI & Advanced Intelligence Solutions</h2>
          </div>
          <ul class="services-list">
            <li class="service-item"><span class="service-bullet">01</span> Generative AI & LLM Integration</li>
            <li class="service-item"><span class="service-bullet">02</span> Custom Machine Learning Models</li>
            <li class="service-item"><span class="service-bullet">03</span> Predictive Analytics & Data Engineering</li>
            <li class="service-item"><span class="service-bullet">04</span> Intelligent Process Automation (IPA)</li>
          </ul>

          <!-- KEY BENEFITS -->
          <div class="benefits-box">
            <p class="benefits-text">
              Our client-centric approach ensures <strong>high-quality delivery</strong> through rigorous standards, <strong>accelerated time to market</strong> via agile methodologies, and <strong>transparent collaboration</strong> at every stage of the development lifecycle.
            </p>
          </div>

          <!-- STAFF AUGMENTATION -->
          <div class="staff-box">
            <div class="staff-content">
                <div class="staff-title">Strategic Staff Augmentation</div>
                <p class="staff-text">
                  Scale your engineering capacity instantly with our pre-vetted talent pool. We provide specialized experts ready to integrate with your in-house teams.
                </p>
                <div class="role-list">
                  <span class="role-tag">Software Engineers</span>
                  <span class="role-tag">Full-Stack Developers</span>
                  <span class="role-tag">AI/ML Specialists</span>
                  <span class="role-tag">DevOps Professionals</span>
                  <span class="role-tag">WordPress/CRM Developers</span>
                  <span class="role-tag">Solution Architects</span>
                </div>
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
                   <span class="savings-headline">Optimize Development Spend</span>
                   <span class="savings-subtext">Reduce engineering costs by up to 50% without compromising on code quality or performance.</span>
                 </td>
               </tr>
             </table>
          </div>

          <!-- CLOSING TEXT -->
          <p class="intro-text" style="text-align: center; margin-bottom: 10px; font-style: italic; color: #94a3b8;">
            Ready to elevate your technology stack? Let's build the future together.
          </p>
        </td>
      </tr>

      <!-- CTA SECTION -->
      <tr>
        <td class="cta-section">
          <a href="mailto:sales@laskontech.com" class="cta-btn">Start Your Project</a>
          
          <div class="contact-block">
             <span class="contact-name">Emma W.</span>
             <span class="contact-role">Sales Manager | Laskon Technologies</span>
             
             <div style="margin-top: 12px;">
               <a href="tel:+447466436417" class="contact-link">+44 7466 436417</a>
               <span style="color: #475569; margin: 0 8px;">|</span>
               <a href="mailto:sales@laskontech.com" class="contact-link">sales@laskontech.com</a>
             </div>
             <div style="margin-top: 6px;">
                <a href="https://www.laskontech.com" class="contact-link">www.laskontech.com</a>
             </div>
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
    a.download = 'laskon-software-ai.html';
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
      const response = await fetch(`${API_BASE_URL}/send-email`, {
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
    <div className="container mx-auto max-w-7xl px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-8">
        {/* UI Controls */}
        <div className="bg-white rounded-xl shadow-xl border border-slate-200 p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-violet-100 rounded-lg border border-violet-200">
                <Code2 className="w-8 h-8 text-violet-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Software & AI Solutions</h1>
                <p className="text-slate-500 text-sm">Dark-themed template for engineering & AI services.</p>
              </div>
            </div>
            <div className="flex gap-3">
               <Button onClick={() => setShowPreview(!showPreview)} variant="outline" className="border-slate-200 text-slate-700 hover:bg-slate-50">
                <Eye className="w-4 h-4 mr-2" /> {showPreview ? 'Hide' : 'Show'} Preview
              </Button>
              <Button onClick={copyToClipboard} variant="outline" className="border-slate-200 text-slate-700 hover:bg-slate-50">
                <Copy className="w-4 h-4 mr-2" /> Copy Code
              </Button>
              <Button onClick={downloadHTML} className="bg-violet-600 hover:bg-violet-700 text-white">
                <Download className="w-4 h-4 mr-2" /> Download
              </Button>
            </div>
          </div>
          
          {/* Subject Line Options */}
          <div className="mt-6 pt-6 border-t border-slate-100">
            <h3 className="text-sm font-medium text-slate-500 mb-3">Recommended Subject Lines:</h3>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="p-3 bg-slate-50 rounded border border-slate-200 text-slate-600 text-sm font-medium cursor-pointer hover:border-violet-300 hover:bg-violet-50 transition-colors" onClick={() => navigator.clipboard.writeText("Transform Your Business with Custom Software & AI")}>
                Transform Your Business with Custom Software & AI
              </div>
              <div className="p-3 bg-slate-50 rounded border border-slate-200 text-slate-600 text-sm font-medium cursor-pointer hover:border-violet-300 hover:bg-violet-50 transition-colors" onClick={() => navigator.clipboard.writeText("Innovation Delivered: Engineering & AI Solutions by Laskon")}>
                Innovation Delivered: Engineering & AI Solutions by Laskon
              </div>
            </div>
          </div>

          {/* Email Sending Form */}
          <div className="mt-6 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2 mb-4">
              <Mail className="w-5 h-5 text-violet-600" />
              <h3 className="text-lg font-semibold text-slate-900">Send Email</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="recipient-email" className="block text-sm font-medium text-slate-700 mb-2">Recipient Email Address</label>
                <input id="recipient-email" type="email" value={recipientEmail} onChange={(e) => setRecipientEmail(e.target.value)} placeholder="recipient@example.com" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none" />
              </div>
              <div>
                <label htmlFor="email-subject" className="block text-sm font-medium text-slate-700 mb-2">Email Subject</label>
                <input id="email-subject" type="text" value={emailSubject} onChange={(e) => setEmailSubject(e.target.value)} placeholder="Email subject" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none" />
              </div>
              <Button onClick={sendEmail} disabled={isSending || !recipientEmail} className="w-full bg-violet-600 hover:bg-violet-700 text-white gap-2">
                <Send className="w-4 h-4" />
                {isSending ? 'Sending...' : 'Send Email'}
              </Button>
            </div>
          </div>
        </div>

        {/* Live Preview */}
        {showPreview && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-xl overflow-hidden border border-slate-200 bg-slate-900 shadow-inner">
            <div className="p-4 flex justify-center bg-slate-950">
              <iframe srcDoc={emailHTML} title="Preview" className="w-full max-w-[720px]" style={{ border: 'none', height: '1800px', background: 'transparent' }} />
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default SoftwareDevAIEmailTemplate;