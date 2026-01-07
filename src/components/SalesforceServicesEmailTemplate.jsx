import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Download, Eye, CloudCog, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { getFooterHTML } from '@/components/FooterSnippet';

const SalesforceServicesEmailTemplate = () => {
  const { toast } = useToast();
  const [showPreview, setShowPreview] = useState(true);

  const emailHTML = `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="x-apple-disable-message-reformatting">
  <title>Certified Salesforce Services & Staff Augmentation | Laskon Tech</title>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <!--[if mso]>
  <style type="text/css">
    body, table, td, h1, h2, h3, p, li {font-family: Arial, sans-serif !important;}
  </style>
  <![endif]-->
  <style type="text/css">
    /* RESET & BASE */
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      margin: 0 !important; 
      padding: 0 !important; 
      width: 100% !important; 
      font-family: 'Plus Jakarta Sans', 'Inter', Helvetica, Arial, sans-serif; 
      background-color: #020617; 
      -webkit-font-smoothing: antialiased; 
      color: #e2e8f0; 
    }
    table { border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    td { padding: 0; }
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; display: block; }
    a { color: #60a5fa; text-decoration: none; transition: all 0.2s ease; }
    a:hover { color: #93c5fd; text-decoration: underline; }
    
    /* LAYOUT UTILS */
    .wrapper { width: 100%; table-layout: fixed; background-color: #020617; padding: 60px 0; }
    .main { 
      background-color: #0f172a; 
      margin: 0 auto; 
      width: 100%; 
      max-width: 640px; 
      border-radius: 24px; 
      overflow: hidden; 
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(30, 41, 59, 0.8); 
    }
    
    /* HEADER */
    .header { 
      background: #0f172a;
      padding: 24px 40px;
      text-align: center; 
      border-bottom: 1px solid #1e293b;
    }
    .logo { 
      max-width: 140px;
      width: 100%;
      height: auto; 
      margin: 0 auto; 
      display: block;
    }
    
    /* HERO SECTION */
    .hero { 
      background: radial-gradient(circle at top, #1e293b 0%, #0f172a 70%, #020617 100%);
      padding: 50px 40px; 
      text-align: center; 
      border-bottom: 1px solid #1e293b;
      position: relative;
    }
    .hero-badge {
      display: inline-block;
      background: rgba(3, 155, 229, 0.15);
      border: 1px solid rgba(3, 155, 229, 0.3);
      color: #0ea5e9;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      padding: 6px 12px;
      border-radius: 100px;
      margin-bottom: 24px;
    }
    .hero-title { 
      font-size: 32px; 
      font-weight: 800; 
      line-height: 1.25; 
      margin: 0 0 16px 0; 
      color: #ffffff !important; 
      letter-spacing: -0.02em;
    }
    .hero-subtitle { 
      font-size: 16px; 
      font-weight: 400; 
      color: #94a3b8; 
      margin: 0 auto; 
      line-height: 1.6; 
      max-width: 480px; 
    }
    
    /* CONTENT AREA */
    .content-wrapper { padding: 45px 40px; background-color: #0f172a; }
    
    /* TEXT STYLES */
    .intro-text { font-size: 16px; line-height: 1.7; color: #cbd5e1; margin-bottom: 35px; font-weight: 400; }
    .highlight { color: #38bdf8; font-weight: 600; }
    
    /* SECTION HEADERS */
    .section-header { 
      text-align: center;
      margin-bottom: 30px; 
      margin-top: 10px;
    }
    .section-title { 
      font-size: 20px; 
      font-weight: 700; 
      color: #f8fafc; 
      margin: 0; 
      display: inline-block;
      position: relative;
      padding-bottom: 10px;
    }
    .section-title::after {
      content: '';
      display: block;
      width: 40px;
      height: 3px;
      background: #0ea5e9;
      margin: 8px auto 0;
      border-radius: 2px;
    }

    /* SERVICES GRID (8 Items) */
    .services-grid { width: 100%; margin-bottom: 40px; }
    .service-cell { width: 50%; padding: 6px; vertical-align: top; }
    .service-item {
      background: #172033;
      border: 1px solid #334155;
      border-radius: 10px;
      padding: 16px;
      text-align: center;
      height: 100%;
      transition: all 0.2s;
    }
    .service-icon-text {
      font-size: 14px;
      font-weight: 600;
      color: #e2e8f0;
      display: block;
    }

    /* EXPERTISE PARAGRAPH */
    .expertise-box {
      background: rgba(30, 41, 59, 0.4);
      border-left: 4px solid #0ea5e9;
      padding: 20px;
      margin-bottom: 45px;
      border-radius: 0 8px 8px 0;
    }
    .expertise-text {
      font-size: 15px;
      color: #cbd5e1;
      line-height: 1.6;
      font-style: italic;
    }

    /* STAFF AUGMENTATION HIGHLIGHT */
    .staff-box {
      background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
      border: 1px solid #334155;
      border-radius: 16px;
      padding: 35px;
      margin-bottom: 45px;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
      position: relative;
      overflow: hidden;
    }
    .staff-box::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; height: 4px;
      background: linear-gradient(90deg, #0ea5e9, #3b82f6);
    }
    .staff-header { text-align: center; margin-bottom: 25px; }
    .staff-title { 
      font-size: 22px; 
      font-weight: 700; 
      color: #ffffff; 
      margin-bottom: 8px; 
    }
    .staff-subtitle { color: #94a3b8; font-size: 14px; }
    
    .roles-grid { width: 100%; }
    .role-row { margin-bottom: 12px; }
    .role-item {
      background-color: rgba(15, 23, 42, 0.6);
      padding: 12px 16px; 
      border: 1px solid #334155;
      border-radius: 8px;
      color: #e2e8f0;
      font-size: 14px;
      font-weight: 500;
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }
    .role-dot {
      height: 8px;
      width: 8px;
      background-color: #0ea5e9;
      border-radius: 50%;
      display: inline-block;
      margin-right: 12px;
      box-shadow: 0 0 8px rgba(14, 165, 233, 0.5);
    }

    /* BENEFITS */
    .benefits-table { width: 100%; margin-bottom: 20px; }
    .benefit-td { padding-bottom: 20px; vertical-align: top; }
    .benefit-check { 
      color: #0ea5e9; 
      font-weight: 800; 
      font-size: 18px; 
      padding-right: 10px;
      vertical-align: top;
      line-height: 1.4;
    }
    .benefit-content {
      color: #cbd5e1;
      font-size: 14px;
      line-height: 1.5;
    }
    .benefit-strong { color: #f1f5f9; font-weight: 700; display: block; margin-bottom: 4px; }

    /* COST SAVINGS BANNER */
    .savings-banner {
      background-color: rgba(16, 185, 129, 0.1); /* Emerald tint */
      border: 1px solid rgba(16, 185, 129, 0.3);
      border-radius: 12px;
      padding: 25px;
      margin-bottom: 40px;
      margin-top: 10px;
    }
    .savings-icon-cell {
      width: 100px;
      text-align: center;
      vertical-align: middle;
      border-right: 1px solid rgba(16, 185, 129, 0.3);
      padding-right: 20px;
    }
    .savings-text-cell {
      padding-left: 20px;
      vertical-align: middle;
    }
    .savings-big-text {
      font-size: 42px;
      font-weight: 800;
      color: #10b981; /* Emerald 500 */
      display: block;
      line-height: 1;
    }
    .savings-headline {
      color: #ffffff;
      font-size: 18px;
      font-weight: 700;
      display: block;
      margin-bottom: 5px;
      text-transform: uppercase;
    }
    .savings-subtext {
      color: #cbd5e1;
      font-size: 14px;
      line-height: 1.5;
      display: block;
    }
    
    /* CTA SECTION */
    .cta-section { 
      background: #111827;
      padding: 50px 40px; 
      text-align: center; 
      border-top: 1px solid #1e293b;
    }
    .cta-text {
      font-size: 16px;
      color: #cbd5e1;
      margin-bottom: 25px;
      line-height: 1.6;
    }
    .cta-btn {
      display: inline-block;
      background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
      color: #ffffff !important;
      font-weight: 700;
      font-size: 16px;
      padding: 16px 36px;
      border-radius: 8px;
      text-decoration: none;
      box-shadow: 0 4px 12px rgba(14, 165, 233, 0.3);
      transition: all 0.3s ease;
      border: 1px solid #38bdf8;
    }
    .cta-btn:hover { 
      background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%); 
      transform: translateY(-2px);
    }

    /* CONTACT & FOOTER */
    .contact-info {
      margin-top: 35px;
      padding-top: 30px;
      border-top: 1px solid #334155;
      text-align: center; /* Changed to center */
    }
    .contact-name { font-weight: 700; color: #f8fafc; font-size: 18px; display: block; margin-bottom: 4px; }
    .contact-role { color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600; display: block; margin-bottom: 15px; }
    .contact-details { font-size: 14px; color: #94a3b8; line-height: 1.6; }
    .contact-link { color: #38bdf8; text-decoration: none; font-weight: 500; }
    
    .footer { 
      background: #020617; 
      padding: 40px 20px; 
      text-align: center; 
      border-top: 1px solid #1e293b; 
    }
    .badge-img { 
      width: 140px; 
      height: auto; 
      margin: 0 auto 25px auto; 
      opacity: 0.9;
    }
    .footer-copy { font-size: 12px; color: #475569; line-height: 1.6; }

    /* MOBILE RESPONSIVE */
    @media screen and (max-width: 600px) {
      .wrapper { padding: 0; }
      .main { border-radius: 0; max-width: 100% !important; border: none; }
      .header { padding: 20px; }
      .hero { padding: 40px 25px; }
      .hero-title { font-size: 26px !important; }
      .content-wrapper { padding: 35px 25px; }
      .service-cell { display: block; width: 100%; padding: 0 0 10px 0; }
      .cta-section { padding: 40px 25px; }
      .contact-info { text-align: center; } /* Ensure mobile also centers */
      
      /* Savings Banner Mobile */
      .savings-icon-cell { display: block; width: 100%; border-right: none; border-bottom: 1px solid rgba(16, 185, 129, 0.3); padding: 0 0 15px 0; margin-bottom: 15px; }
      .savings-text-cell { display: block; padding-left: 0; text-align: center; }
    }
  </style>
</head>
<body>
  <center class="wrapper">
    <div style="display:none; font-size:1px; color:#0f172a; line-height:1px; max-height:0px; max-width:0px; opacity:0; overflow:hidden;">
      Certified Salesforce experts and staff augmentation to optimize your CRM investment.
    </div>

    <table class="main" cellpadding="0" cellspacing="0" role="presentation">
      <!-- HEADER -->
      <tr>
        <td class="header">
          <a href="https://www.laskontech.com">
            <img src="https://horizons-cdn.hostinger.com/90edfe98-bc38-4e5c-939e-3b2f88663c35/df5bf57e801ea4462fcc8e98a9d70441.png" alt="Laskon Technologies" class="logo">
          </a>
        </td>
      </tr>

      <!-- HERO -->
      <tr>
        <td class="hero">
          <div class="hero-badge">Salesforce Solutions</div>
          <h1 class="hero-title">Maximize Your Salesforce<br>Investment</h1>
          <p class="hero-subtitle">Unlock the full potential of your CRM with certified expertise, custom development, and elite staff augmentation.</p>
        </td>
      </tr>

      <!-- CONTENT -->
      <tr>
        <td class="content-wrapper">
          <!-- Intro -->
          <p class="intro-text">
            <strong>Dear Partner,</strong><br><br>
            In today's digital landscape, a robust CRM is the backbone of customer success. At Laskon Technologies, we combine <span class="highlight">certified Salesforce mastery</span> with flexible staffing models to ensure your platform evolves as fast as your business.
          </p>

          <!-- SERVICES GRID -->
          <div class="section-header">
            <h2 class="section-title">Certified Salesforce Services</h2>
          </div>
          
          <table class="services-grid" cellpadding="0" cellspacing="0">
            <tr>
              <td class="service-cell">
                <div class="service-item"><span class="service-icon-text">Implementation</span></div>
              </td>
              <td class="service-cell">
                <div class="service-item"><span class="service-icon-text">Custom Development</span></div>
              </td>
            </tr>
            <tr>
              <td class="service-cell">
                <div class="service-item"><span class="service-icon-text">Data Migration</span></div>
              </td>
              <td class="service-cell">
                <div class="service-item"><span class="service-icon-text">System Integration</span></div>
              </td>
            </tr>
            <tr>
              <td class="service-cell">
                <div class="service-item"><span class="service-icon-text">Managed Services</span></div>
              </td>
              <td class="service-cell">
                <div class="service-item"><span class="service-icon-text">Health Checks</span></div>
              </td>
            </tr>
            <tr>
              <td class="service-cell">
                <div class="service-item"><span class="service-icon-text">Lightning Transition</span></div>
              </td>
              <td class="service-cell">
                <div class="service-item"><span class="service-icon-text">AppExchange Solutions</span></div>
              </td>
            </tr>
          </table>

          <!-- EXPERTISE PARAGRAPH -->
          <div class="expertise-box">
            <div class="expertise-text">
              "Our certified consultants don't just deploy technology; they architect solutions that streamline workflows, automate redundant tasks, and provide actionable insights for your sales and support teams."
            </div>
          </div>

          <!-- STAFF AUGMENTATION -->
          <div class="staff-box">
            <div class="staff-header">
              <div class="staff-title">Salesforce Staff Augmentation</div>
              <div class="staff-subtitle">Scale your team with pre-vetted, certified professionals</div>
            </div>

            <table class="roles-grid" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding-bottom: 10px;">
                  <div class="role-item"><span class="role-dot"></span>Salesforce Administrators</div>
                  <div class="role-item"><span class="role-dot"></span>Salesforce Developers (Apex/LWC)</div>
                  <div class="role-item"><span class="role-dot"></span>Technical Architects</div>
                  <div class="role-item"><span class="role-dot"></span>Business Analysts</div>
                  <div class="role-item"><span class="role-dot"></span>QA / Testing Specialists</div>
                  <div class="role-item"><span class="role-dot"></span>Project & Delivery Managers</div>
                </td>
              </tr>
            </table>
          </div>

          <!-- BENEFITS -->
          <div class="section-header" style="text-align: left; margin-bottom: 20px;">
            <h3 style="font-size: 18px; color: #f8fafc; font-weight: 700;">Benefits of Our Augmentation Model</h3>
          </div>
          
          <table class="benefits-table" cellpadding="0" cellspacing="0">
            <tr>
              <td class="benefit-td" width="25"><span class="benefit-check">✓</span></td>
              <td class="benefit-td">
                <span class="benefit-content"><span class="benefit-strong">Immediate Impact</span> Onboard experts who hit the ground running without lengthy training cycles.</span>
              </td>
            </tr>
            <tr>
              <td class="benefit-td" width="25"><span class="benefit-check">✓</span></td>
              <td class="benefit-td">
                <span class="benefit-content"><span class="benefit-strong">Flexible Scalability</span> Ramp up resources during critical rollouts and scale down post-launch.</span>
              </td>
            </tr>
            <tr>
              <td class="benefit-td" width="25"><span class="benefit-check">✓</span></td>
              <td class="benefit-td">
                <span class="benefit-content"><span class="benefit-strong">Cost Efficiency</span> Reduce overhead costs associated with full-time hiring while accessing top-tier talent.</span>
              </td>
            </tr>
            <tr>
              <td class="benefit-td" width="25"><span class="benefit-check">✓</span></td>
              <td class="benefit-td">
                <span class="benefit-content"><span class="benefit-strong">Certified Excellence</span> Every professional holds relevant Salesforce certifications and proven track records.</span>
              </td>
            </tr>
          </table>

          <!-- COST SAVINGS BANNER -->
          <div class="savings-banner">
             <table width="100%" cellpadding="0" cellspacing="0">
               <tr>
                 <td class="savings-icon-cell">
                   <span class="savings-big-text">50%</span>
                 </td>
                 <td class="savings-text-cell">
                   <span class="savings-headline">Reduce Operational Costs</span>
                   <span class="savings-subtext">Leverage our augmentation model to cut overhead by up to 50% compared to traditional in-house hiring.</span>
                 </td>
               </tr>
             </table>
          </div>

        </td>
      </tr>

      <!-- CTA SECTION -->
      <tr>
        <td class="cta-section">
          <p class="cta-text">
            Ready to transform your Salesforce environment? Let's discuss how our services and talent can drive your business forward.
          </p>
          <a href="mailto:sales@laskontech.com" class="cta-btn">Schedule a Consultation</a>
          
          <div class="contact-info">
             <span class="contact-name">Emma W.</span>
             <span class="contact-role">Sales Manager</span>
             
             <div class="contact-details">
               <a href="https://www.laskontech.com" class="contact-link">www.laskontech.com</a><br>
               <a href="tel:+447466436417" class="contact-link">+44 7466 436417</a><br>
               <a href="mailto:sales@laskontech.com" class="contact-link">sales@laskontech.com</a><br>
               <span style="display: block; margin-top: 8px; color: #64748b;">Unit 1, Parliament Business Centre,<br>Commerce Way, Liverpool, L8 7BL</span>
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
    a.download = 'laskon-salesforce-services.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast({ title: "Downloaded!", description: "Template saved." });
  };

  return (
    <div className="container mx-auto max-w-7xl px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-8">
        {/* UI Controls */}
        <div className="bg-white rounded-xl shadow-xl border border-slate-200 p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-lg border border-blue-200">
                <CloudCog className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Salesforce Services & Staffing</h1>
                <p className="text-slate-500 text-sm">Certified expertise & augmentation template.</p>
              </div>
            </div>
            <div className="flex gap-3">
               <Button onClick={() => setShowPreview(!showPreview)} variant="outline" className="border-slate-200 text-slate-700 hover:bg-slate-50">
                <Eye className="w-4 h-4 mr-2" /> {showPreview ? 'Hide' : 'Show'} Preview
              </Button>
              <Button onClick={copyToClipboard} variant="outline" className="border-slate-200 text-slate-700 hover:bg-slate-50">
                <Copy className="w-4 h-4 mr-2" /> Copy Code
              </Button>
              <Button onClick={downloadHTML} className="bg-blue-600 hover:bg-blue-700 text-white">
                <Download className="w-4 h-4 mr-2" /> Download
              </Button>
            </div>
          </div>
          
          {/* Subject Line Options */}
          <div className="mt-6 pt-6 border-t border-slate-100">
            <h3 className="text-sm font-medium text-slate-500 mb-3">Recommended Subject Lines:</h3>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="p-3 bg-slate-50 rounded border border-slate-200 text-slate-600 text-sm font-medium cursor-pointer hover:border-blue-300 hover:bg-blue-50 transition-colors" onClick={() => navigator.clipboard.writeText("Unlock Salesforce Potential: Certified Services & Expert Staff Augmentation")}>
                Unlock Salesforce Potential: Certified Services & Expert Staff Augmentation
              </div>
              <div className="p-3 bg-slate-50 rounded border border-slate-200 text-slate-600 text-sm font-medium cursor-pointer hover:border-blue-300 hover:bg-blue-50 transition-colors" onClick={() => navigator.clipboard.writeText("Scale Your CRM: Certified Salesforce Talent Available Now")}>
                Scale Your CRM: Certified Salesforce Talent Available Now
              </div>
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

export default SalesforceServicesEmailTemplate;