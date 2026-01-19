import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Download, Eye, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { API_BASE_URL } from '@/config/api';

const DentalEmailTemplate = () => {
  const { toast } = useToast();
  const [showPreview, setShowPreview] = useState(true);
  const [recipientEmail, setRecipientEmail] = useState('');
  const [emailSubject, setEmailSubject] = useState('Emergency & Private Dental Services - Bolton Road Dental Practice');
  const [isSending, setIsSending] = useState(false);

  const emailHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Emergency & Private Dental Services - Bolton Road Dental Practice</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">
  <style type="text/css">
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { margin: 0; padding: 0; font-family: 'Inter', Arial, sans-serif; background-color: #f5f1e8; -webkit-font-smoothing: antialiased; }
    .wrapper { width: 100%; background-color: #f5f1e8; }
    .container { max-width: 680px; margin: 0 auto; background: #ffffff; }
    h1, h2, h3 { font-family: 'Playfair Display', serif; }
    .header { background: linear-gradient(135deg, #1a1a2e 0%, #0f0f1e 100%); padding: 40px 20px; text-align: center; color: white; }
    .hero { background: linear-gradient(135deg, #1a1a2e 0%, #0f0f1e 100%); padding: 50px 30px; text-align: center; color: white; }
    .hero h1 { font-size: 42px; font-weight: 700; margin-bottom: 20px; }
    .hero .gold { color: #d4af37; }
    .hero p { font-size: 18px; color: #e8e6e1; margin-top: 15px; }
    .content { padding: 40px 30px; }
    .section { margin-bottom: 40px; }
    .section h2 { font-size: 32px; color: #1a1a2e; margin-bottom: 20px; text-align: center; }
    .emergency-badge { background: linear-gradient(135deg, #e11d48 0%, #be123c 100%); color: white; padding: 20px; border-radius: 12px; text-align: center; margin: 30px 0; }
    .emergency-badge h3 { font-size: 28px; margin-bottom: 10px; }
    .emergency-badge p { font-size: 18px; font-weight: 600; letter-spacing: 2px; }
    .service-grid { margin: 30px 0; }
    .service-item { background: linear-gradient(135deg, #fff5f5 0%, #ffffff 100%); border: 2px solid #ffe5e5; border-radius: 16px; padding: 25px; margin-bottom: 20px; }
    .service-item h3 { font-size: 22px; color: #c92a2a; margin-bottom: 12px; }
    .service-item p { font-size: 16px; color: #475569; line-height: 1.6; }
    .cta-button { display: inline-block; background: linear-gradient(135deg, #d4af37 0%, #c9a22e 100%); color: #1a1a2e; padding: 18px 40px; text-decoration: none; border-radius: 50px; font-weight: 700; font-size: 18px; margin: 10px; box-shadow: 0 4px 15px rgba(212,175,55,0.3); }
    .cta-button:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(212,175,55,0.4); }
    .footer { background: #1a1a2e; color: #e8e6e1; padding: 40px 30px; text-align: center; }
    .footer h3 { color: #d4af37; font-size: 24px; margin-bottom: 20px; }
    .footer p { font-size: 14px; line-height: 1.8; margin-bottom: 10px; }
    .footer a { color: #d4af37; text-decoration: none; }
    @media screen and (max-width: 600px) {
      .hero h1 { font-size: 32px !important; }
      .section h2 { font-size: 26px !important; }
      .content { padding: 30px 20px; }
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <table class="container" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td class="header">
          <h1 style="color: #d4af37; font-size: 32px; margin: 0;">Bolton Road Dental</h1>
          <p style="color: #e8e6e1; font-size: 14px; margin-top: 10px;">Excellence in Dentistry</p>
        </td>
      </tr>
      <tr>
        <td class="hero">
          <h1>Emergency & Private<br/><span class="gold">Dental Care</span></h1>
          <p>Same-day appointments available. We prioritize your comfort and pain relief above all else.</p>
        </td>
      </tr>
      <tr>
        <td class="content">
          
          <div class="emergency-badge">
            <h3>🚨 24/7 Emergency Line</h3>
            <p>07375064619</p>
            <p style="font-size: 14px; margin-top: 10px;">High priority line active - Don't suffer in silence</p>
          </div>

          <div class="section">
            <h2>Comprehensive Emergency Services</h2>
            
            <div class="service-grid">
              <div class="service-item">
                <h3>⚡ Severe Toothache Relief</h3>
                <p>Rapid relief for intense, throbbing pain. We diagnose the root cause and provide immediate comfort.</p>
              </div>
              
              <div class="service-item">
                <h3>🦷 Surgical Extractions</h3>
                <p>Safe removal of damaged teeth. Expert care to minimize discomfort and promote quick healing.</p>
              </div>
              
              <div class="service-item">
                <h3>🔧 Broken or Chipped Tooth Repair</h3>
                <p>Cosmetic and structural repair using high-strength bonding to restore your smile instantly.</p>
              </div>
              
              <div class="service-item">
                <h3>🔬 Root Canal Treatment</h3>
                <p>Advanced therapy to save infected teeth while relieving pain and preserving your natural bite.</p>
              </div>
              
              <div class="service-item">
                <h3>💊 Dental Abscess & Trauma</h3>
                <p>Immediate intervention for severe infections and facial swelling with antibiotics to prevent spread.</p>
              </div>
            </div>
          </div>

          <div class="section" style="background: #f5f1e8; padding: 30px; border-radius: 16px; text-align: center;">
            <h2 style="margin-bottom: 30px;">Why Choose Us?</h2>
            <p style="font-size: 16px; color: #475569; line-height: 1.8; margin-bottom: 20px;">
              ✓ No registration required<br/>
              ✓ Same-day guaranteed appointments<br/>
              ✓ Transparent fixed pricing<br/>
              ✓ Nervous patients welcome<br/>
              ✓ 0% Finance available<br/>
              ✓ Full diagnostic x-rays included
            </p>
          </div>

          <div style="text-align: center; margin: 40px 0;">
            <h2 style="margin-bottom: 20px;">Exclusive Holiday Offer</h2>
            <div style="background: linear-gradient(135deg, #1a1a2e 0%, #0f0f1e 100%); color: white; padding: 30px; border-radius: 16px; display: inline-block; margin-bottom: 20px;">
              <p style="font-size: 14px; color: #d4af37; margin-bottom: 10px;">PROMO CODE</p>
              <p style="font-size: 32px; font-weight: 700; letter-spacing: 3px; margin: 0;">XMAS25</p>
              <p style="font-size: 14px; color: #e8e6e1; margin-top: 10px;">25% OFF Private Treatments</p>
            </div>
            <br/>
            <a href="tel:07375064619" class="cta-button">📞 Call Now</a>
            <a href="mailto:info@boltonroaddentalpractice.co.uk" class="cta-button">✉️ Email Us</a>
          </div>

        </td>
      </tr>
      <tr>
        <td class="footer">
          <h3>Bolton Road Dental Practice</h3>
          <p><strong>Emergency Line:</strong> 07375064619</p>
          <p><strong>Email:</strong> <a href="mailto:info@boltonroaddentalpractice.co.uk">info@boltonroaddentalpractice.co.uk</a></p>
          <p style="margin-top: 30px; font-size: 12px; color: #94a3b8;">
            © 2025 Bolton Road Dental Practice. Setting the standard for private and emergency dental care.
          </p>
        </td>
      </tr>
    </table>
  </div>
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
    a.download = 'bolton-road-dental-email.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Success!",
      description: "Dental email template downloaded.",
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
        
        if (data.code === 'EAUTH' || data.details?.includes('Authentication')) {
          errorMessage = "Email authentication failed. Please verify your email credentials in .env file.";
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
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-1">Bolton Road Dental Email Template</h1>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">Premium dental practice email template for emergency and private dental services.</p>
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
                title="Dental Email Preview"
                className="w-full"
                style={{ border: 'none', height: '2400px', minHeight: '600px' }}
              />
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default DentalEmailTemplate;
