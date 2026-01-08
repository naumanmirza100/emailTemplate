import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Download, Eye, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { getFooterHTML } from '@/components/FooterSnippet';

const EmailTemplate = () => {
  const { toast } = useToast();
  const [showPreview, setShowPreview] = useState(true);
  const [recipientEmail, setRecipientEmail] = useState('');
  const [emailSubject, setEmailSubject] = useState('Transform Your Dental Practice with AI - Laskon Tech');
  const [isSending, setIsSending] = useState(false);

  const emailHTML = `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="x-apple-disable-message-reformatting">
  <title>Transform Your Dental Practice with AI - Laskon Tech</title>
  <!--[if mso]>
  <style type="text/css">
    body, table, td, h1, h2, h3, p, li {font-family: 'Segoe UI', Arial, Helvetica, sans-serif !important;}
    .card-item {
        transition: all 0.3s ease-in-out;
    }
    .card-item:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04) !important;
    }
    .cta-button {
      transition: all 0.3s ease-in-out !important;
    }
    .cta-button:hover {
      transform: translateY(-2px) !important;
      box-shadow: 0 8px 20px rgba(0,0,0,0.25) !important;
    }
  </style>
  <![endif]-->
  <style type="text/css">
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { margin: 0 !important; padding: 0 !important; width: 100% !important; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #f0f2f5; -webkit-font-smoothing: antialiased; }
    table { border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    td { padding: 0; }
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; display: block; }
    a { color: #1d4ed8; text-decoration: none; }
    .wrapper { width: 100%; table-layout: fixed; background-color: #f0f2f5; padding: 40px 0; }
    .main { background-color: #ffffff; margin: 0 auto; width: 100%; max-width: 600px; border-spacing: 0; font-family: 'Helvetica Neue', Arial, sans-serif; color: #374151; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.05);}
    .header { background-color: #001f3f; padding: 25px 30px; text-align: center; }
    .logo { max-width: 160px; height: auto; margin: 0 auto; }
    .hero { background: linear-gradient(135deg, #1d4ed8 0%, #001f3f 100%); padding: 35px 30px; text-align: center; color: #ffffff; }
    .hero-title { font-size: 28px; font-weight: 700; line-height: 1.3; margin: 0 0 10px 0; color: #ffffff !important; }
    .hero-subtitle { font-size: 18px; font-weight: 400; color: #dbeafe; margin: 0; line-height: 1.5; }
    .content-wrapper { padding: 10px 0; }
    .content { padding: 20px 30px; }
    .greeting { font-size: 16px; line-height: 1.7; color: #4b5563; margin-bottom: 30px; }
    .section-title { font-size: 22px; font-weight: 700; color: #001f3f; margin-bottom: 20px; border-left: 4px solid #1d4ed8; padding-left: 15px; line-height: 1.4; }
    .testimonial { background-color: #f8fafc; padding: 30px; border-radius: 8px; margin: 25px 0; border: 1px solid #e2e8f0; }
    .testimonial-text { font-size: 16px; font-style: italic; line-height: 1.7; color: #475569; margin-bottom: 20px; }
    .testimonial-author { font-size: 15px; font-weight: 700; color: #001f3f; margin-bottom: 4px; }
    .testimonial-role { font-size: 14px; color: #64748b; }
    .cta-container { text-align: center; margin: 30px 0 20px 0; }
    .cta-button { display: inline-block; color: #ffffff !important; font-size: 14px; font-weight: 600; text-decoration: none !important; padding: 12px 18px; border-radius: 8px; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(0,0,0,0.2); text-align:center; min-width: 150px; }
    .cta-call { background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); }
    .cta-whatsapp { background: linear-gradient(135deg, #25d366 0%, #128c7e 100%); }
    .cta-email { background: linear-gradient(135deg, #6d28d9 0%, #4c1d95 100%); }
    .badge-container { text-align: center; margin: 30px 0 10px 0; padding: 20px; }
    .badge-image { max-width: 150px; height: auto; margin: 0 auto; }
    .footer { background-color: #001f3f; padding: 40px 30px; text-align: center; color: #ffffff; }
    .footer-title { font-size: 18px; font-weight: 700; color: #a5b4fc; margin-bottom: 25px; letter-spacing: 0.5px; }
    .footer-email { font-size: 16px; color: #a5b4fc; text-decoration: none; margin-bottom: 25px; display: block; }
    .contact-info { font-size: 14px; line-height: 1.8; color: #cbd5e1; margin-bottom: 25px; }
    .contact-link { color: #a5b4fc; text-decoration: none; transition: color 0.3s ease; }
    .contact-link:hover { color: #ffffff !important; text-decoration: underline !important; }
    .footer-divider { height: 1px; background-color: #1e3a8a; margin: 25px auto; width: 80%; border:0; }
    .divider { height: 1px; background-color: #e5e7eb; margin: 35px 0; border:0; }
    
    .calculator-section { background: linear-gradient(135deg, #1e293b, #0f172a); border-radius: 12px; padding: 30px; margin-bottom: 30px; box-shadow: 0 10px 20px rgba(0,0,0,0.1); border: 1px solid #334155; }
    .calculator-title { font-size: 24px; font-weight: 700; color: #ffffff; text-align: center; margin-bottom: 25px; line-height: 1.4; }
    .calculator-row { margin-bottom: 20px; }
    .calculator-cell { background-color: #1e293b; border-radius: 8px; padding: 20px; text-align: center; border: 1px solid #475569;}
    .calculator-label { font-size: 16px; color: #94a3b8; margin-bottom: 8px; font-weight: 500;}
    .calculator-value { font-size: 28px; color: #ffffff; font-weight: 700; margin-bottom: 8px; }
    .calculator-loss { font-size: 36px; color: #f87171; font-weight: 800; line-height: 1.2; letter-spacing: -1px;}
    .calc-divider { width: 15px; text-align: center; font-size: 24px; color: #64748b; font-weight: 700; }

    .service-card-section { padding-top: 20px; }
    .service-card-title { font-size: 24px; font-weight: 700; color: #001f3f; text-align: center; margin-bottom: 30px; }
    .card-item { border-radius: 12px; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.07), 0 4px 6px -2px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; margin-bottom: 25px; transition: all 0.3s ease-in-out; }
    .card-item:hover { transform: translateY(-5px); box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04); }
    .card-content { padding: 30px; }
    .card-title { font-size: 22px; font-weight: 800; color: #ffffff; line-height: 1.3; margin-bottom: 8px; }
    .card-subtitle { font-size: 15px; color: #ffffff; opacity: 0.9; margin-bottom: 25px; line-height: 1.5; }
    .card-features { list-style-type: none; padding: 0; margin: 0; }
    .card-features li { font-size: 15px; color: #4b5563; margin-bottom: 15px; padding-left: 30px; position: relative; line-height: 1.6; }
    .card-features li::before { content: '✓'; font-family: sans-serif; position: absolute; left: 0; top: 0; color: #1d4ed8; font-weight: 600; font-size: 18px; }

    .card-header-1 { background: linear-gradient(135deg, #DC2626, #7F1D1D); border-top: 4px solid #DC2626; }
    .card-header-2 { background: linear-gradient(135deg, #1D4ED8, #1E3A8A); border-top: 4px solid #1D4ED8; }
    .card-header-3 { background: linear-gradient(135deg, #16A34A, #14532D); border-top: 4px solid #16A34A; }
    .card-features li.strong::before { color: #16A34A; }
    .btn-icon { width: 18px; height: 18px; vertical-align: middle; margin-right: 8px; }

    @media screen and (max-width: 600px) {
      .wrapper { padding: 20px 0; }
      .header { padding: 20px; }
      .hero { padding: 30px 20px; }
      .hero-title { font-size: 26px !important; }
      .hero-subtitle { font-size: 17px !important; }
      .content-wrapper, .content { padding: 10px 20px; }
      .section-title { font-size: 20px !important; }
      .calculator-section { padding: 20px; }
      .calculator-title { font-size: 20px !important; }
      .calculator-value { font-size: 22px !important; }
      .calculator-loss { font-size: 28px !important; }
      .cta-buttons-wrapper { padding: 0 10px; }
      .cta-button { font-size: 15px !important; padding: 14px 20px !important; display: block; width: 100%; margin: 0 auto 15px auto !important; }
      .service-card-title { font-size: 22px !important; }
      .card-content { padding: 25px; }
      .card-title { font-size: 20px !important; }
      .mso-cta-row { display: block; width: 100%; margin-bottom: 10px;}
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f0f2f5;">
  <center class="wrapper">
    <table class="main" width="100%" cellpadding="0" cellspacing="0" role="presentation">
      <!-- Header -->
      <tr>
        <td class="header">
          <img src="https://horizons-cdn.hostinger.com/90edfe98-bc38-4e5c-939e-3b2f88663c35/66e33d06cd984435ee08a0d766ddb17c.png" alt="Laskon Tech Logo" class="logo">
        </td>
      </tr>

      <!-- Hero Section -->
      <tr>
        <td class="hero">
          <h1 class="hero-title">Stop Losing Private and Emergency Patients</h1>
          <p class="hero-subtitle">Discover How We Help Practices Capture an Extra £50,000/Month</p>
        </td>
      </tr>
      
      <tr>
        <td class="content-wrapper">
          <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
            <tr>
              <td class="content">
                <!-- Greeting -->
                <p class="greeting">
                  Dear Practice Owner,
                  <br><br>
                  I'm Emma from Laskon Technologies, and I'm reaching out to you to transform your dental practice.
                  <br><br>
                  Are you aware of how much potential revenue you might be losing every single day? Even a few missed patient inquiries can add up to a significant financial impact.
                </p>

                <!-- Financial Impact Calculator -->
                <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                  <tr>
                    <td class="calculator-section">
                      <h2 class="calculator-title">💸 The Real Cost of Missed Patients (Daily Loss)</h2>
                      
                      <!-- Scenario 1 -->
                      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" class="calculator-row">
                        <tr>
                          <td width="30%" class="calculator-cell"><p class="calculator-label">Patients Missed</p><p class="calculator-value">1-5</p></td>
                          <td class="calc-divider">&times;</td>
                          <td width="30%" class="calculator-cell"><p class="calculator-label">Value Per Patient</p><p class="calculator-value">£2,500+</p></td>
                          <td class="calc-divider">=</td>
                          <td width="30%" class="calculator-cell" style="background-color: #3f2229; border-color: #7f1d1d;"><p class="calculator-label">Estimated Loss</p><p class="calculator-loss">£12,500+</p></td>
                        </tr>
                      </table>

                      <!-- Scenario 2 -->
                      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" class="calculator-row">
                        <tr>
                          <td width="30%" class="calculator-cell"><p class="calculator-label">Patients Missed</p><p class="calculator-value">5-10</p></td>
                          <td class="calc-divider">&times;</td>
                          <td width="30%" class="calculator-cell"><p class="calculator-label">Value Per Patient</p><p class="calculator-value">£2,500+</p></td>
                          <td class="calc-divider">=</td>
                          <td width="30%" class="calculator-cell" style="background-color: #3f2229; border-color: #7f1d1d;"><p class="calculator-label">Estimated Loss</p><p class="calculator-loss">£25,000+</p></td>
                        </tr>
                      </table>
                      
                      <!-- Scenario 3 -->
                      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:0;">
                        <tr>
                          <td width="30%" class="calculator-cell"><p class="calculator-label">Patients Missed</p><p class="calculator-value">10+</p></td>
                          <td class="calc-divider">&times;</td>
                          <td width="30%" class="calculator-cell"><p class="calculator-label">Value Per Patient</p><p class="calculator-value">£2,500+</p></td>
                          <td class="calc-divider">=</td>
                          <td width="30%" class="calculator-cell" style="background-color: #3f2229; border-color: #7f1d1d;"><p class="calculator-label">Estimated Loss</p><p class="calculator-loss">£50,000+</p></td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <p class="greeting" style="text-align:center; font-style:italic; color:#1d4ed8; margin-bottom: 30px;">
                  This is revenue you could be capturing with a 24/7 AI-powered system.
                </p>

                <hr class="divider" />
                
                <!-- Service Cards Section -->
                <table width="100%" cellpadding="0" cellspacing="0" role="presentation" class="service-card-section">
                  <tr>
                    <td>
                      <h2 class="service-card-title">Our Solutions</h2>
                    </td>
                  </tr>
                  
                  <!-- Card 1: Emergency Lead Engine -->
                  <tr>
                    <td class="card-item" style="border-radius: 12px; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.07), 0 4px 6px -2px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; margin-bottom: 25px;">
                      <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                          <td class="card-header-1" style="padding: 25px 30px;">
                            <h3 class="card-title" style="font-family: 'Segoe UI', Arial, sans-serif;">🚨 Emergency Lead Engine</h3>
                            <p class="card-subtitle" style="font-family: 'Segoe UI', Arial, sans-serif;">Generate high-intent emergency patients fast.</p>
                          </td>
                        </tr>
                        <tr>
                          <td class="card-content" style="background-color: #fff;">
                            <ul class="card-features">
                              <li>Local 5-mile targeting</li>
                              <li>Improved Google visibility</li>
                              <li>Emergency search domination</li>
                              <li>NHS/Private blend optimisation</li>
                            </ul>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                  <!-- Card 2: 2025 Operational AI Upgrades -->
                  <tr>
                    <td class="card-item" style="border-radius: 12px; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.07), 0 4px 6px -2px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; margin-bottom: 25px;">
                       <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                          <td class="card-header-2" style="padding: 25px 30px;">
                            <h3 class="card-title" style="font-family: 'Segoe UI', Arial, sans-serif;">🤖 2025 Operational AI Upgrades</h3>
                            <p class="card-subtitle" style="font-family: 'Segoe UI', Arial, sans-serif;">Future-proof your practice with intelligent automation.</p>
                          </td>
                        </tr>
                        <tr>
                          <td class="card-content" style="background-color: #fff;">
                            <ul class="card-features">
                              <li>CQC-safe AI communication flows</li>
                              <li>Payment-before-arrival automation</li>
                              <li>AI clinical note generation</li>
                              <li>No-show reduction systems</li>
                              <li class="strong">Receptionist workload &ndash;70%</li>
                            </ul>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Card 3: Digital Marketing Suite -->
                  <tr>
                    <td class="card-item" style="border-radius: 12px; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.07), 0 4px 6px -2px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; margin-bottom: 25px;">
                      <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                          <td class="card-header-3" style="padding: 25px 30px;">
                            <h3 class="card-title" style="font-family: 'Segoe UI', Arial, sans-serif;">📈 Digital Marketing Suite</h3>
                            <p class="card-subtitle" style="font-family: 'Segoe UI', Arial, sans-serif;">Attract, engage, and retain more high-value patients.</p>
                          </td>
                        </tr>
                        <tr>
                          <td class="card-content" style="background-color: #fff;">
                            <ul class="card-features">
                              <li>Attract high-value patients with targeted SEO & Google Ads</li>
                              <li>Automate patient nurturing through strategic email campaigns</li>
                              <li>Build a trusted brand with professional branding & reputation management</li>
                            </ul>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <hr class="divider" />

                <!-- Testimonial -->
                <div class="testimonial">
                  <p class="testimonial-text">
                    "Working with Laskon Tech transformed our practice. Their AI agent handles private and emergency patient inquiries seamlessly, and we've seen a 45% increase in new patient bookings. The ROI was evident within the first month. Emma and her team truly understand the dental industry."
                  </p>
                  <p class="testimonial-author">Dr. Sarah Mitchell</p>
                  <p class="testimonial-role">Principal Dentist, Mitchell Dental Care</p>
                </div>
                
                <!-- Main CTA Section -->
                <div class="cta-container">
                  <p style="font-size: 18px; line-height: 1.6; color: #1e293b; text-align: center; margin-top: 0; margin-bottom: 25px; font-weight:600;">
                    Ready to transform your practice?
                  </p>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" class="cta-buttons-wrapper">
                    <tr>
                      <td align="center">
                        <!--[if !mso]><!-->
                        <table role="presentation" border="0" cellspacing="0" cellpadding="0" align="center">
                          <tr>
                            <td style="padding: 5px;">
                              <a href="tel:+447466436417" class="cta-button cta-call">
                                <img src="https://horizons-cdn.hostinger.com/90edfe98-bc38-4e5c-939e-3b2f88663c35/a3b118b63e265c71a396e959635f2991.png" alt="Phone icon" class="btn-icon">Call Us Now
                              </a>
                            </td>
                            <td style="padding: 5px;">
                               <a href="https://wa.me/447466436417" target="_blank" class="cta-button cta-whatsapp">
                                <img src="https://horizons-cdn.hostinger.com/90edfe98-bc38-4e5c-939e-3b2f88663c35/1f1146700c0175d2789f76a59664d994.png" alt="WhatsApp icon" class="btn-icon">Message on WhatsApp
                              </a>
                            </td>
                            <td style="padding: 5px;">
                              <a href="mailto:sales@laskontech.com" class="cta-button cta-email">
                                <img src="https://horizons-cdn.hostinger.com/90edfe98-bc38-4e5c-939e-3b2f88663c35/d5a57a12b4e54cd09623e8e19c362193.png" alt="Email icon" class="btn-icon">Email Us
                              </a>
                            </td>
                          </tr>
                        </table>
                        <!--<![endif]-->
                        
                        <!--[if mso]>
                        <table role="presentation" border="0" cellspacing="0" cellpadding="0" align="center">
                          <tr>
                            <td align="center" class="mso-cta-row">
                               <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="tel:+447466436417" style="height:46px;v-text-anchor:middle;width:170px;" arcsize="15%" strokecolor="#1e40af" fill="t">
                                <v:fill type="gradient" color="#2563eb" color2="#1e40af" angle="135" />
                                <w:anchorlock/>
                                <center style="color:#ffffff;font-family:'Segoe UI',Arial,sans-serif;font-size:14px;font-weight:bold;"><img src="https://horizons-cdn.hostinger.com/90edfe98-bc38-4e5c-939e-3b2f88663c35/a3b118b63e265c71a396e959635f2991.png" alt="" width="18" height="18" style="vertical-align: middle; margin-right: 8px;">Call Us Now</center>
                              </v:roundrect>
                            </td>
                          </tr>
                          <tr>
                            <td align="center" class="mso-cta-row">
                              <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://wa.me/447466436417" style="height:46px;v-text-anchor:middle;width:170px;" arcsize="15%" strokecolor="#128c7e" fill="t">
                                <v:fill type="gradient" color="#25d366" color2="#128c7e" angle="135" />
                                <w:anchorlock/>
                                <center style="color:#ffffff;font-family:'Segoe UI',Arial,sans-serif;font-size:14px;font-weight:bold;"><img src="https://horizons-cdn.hostinger.com/90edfe98-bc38-4e5c-939e-3b2f88663c35/1f1146700c0175d2789f76a59664d994.png" alt="" width="18" height="18" style="vertical-align: middle; margin-right: 8px;">Message on WhatsApp</center>
                              </v:roundrect>
                            </td>
                          </tr>
                          <tr>
                             <td align="center" class="mso-cta-row">
                              <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="mailto:sales@laskontech.com" style="height:46px;v-text-anchor:middle;width:170px;" arcsize="15%" strokecolor="#4c1d95" fill="t">
                                <v:fill type="gradient" color="#6d28d9" color2="#4c1d95" angle="135" />
                                <w:anchorlock/>
                                <center style="color:#ffffff;font-family:'Segoe UI',Arial,sans-serif;font-size:14px;font-weight:bold;"><img src="https://horizons-cdn.hostinger.com/90edfe98-bc38-4e5c-939e-3b2f88663c35/d5a57a12b4e54cd09623e8e19c362193.png" alt="" width="18" height="18" style="vertical-align: middle; margin-right: 8px;">Email Us</center>
                              </v:roundrect>
                            </td>
                          </tr>
                        </table>
                        <![endif]-->
                      </td>
                    </tr>
                  </table>
                </div>

                <!-- Badge -->
                <div class="badge-container">
                  <img src="https://horizons-cdn.hostinger.com/90edfe98-bc38-4e5c-939e-3b2f88663c35/ad48e8de2ee2124194e76f3e59cb485e.png" alt="TopDevelopers 2025 - Best Artificial Intelligence Companies" class="badge-image">
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Footer -->
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
    a.download = 'laskon-tech-email-template.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Success!",
      description: "Email template downloaded successfully",
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
      const response = await fetch('http://localhost:3001/api/send-email', {
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
        className="space-y-4 sm:space-y-6"
      >
        {/* Header */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-4 sm:p-6 border border-slate-200 dark:border-slate-700 transition-colors">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="w-full md:w-auto">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">Laskon Tech Email Template</h1>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">Professional HTML email for dental practice growth</p>
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
                className="gap-2 bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white flex-1 sm:flex-initial"
              >
                <Download className="w-4 h-4" />
                <span className="hidden xs:inline">Download</span>
              </Button>
            </div>
          </div>

          {/* Email Sending Form */}
          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 mb-4">
              <Mail className="w-5 h-5 text-blue-700 dark:text-blue-400" />
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
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 outline-none transition-colors"
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
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 outline-none transition-colors"
                />
              </div>
              <Button
                onClick={sendEmail}
                disabled={isSending || !recipientEmail}
                className="w-full bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white gap-2"
              >
                <Send className="w-4 h-4" />
                {isSending ? 'Sending...' : 'Send Email'}
              </Button>
            </div>
          </div>
        </div>

        {/* Preview */}
        {showPreview && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-4 sm:p-6 border border-slate-200 dark:border-slate-700 transition-colors"
          >
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Email Preview</h2>
            <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
              <iframe
                srcDoc={emailHTML}
                title="Email Preview"
                className="w-full h-[2300px] min-h-[600px]"
                style={{ border: 'none' }}
              />
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default EmailTemplate;