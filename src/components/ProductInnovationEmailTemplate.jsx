import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Download, Eye, Lightbulb, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { getFooterHTML } from '@/components/FooterSnippet';

const ProductInnovationEmailTemplate = () => {
  const { toast } = useToast();
  const [showPreview, setShowPreview] = useState(true);

  const emailHTML = `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="x-apple-disable-message-reformatting">
  <title>Product Innovation & Business Strategy | Laskon Tech</title>
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
      padding: 32px 40px;
      text-align: center; 
      border-bottom: 1px solid #1e293b;
    }
    .logo { 
      max-width: 180px;
      width: 100%;
      height: auto; 
      margin: 0 auto; 
      display: block;
    }
    
    /* HERO SECTION */
    .hero { 
      background: radial-gradient(circle at top right, #1e293b 0%, #0f172a 60%, #020617 100%);
      padding: 60px 40px; 
      text-align: center; 
      border-bottom: 1px solid #1e293b;
      position: relative;
    }
    .hero-badge {
      display: inline-block;
      background: rgba(59, 130, 246, 0.1);
      border: 1px solid rgba(59, 130, 246, 0.2);
      color: #60a5fa;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      padding: 6px 12px;
      border-radius: 100px;
      margin-bottom: 24px;
    }
    .hero-title { 
      font-size: 36px; 
      font-weight: 800; 
      line-height: 1.2; 
      margin: 0 0 20px 0; 
      color: #ffffff !important; 
      letter-spacing: -0.03em;
      background: linear-gradient(to right, #ffffff, #cbd5e1);
      -webkit-background-clip: text;
    }
    .hero-subtitle { 
      font-size: 17px; 
      font-weight: 400; 
      color: #94a3b8; 
      margin: 0 auto; 
      line-height: 1.65; 
      max-width: 500px; 
    }
    
    /* CONTENT AREA */
    .content-wrapper { padding: 50px 40px; background-color: #0f172a; }
    
    /* INTRO TEXT */
    .intro-text { font-size: 16px; line-height: 1.8; color: #cbd5e1; margin-bottom: 45px; font-weight: 400; }
    .highlight { color: #60a5fa; font-weight: 600; }

    /* SECTION HEADERS */
    .section-header { 
      text-align: left; 
      margin-bottom: 25px; 
      margin-top: 20px; 
      padding-bottom: 15px; 
      border-bottom: 1px solid #334155; 
      display: flex; 
      align-items: center; 
    }
    .section-title { 
      font-size: 18px; 
      font-weight: 700; 
      color: #f8fafc; 
      margin: 0; 
      text-transform: uppercase;
      letter-spacing: 0.05em;
      display: flex;
      align-items: center;
    }
    .title-icon {
      display: inline-block;
      width: 6px;
      height: 24px;
      background: linear-gradient(to bottom, #3b82f6, #1d4ed8);
      margin-right: 12px;
      border-radius: 2px;
    }

    /* SERVICES GRID */
    .services-grid { width: 100%; margin-bottom: 45px; }
    .service-cell { width: 50%; padding-bottom: 16px; vertical-align: top; }
    .service-item {
      background: #172033;
      border: 1px solid #334155;
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 12px;
      margin-right: 12px;
      display: block;
      color: #e2e8f0;
      font-size: 15px;
      font-weight: 500;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      height: 100%;
      transition: transform 0.2s, border-color 0.2s;
    }
    .service-item:hover { border-color: #60a5fa; }
    .service-number {
      display: inline-block;
      background: rgba(59, 130, 246, 0.15);
      color: #60a5fa;
      font-size: 12px;
      font-weight: 700;
      padding: 2px 8px;
      border-radius: 4px;
      margin-right: 10px;
    }

    /* STAFF AUGMENTATION BOX */
    .staff-box {
      background: linear-gradient(180deg, #172033 0%, #0f172a 100%);
      border: 1px solid #334155;
      border-top: 3px solid #3b82f6;
      border-radius: 16px;
      padding: 40px;
      margin-bottom: 45px;
      position: relative;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
    }
    .staff-title { 
      font-size: 22px; 
      font-weight: 700; 
      color: #ffffff; 
      margin-bottom: 12px; 
      text-align: center; 
    }
    .staff-intro { 
      font-size: 15px; 
      color: #94a3b8; 
      line-height: 1.6; 
      text-align: center; 
      margin-bottom: 30px; 
      max-width: 450px;
      margin-left: auto;
      margin-right: auto;
    }
    
    .roles-list { width: 100%; border-collapse: separate; border-spacing: 0 10px; }
    .role-cell { 
      background-color: rgba(30, 41, 59, 0.5); 
      padding: 14px 20px; 
      border: 1px solid #334155;
      border-radius: 8px;
      color: #e2e8f0;
      font-size: 15px;
      font-weight: 500;
    }
    .role-check { 
      color: #3b82f6; 
      margin-right: 12px; 
      font-weight: bold; 
      font-size: 18px;
      vertical-align: middle;
    }

    /* WHY CHOOSE US - REFACTORED */
    .benefits-container { margin-top: 10px; }
    .benefit-row { margin-bottom: 20px; padding-left: 15px; border-left: 2px solid #334155; }
    .benefit-title { color: #f8fafc; font-weight: 700; font-size: 16px; margin-bottom: 6px; display: block; }
    .benefit-desc { color: #94a3b8; font-size: 14px; line-height: 1.6; }

    /* CTA SECTION */
    .cta-section { 
      background: linear-gradient(to bottom, #0f172a 0%, #111827 100%);
      padding: 50px 40px; 
      text-align: center; 
      border-top: 1px solid #1e293b;
    }
    .cta-btn {
      display: inline-block;
      background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
      color: #ffffff !important;
      font-weight: 700;
      font-size: 16px;
      padding: 18px 40px;
      border-radius: 50px;
      text-decoration: none;
      box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
      text-transform: uppercase;
      letter-spacing: 1px;
      margin: 10px 0 35px 0;
      transition: all 0.3s ease;
      border: 1px solid #60a5fa;
    }
    .cta-btn:hover { 
      background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); 
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(59, 130, 246, 0.5);
    }

    /* CONTACT & FOOTER */
    .contact-block {
      border-top: 1px solid #334155;
      margin-top: 20px;
      padding-top: 35px;
      color: #94a3b8; 
    }
    .contact-avatar {
      width: 60px;
      height: 60px;
      background-color: #1e293b;
      border-radius: 50%;
      margin: 0 auto 15px auto;
      line-height: 60px;
      color: #f8fafc;
      font-weight: 700;
      font-size: 24px;
      border: 2px solid #3b82f6;
    }
    
    .footer { 
      background: #020617; 
      padding: 50px 20px; 
      text-align: center; 
      border-top: 1px solid #1e293b; 
    }
    .badge-container { margin-bottom: 30px; }
    .badge-img { 
      width: 120px; 
      height: auto; 
      margin: 0 auto; 
      opacity: 0.9;
      transition: opacity 0.3s;
    }
    .badge-img:hover { opacity: 1; }

    /* MOBILE RESPONSIVE */
    @media screen and (max-width: 600px) {
      .wrapper { padding: 0; }
      .main { border-radius: 0; max-width: 100% !important; border: none; }
      .header { padding: 25px 20px; }
      .hero { padding: 45px 25px; }
      .hero-title { font-size: 28px !important; }
      .content-wrapper { padding: 40px 25px; }
      .service-cell { display: block; width: 100%; padding-bottom: 12px; }
      .service-item { margin-right: 0; padding: 16px; }
      .staff-box { padding: 25px 20px; }
      .staff-title { font-size: 20px; }
      .cta-section { padding: 40px 25px; }
    }
  </style>
</head>
<body>
  <center class="wrapper">
    <div style="display:none; font-size:1px; color:#0f172a; line-height:1px; max-height:0px; max-width:0px; opacity:0; overflow:hidden;">
      Unlock rapid growth with our product innovation strategies and elite engineering teams.
    </div>

    <table class="main" cellpadding="0" cellspacing="0" role="presentation">
      <!-- HEADER -->
      <tr>
        <td class="header">
          <a href="https://www.laskontech.com">
            <img src="https://horizons-cdn.hostinger.com/90edfe98-bc38-4e5c-939e-3b2f88663c35/76fa55733ac9f2351a51c0e6a1d6dc75.png" alt="Laskon Technologies" class="logo">
          </a>
        </td>
      </tr>

      <!-- HERO -->
      <tr>
        <td class="hero">
          <div class="hero-badge">Innovation & Strategy</div>
          <h1 class="hero-title">Build Smarter,<br>Scale Faster</h1>
          <p class="hero-subtitle">Transforming visionary ideas into market-leading realities through expert product design and strategic execution.</p>
        </td>
      </tr>

      <!-- CONTENT -->
      <tr>
        <td class="content-wrapper">
          <!-- Intro -->
          <p class="intro-text">
            <strong>Hello,</strong><br><br>
            Innovation isn't just about new ideas—it's about execution. At Laskon Technologies, we provide the <span class="highlight">strategic framework</span> and the <span class="highlight">technical excellence</span> needed to turn complex challenges into scalable digital products.
          </p>

          <!-- SECTION 1: PRODUCT & INNOVATION -->
          <div class="section-header">
            <span class="title-icon"></span>
            <h2 class="section-title">Product Design & Innovation</h2>
          </div>
          <table class="services-grid" cellpadding="0" cellspacing="0">
            <tr>
              <td class="service-cell">
                <div class="service-item">
                   <span class="service-number">01</span> UX/UI Design & Prototyping
                </div>
              </td>
              <td class="service-cell">
                <div class="service-item">
                   <span class="service-number">02</span> MVP Development & Validation
                </div>
              </td>
            </tr>
            <tr>
              <td class="service-cell">
                <div class="service-item">
                   <span class="service-number">03</span> Enterprise Innovation Workshops
                </div>
              </td>
              <td class="service-cell">
                <div class="service-item">
                   <span class="service-number">04</span> Product Lifecycle Management
                </div>
              </td>
            </tr>
          </table>

          <!-- SECTION 2: STRATEGY -->
          <div class="section-header">
            <span class="title-icon"></span>
            <h2 class="section-title">Business Strategy & Consulting</h2>
          </div>
          <table class="services-grid" cellpadding="0" cellspacing="0">
             <tr>
              <td class="service-cell">
                <div class="service-item">
                   <span class="service-number">01</span> Digital Transformation Roadmaps
                </div>
              </td>
              <td class="service-cell">
                <div class="service-item">
                   <span class="service-number">02</span> Market Analysis & GTM Strategy
                </div>
              </td>
            </tr>
            <tr>
              <td class="service-cell">
                <div class="service-item">
                   <span class="service-number">03</span> Operational Efficiency Audits
                </div>
              </td>
              <td class="service-cell">
                <div class="service-item">
                   <span class="service-number">04</span> Technology Stack Assessment
                </div>
              </td>
            </tr>
          </table>

          <!-- STAFF AUGMENTATION HIGHLIGHT -->
          <div class="staff-box">
            <div class="staff-title">Strategic Talent Augmentation</div>
            <p class="staff-intro">
              Don't let talent gaps slow your roadmap. Integrate our pre-vetted experts directly into your workflow within 48 hours.
            </p>
            
            <table class="roles-list" width="100%">
               <tr class="role-row"><td class="role-cell"><span class="role-check">✓</span> Product Designers & UX Specialists</td></tr>
               <tr class="role-row"><td class="role-cell"><span class="role-check">✓</span> Business Analysts & Strategy Consultants</td></tr>
               <tr class="role-row"><td class="role-cell"><span class="role-check">✓</span> Project Managers & Product Owners</td></tr>
               <tr class="role-row"><td class="role-cell"><span class="role-check">✓</span> Technical Leads & Full-Stack Engineers</td></tr>
               <tr class="role-row"><td class="role-cell"><span class="role-check">✓</span> QA Automation & Testing Pros</td></tr>
            </table>
          </div>

          <!-- WHY CHOOSE OUR MODEL -->
          <div class="benefits-section">
             <div class="section-header">
                <span class="title-icon"></span>
                <h2 class="section-title">Why Teams Partner With Us</h2>
             </div>
             <div class="benefits-container">
                <div class="benefit-row">
                    <span class="benefit-title">Speed to Impact</span>
                    <span class="benefit-desc">Rapid onboarding ensures our experts contribute measurable value from their very first week.</span>
                </div>
                <div class="benefit-row">
                    <span class="benefit-title">Flexibility & Scalability</span>
                    <span class="benefit-desc">Scale your team capacity up or down seamlessly based on shifting project demands.</span>
                </div>
                <div class="benefit-row">
                    <span class="benefit-title">Seamless Cultural Integration</span>
                    <span class="benefit-desc">Our professionals adapt to your tools, workflows, and team culture instantly.</span>
                </div>
             </div>
          </div>

          <!-- CLOSING TEXT -->
          <p class="intro-text" style="text-align: center; margin-bottom: 10px; font-style: italic; opacity: 0.7; font-size: 15px;">
            Let’s turn your ambitious concepts into reality.
          </p>
        </td>
      </tr>

      <!-- CTA SECTION -->
      <tr>
        <td class="cta-section">
          <a href="mailto:sales@laskontech.com" class="cta-btn">Start Your Project</a>
          
          <div class="contact-block">
             <div class="contact-avatar">EW</div>
             <span style="color: #f8fafc; font-weight: 700; font-size: 18px; display: block; margin-bottom: 4px;">Emma W.</span>
             <span style="color: #64748b; font-size: 13px; display: block; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 600; margin-bottom: 15px;">Sales Manager</span>
             
             <div style="margin-top: 15px; font-size: 15px;">
               <a href="tel:+447466436417" style="color: #60a5fa; text-decoration: none; font-weight: 500;">+44 7466 436417</a>
               <span style="color: #334155; margin: 0 10px;">•</span>
               <a href="mailto:sales@laskontech.com" style="color: #60a5fa; text-decoration: none; font-weight: 500;">sales@laskontech.com</a>
             </div>
             <div style="margin-top: 8px;">
                <a href="https://www.laskontech.com" style="color: #94a3b8; font-size: 14px; text-decoration: none;">www.laskontech.com</a>
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
    a.download = 'laskon-innovation-strategy.html';
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
                <Lightbulb className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Product Innovation & Strategy</h1>
                <p className="text-slate-500 text-sm">Premium dark-themed template for strategy & innovation.</p>
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
              <div className="p-3 bg-slate-50 rounded border border-slate-200 text-slate-600 text-sm font-medium cursor-pointer hover:border-blue-300 hover:bg-blue-50 transition-colors" onClick={() => navigator.clipboard.writeText("Accelerate Growth: Product Innovation & Strategic Staffing")}>
                Accelerate Growth: Product Innovation & Strategic Staffing
              </div>
              <div className="p-3 bg-slate-50 rounded border border-slate-200 text-slate-600 text-sm font-medium cursor-pointer hover:border-blue-300 hover:bg-blue-50 transition-colors" onClick={() => navigator.clipboard.writeText("From Vision to Reality: Expert Strategy & Product Teams")}>
                From Vision to Reality: Expert Strategy & Product Teams
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

export default ProductInnovationEmailTemplate;