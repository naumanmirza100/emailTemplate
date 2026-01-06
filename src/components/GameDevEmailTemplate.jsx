import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Download, Eye, Gamepad2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const GameDevEmailTemplate = () => {
  const { toast } = useToast();
  const [showPreview, setShowPreview] = useState(true);

  const emailHTML = `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="x-apple-disable-message-reformatting">
  <title>Game Development Services - Laskon Tech</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <!--[if mso]>
  <style type="text/css">
    body, table, td, h1, h2, h3, p, li {font-family: 'Inter', Arial, Helvetica, sans-serif !important;}
    .service-card { transition: all 0.3s ease !important; }
    .role-item { transition: all 0.3s ease !important; }
    .cta-button { transition: all 0.3s ease !important; }
  </style>
  <![endif]-->
  <style type="text/css">
    /* BASE STYLES */
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { margin: 0 !important; padding: 0 !important; width: 100% !important; font-family: 'Inter', Arial, sans-serif; background-color: #020617; -webkit-font-smoothing: antialiased; color: #e2e8f0; }
    table { border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    td { padding: 0; }
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; display: block; }
    a { color: #22d3ee; text-decoration: none; }
    
    /* LAYOUT */
    .wrapper { width: 100%; table-layout: fixed; background-color: #020617; padding: 40px 0; }
    .main { background-color: #0f172a; margin: 0 auto; width: 100%; max-width: 640px; border-radius: 16px; overflow: hidden; border: 1px solid #1e293b; box-shadow: 0 0 60px rgba(0, 0, 0, 0.6); }
    
    /* HEADER */
    .header { background: #020617; padding: 35px 30px; text-align: center; border-bottom: 1px solid #1e293b; }
    .logo { max-width: 160px; height: auto; margin: 0 auto; }
    
    /* HERO */
    .hero { 
      background: linear-gradient(180deg, #0f172a 0%, #1e1b4b 100%); 
      padding: 50px 40px; 
      text-align: center; 
      border-bottom: 1px solid #312e81;
      position: relative;
    }
    .hero-title { 
      font-size: 32px; 
      font-weight: 800; 
      line-height: 1.3; 
      margin: 0 0 15px 0; 
      color: #ffffff !important; 
      letter-spacing: -0.5px;
      text-shadow: 0 0 20px rgba(34, 211, 238, 0.2);
    }
    .hero-subtitle { font-size: 17px; font-weight: 400; color: #94a3b8; margin: 0; line-height: 1.6; max-width: 480px; margin: 0 auto; }
    
    /* CONTENT */
    .content-wrapper { padding: 40px 35px; background-color: #0f172a; }
    .intro-text { font-size: 16px; line-height: 1.7; color: #cbd5e1; margin-bottom: 40px; text-align: left; border-left: 3px solid #6366f1; padding-left: 15px; background: rgba(99, 102, 241, 0.05); padding: 20px; border-radius: 0 8px 8px 0; }
    
    .staff-intro {
      font-size: 15px;
      line-height: 1.6;
      color: #94a3b8;
      text-align: center;
      margin-bottom: 25px;
      padding: 0 20px;
    }

    /* SECTION HEADERS */
    .section-header { text-align: center; margin-bottom: 35px; margin-top: 10px; }
    .section-title { 
      font-size: 24px; 
      font-weight: 700; 
      color: #ffffff; 
      margin: 0; 
      text-transform: uppercase;
      letter-spacing: 1px;
      display: inline-block;
      background: linear-gradient(90deg, #22d3ee, #818cf8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
      position: relative;
      padding-bottom: 15px;
    }
    .section-title::after {
        content: '';
        display: block;
        width: 60px;
        height: 3px;
        background: linear-gradient(90deg, #22d3ee, #818cf8);
        margin: 0 auto;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 2px;
    }

    /* SERVICES GRID */
    .services-container { margin-bottom: 50px; text-align: left; }
    .service-card {
        display: inline-block;
        width: 48%;
        vertical-align: top;
        background: rgba(30, 41, 59, 0.4);
        border: 1px solid #334155;
        border-radius: 12px;
        padding: 20px;
        margin-bottom: 15px;
        box-sizing: border-box;
    }
    .service-card:nth-child(odd) { margin-right: 2%; }
    
    .service-icon-box { margin-bottom: 15px; }
    .service-title { color: #fff; font-size: 16px; font-weight: 700; margin-bottom: 8px; display: block; }
    .service-desc { color: #94a3b8; font-size: 13px; line-height: 1.5; margin-bottom: 12px; display: block; min-height: 40px; }
    .sub-service-list { border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px; }
    .sub-service-item { display: block; color: #22d3ee; font-size: 12px; font-weight: 500; margin-bottom: 4px; }
    .sub-service-item:before { content: '› '; color: #818cf8; }

    /* ROLES GRID */
    .roles-container { margin-bottom: 50px; text-align: left; }
    .role-item { 
      display: inline-block; 
      width: 32%; 
      vertical-align: top; 
      background: rgba(15, 23, 42, 0.8); 
      border: 1px solid #334155; 
      border-radius: 8px; 
      padding: 12px 10px; 
      margin-bottom: 10px;
      box-sizing: border-box;
      text-align: center;
    }
    .role-item:nth-child(3n+2) { margin: 0 1%; }
    
    .role-text { 
      color: #e2e8f0; 
      font-size: 12px; 
      font-weight: 600; 
      display: block;
      margin-top: 8px;
    }
    .role-icon {
      display: inline-block;
      font-size: 18px;
      margin-bottom: 4px;
    }

    /* WHY US GRID */
    .why-us-container { margin-bottom: 40px; text-align: left; }
    .why-card {
      display: inline-block;
      width: 48%;
      vertical-align: top;
      margin-bottom: 25px;
      padding-right: 10px;
      box-sizing: border-box;
    }
    .why-card:nth-child(odd) { margin-right: 2%; }
    
    .why-icon { font-size: 24px; display: block; margin-bottom: 10px; }
    .why-title { color: #fff; font-weight: 700; font-size: 15px; margin-bottom: 5px; }
    .why-desc { color: #94a3b8; font-size: 13px; line-height: 1.5; }

    /* COST SAVINGS BANNER */
    .savings-banner {
      background-color: rgba(34, 211, 238, 0.08); /* Cyan tint */
      border: 1px solid rgba(34, 211, 238, 0.3);
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 40px;
    }
    .savings-icon-cell {
      width: 80px;
      text-align: center;
      vertical-align: middle;
      border-right: 1px solid rgba(34, 211, 238, 0.3);
      padding-right: 15px;
    }
    .savings-text-cell {
      padding-left: 15px;
      vertical-align: middle;
    }
    .savings-big-text {
      font-size: 32px;
      font-weight: 800;
      color: #22d3ee; /* Cyan 400 */
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
    .cta-text-block {
      max-width: 500px;
      margin: 0 auto 30px auto;
      color: #cbd5e1;
      font-size: 15px;
      line-height: 1.6;
    }
    .cta-btn {
      display: inline-block;
      background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
      color: #ffffff !important;
      font-weight: 700;
      font-size: 16px;
      padding: 18px 36px;
      border-radius: 50px;
      text-decoration: none;
      box-shadow: 0 4px 20px rgba(79, 70, 229, 0.4);
      border: 1px solid rgba(255,255,255,0.1);
    }
    .badge-container { margin-top: 35px; }
    
    /* FOOTER */
    .footer { background: #020617; padding: 30px 20px; text-align: center; color: #475569; font-size: 13px; border-top: 1px solid #1e293b; }
    .footer-link { color: #64748b; text-decoration: none; margin: 0 8px; }
    .footer-link:hover { color: #94a3b8; }

    @media screen and (max-width: 600px) {
      .hero-title { font-size: 26px !important; }
      .role-item, .service-card, .why-card { width: 100% !important; margin-right: 0 !important; display: block !important; }
      .role-item { margin-bottom: 8px !important; text-align: left !important; padding: 15px !important; display: flex !important; align-items: center !important; }
      .role-icon { margin-right: 12px !important; margin-bottom: 0 !important; }
      .role-text { margin-top: 0 !important; font-size: 14px !important; }
      .content-wrapper { padding: 30px 20px; }
      
       /* Savings Banner Mobile */
      .savings-icon-cell { display: block; width: 100%; border-right: none; border-bottom: 1px solid rgba(34, 211, 238, 0.3); padding: 0 0 10px 0; margin-bottom: 10px; }
      .savings-text-cell { display: block; padding-left: 0; text-align: center; }
    }
  </style>
</head>
<body>
  <center class="wrapper">
    <table class="main" cellpadding="0" cellspacing="0" role="presentation">
      <!-- HEADER -->
      <tr>
        <td class="header">
          <!-- Laskon Logo -->
          <img src="https://horizons-cdn.hostinger.com/90edfe98-bc38-4e5c-939e-3b2f88663c35/5f7f06879d989eb79cfcea027cc03785.png" alt="Laskon Tech" class="logo">
        </td>
      </tr>

      <!-- HERO -->
      <tr>
        <td class="hero">
          <h1 class="hero-title">Powering the Next Generation of Games</h1>
          <p class="hero-subtitle">From concept to console—your partner for elite game development and staffing.</p>
        </td>
      </tr>

      <!-- CONTENT -->
      <tr>
        <td class="content-wrapper">
          <div class="intro-text">
            <p style="margin: 0;">
              <strong>Hi [Client Name],</strong><br><br>
              I'm Emma from Laskon Technologies. We help game studios build better worlds, faster. Whether you need a full-cycle development partner or specialized talent to augment your team, we have the expertise to push your project across the finish line.
            </p>
          </div>

          <!-- SERVICES SECTION -->
          <div class="section-header">
            <h2 class="section-title">Our Game Development Services</h2>
          </div>

          <div class="services-container">
            <!-- Service 1 -->
            <div class="service-card">
                <div class="service-icon-box">
                    <img src="https://img.icons8.com/ios-filled/50/22d3ee/controller.png" width="32" height="32" alt="Full Cycle">
                </div>
                <span class="service-title">Full-Cycle Development</span>
                <span class="service-desc">End-to-end game production for PC, Console, and Mobile platforms.</span>
                <div class="sub-service-list">
                    <span class="sub-service-item">Concept & Prototyping</span>
                    <span class="sub-service-item">Level Design & Engineering</span>
                    <span class="sub-service-item">Cross-Platform Porting</span>
                </div>
            </div>
            <!-- Service 2 -->
            <div class="service-card">
                 <div class="service-icon-box">
                    <img src="https://img.icons8.com/ios-filled/50/a855f7/paint-palette.png" width="32" height="32" alt="Art">
                </div>
                <span class="service-title">Game Art & Design</span>
                <span class="service-desc">Stunning visuals that define your game's identity and world.</span>
                <div class="sub-service-list">
                    <span class="sub-service-item">2D/3D Concept Art</span>
                    <span class="sub-service-item">3D Modeling & Animation</span>
                    <span class="sub-service-item">VFX & UI/UX Design</span>
                </div>
            </div>
            <!-- Service 3 -->
            <div class="service-card">
                 <div class="service-icon-box">
                    <img src="https://img.icons8.com/ios-filled/50/f472b6/artificial-intelligence.png" width="32" height="32" alt="AI">
                </div>
                <span class="service-title">Mechanics & AI Systems</span>
                <span class="service-desc">Robust core loops and intelligent behaviors for immersive gameplay.</span>
                <div class="sub-service-list">
                    <span class="sub-service-item">Physics Engines</span>
                    <span class="sub-service-item">Pathfinding & Navigation</span>
                    <span class="sub-service-item">Combat Systems</span>
                </div>
            </div>
            <!-- Service 4 -->
            <div class="service-card">
                 <div class="service-icon-box">
                    <img src="https://img.icons8.com/ios-filled/50/fbbf24/money-bag.png" width="32" height="32" alt="Money">
                </div>
                <span class="service-title">Monetization & LiveOps</span>
                <span class="service-desc">Sustainable revenue models and long-term player retention strategies.</span>
                <div class="sub-service-list">
                    <span class="sub-service-item">In-App Purchases (IAP)</span>
                    <span class="sub-service-item">Ad Integration</span>
                    <span class="sub-service-item">Player Analytics</span>
                </div>
            </div>
             <!-- Service 5 -->
            <div class="service-card">
                 <div class="service-icon-box">
                    <img src="https://img.icons8.com/ios-filled/50/4ade80/virtual-reality.png" width="32" height="32" alt="VR">
                </div>
                <span class="service-title">AR/VR & Blockchain</span>
                <span class="service-desc">Next-gen experiences leveraging immersive tech and Web3 infrastructure.</span>
                <div class="sub-service-list">
                    <span class="sub-service-item">VR Training Simulators</span>
                    <span class="sub-service-item">Metaverse Development</span>
                    <span class="sub-service-item">Smart Contracts</span>
                </div>
            </div>
             <!-- Service 6 -->
            <div class="service-card">
                 <div class="service-icon-box">
                    <img src="https://img.icons8.com/ios-filled/50/f87171/bug.png" width="32" height="32" alt="QA">
                </div>
                <span class="service-title">Game QA & Testing</span>
                <span class="service-desc">Rigorous testing to ensure bug-free, compliant, and polished releases.</span>
                <div class="sub-service-list">
                    <span class="sub-service-item">Automation Testing</span>
                    <span class="sub-service-item">Functional & Load Testing</span>
                    <span class="sub-service-item">Platform Compliance</span>
                </div>
            </div>
            <!-- Service 7 - Full Width Centered if preferred, or just flow in grid -->
             <div class="service-card" style="width: 100%; margin-right: 0;">
                 <div class="service-icon-box">
                    <img src="https://img.icons8.com/ios-filled/50/818cf8/commercial.png" width="32" height="32" alt="Marketing">
                </div>
                <span class="service-title">Marketing & Publishing</span>
                <span class="service-desc">Strategic user acquisition and store optimization for maximum reach.</span>
                <div class="sub-service-list" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                    <span class="sub-service-item" style="display: inline-block; margin-right: 15px;">› App Store Optimization (ASO)</span>
                    <span class="sub-service-item" style="display: inline-block; margin-right: 15px;">› User Acquisition (UA)</span>
                    <span class="sub-service-item" style="display: inline-block;">› Launch Strategy</span>
                </div>
            </div>
          </div>

          <!-- STAFF AUGMENTATION HEADER -->
          <div class="section-header">
            <h2 class="section-title">Game Development Staff Augmentation</h2>
          </div>
          
          <div class="staff-intro">
            Scale your studio's production capacity instantly with elite, pre-vetted engineering and creative talent. Whether you need to fill a skill gap or ramp up for a major release, our certified experts integrate seamlessly into your pipeline.
          </div>

          <!-- ROLES GRID (3 Columns) -->
          <div class="roles-container">
            <!-- Row 1 -->
            <div class="role-item">
              <span class="role-icon">🛠️</span>
              <span class="role-text">Unity/Unreal Devs</span>
            </div>
            <div class="role-item">
               <span class="role-icon">🎨</span>
              <span class="role-text">2D/3D Artists</span>
            </div>
            <div class="role-item">
               <span class="role-icon">📐</span>
              <span class="role-text">Game Designers</span>
            </div>
            
            <!-- Row 2 -->
            <div class="role-item">
              <span class="role-icon">🧠</span>
              <span class="role-text">Game AI Engineers</span>
            </div>
            <div class="role-item">
               <span class="role-icon">🌲</span>
              <span class="role-text">Level Designers</span>
            </div>
            <div class="role-item">
               <span class="role-icon">👓</span>
              <span class="role-text">AR/VR Developers</span>
            </div>
            
            <!-- Row 3 -->
            <div class="role-item">
              <span class="role-icon">⛓️</span>
              <span class="role-text">Web3 Engineers</span>
            </div>
            <div class="role-item">
               <span class="role-icon">🚀</span>
              <span class="role-text">DevOps for Gaming</span>
            </div>
            <div class="role-item">
               <span class="role-icon">🐞</span>
              <span class="role-text">QA Testers</span>
            </div>
          </div>

          <!-- WHY US -->
          <div class="section-header">
            <h2 class="section-title">Why Teams Choose Us</h2>
          </div>
          
          <div class="why-us-container">
            <!-- Benefit 1 -->
            <div class="why-card">
              <span class="why-icon">⭐</span>
              <div class="why-title">Top 1% Talent Vetted</div>
              <div class="why-desc">Rigorous testing for C++, C#, and engine specific knowledge.</div>
            </div>
             <!-- Benefit 2 -->
            <div class="why-card">
              <span class="why-icon">⚡</span>
              <div class="why-title">Zero Ramp-Up Time</div>
              <div class="why-desc">Seniors who know the pipelines and commit code from day one.</div>
            </div>
             <!-- Benefit 3 -->
            <div class="why-card">
              <span class="why-icon">🔄</span>
              <div class="why-title">Flexible Scaling</div>
              <div class="why-desc">Scale your team up for milestones and down for maintenance.</div>
            </div>
             <!-- Benefit 4 -->
            <div class="why-card">
              <span class="why-icon">🌍</span>
              <div class="why-title">Timezone Aligned</div>
              <div class="why-desc">Teams that work when you do, ensuring overlap for collaboration.</div>
            </div>
             <!-- Benefit 5 -->
            <div class="why-card">
              <span class="why-icon">🛡️</span>
              <div class="why-title">IP Security First</div>
              <div class="why-desc">Enterprise-grade NDA compliance and secure development environments.</div>
            </div>
             <!-- Benefit 6 -->
            <div class="why-card">
              <span class="why-icon">💎</span>
              <div class="why-title">Cost Efficiency</div>
              <div class="why-desc">Save 40%+ compared to local hiring without sacrificing quality.</div>
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
                   <span class="savings-headline">Reduce Development Costs</span>
                   <span class="savings-subtext">Lower studio overhead by up to 50% with our flexible staffing models.</span>
                 </td>
               </tr>
             </table>
          </div>
          
        </td>
      </tr>

      <!-- CTA SECTION -->
      <tr>
        <td class="cta-section">
          <p style="color: #e2e8f0; font-size: 18px; font-weight: 600; margin-bottom: 15px;">Ready to level up your game?</p>
          
          <div class="cta-text-block">
            I'd love to share examples of games we've helped ship and discuss how we can support your current roadmap. Please email us at <a href="mailto:sales@laskontech.com" style="color: #22d3ee; text-decoration: underline; font-weight: bold;">sales@laskontech.com</a> to book a brief 15-minute discovery call!
          </div>
          
          <a href="mailto:sales@laskontech.com" class="cta-btn">Email Us for a Discovery Call</a>
          
          <div class="badge-container">
            <img src="https://horizons-cdn.hostinger.com/90edfe98-bc38-4e5c-939e-3b2f88663c35/9a5f67cd2be988856f904716ba2aa15c.png" alt="TopDevelopers Badge" style="max-width: 130px; margin: 0 auto; opacity: 0.8;">
          </div>
        </td>
      </tr>

      <!-- FOOTER -->
      <tr>
        <td class="footer">
          <div style="margin-bottom: 15px; color: #94a3b8; font-weight: 600;">Emma Johnson</div>
          <div style="margin-bottom: 20px;">Senior Growth Manager, Laskon Technologies</div>
          
          <p style="margin-bottom: 10px;">
            <a href="tel:+447466436417" class="footer-link">+44 7466 436417</a>
            <span style="color: #334155;">|</span>
            <a href="mailto:sales@laskontech.com" class="footer-link">sales@laskontech.com</a>
          </p>
          <p>Unit 1 Parliament Business Centre, Liverpool, UK</p>
        </td>
      </tr>
    </table>
  </center>
</body>
</html>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailHTML).then(() => {
      toast({
        title: "Success!",
        description: "HTML copied to clipboard",
      });
    });
  };

  const downloadHTML = () => {
    const blob = new Blob([emailHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'laskon-game-services.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast({ title: "Downloaded!", description: "Template saved." });
  };

  return (
    <div className="container mx-auto max-w-7xl px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div className="bg-slate-950/90 backdrop-blur-md rounded-xl shadow-2xl shadow-cyan-500/10 p-6 border border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Gamepad2 className="w-8 h-8 text-cyan-400" />
                <h1 className="text-3xl font-bold text-white">Game Development Services</h1>
              </div>
              <p className="text-slate-400">Comprehensive services template with dark gaming aesthetic.</p>
            </div>
            <div className="flex gap-3">
              <Button onClick={() => setShowPreview(!showPreview)} variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">
                <Eye className="w-4 h-4 mr-2" /> {showPreview ? 'Hide' : 'Show'} Preview
              </Button>
              <Button onClick={copyToClipboard} variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">
                <Copy className="w-4 h-4 mr-2" /> Copy Code
              </Button>
              <Button onClick={downloadHTML} className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white border-0">
                <Download className="w-4 h-4 mr-2" /> Download
              </Button>
            </div>
          </div>
        </div>

        {showPreview && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-xl shadow-2xl overflow-hidden border border-slate-800 bg-black"
          >
            <div className="bg-black p-4 flex justify-center">
              <iframe
                srcDoc={emailHTML}
                title="Game Dev Email Preview"
                className="w-full max-w-[700px]"
                style={{ border: 'none', height: '2000px', background: 'transparent' }}
              />
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default GameDevEmailTemplate;