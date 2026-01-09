import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Download, Eye, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { getFooterHTML } from '@/components/FooterSnippet';
import { API_BASE_URL } from '@/config/api';

const StaffAugmentationEmailTemplate = () => {
  const { toast } = useToast();
  const [showPreview, setShowPreview] = useState(true);
  const [recipientEmail, setRecipientEmail] = useState('');
  const [emailSubject, setEmailSubject] = useState('Staff Augmentation Services - Laskon Technologies');
  const [isSending, setIsSending] = useState(false);

  const emailHTML = `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="x-apple-disable-message-reformatting">
  <title>Scale Your Team with Top Tech Talent - Laskon Tech</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <!--[if mso]>
  <style type="text/css">
    body, table, td, h1, h2, h3, p, li {font-family: 'Inter', Arial, Helvetica, sans-serif !important;}
    .cta-button { transition: all 0.3s ease !important; }
    .cta-button:hover { transform: translateY(-3px) !important; box-shadow: 0 10px 20px rgba(0,0,0,0.2) !important; }
    .service-card { transition: all 0.3s ease !important; }
    .service-card:hover { transform: translateY(-5px) !important; box-shadow: 0 25px 40px -15px rgba(76, 35, 128, 0.2) !important; }
    .industry-item-wrapper { transition: all 0.3s ease !important; }
    .industry-item-wrapper:hover { transform: translateY(-4px) !important; box-shadow: 0 12px 24px rgba(0,0,0,0.15) !important; }
    .v-text-gradient {
      /* iOS Safari compatible gradient */
      background: -webkit-linear-gradient(270deg, #a5b4fc, #c084fc, #d8b4fe);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      color: #a5b4fc !important; /* Fallback for iOS */
      display: inline-block;
      /* iOS Safari specific fixes */
      -webkit-box-decoration-break: clone;
      box-decoration-break: clone;
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      /* Old IE filter removed - not needed for modern browsers */
    }
  </style>
  <![endif]-->
  <style type="text/css">
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { margin: 0 !important; padding: 0 !important; width: 100% !important; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-family: 'Inter', Arial, sans-serif; background-color: #f0f2f5; -webkit-font-smoothing: antialiased; }
    table { border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    td { padding: 0; }
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; display: block; }
    a { color: #4f46e5; text-decoration: none; }
    .wrapper { width: 100%; table-layout: fixed; background-color: #f0f2f5; padding: 40px 0; }
    .main { background-color: #ffffff; margin: 0 auto; width: 100%; max-width: 680px; border-spacing: 0; font-family: 'Inter', Arial, sans-serif; color: #334155; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);}
    .header { background: #020617; padding: 40px 30px; text-align: center; }
    .logo { max-width: 200px; height: auto; margin: 0 auto; }
    .hero { background: linear-gradient(135deg, #1e3a8a 0%, #020617 100%); background-size: 200% 200%; padding: 50px 30px; text-align: center; color: #ffffff; }
    .hero-title { font-size: 36px; font-weight: 800; line-height: 1.25; margin: 0 0 15px 0; color: #ffffff !important; letter-spacing: -1.5px; }
    .hero-subtitle { font-size: 18px; font-weight: 400; color: #e0f2fe; margin: 0; line-height: 1.6; max-width: 500px; margin-left:auto; margin-right: auto;}
    .content-wrapper { padding: 35px 40px; }
    .greeting { font-size: 17px; line-height: 1.7; color: #475569; margin-bottom: 30px; }
    .dark-section { background-color: #0f172a; padding: 50px 30px; background-image: radial-gradient(circle at top left, rgba(79, 70, 229, 0.2), transparent 40%), radial-gradient(circle at bottom right, rgba(168, 85, 247, 0.2), transparent 40%); }
    .section-title-container { text-align: center; margin-bottom: 35px; }
    .section-title { font-size: 32px; font-weight: 800; line-height: 1.3; margin: 0; letter-spacing: -1px; }
    .text-gradient {
        /* Primary gradient for dark backgrounds */
        background: -webkit-linear-gradient(270deg, #a5b4fc, #d8b4fe);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        /* Fallback color for browsers that don't support gradient text */
        color: #a5b4fc !important;
        display: inline-block;
        /* iOS Safari specific fixes */
        -webkit-box-decoration-break: clone;
        box-decoration-break: clone;
    }
    /* Ensure gradient text is visible and has proper fallback */
    .dark-section .text-gradient,
    .dark-section .v-text-gradient {
        /* Enhanced gradient for better visibility */
        background: -webkit-linear-gradient(270deg, #a5b4fc, #c084fc, #d8b4fe);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        /* Strong fallback for visibility - especially for iOS Safari */
        color: #a5b4fc !important;
        display: inline-block;
        /* iOS Safari specific fixes */
        -webkit-box-decoration-break: clone;
        box-decoration-break: clone;
        /* Force hardware acceleration for better rendering */
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        /* Ensure text is visible on iOS */
        opacity: 1;
    }
    /* iOS Safari specific fix - iPhone 14 Pro Max and other iOS devices */
    @supports (-webkit-touch-callout: none) {
        .dark-section .text-gradient,
        .dark-section .v-text-gradient {
            color: #a5b4fc !important;
            -webkit-text-fill-color: transparent !important;
            /* Force gradient to show on iOS */
            background: -webkit-linear-gradient(270deg, #a5b4fc, #c084fc, #d8b4fe) !important;
            background-image: -webkit-linear-gradient(270deg, #a5b4fc, #c084fc, #d8b4fe) !important;
            -webkit-background-clip: text !important;
            background-clip: text !important;
            /* iOS Safari needs these for proper rendering */
            -webkit-box-decoration-break: clone !important;
            box-decoration-break: clone !important;
            display: inline-block !important;
        }
    }
    /* Additional iOS Safari fix for iPhone 14 Pro Max specifically */
    @media screen and (-webkit-min-device-pixel-ratio: 3) and (max-width: 428px) {
        .dark-section .text-gradient,
        .dark-section .v-text-gradient {
            color: #a5b4fc !important;
            background: -webkit-linear-gradient(270deg, #a5b4fc, #c084fc, #d8b4fe) !important;
            -webkit-background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
            background-clip: text !important;
        }
    }
    /* Fallback for browsers that don't support gradient text */
    @supports not (-webkit-background-clip: text) {
        .text-gradient,
        .v-text-gradient {
            color: #a5b4fc !important;
            -webkit-text-fill-color: #a5b4fc !important;
        }
    }
    .cta-container { text-align: center; margin: 35px 0; }
    .cta-button { display: inline-block; color: #ffffff !important; font-size: 16px; font-weight: 600; text-decoration: none !important; padding: 15px 25px; border-radius: 10px; transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); box-shadow: 0 4px 15px rgba(0,0,0,0.1); text-align:center; min-width: 160px; }
    .cta-call { background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); }
    .cta-whatsapp { background: linear-gradient(135deg, #25d366 0%, #128c7e 100%); }
    .cta-email { background: linear-gradient(135deg, #64748b 0%, #334155 100%); }
    .badge-container { text-align: center; margin: 35px 0; padding: 25px 0; }
    .badge-image { max-width: 160px; height: auto; margin: 0 auto; }
    .footer { background-color: #020617; padding: 50px 30px; text-align: center; color: #94a3b8; }
    .signature { margin-bottom: 30px; }
    .signature-name { font-size: 20px; font-weight: 700; color: #ffffff; }
    .signature-title { font-size: 16px; color: #cbd5e1; margin-bottom: 15px; }
    .contact-info { font-size: 15px; line-height: 1.8; color: #94a3b8; }
    .contact-link { color: #818cf8; text-decoration: none; transition: color 0.3s ease; }
    .contact-link:hover { color: #ffffff !important; text-decoration: underline !important; }
    .footer-divider { height: 1px; background-color: #1e293b; margin: 30px auto; width: 80%; border:0; }
    .divider { height: 1px; background-color: #e2e8f0; margin: 40px 0; border:0; }
    .btn-icon { width: 20px; height: 20px; vertical-align: middle; margin-right: 10px; }

    /* --- ELITE COLOR-CODED SERVICE CARD STYLING --- */
    .service-card { 
        border-radius: 24px; 
        margin-bottom: 35px; 
        transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1); 
        background-color: #ffffff; 
        background: rgba(255, 255, 255, 0.95); 
        /* Subtle border that gets overridden by specific color themes */
        border: 1px solid rgba(226, 232, 240, 0.8); 
        position: relative;
        overflow: hidden;
        box-shadow: 0 10px 30px -10px rgba(148, 163, 184, 0.15);
    }
    
    .service-card:hover { 
        transform: translateY(-8px) scale(1.01); 
        box-shadow: 0 20px 40px -12px rgba(71, 85, 105, 0.15);
    }

    /* Common Header Styles */
    .service-card-header { 
        padding: 30px 32px 24px; 
        border-bottom: 1px solid rgba(241, 245, 249, 1); 
        position: relative;
        overflow: hidden;
    }

    /* Common Title Styles */
    .service-card-title { 
        font-size: 21px; 
        font-weight: 800; 
        margin-left: 24px; 
        letter-spacing: -0.5px; 
    }

    /* Common Icon Circle Styles */
    .icon-circle { 
        width: 68px; 
        height: 68px; 
        border-radius: 20px; 
        display: table-cell; 
        vertical-align: middle; 
        text-align: center; 
        background: #ffffff; 
        box-shadow: 0 8px 16px rgba(0,0,0,0.06);
        position: relative;
        z-index: 2;
    }

    /* --- UNIQUE COLOR THEMES FOR EACH CARD --- */

    /* 1. Teams (Royal Indigo) */
    .card-teams { border-left: 4px solid #4f46e5; }
    .card-teams .service-card-header { background: linear-gradient(to right, rgba(79, 70, 229, 0.08), rgba(255,255,255,0)); }
    .card-teams .service-card-title { color: #4338ca; }
    .card-teams .icon-circle { border: 2px solid #e0e7ff; }
    .card-teams:hover .icon-circle { border-color: #818cf8; background-color: #eef2ff; }

    /* 2. Software Dev (Vibrant Blue) */
    .card-dev { border-left: 4px solid #0ea5e9; }
    .card-dev .service-card-header { background: linear-gradient(to right, rgba(14, 165, 233, 0.08), rgba(255,255,255,0)); }
    .card-dev .service-card-title { color: #0284c7; }
    .card-dev .icon-circle { border: 2px solid #e0f2fe; }
    .card-dev:hover .icon-circle { border-color: #7dd3fc; background-color: #f0f9ff; }

    /* 3. AI (Electric Purple) */
    .card-ai { border-left: 4px solid #9333ea; }
    .card-ai .service-card-header { background: linear-gradient(to right, rgba(147, 51, 234, 0.08), rgba(255,255,255,0)); }
    .card-ai .service-card-title { color: #7e22ce; }
    .card-ai .icon-circle { border: 2px solid #f3e8ff; }
    .card-ai:hover .icon-circle { border-color: #d8b4fe; background-color: #faf5ff; }

    /* 4. Cloud (Sky Cyan) */
    .card-cloud { border-left: 4px solid #06b6d4; }
    .card-cloud .service-card-header { background: linear-gradient(to right, rgba(6, 182, 212, 0.08), rgba(255,255,255,0)); }
    .card-cloud .service-card-title { color: #0891b2; }
    .card-cloud .icon-circle { border: 2px solid #cffafe; }
    .card-cloud:hover .icon-circle { border-color: #67e8f9; background-color: #ecfeff; }

    /* 5. Cybersecurity (Alert Red/Rose) */
    .card-cyber { border-left: 4px solid #e11d48; }
    .card-cyber .service-card-header { background: linear-gradient(to right, rgba(225, 29, 72, 0.08), rgba(255,255,255,0)); }
    .card-cyber .service-card-title { color: #be123c; }
    .card-cyber .icon-circle { border: 2px solid #ffe4e6; }
    .card-cyber:hover .icon-circle { border-color: #fda4af; background-color: #fff1f2; }

    /* 6. QA (Success Emerald) */
    .card-qa { border-left: 4px solid #10b981; }
    .card-qa .service-card-header { background: linear-gradient(to right, rgba(16, 185, 129, 0.08), rgba(255,255,255,0)); }
    .card-qa .service-card-title { color: #059669; }
    .card-qa .icon-circle { border: 2px solid #d1fae5; }
    .card-qa:hover .icon-circle { border-color: #6ee7b7; background-color: #ecfdf5; }


    /* Top Gradient Accent - Dynamic per card */
    .card-teams::before { background: linear-gradient(90deg, #4f46e5, #818cf8); height: 4px; content: ''; position: absolute; top: 0; left: 0; width: 100%; opacity: 0; transition: opacity 0.4s ease; }
    .card-dev::before { background: linear-gradient(90deg, #0ea5e9, #38bdf8); height: 4px; content: ''; position: absolute; top: 0; left: 0; width: 100%; opacity: 0; transition: opacity 0.4s ease; }
    .card-ai::before { background: linear-gradient(90deg, #9333ea, #c084fc); height: 4px; content: ''; position: absolute; top: 0; left: 0; width: 100%; opacity: 0; transition: opacity 0.4s ease; }
    .card-cloud::before { background: linear-gradient(90deg, #06b6d4, #22d3ee); height: 4px; content: ''; position: absolute; top: 0; left: 0; width: 100%; opacity: 0; transition: opacity 0.4s ease; }
    .card-cyber::before { background: linear-gradient(90deg, #e11d48, #fb7185); height: 4px; content: ''; position: absolute; top: 0; left: 0; width: 100%; opacity: 0; transition: opacity 0.4s ease; }
    .card-qa::before { background: linear-gradient(90deg, #10b981, #34d399); height: 4px; content: ''; position: absolute; top: 0; left: 0; width: 100%; opacity: 0; transition: opacity 0.4s ease; }

    .service-card:hover::before { opacity: 1; }

    .glassmorphism-bg { 
        /* Premium subtle gradient background for the section */
        background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
        border-top: 1px solid rgba(255,255,255,0.5);
    }

    .service-card-content { 
        padding: 24px 32px 32px; 
        font-size: 16px; 
        line-height: 1.8; 
        color: #475569; 
    }

    /* --- END ELITE STYLING --- */

    .why-us-item { margin-bottom: 25px; padding-left: 35px; position: relative; }
    .why-us-item::before { content: '✓'; position: absolute; left: 0; top: 0px; color: #4f46e5; font-weight: bold; font-size: 22px; }
    .why-us-title { font-size: 18px; font-weight: 600; color: #1e293b; margin-bottom: 8px; }
    .why-us-text { font-size: 15px; color: #475569; line-height: 1.6; }
    .industries-section { background-color: rgba(248, 250, 252, 0.7); padding: 40px 30px; border-radius: 16px; -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.5); box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1); }
    .industry-grid { font-size: 0; }
    .industry-item-wrapper { display: inline-block; width: 33.33%; padding: 8px; box-sizing: border-box; text-align: center; vertical-align: top; }
    .industry-item { display: block; background: linear-gradient(145deg, rgba(255,255,255,0.8), rgba(255,255,255,0.5)); border-radius: 12px; padding: 20px 10px; height: 100%; border: 1px solid rgba(255,255,255,0.7); box-shadow: 0 8px 16px rgba(100,116,139,0.08); transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); }
    .industry-item:hover { background: #ffffff; border-color: #ffffff; }
    .industry-icon-wrapper { height: 44px; margin-bottom: 12px; }
    .industry-icon { margin: 0 auto; }
    .industry-name { font-size: 14px; font-weight: 600; color: #1e293b; line-height: 1.4; }
    
    /* COST SAVINGS BANNER */
    .savings-banner {
      background-color: #eff6ff; /* Light blue/indigo mix */
      border: 1px solid #bfdbfe;
      border-radius: 12px;
      padding: 25px;
      margin-top: 35px;
      margin-bottom: 20px;
    }
    .savings-icon-cell {
      width: 90px;
      text-align: center;
      vertical-align: middle;
      border-right: 1px solid #dbeafe;
      padding-right: 20px;
    }
    .savings-text-cell {
      padding-left: 20px;
      vertical-align: middle;
    }
    .savings-big-text {
      font-size: 38px;
      font-weight: 800;
      color: #4f46e5; /* Indigo 600 */
      display: block;
      line-height: 1;
    }
    .savings-headline {
      color: #1e293b;
      font-size: 18px;
      font-weight: 700;
      display: block;
      margin-bottom: 5px;
      text-transform: uppercase;
    }
    .savings-subtext {
      color: #475569;
      font-size: 14px;
      line-height: 1.5;
      display: block;
    }
    
    @media screen and (max-width: 600px) {
      .wrapper { padding: 15px 0; }
      .main { width: 100% !important; border-radius: 0; }
      .header, .content-wrapper, .dark-section { padding: 30px 20px; }
      .hero { padding: 40px 20px; }
      .hero-title { font-size: 28px !important; }
      .hero-subtitle { font-size: 17px !important; }
      .section-title { font-size: 28px !important; }
      .cta-button { display: block; width: 100%; margin-bottom: 15px !important; }
      .mso-cta-row { display: block; width: 100%; margin-bottom: 10px; }
      .service-card-header, .service-card-content { padding: 20px; }
      .service-card-title { font-size: 18px; }
      .why-us-item { width: 100% !important; padding-right: 0 !important; }
      .industries-section { padding: 30px 20px; }
      .industry-item-wrapper { width: 50%; }
      
      /* Savings Banner Mobile */
      .savings-icon-cell { display: block; width: 100%; border-right: none; border-bottom: 1px solid #dbeafe; padding: 0 0 15px 0; margin-bottom: 15px; }
      .savings-text-cell { display: block; padding-left: 0; text-align: center; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f0f2f5;">
  <center class="wrapper">
    <table class="main" width="100%" cellpadding="0" cellspacing="0" role="presentation">
      <tr>
        <td class="header">
          <img src="https://horizons-cdn.hostinger.com/90edfe98-bc38-4e5c-939e-3b2f88663c35/66e33d06cd984435ee08a0d766ddb17c.png" alt="Laskon Tech Logo" class="logo">
        </td>
      </tr>
      <tr>
        <td class="hero">
          <h1 class="hero-title">Scale Your Team with Elite Tech Talent</h1>
          <p class="hero-subtitle">Instantly access pre-vetted senior developers, engineers, and IT specialists to accelerate your projects.</p>
        </td>
      </tr>
      <tr>
        <td class="content-wrapper">
          <p class="greeting">
            Hi [Client Name],
            <br><br>
            I'm Emma from Laskon Technologies. I'm reaching out because I see you're building great things, and I know how challenging it can be to find the right tech talent to accelerate your roadmap.
            <br><br>
            We help innovative companies like yours bridge the skills gap by providing world-class, dedicated technology professionals.
          </p>
        </td>
      </tr>
      <tr>
        <td class="dark-section">
          <div class="section-title-container">
            <h2 class="section-title text-gradient"><span class="v-text-gradient" style="color: #a5b4fc !important; background: -webkit-linear-gradient(270deg, #a5b4fc, #c084fc, #d8b4fe) !important; background-image: -webkit-linear-gradient(270deg, #a5b4fc, #c084fc, #d8b4fe) !important; -webkit-background-clip: text !important; -webkit-text-fill-color: transparent !important; background-clip: text !important; display: inline-block !important; -webkit-box-decoration-break: clone !important; box-decoration-break: clone !important;">Our Staff Augmentation Services</span></h2>
          </div>
        </td>
      </tr>
      <tr>
        <td class="content-wrapper glassmorphism-bg" style="padding-bottom:15px;">
          <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
            <tr>
              <td>
                <!-- Service Cards (Shortened for brevity in processing, structure preserved) -->
                <!-- Service 1 -->
                <div class="service-card card-teams">
                  <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                    <tr><td class="service-card-header"><table width="100%" cellpadding="0" cellspacing="0"><tr><td width="68" class="icon-circle"><span style="font-size:30px; line-height:1; display:inline-block;">👥</span></td><td class="service-card-title">Staff Augmentation & Teams</td></tr></table></td></tr>
                    <tr><td class="service-card-content">Instantly scale your capacity with our pre-vetted experts. We provide individuals or build full-stack, autonomous teams tailored to your project goals.</td></tr>
                  </table>
                </div>
                <!-- Service 2 -->
                <div class="service-card card-dev">
                   <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                    <tr><td class="service-card-header"><table width="100%" cellpadding="0" cellspacing="0"><tr><td width="68" class="icon-circle"><span style="font-size:30px; line-height:1; display:inline-block;">💻</span></td><td class="service-card-title">Software Development</td></tr></table></td></tr>
                    <tr><td class="service-card-content">From front-end to back-end and mobile, our engineers are proficient in the latest technologies to build robust, scalable, and high-performance applications.</td></tr>
                  </table>
                </div>
                <!-- Service 3 -->
                <div class="service-card card-ai">
                   <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                    <tr><td class="service-card-header"><table width="100%" cellpadding="0" cellspacing="0"><tr><td width="68" class="icon-circle"><span style="font-size:30px; line-height:1; display:inline-block;">🤖</span></td><td class="service-card-title">AI & Intelligent Automation</td></tr></table></td></tr>
                    <tr><td class="service-card-content">Leverage our AI specialists for machine learning, data science, and process automation to unlock new efficiencies and drive intelligent business outcomes.</td></tr>
                  </table>
                </div>
                <!-- Service 4 -->
                <div class="service-card card-cloud">
                   <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                    <tr><td class="service-card-header"><table width="100%" cellpadding="0" cellspacing="0"><tr><td width="68" class="icon-circle"><span style="font-size:30px; line-height:1; display:inline-block;">☁️</span></td><td class="service-card-title">Cloud & DevOps Engineering</td></tr></table></td></tr>
                    <tr><td class="service-card-content">Accelerate your software delivery pipeline with our certified Cloud & DevOps engineers, specializing in CI/CD, infrastructure-as-code, and containerization.</td></tr>
                  </table>
                </div>
                <!-- Service 5 -->
                <div class="service-card card-cyber">
                  <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                    <tr><td class="service-card-header"><table width="100%" cellpadding="0" cellspacing="0"><tr><td width="68" class="icon-circle"><span style="font-size:30px; line-height:1; display:inline-block;">🛡️</span></td><td class="service-card-title">Cybersecurity Support</td></tr></table></td></tr>
                    <tr><td class="service-card-content">Protect your digital assets with our cybersecurity experts, offering services from threat analysis and vulnerability assessments to incident response.</td></tr>
                  </table>
                </div>
                <!-- Service 6 -->
                <div class="service-card card-qa" style="margin-bottom:0;">
                   <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                    <tr><td class="service-card-header"><table width="100%" cellpadding="0" cellspacing="0"><tr><td width="68" class="icon-circle"><span style="font-size:30px; line-height:1; display:inline-block;">✅</span></td><td class="service-card-title">Quality Assurance & Testing</td></tr></table></td></tr>
                    <tr><td class="service-card-content">Ensure flawless user experiences with our dedicated QA engineers. We provide manual and automated testing services to guarantee your software is bug-free and performant.</td></tr>
                  </table>
                </div>
              </td>
            </tr>
          </table>
          <hr class="divider" />
          <div class="section-title-container">
            <h2 style="font-size: 28px; font-weight: 700; color: #1e293b; margin: 0; line-height: 1.4; display: inline-block; position: relative;">Why Companies Choose Us</h2>
          </div>
          <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom: 20px;">
            <tr>
              <td width="50%" valign="top" style="padding-right: 15px;">
                <div class="why-us-item"><h3 class="why-us-title">Top 3% of Talent</h3><p class="why-us-text">Our rigorous vetting process ensures you only work with elite, senior-level professionals.</p></div>
                <div class="why-us-item"><h3 class="why-us-title">Seamless Integration</h3><p class="why-us-text">Our experts become a true extension of your team, adopting your culture, tools, and workflows.</p></div>
                <div class="why-us-item" style="margin-bottom:0;"><h3 class="why-us-title">Cost-Effective</h3><p class="why-us-text">Reduce overhead costs associated with hiring, benefits, and office space.</p></div>
              </td>
              <td width="50%" valign="top" style="padding-left: 15px;">
                 <div class="why-us-item"><h3 class="why-us-title">Rapid Onboarding</h3><p class="why-us-text">Get the right talent integrated into your team in days, not months. We handle all logistics.</p></div>
                 <div class="why-us-item"><h3 class="why-us-title">Flexible Engagement</h3><p class="why-us-text">Choose from hourly, part-time, or full-time engagements that adapt to your evolving needs.</p></div>
                 <div class="why-us-item" style="margin-bottom:0;"><h3 class="why-us-title">Global Timezone Coverage</h3><p class="why-us-text">Our distributed team ensures we can provide support and collaboration across all timezones.</p></div>
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
                   <span class="savings-headline">Reduce Costs Up To 50%</span>
                   <span class="savings-subtext">Cut operational overhead significantly compared to traditional in-house hiring models.</span>
                 </td>
               </tr>
             </table>
          </div>
          
          <hr class="divider" />
            
            <!-- Industries Section -->
            <div class="industries-section">
              <div class="section-title-container" style="margin-bottom: 25px;">
                <h2 style="font-size: 26px; font-weight: 800; color: #1e293b; margin: 0; line-height: 1.4; letter-spacing: -0.5px;">Industries We Support</h2>
              </div>
              <div class="industry-grid">
                    <div class="industry-item-wrapper">
                      <div class="industry-item">
                        <div class="industry-icon-wrapper"><img src="https://img.icons8.com/office/80/4f46e5/coins.png" width="36" height="36" alt="FinTech Icon" class="industry-icon" /></div>
                        <p class="industry-name">FinTech</p>
                      </div>
                    </div>
                    <div class="industry-item-wrapper">
                      <div class="industry-item">
                        <div class="industry-icon-wrapper"><img src="https://img.icons8.com/ios-filled/50/4f46e5/caduceus.png" width="36" height="36" alt="Healthcare Icon" class="industry-icon" /></div>
                        <p class="industry-name">Healthcare</p>
                      </div>
                    </div>
                    <div class="industry-item-wrapper">
                      <div class="industry-item">
                        <div class="industry-icon-wrapper"><img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/4f46e5/external-saas-agile-flaticons-lineal-color-flat-icons.png" width="36" height="36" alt="SaaS Icon" class="industry-icon" /></div>
                        <p class="industry-name">SaaS</p>
                      </div>
                    </div>
                    <div class="industry-item-wrapper">
                      <div class="industry-item">
                        <div class="industry-icon-wrapper"><img src="https://img.icons8.com/ios-filled/50/4f46e5/shopping-cart.png" width="36" height="36" alt="E-commerce Icon" class="industry-icon" /></div>
                        <p class="industry-name">E-commerce</p>
                      </div>
                    </div>
                    <div class="industry-item-wrapper">
                      <div class="industry-item">
                        <div class="industry-icon-wrapper"><img src="https://img.icons8.com/ios-filled/50/4f46e5/box.png" width="36" height="36" alt="Logistics Icon" class="industry-icon" /></div>
                        <p class="industry-name">Logistics</p>
                      </div>
                    </div>
                    <div class="industry-item-wrapper">
                      <div class="industry-item">
                        <div class="industry-icon-wrapper"><img src="https://img.icons8.com/ios-filled/50/4f46e5/city-buildings.png" width="36" height="36" alt="Real Estate Icon" class="industry-icon" /></div>
                        <p class="industry-name">Real Estate</p>
                      </div>
                    </div>
                    <div class="industry-item-wrapper">
                      <div class="industry-item">
                        <div class="industry-icon-wrapper"><img src="https://img.icons8.com/ios-filled/50/4f46e5/e-learning.png" width="36" height="36" alt="EdTech Icon" class="industry-icon" /></div>
                        <p class="industry-name">EdTech</p>
                      </div>
                    </div>
                    <div class="industry-item-wrapper">
                      <div class="industry-item">
                        <div class="industry-icon-wrapper"><img src="https://img.icons8.com/material-rounded/24/4f46e5/enterprise-resource-planning.png" width="36" height="36" alt="Enterprise Icon" class="industry-icon" /></div>
                        <p class="industry-name">Enterprise</p>
                      </div>
                    </div>
                    <div class="industry-item-wrapper">
                      <div class="industry-item">
                        <div class="industry-icon-wrapper"><img src="https://img.icons8.com/dusk/64/4f46e5/consultation.png" width="36" height="36" alt="IT & Consulting Icon" class="industry-icon" /></div>
                        <p class="industry-name">IT & Consulting</p>
                      </div>
                    </div>
                    <div class="industry-item-wrapper">
                      <div class="industry-item">
                        <div class="industry-icon-wrapper"><img src="https://img.icons8.com/ios-filled/50/4f46e5/car--v1.png" width="36" height="36" alt="Automotive Icon" class="industry-icon" /></div>
                        <p class="industry-name">Automotive</p>
                      </div>
                    </div>
                    <div class="industry-item-wrapper">
                      <div class="industry-item">
                        <div class="industry-icon-wrapper"><img src="https://img.icons8.com/ios-filled/50/4f46e5/airplane-mode-on.png" width="36" height="36" alt="Aviation Icon" class="industry-icon" /></div>
                        <p class="industry-name">Aviation</p>
                      </div>
                    </div>
                    <div class="industry-item-wrapper">
                      <div class="industry-item">
                        <div class="industry-icon-wrapper"><img src="https://img.icons8.com/ios-filled/50/4f46e5/wheat.png" width="36" height="36" alt="Agriculture Icon" class="industry-icon" /></div>
                        <p class="industry-name">Agriculture</p>
                      </div>
                    </div>
                    <div class="industry-item-wrapper">
                      <div class="industry-item">
                        <div class="industry-icon-wrapper"><img src="https://img.icons8.com/ios-filled/50/4f46e5/controller.png" width="36" height="36" alt="Gaming Icon" class="industry-icon" /></div>
                        <p class="industry-name">Gaming</p>
                      </div>
                    </div>
                    <div class="industry-item-wrapper">
                      <div class="industry-item">
                        <div class="industry-icon-wrapper"><img src="https://img.icons8.com/ios-filled/50/4f46e5/movie-projector.png" width="36" height="36" alt="Entertainment Icon" class="industry-icon" /></div>
                        <p class="industry-name">Entertainment</p>
                      </div>
                    </div>
              </div>
            </div>
          <div class="cta-container">
            <p style="font-size: 20px; line-height: 1.6; color: #1e293b; text-align: center; margin-top: 10px; margin-bottom: 25px; font-weight:600;">
              Ready to build your dream team?
            </p>
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" class="cta-buttons-wrapper">
              <tr>
                <td align="center">
                  <table role="presentation" border="0" cellspacing="0" cellpadding="0" align="center">
                    <tr>
                      <td style="padding: 6px;">
                        <a href="tel:+447466436417" class="cta-button cta-call"><span style="display:inline-block; font-size:18px; line-height:1; vertical-align:middle; margin-right:10px;">📞</span>Call Us</a>
                      </td>
                      <td style="padding: 6px;">
                         <a href="https://wa.me/447466436417" target="_blank" class="cta-button cta-whatsapp"><span style="display:inline-block; font-size:18px; line-height:1; vertical-align:middle; margin-right:10px;">💬</span>WhatsApp</a>
                      </td>
                      <td style="padding: 6px;">
                        <a href="mailto:sales@laskontech.com" class="cta-button cta-email"><span style="display:inline-block; font-size:18px; line-height:1; vertical-align:middle; margin-right:10px;">✉️</span>Email Us</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </div>
          <div class="badge-container">
            <img src="https://horizons-cdn.hostinger.com/90edfe98-bc38-4e5c-939e-3b2f88663c35/ad48e8de2ee2124194e76f3e59cb485e.png" alt="TopDevelopers 2025 - Best Artificial Intelligence Companies" class="badge-image">
          </div>
        </td>
      </tr>
      ${getFooterHTML()}
    </table>
  </center>
</body>
</html>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailHTML).then(() => {
      toast({
        title: "Success!",
        description: "Email HTML code copied to clipboard",
      });
    }).catch(() => {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard",
        variant: "destructive",
      });
    });
  };

  const downloadHTML = () => {
    const blob = new Blob([emailHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'laskon-tech-staffing-email.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Success!",
      description: "Staff Augmentation email downloaded.",
    });
  };

  const sendEmail = async () => {
    if (!recipientEmail) {
      toast({
        title: "Error",
        description: "Please enter a recipient email address",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(recipientEmail)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSending(true);
    try {
      const response = await fetch(`${API_BASE_URL}/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: recipientEmail,
          subject: emailSubject,
          html: emailHTML,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Success!",
          description: `Email sent successfully to ${recipientEmail}`,
        });
        setRecipientEmail('');
      } else {
        let errorMessage = data.error || "Failed to send email";
        
        // Provide helpful message for authentication errors
        if (data.code === 'EAUTH' || data.details?.includes('Authentication')) {
          errorMessage = "Email authentication failed. Please verify your Hostinger email credentials in .env file.";
        } else if (data.details) {
          errorMessage = data.details;
        }
        
        toast({
          title: "Error",
          description: errorMessage,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to connect to email server. Make sure the server is running.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="container mx-auto max-w-7xl px-2 sm:px-4 py-4 sm:py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4 sm:space-y-8"
      >
        <div className="bg-white dark:bg-slate-800/80 backdrop-blur-md rounded-xl shadow-lg p-4 sm:p-6 border border-slate-200 dark:border-slate-700 transition-colors">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="w-full md:w-auto">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-1">Staff Augmentation Email Template</h1>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">Elite, best-in-class design for Laskon Tech's staff augmentation services.</p>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3 w-full md:w-auto">
              <Button
                onClick={() => setShowPreview(!showPreview)}
                variant="outline"
                className="gap-2 flex-1 sm:flex-initial border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
              >
                <Eye className="w-4 h-4" />
                <span className="hidden xs:inline">{showPreview ? 'Hide' : 'Show'} Preview</span>
              </Button>
              <Button
                onClick={copyToClipboard}
                variant="outline"
                className="gap-2 flex-1 sm:flex-initial border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
              >
                <Copy className="w-4 h-4" />
                <span className="hidden xs:inline">Copy HTML</span>
              </Button>
              <Button
                onClick={downloadHTML}
                className="gap-2 bg-indigo-600 hover:bg-indigo-700 text-white flex-1 sm:flex-initial"
              >
                <Download className="w-4 h-4" />
                <span className="hidden xs:inline">Download</span>
              </Button>
            </div>
          </div>

          {/* Email Sending Form */}
          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 mb-4">
              <Mail className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100">Send Email</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="recipient-email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Recipient Email Address
                </label>
                <input
                  id="recipient-email"
                  type="email"
                  value={recipientEmail}
                  onChange={(e) => setRecipientEmail(e.target.value)}
                  placeholder="recipient@example.com"
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email-subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Email Subject
                </label>
                <input
                  id="email-subject"
                  type="text"
                  value={emailSubject}
                  onChange={(e) => setEmailSubject(e.target.value)}
                  placeholder="Email subject"
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 outline-none transition-colors"
                />
              </div>
              <Button
                onClick={sendEmail}
                disabled={isSending || !recipientEmail}
                className="w-full bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white gap-2"
              >
                <Send className="w-4 h-4" />
                {isSending ? 'Sending...' : 'Send Email'}
              </Button>
            </div>
          </div>
        </div>
        {showPreview && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700 transition-colors"
          >
            <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
              <iframe
                srcDoc={emailHTML}
                title="Staff Augmentation Email Preview"
                className="w-full"
                style={{ border: 'none', height: '3600px', minHeight: '600px' }}
              />
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default StaffAugmentationEmailTemplate;