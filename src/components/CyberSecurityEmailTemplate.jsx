import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Download, Eye, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { getFooterHTML } from '@/components/FooterSnippet';

const CyberSecurityEmailTemplate = () => {
  const { toast } = useToast();
  const [showPreview, setShowPreview] = useState(true);

  const emailHTML = `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="x-apple-disable-message-reformatting">
  <title>Enterprise Cybersecurity Solutions - Laskon Tech</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <!--[if mso]>
  <style type="text/css">
    body, table, td, h1, h2, h3, p, li {font-family: 'Inter', Arial, Helvetica, sans-serif !important;}
  </style>
  <![endif]-->
  <style type="text/css">
    /* BASE STYLES */
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { margin: 0 !important; padding: 0 !important; width: 100% !important; font-family: 'Inter', Arial, sans-serif; background-color: #020617; -webkit-font-smoothing: antialiased; color: #e2e8f0; }
    table { border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    td { padding: 0; }
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; display: block; }
    a { color: #06b6d4; text-decoration: none; }
    
    /* LAYOUT */
    .wrapper { width: 100%; table-layout: fixed; background-color: #020617; padding: 40px 0; }
    .main { background-color: #0f172a; margin: 0 auto; width: 100%; max-width: 680px; border-radius: 8px; overflow: hidden; border: 1px solid #1e293b; box-shadow: 0 0 60px rgba(6, 182, 212, 0.15); }
    
    /* HEADER */
    .header { background: #0f172a; padding: 30px; text-align: center; border-bottom: 1px solid #1e293b; }
    .logo { max-width: 180px; height: auto; margin: 0 auto; }
    
    /* HERO */
    .hero { 
      background: radial-gradient(circle at center, #1e293b 0%, #020617 100%); 
      padding: 50px 40px; 
      text-align: center; 
      border-bottom: 1px solid #334155;
      position: relative;
    }
    .hero-icon { display: block; margin: 0 auto 20px auto; width: 64px; height: 64px; }
    .hero-title { 
      font-size: 32px; 
      font-weight: 800; 
      line-height: 1.2; 
      margin: 0 0 15px 0; 
      color: #ffffff !important; 
      letter-spacing: -0.5px;
      text-shadow: 0 0 20px rgba(6, 182, 212, 0.4);
    }
    .hero-subtitle { font-size: 16px; font-weight: 400; color: #94a3b8; margin: 0 auto; line-height: 1.6; max-width: 520px; }
    
    /* CONTENT */
    .content-wrapper { padding: 40px 35px; background-color: #0f172a; }
    
    /* INTRO */
    .intro-box {
      background: rgba(15, 23, 42, 0.6);
      border: 1px solid #334155;
      border-left: 4px solid #06b6d4;
      padding: 25px;
      border-radius: 0 8px 8px 0;
      margin-bottom: 40px;
    }
    .intro-text { font-size: 15px; line-height: 1.7; color: #cbd5e1; margin: 0; }

    /* SECTION HEADERS */
    .section-header { text-align: center; margin-bottom: 30px; margin-top: 10px; }
    .section-title { 
      font-size: 22px; 
      font-weight: 700; 
      color: #ffffff; 
      margin: 0; 
      text-transform: uppercase;
      letter-spacing: 1.5px;
      display: inline-block;
      border-bottom: 2px solid #06b6d4;
      padding-bottom: 10px;
    }

    /* GRID SYSTEMS */
    .grid-container { font-size: 0; text-align: center; margin-bottom: 40px; }
    
    /* SOLUTIONS GRID (2 Col) */
    .solution-card {
      display: inline-block;
      width: 48%;
      vertical-align: top;
      background: rgba(30, 41, 59, 0.5);
      border: 1px solid #334155;
      border-radius: 6px;
      padding: 15px;
      margin-bottom: 15px;
      box-sizing: border-box;
      text-align: left;
    }
    .solution-card:nth-child(odd) { margin-right: 2%; }
    .sol-title { color: #22d3ee; font-size: 14px; font-weight: 700; display: block; margin-bottom: 5px; }
    .sol-desc { color: #94a3b8; font-size: 12px; line-height: 1.4; }

    /* STAFF GRID (3 Col) */
    .role-badge {
      display: inline-block;
      width: 32%;
      vertical-align: middle;
      background: #1e293b;
      border: 1px solid #475569;
      border-radius: 4px;
      padding: 10px 5px;
      margin-bottom: 10px;
      box-sizing: border-box;
      text-align: center;
    }
    .role-badge:nth-child(3n+2) { margin-left: 1%; margin-right: 1%; }
    .role-name { color: #e2e8f0; font-size: 11px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

    /* PRODUCTS LIST */
    .product-list { margin-bottom: 40px; text-align: left; }
    .product-item {
      background: linear-gradient(90deg, rgba(30,41,59,0.8) 0%, rgba(15,23,42,0) 100%);
      border-left: 3px solid #10b981;
      padding: 12px 15px;
      margin-bottom: 8px;
      font-size: 14px;
      color: #e2e8f0;
    }
    .check-icon { color: #10b981; font-weight: bold; margin-right: 10px; }

    /* WHY US GRID */
    .benefit-card {
      display: inline-block;
      width: 48%;
      vertical-align: top;
      margin-bottom: 25px;
      padding-right: 10px;
      box-sizing: border-box;
    }
    .benefit-card:nth-child(odd) { margin-right: 2%; }
    .benefit-icon { font-size: 20px; margin-bottom: 8px; display: block; }
    .benefit-title { color: #fff; font-weight: 700; font-size: 14px; margin-bottom: 4px; }
    .benefit-desc { color: #94a3b8; font-size: 12px; line-height: 1.5; }
    
    /* COST SAVINGS BANNER */
    .savings-banner {
      background-color: rgba(16, 185, 129, 0.1); /* Green/Emerald tint */
      border: 1px solid rgba(16, 185, 129, 0.3);
      border-radius: 8px;
      padding: 20px;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .savings-icon-cell {
      width: 90px;
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
      font-size: 36px;
      font-weight: 800;
      color: #10b981; /* Emerald 500 */
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
      background: #020617; 
      padding: 45px 30px; 
      text-align: center; 
      border-top: 1px solid #1e293b;
    }
    .cta-title { font-size: 20px; color: #fff; font-weight: 700; margin-bottom: 15px; }
    .cta-text { color: #94a3b8; font-size: 14px; margin-bottom: 20px; line-height: 1.6; max-width: 500px; margin-left: auto; margin-right: auto; }
    .cta-email {
      font-size: 16px;
      font-weight: 700;
      color: #22d3ee !important; /* Emphasize email */
      text-decoration: underline;
      margin-bottom: 20px;
      display: block; /* Make it a block for better spacing */
    }
    
    .cta-btn {
      display: inline-block;
      background: #06b6d4;
      background: linear-gradient(135deg, #06b6d4 0%, #2563eb 100%);
      color: #ffffff !important;
      font-weight: 700;
      font-size: 16px;
      padding: 16px 32px;
      border-radius: 6px;
      text-decoration: none;
      box-shadow: 0 0 20px rgba(6, 182, 212, 0.3);
      border: 1px solid rgba(255,255,255,0.1);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    /* FOOTER */
    .footer { background: #020617; padding: 30px 20px; text-align: center; color: #475569; font-size: 12px; border-top: 1px solid #1e293b; }
    .footer-link { color: #64748b; text-decoration: none; margin: 0 8px; }
    .footer-link:hover { color: #94a3b8; }

    @media screen and (max-width: 600px) {
      .hero-title { font-size: 24px !important; }
      .solution-card, .role-badge, .benefit-card { width: 100% !important; margin-right: 0 !important; display: block !important; margin-left: 0 !important; }
      .role-badge { text-align: left !important; padding: 12px !important; margin-bottom: 5px !important; }
      .content-wrapper { padding: 25px 20px; }
      
      /* Savings Banner Mobile */
      .savings-icon-cell { display: block; width: 100%; border-right: none; border-bottom: 1px solid rgba(16, 185, 129, 0.3); padding: 0 0 15px 0; margin-bottom: 15px; }
      .savings-text-cell { display: block; padding-left: 0; text-align: center; }
    }
  </style>
</head>
<body>
  <center class="wrapper">
    <!-- PREHEADER (Hidden) -->
    <div style="display:none; font-size:1px; color:#020617; line-height:1px; max-height:0px; max-width:0px; opacity:0; overflow:hidden;">
      Secure your infrastructure with elite cybersecurity talent and solutions.
    </div>

    <table class="main" cellpadding="0" cellspacing="0" role="presentation">
      <!-- HEADER -->
      <tr>
        <td class="header">
          <img src="https://horizons-cdn.hostinger.com/90edfe98-bc38-4e5c-939e-3b2f88663c35/f3a523be9f3a95ea16a37bef11863b1c.png" alt="Laskon Tech" class="logo">
        </td>
      </tr>

      <!-- HERO -->
      <tr>
        <td class="hero">
          <img src="https://img.icons8.com/fluency/96/security-checked.png" alt="Security Shield" class="hero-icon">
          <h1 class="hero-title">Fortify Your Digital Assets</h1>
          <p class="hero-subtitle">Elite Cybersecurity Staffing & Enterprise-Grade Protection Solutions</p>
        </td>
      </tr>

      <!-- CONTENT -->
      <tr>
        <td class="content-wrapper">
          <!-- Intro -->
          <div class="intro-box">
            <p class="intro-text">
              <strong>Dear [Client Name],</strong><br><br>
              In an era of evolving digital threats, the gap between security needs and available talent is widening. At Laskon Technologies, we bridge that gap. Whether you need to augment your SOC, perform rigorous audits, or deploy a dedicated Red Team, we provide the certified expertise required to secure your infrastructure.
            </p>
          </div>

          <!-- 1. CORE SOLUTIONS -->
          <div class="section-header">
            <h2 class="section-title">10 Core Cybersecurity Solutions</h2>
          </div>

          <div class="grid-container">
            <!-- 1 -->
            <div class="solution-card">
              <span class="sol-title">🔍 Security Audits</span>
              <span class="sol-desc">Comprehensive assessment of your security posture and compliance.</span>
            </div>
            <!-- 2 -->
            <div class="solution-card">
              <span class="sol-title">🛡️ Threat Detection</span>
              <span class="sol-desc">Real-time monitoring and anomaly detection systems.</span>
            </div>
            <!-- 3 -->
            <div class="solution-card">
              <span class="sol-title">🔐 Data Encryption</span>
              <span class="sol-desc">Advanced cryptographic protocols for data at rest and in transit.</span>
            </div>
            <!-- 4 -->
            <div class="solution-card">
              <span class="sol-title">🚨 Incident Response</span>
              <span class="sol-desc">Rapid containment and mitigation strategies for active breaches.</span>
            </div>
            <!-- 5 -->
            <div class="solution-card">
              <span class="sol-title">🔴 Red Team Ops</span>
              <span class="sol-desc">Adversarial simulation to test defense resilience.</span>
            </div>
            <!-- 6 -->
            <div class="solution-card">
              <span class="sol-title">🔵 Blue Team Ops</span>
              <span class="sol-desc">Defensive security strategies and infrastructure hardening.</span>
            </div>
             <!-- 7 -->
            <div class="solution-card">
              <span class="sol-title">💾 DFIR Services</span>
              <span class="sol-desc">Digital Forensics & Incident Response for post-breach analysis.</span>
            </div>
             <!-- 8 -->
            <div class="solution-card">
              <span class="sol-title">🌐 Threat Intelligence</span>
              <span class="sol-desc">Actionable insights on emerging global threat vectors.</span>
            </div>
             <!-- 9 -->
            <div class="solution-card">
              <span class="sol-title">📋 GRC Consulting</span>
              <span class="sol-desc">Governance, Risk, and Compliance management (ISO, NIST, GDPR, Cyber Essentials+).</span>
            </div>
             <!-- 10 -->
            <div class="solution-card">
              <span class="sol-title">🏗️ Sec Architecture</span>
              <span class="sol-desc">Designing secure-by-default networks and cloud environments.</span>
            </div>
          </div>

          <!-- 2. STAFF AUGMENTATION -->
          <div class="section-header">
            <h2 class="section-title">Staff Augmentation: Available Roles</h2>
            <p style="color: #94a3b8; font-size: 13px; margin-top: 10px;">Flexible Engagement: Dedicated Teams • Staff Augmentation • Project-Based</p>
          </div>

          <div class="grid-container">
            <div class="role-badge"><span class="role-name">Chief Info Security Officer (CISO)</span></div>
            <div class="role-badge"><span class="role-name">Security Architect</span></div>
            <div class="role-badge"><span class="role-name">Penetration Tester</span></div>
            
            <div class="role-badge"><span class="role-name">SOC Analyst (L1/L2/L3)</span></div>
            <div class="role-badge"><span class="role-name">Malware Analyst</span></div>
            <div class="role-badge"><span class="role-name">Cryptographer</span></div>
            
            <div class="role-badge"><span class="role-name">IAM Specialist</span></div>
            <div class="role-badge"><span class="role-name">Cloud Security Engineer</span></div>
            <div class="role-badge"><span class="role-name">DevSecOps Engineer</span></div>
            
            <div class="role-badge"><span class="role-name">Incident Responder</span></div>
            <div class="role-badge"><span class="role-name">Digital Forensic Analyst</span></div>
            <div class="role-badge"><span class="role-name">GRC Consultant</span></div>
            
            <div class="role-badge"><span class="role-name">Network Security Eng.</span></div>
            <div class="role-badge"><span class="role-name">App Security Engineer</span></div>
            <div class="role-badge"><span class="role-name">Threat Hunter</span></div>
          </div>

          <!-- 3. READY TO DEPLOY PRODUCTS -->
          <div class="section-header">
            <h2 class="section-title">Ready-to-Deploy Products</h2>
          </div>

          <div class="product-list">
            <div class="product-item"><span class="check-icon">✓</span> Next-Gen SIEM (Security Information & Event Management)</div>
            <div class="product-item"><span class="check-icon">✓</span> Zero Trust Network Access (ZTNA) Implementation</div>
            <div class="product-item"><span class="check-icon">✓</span> AI-Driven Threat Detection Systems</div>
            <div class="product-item"><span class="check-icon">✓</span> Automated Phishing Defense & Awareness Training</div>
            <div class="product-item"><span class="check-icon">✓</span> Cloud Workload Protection Platforms (CWPP)</div>
            <div class="product-item"><span class="check-icon">✓</span> Endpoint Detection & Response (EDR/XDR)</div>
            <div class="product-item"><span class="check-icon">✓</span> Data Loss Prevention (DLP) Suites</div>
            <div class="product-item"><span class="check-icon">✓</span> Automated Pentesting Tools</div>
          </div>

          <!-- 4. WHY PARTNER WITH US -->
          <div class="section-header">
            <h2 class="section-title">Why Partner With Laskon?</h2>
          </div>

          <div class="grid-container">
             <div class="benefit-card">
              <span class="benefit-icon">🏅</span>
              <div class="benefit-title">Top 1% Vetted Talent</div>
              <div class="benefit-desc">Rigorous technical screening and background checks.</div>
            </div>
            <div class="benefit-card">
              <span class="benefit-icon">🚀</span>
              <div class="benefit-title">Rapid Deployment</div>
              <div class="benefit-desc">Teams assembled and ready to deploy in 48-72 hours.</div>
            </div>
            <div class="benefit-card">
              <span class="benefit-icon">💎</span>
              <div class="benefit-title">Cost Efficiency</div>
              <div class="benefit-desc">Reduce overhead by up to 40% compared to in-house hiring.</div>
            </div>
            <div class="benefit-card">
              <span class="benefit-icon">🌍</span>
              <div class="benefit-title">Global Compliance</div>
              <div class="benefit-desc">Experts well-versed in GDPR, HIPAA, SOC2, ISO, and Cyber Essentials+ standards.</div>
            </div>
            <div class="benefit-card">
              <span class="benefit-icon">🔒</span>
              <div class="benefit-title">Secure by Design</div>
              <div class="benefit-desc">We practice what we preach with secure dev environments.</div>
            </div>
            <div class="benefit-card">
              <span class="benefit-icon">🤝</span>
              <div class="benefit-title">Flexible Scaling</div>
              <div class="benefit-desc">Scale your security team up or down based on threat levels.</div>
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
                   <span class="savings-headline">Reduce Security Costs</span>
                   <span class="savings-subtext">Lower your security operations budget by up to 50% through our efficient staffing models.</span>
                 </td>
               </tr>
             </table>
          </div>

        </td>
      </tr>

      <!-- CTA SECTION -->
      <tr>
        <td class="cta-section">
          <h3 class="cta-title">Secure Your Future Today</h3>
          <p class="cta-text">
            Don't wait for a breach to evaluate your security posture. Schedule a confidential 15-minute consultation to discuss your specific needs.
          </p>
          <a href="mailto:sales@laskontech.com" class="cta-email">sales@laskontech.com</a>
          <a href="mailto:sales@laskontech.com" class="cta-btn">Book 15-min Security Consultation</a>
          
          <div style="margin-top: 40px;">
            <img src="https://horizons-cdn.hostinger.com/90edfe98-bc38-4e5c-939e-3b2f88663c35/3c001ee729ef3c0ddc835fb9197f7f0b.png" alt="TopDevelopers Badge" style="max-width: 140px; margin: 0 auto; opacity: 0.9;">
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
    a.download = 'laskon-cybersecurity.html';
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
        <div className="bg-slate-950 rounded-xl shadow-2xl border border-cyan-900/50 p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                <ShieldCheck className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Cybersecurity & Staffing</h1>
                <p className="text-slate-400 text-sm">Enterprise-grade template with dark glassmorphism.</p>
              </div>
            </div>
            <div className="flex gap-3">
               <Button onClick={() => setShowPreview(!showPreview)} variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">
                <Eye className="w-4 h-4 mr-2" /> {showPreview ? 'Hide' : 'Show'} Preview
              </Button>
              <Button onClick={copyToClipboard} variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">
                <Copy className="w-4 h-4 mr-2" /> Copy Code
              </Button>
              <Button onClick={downloadHTML} className="bg-cyan-600 hover:bg-cyan-700 text-white border-0">
                <Download className="w-4 h-4 mr-2" /> Download
              </Button>
            </div>
          </div>
          
          {/* Subject Line Options */}
          <div className="mt-6 pt-6 border-t border-slate-800">
            <h3 className="text-sm font-medium text-slate-400 mb-3">Recommended Subject Lines:</h3>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="p-3 bg-slate-900/50 rounded border border-slate-800 text-slate-300 text-sm font-mono cursor-pointer hover:border-cyan-500/50 transition-colors" onClick={() => navigator.clipboard.writeText("🛡️ Fortify Your Enterprise: Elite Cybersecurity Staffing Solutions")}>
                🛡️ Fortify Your Enterprise: Elite Cybersecurity Staffing Solutions
              </div>
              <div className="p-3 bg-slate-900/50 rounded border border-slate-800 text-slate-300 text-sm font-mono cursor-pointer hover:border-cyan-500/50 transition-colors" onClick={() => navigator.clipboard.writeText("Secure Your Infrastructure with Top 1% Security Talent")}>
                Secure Your Infrastructure with Top 1% Security Talent
              </div>
            </div>
          </div>
        </div>

        {/* Live Preview */}
        {showPreview && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-xl overflow-hidden border border-slate-800 bg-black shadow-2xl">
            <div className="bg-[#020617] p-4 flex justify-center">
              <iframe srcDoc={emailHTML} title="Preview" className="w-full max-w-[720px]" style={{ border: 'none', height: '2400px', background: 'transparent' }} />
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default CyberSecurityEmailTemplate;