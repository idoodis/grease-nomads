import nodemailer from 'nodemailer';

function createTransporter() {
  if (!process.env.SMTP_PASS) {
    throw new Error('SMTP_PASS environment variable is not set');
  }
  
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER || 'z@greasenomads.com',
      pass: process.env.SMTP_PASS,
    },
  });
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service?: string;
  city?: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    console.log('Creating email transporter...');
    console.log('Environment check:', {
      SMTP_HOST: process.env.SMTP_HOST || 'smtp.gmail.com',
      SMTP_PORT: process.env.SMTP_PORT || '587',
      SMTP_USER: process.env.SMTP_USER || 'z@greasenomads.com',
      hasPassword: !!process.env.SMTP_PASS,
      passwordLength: process.env.SMTP_PASS?.length || 0
    });
    
    const transporter = createTransporter();
    console.log('Transporter created successfully');
    
    // Test the connection
    console.log('Testing SMTP connection...');
    await transporter.verify();
    console.log('SMTP connection verified successfully');
    
    const mailOptions = {
      from: `"Grease Nomads" <z@greasenomads.com>`,
      to: 'z@greasenomads.com',
      replyTo: data.email,
      subject: `New Inquiry from ${data.name} - ${data.service || 'General Service'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1e293b 0%, #f97316 100%); color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">New Customer Inquiry</h1>
            <p style="margin: 8px 0 0 0; opacity: 0.9;">Grease Nomads - ASE Certified Mobile Mechanics</p>
          </div>
          
          <div style="padding: 30px; background: #f8fafc;">
            <h2 style="color: #1e293b; margin-top: 0;">Contact Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 120px;">Name:</td>
                <td style="padding: 8px 0; color: #6b7280;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
                <td style="padding: 8px 0; color: #6b7280;"><a href="mailto:${data.email}" style="color: #f97316;">${data.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td>
                <td style="padding: 8px 0; color: #6b7280;"><a href="tel:${data.phone}" style="color: #f97316;">${data.phone}</a></td>
              </tr>
              ${data.service ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Service:</td>
                <td style="padding: 8px 0; color: #6b7280;">${data.service}</td>
              </tr>
              ` : ''}
              ${data.city ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">City:</td>
                <td style="padding: 8px 0; color: #6b7280;">${data.city}</td>
              </tr>
              ` : ''}
            </table>
            
            <h3 style="color: #1e293b; margin-top: 30px;">Message</h3>
            <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #f97316;">
              <p style="margin: 0; line-height: 1.6; color: #374151;">${data.message.replace(/\n/g, '<br>')}</p>
            </div>
            
            <div style="margin-top: 30px; padding: 20px; background: #1e293b; color: white; border-radius: 8px; text-align: center;">
              <p style="margin: 0; font-size: 14px;">
                <strong>Action Required:</strong> Please respond to this inquiry within 24 hours.
              </p>
            </div>
          </div>
          
          <div style="background: #1e293b; color: white; padding: 20px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">This email was sent from the Grease Nomads website contact form.</p>
            <p style="margin: 8px 0 0 0;">© 2024 Grease Nomads. All rights reserved.</p>
          </div>
        </div>
      `,
      text: `
New Customer Inquiry - Grease Nomads

Contact Information:
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
${data.service ? `Service: ${data.service}` : ''}
${data.city ? `City: ${data.city}` : ''}

Message:
${data.message}

Please respond to this inquiry within 24 hours.

This email was sent from the Grease Nomads website contact form.
      `,
    };

    console.log('Sending email to:', mailOptions.to);
    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('Email sending failed:', error);
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    });
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function sendConfirmationEmail(data: ContactFormData) {
  try {
    console.log('Creating confirmation email transporter...');
    const transporter = createTransporter();
    
    // Test the connection
    console.log('Testing SMTP connection for confirmation email...');
    await transporter.verify();
    console.log('SMTP connection verified for confirmation email');
    const mailOptions = {
      from: `"Grease Nomads" <z@greasenomads.com>`,
      to: data.email,
      subject: 'Thank you for contacting Grease Nomads!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1e293b 0%, #f97316 100%); color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">Thank You, ${data.name}!</h1>
            <p style="margin: 8px 0 0 0; opacity: 0.9;">We've received your inquiry</p>
          </div>
          
          <div style="padding: 30px; background: #f8fafc;">
            <p style="color: #374151; font-size: 16px; line-height: 1.6;">
              Thank you for reaching out to Grease Nomads! We've received your inquiry and will get back to you within 24 hours.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e293b; margin-top: 0;">Your Inquiry Details</h3>
              <p><strong>Service:</strong> ${data.service || 'General Service'}</p>
              <p><strong>Message:</strong> ${data.message}</p>
            </div>
            
            <div style="background: #f97316; color: white; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
              <h3 style="margin-top: 0;">Need Immediate Assistance?</h3>
              <p style="margin: 8px 0;">Call us at <a href="tel:+12246527264" style="color: white; text-decoration: none; font-weight: bold;">224-652-7264</a></p>
              <p style="margin: 0; font-size: 14px;">Available 7 days a week</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <p style="color: #6b7280; font-size: 14px;">
                Best regards,<br>
                <strong>The Grease Nomads Team</strong><br>
                ASE Certified Mobile Mechanics
              </p>
            </div>
          </div>
          
          <div style="background: #1e293b; color: white; padding: 20px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">© 2024 Grease Nomads. All rights reserved.</p>
            <p style="margin: 8px 0 0 0;">Professional mobile mechanic services in Chicago</p>
          </div>
        </div>
      `,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Confirmation email sent successfully:', result.messageId);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('Confirmation email sending failed:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}
