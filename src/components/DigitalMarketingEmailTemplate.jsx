import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Download, Eye, Megaphone, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { getFooterHTML } from '@/components/FooterSnippet';

const DigitalMarketingEmailTemplate = () => {
  const { toast } = useToast();
  const [showPreview, setShowPreview] = useState(true);
  const [recipientEmail, setRecipientEmail] = useState('');
  const [emailSubject, setEmailSubject] = useState('🚀 Transform Your Brand: Strategic Digital Marketing & Elite Talent');
  const [isSending, setIsSending] = useState(false);

  const emailHTML = `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="x-apple-disable-message-reformatting">
  <title>Elevate Your Brand with Laskon Tech</title>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800&display=swap" rel="stylesheet">
  <!--[if mso]>
  <style type="text/css">
    body, table, td, h1, h2, h3, p, li {font-family: Arial, sans-serif !important;}
  </style>
  <![endif]-->
  <style type="text/css">
    /* BASE STYLES */
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { margin: 0 !important; padding: 0 !important; width: 100% !important; font-family: 'Outfit', Arial, sans-serif; background-color: #f1f5f9; -webkit-font-smoothing: antialiased; color: #334155; }
    table { border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    td { padding: 0; }
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; display: block; }
    a { color: #8b5cf6; text-decoration: none; }
    
    /* LAYOUT */
    .wrapper { width: 100%; table-layout: fixed; background-color: #f1f5f9; padding: 40px 0; }
    .main { background-color: #ffffff; margin: 0 auto; width: 100%; max-width: 640px; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 50px -10px rgba(139, 92, 246, 0.2); border: 1px solid #e2e8f0; }
    
    /* HEADER */
    .header { 
      background: #0f172a; /* Darker background */
      padding: 60px 20px 40px 20px; /* Increased top padding */
      text-align: center; 
      border-bottom: 1px solid rgba(255,255,255,0.1); /* Lighter border for dark background */
    }
    .logo { 
      max-width: 240px; /* Slightly larger */
      width: 100%;
      height: auto; 
      margin: 0 auto; 
      display: block;
      filter: drop-shadow(0 0 10px rgba(0,255,255,0.2)); /* Subtle glowing effect for dark logo on dark background */
    }
    
    /* HERO */
    .hero { 
      background: linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%); 
      padding: 50px 30px; 
      text-align: center; 
    }
    .hero-icon-bg { 
      background: rgba(255,255,255,0.2); 
      width: 70px; 
      height: 70px; 
      border-radius: 50%; 
      margin: 0 auto 20px auto; 
      display: block;
    }
    .hero-icon { width: 40px; height: 40px; padding: 15px; display: block; margin: 0 auto; }
    .hero-title { 
      font-size: 32px; 
      font-weight: 800; 
      line-height: 1.2; 
      margin: 0 0 15px 0; 
      color: #ffffff !important; 
      letter-spacing: -0.5px;
    }
    .hero-subtitle { font-size: 18px; font-weight: 400; color: #fdf4ff; margin: 0 auto; line-height: 1.5; max-width: 480px; }
    
    /* CONTENT */
    .content-wrapper { padding: 40px 30px; background-color: #ffffff; }
    
    /* INTRO */
    .intro-text { font-size: 16px; line-height: 1.7; color: #475569; margin-bottom: 35px; }
    .highlight { color: #8b5cf6; font-weight: 700; }

    /* SECTION HEADERS */
    .section-header { text-align: center; margin-bottom: 30px; margin-top: 10px; }
    .section-title { 
      font-size: 24px; 
      font-weight: 700; 
      color: #1e293b; 
      margin: 0; 
      background: -webkit-linear-gradient(0deg, #8b5cf6, #d946ef);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      display: inline-block;
      letter-spacing: -0.5px;
    }

    /* SERVICES GRID (2 Col) */
    .grid-container { font-size: 0; text-align: center; margin-bottom: 30px; }
    
    .service-card {
      display: inline-block;
      width: 48%;
      vertical-align: top;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 15px;
      box-sizing: border-box;
      text-align: left;
      transition: transform 0.2s;
    }
    .service-card:nth-child(odd) { margin-right: 2%; }
    .service-icon { font-size: 24px; margin-bottom: 10px; display: block; }
    .service-title { color: #334155; font-size: 15px; font-weight: 700; display: block; margin-bottom: 5px; }
    .service-desc { color: #64748b; font-size: 13px; line-height: 1.4; }

    /* ROLES GRID (List style for variety) */
    .roles-wrapper { background: #fdf4ff; border-radius: 12px; padding: 25px; margin-bottom: 40px; border: 1px dashed #d946ef; }
    .role-tag {
      display: inline-block;
      background: #ffffff;
      border: 1px solid #f0abfc;
      color: #c026d3;
      font-size: 12px;
      font-weight: 600;
      padding: 8px 12px;
      border-radius: 20px;
      margin: 4px;
    }
    .engagement-box {
      margin-top: 20px;
      background: #ffffff;
      border-radius: 8px;
      padding: 15px;
      text-align: center;
    }
    .engagement-title { font-size: 14px; font-weight: 700; color: #86198f; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 1px; }
    .engagement-opts { font-size: 14px; color: #475569; }

    /* KEY OUTCOMES */
    .outcome-item {
      margin-bottom: 12px;
      background: #fff;
      border-left: 4px solid #8b5cf6;
      box-shadow: 0 2px 5px rgba(0,0,0,0.05);
      padding: 12px 15px;
      font-size: 15px;
      color: #334155;
      font-weight: 500;
    }
    .outcome-check { color: #8b5cf6; margin-right: 10px; font-weight: bold; }
    
    /* COST SAVINGS BANNER */
    .savings-banner {
      background-color: #faf5ff; /* Light purple tint */
      border: 1px solid #e9d5ff;
      border-radius: 12px;
      padding: 20px;
      margin-top: 30px;
      margin-bottom: 30px;
    }
    .savings-icon-cell {
      width: 90px;
      text-align: center;
      vertical-align: middle;
      border-right: 1px solid #f3e8ff;
      padding-right: 20px;
    }
    .savings-text-cell {
      padding-left: 20px;
      vertical-align: middle;
    }
    .savings-big-text {
      font-size: 36px;
      font-weight: 800;
      color: #9333ea; /* Purple 600 */
      display: block;
      line-height: 1;
    }
    .savings-headline {
      color: #3b0764;
      font-size: 16px;
      font-weight: 700;
      display: block;
      margin-bottom: 4px;
      text-transform: uppercase;
    }
    .savings-subtext {
      color: #6b21a8;
      font-size: 13px;
      line-height: 1.4;
      display: block;
    }

    /* CTA */
    .cta-section { 
      background: #0f172a; 
      padding: 45px 30px; 
      text-align: center; 
      color: #ffffff;
      border-radius: 0 0 12px 12px;
    }
    .cta-title { font-size: 22px; color: #ffffff; font-weight: 700; margin-bottom: 10px; }
    .cta-text { color: #cbd5e1; font-size: 15px; margin-bottom: 25px; line-height: 1.6; }
    
    .cta-btn {
      display: inline-block;
      background: #d946ef;
      background: linear-gradient(90deg, #d946ef 0%, #8b5cf6 100%);
      color: #ffffff !important;
      font-weight: 700;
      font-size: 16px;
      padding: 16px 32px;
      border-radius: 50px;
      text-decoration: none;
      box-shadow: 0 4px 15px rgba(217, 70, 239, 0.4);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 25px;
    }
    .contact-details { border-top: 1px solid #334155; padding-top: 25px; }
    .contact-item { display: inline-block; margin: 0 10px; color: #94a3b8; font-size: 14px; text-decoration: none; }
    .contact-item strong { color: #e2e8f0; }

    /* FOOTER */
    .footer { background: #f1f5f9; padding: 30px 20px; text-align: center; color: #64748b; font-size: 12px; }
    .footer-link { color: #64748b; text-decoration: underline; margin: 0 5px; }

    @media screen and (max-width: 600px) {
      .header { padding: 40px 15px 30px 15px; } /* Adjust for mobile */
      .logo { max-width: 200px; } /* Adjust logo size for mobile */
      .hero-title { font-size: 26px !important; }
      .service-card { width: 100% !important; margin-right: 0 !important; display: block !important; }
      .content-wrapper { padding: 30px 20px; }
      .contact-item { display: block; margin: 8px 0; }
      
       /* Savings Banner Mobile */
      .savings-icon-cell { display: block; width: 100%; border-right: none; border-bottom: 1px solid #f3e8ff; padding: 0 0 15px 0; margin-bottom: 15px; }
      .savings-text-cell { display: block; padding-left: 0; text-align: center; }
    }
  </style>
</head>
<body>
  <center class="wrapper">
    <div style="display:none; font-size:1px; color:#f1f5f9; line-height:1px; max-height:0px; max-width:0px; opacity:0; overflow:hidden;">
      Scale your brand with strategic marketing and elite creative talent.
    </div>

    <table class="main" cellpadding="0" cellspacing="0" role="presentation">
      <!-- HEADER -->
      <tr>
        <td class="header">
          <img src="https://horizons-cdn.hostinger.com/90edfe98-bc38-4e5c-939e-3b2f88663c35/a4f174c8a9ec15fe08369c4798c05be4.png" alt="Laskon Technologies" class="logo">
        </td>
      </tr>

      <!-- HERO -->
      <tr>
        <td class="hero">
          <div class="hero-icon-bg">
            <img src="https://img.icons8.com/fluency/96/megaphone.png" alt="Marketing Icon" class="hero-icon" style="width:40px; height:40px; padding:15px;">
          </div>
          <h1 class="hero-title">Amplify Your Digital Presence</h1>
          <p class="hero-subtitle">Strategic Marketing Solutions & Elite Creative Talent on Demand</p>
        </td>
      </tr>

      <!-- CONTENT -->
      <tr>
        <td class="content-wrapper">
          <!-- Intro -->
          <p class="intro-text">
            <strong>Dear [Client Name],</strong><br><br>
            In today's crowded digital landscape, standing out requires more than just noise—it demands strategy and the right talent. At Laskon Technologies, we provide <span class="highlight">full-spectrum digital marketing solutions</span> and the specialized staff to execute them perfectly. Whether you need a complete brand overhaul or a dedicated team to scale your campaigns, we have the resources ready to deploy.
          </p>

          <!-- SERVICES -->
          <div class="section-header">
            <h2 class="section-title">What We Offer</h2>
          </div>

          <div class="grid-container">
            <!-- 1 -->
            <div class="service-card">
              <span class="service-icon">📱</span>
              <span class="service-title">Social Media Mgmt</span>
              <span class="service-desc">Engage audiences across platforms with consistent, viral-ready content.</span>
            </div>
            <!-- 2 -->
            <div class="service-card">
              <span class="service-icon">🎨</span>
              <span class="service-title">Creative Branding</span>
              <span class="service-desc">Visual identity design, logo creation, and comprehensive brand voice guides.</span>
            </div>
            <!-- 3 -->
            <div class="service-card">
              <span class="service-icon">🚀</span>
              <span class="service-title">Performance Marketing</span>
              <span class="service-desc">High-ROI PPC campaigns, paid social ads, and retargeting strategies.</span>
            </div>
            <!-- 4 -->
            <div class="service-card">
              <span class="service-icon">🤝</span>
              <span class="service-title">Influencer Marketing</span>
              <span class="service-desc">Strategic partnerships and outreach to amplify brand reach authentically.</span>
            </div>
            <!-- 5 -->
            <div class="service-card">
              <span class="service-icon">📝</span>
              <span class="service-title">Content Strategy</span>
              <span class="service-desc">SEO-driven blog content, storytelling, and video scriptwriting.</span>
            </div>
            <!-- 6 -->
            <div class="service-card">
              <span class="service-icon">📊</span>
              <span class="service-title">Analytics & Reporting</span>
              <span class="service-desc">Deep data insights to optimize funnels and maximize conversion rates.</span>
            </div>
          </div>

          <!-- STAFF AUGMENTATION -->
          <div class="section-header">
            <h2 class="section-title">Talent & Staff Augmentation</h2>
            <p style="font-size:13px; color:#94a3b8; margin-top:5px;">Scale your team instantly with our vetted experts.</p>
          </div>

          <div class="roles-wrapper">
            <div style="text-align:center;">
              <span class="role-tag">Social Media Manager</span>
              <span class="role-tag">SEO Specialist</span>
              <span class="role-tag">PPC Specialist</span>
              <span class="role-tag">Content Writer</span>
              <span class="role-tag">Graphic Designer</span>
              <span class="role-tag">UI/UX Designer</span>
              <span class="role-tag">Marketing Automation Expert</span>
              <span class="role-tag">Brand Strategist</span>
              <span class="role-tag">Video Editor</span>
              <span class="role-tag">Digital Marketing Manager</span>
            </div>
            <div class="engagement-box">
              <div class="engagement-title">Flexible Engagement Models</div>
              <div class="engagement-opts">🌍 Nearshore &nbsp;•&nbsp; 🌊 Offshore &nbsp;•&nbsp; 🏢 Onshore</div>
            </div>
          </div>

          <!-- OUTCOMES -->
          <div class="section-header">
            <h2 class="section-title">Key Outcomes</h2>
          </div>
          
          <div style="margin-bottom: 40px;">
            <div class="outcome-item"><span class="outcome-check">✓</span> Increased Brand Awareness & Market Share</div>
            <div class="outcome-item"><span class="outcome-check">✓</span> Higher Conversion Rates & ROI</div>
            <div class="outcome-item"><span class="outcome-check">✓</span> Instantly Scalable Creative Teams</div>
            <div class="outcome-item"><span class="outcome-check">✓</span> Data-Driven Decision Making</div>
            <div class="outcome-item"><span class="outcome-check">✓</span> Consistent & Professional Brand Voice</div>
            <div class="outcome-item"><span class="outcome-check">✓</span> Cost-Effective Scaling vs. In-House Hiring</div>
          </div>

          <!-- COST SAVINGS BANNER -->
          <div class="savings-banner">
             <table width="100%" cellpadding="0" cellspacing="0">
               <tr>
                 <td class="savings-icon-cell">
                   <span class="savings-big-text">50%</span>
                 </td>
                 <td class="savings-text-cell">
                   <span class="savings-headline">Reduce Marketing Spend</span>
                   <span class="savings-subtext">Save up to 50% on marketing overhead by utilizing our global talent pool.</span>
                 </td>
               </tr>
             </table>
          </div>

        </td>
      </tr>

      <!-- CTA SECTION -->
      <tr>
        <td class="cta-section">
          <h3 class="cta-title">Ready to Elevate Your Brand?</h3>
          <p class="cta-text">
            Stop guessing and start growing. Schedule a brief strategy call to discuss your specific marketing goals and staffing needs.
          </p>
          
          <a href="mailto:sales@laskontech.com" class="cta-btn">Book a 10-15 Min Strategy Call</a>
          
          <div style="margin-top: 30px; margin-bottom: 20px;">
             <img src="https://horizons-cdn.hostinger.com/90edfe98-bc38-4e5c-939e-3b2f88663c35/77a12e88843be46b72d6ff2c4e65aef3.png" alt="TopDevelopers Best Artificial Intelligence Companies 2025 Badge" style="max-width: 140px; height: auto; margin: 0 auto;">
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
    a.download = 'laskon-digital-marketing.html';
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
              <div className="p-2 sm:p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg border border-purple-200 dark:border-purple-800">
                <Megaphone className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">Digital Marketing & Branding</h1>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Vibrant, modern template for creative agencies.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3 w-full md:w-auto">
               <Button onClick={() => setShowPreview(!showPreview)} variant="outline" className="border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 flex-1 sm:flex-initial">
                <Eye className="w-4 h-4 mr-2" /> <span className="hidden xs:inline">{showPreview ? 'Hide' : 'Show'} Preview</span>
              </Button>
              <Button onClick={copyToClipboard} variant="outline" className="border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 flex-1 sm:flex-initial">
                <Copy className="w-4 h-4 mr-2" /> <span className="hidden xs:inline">Copy Code</span>
              </Button>
              <Button onClick={downloadHTML} className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white flex-1 sm:flex-initial">
                <Download className="w-4 h-4 mr-2" /> <span className="hidden xs:inline">Download</span>
              </Button>
            </div>
          </div>
          
          {/* Subject Line Options */}
          <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-700">
            <h3 className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">Recommended Subject Lines:</h3>
            <div className="grid md:grid-cols-2 gap-2 sm:gap-3">
              <div className="p-2 sm:p-3 bg-slate-50 dark:bg-slate-900/50 rounded border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-medium cursor-pointer hover:border-purple-300 dark:hover:border-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/50 transition-colors" onClick={() => navigator.clipboard.writeText("🚀 Transform Your Brand: Strategic Digital Marketing & Elite Talent")}>
                🚀 Transform Your Brand: Strategic Digital Marketing & Elite Talent
              </div>
              <div className="p-2 sm:p-3 bg-slate-50 dark:bg-slate-900/50 rounded border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-medium cursor-pointer hover:border-purple-300 dark:hover:border-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/50 transition-colors" onClick={() => navigator.clipboard.writeText("Scale Your Marketing Team & Amplify ROI Today")}>
                Scale Your Marketing Team & Amplify ROI Today
              </div>
            </div>
          </div>

          {/* Email Sending Form */}
          <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-700">
            <div className="flex items-center gap-2 mb-4">
              <Mail className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100">Send Email</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="recipient-email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Recipient Email Address</label>
                <input id="recipient-email" type="email" value={recipientEmail} onChange={(e) => setRecipientEmail(e.target.value)} placeholder="recipient@example.com" className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-purple-500 dark:focus:border-purple-400 outline-none transition-colors" />
              </div>
              <div>
                <label htmlFor="email-subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Subject</label>
                <input id="email-subject" type="text" value={emailSubject} onChange={(e) => setEmailSubject(e.target.value)} placeholder="Email subject" className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-purple-500 dark:focus:border-purple-400 outline-none transition-colors" />
              </div>
              <Button onClick={sendEmail} disabled={isSending || !recipientEmail} className="w-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white gap-2">
                <Send className="w-4 h-4" />
                {isSending ? 'Sending...' : 'Send Email'}
              </Button>
            </div>
          </div>
        </div>

        {/* Live Preview */}
        {showPreview && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 shadow-inner transition-colors">
            <div className="p-2 sm:p-4 flex justify-center bg-slate-100 dark:bg-slate-950">
              <iframe srcDoc={emailHTML} title="Preview" className="w-full max-w-[720px]" style={{ border: 'none', height: '2200px', minHeight: '600px', background: 'transparent' }} />
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default DigitalMarketingEmailTemplate;