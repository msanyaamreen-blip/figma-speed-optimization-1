const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Consultation form endpoint
app.post('/api/send-consultation', async (req, res) => {
  try {
    const { name, phone, company, email, service } = req.body;

    // Validate required fields
    if (!name || !phone || !email || !service) {
      return res.status(400).json({
        error: 'Missing required fields'
      });
    }

    // Get the Resend API key from environment variables
    const apiKey = process.env.RESEND_API_KEY;
    
    if (!apiKey) {
      console.error('⚠️ Resend API key not configured');
      return res.status(500).json({
        error: 'Email service not configured'
      });
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Amphitrite Technologies <onboarding@resend.dev>',
      to: ['sanyaamreen.4813@gmail.com'],
      subject: `New Consultation Request from ${name}`,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Service Requested:</strong> ${service}</p>
        <hr />
        <p><em>This request was submitted from the Amphitrite Technologies website consultation form.</em></p>
      `
    });

    if (error) {
      console.error('Resend API Error:', error);
      return res.status(500).json({
        error: 'Failed to send email',
        details: error.message
      });
    }

    console.log('✅ Email sent successfully via Resend:', data);

    return res.json({
      success: true,
      message: 'Consultation request sent successfully! We will contact you soon.'
    });
  } catch (error) {
    console.error('Error processing consultation request:', error);
    return res.status(500).json({
      error: 'Failed to process request'
    });
  }
});

// Newsletter subscription endpoint
app.post('/api/newsletter-subscription', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        error: 'Email is required'
      });
    }

    const apiKey = process.env.RESEND_API_KEY;
    
    if (!apiKey) {
      console.error('⚠️ Resend API key not configured');
      return res.status(500).json({
        error: 'Email service not configured'
      });
    }

    // Send confirmation email
    const { data, error } = await resend.emails.send({
      from: 'Amphitrite Technologies <onboarding@resend.dev>',
      to: [email],
      subject: 'Welcome to Amphitrite Technologies Newsletter',
      html: `
        <h2>Thank You for Subscribing!</h2>
        <p>You've successfully subscribed to the Amphitrite Technologies newsletter.</p>
        <p>Stay tuned for updates on water treatment solutions, industry insights, and company news.</p>
        <hr />
        <p><em>Amphitrite Technologies - Clean Water, Sustainable Future</em></p>
      `
    });

    if (error) {
      console.error('Resend API Error:', error);
      return res.status(500).json({
        error: 'Failed to subscribe',
        details: error.message
      });
    }

    console.log('✅ Newsletter subscription confirmed:', data);

    return res.json({
      success: true,
      message: 'Successfully subscribed to newsletter!'
    });
  } catch (error) {
    console.error('Error processing newsletter subscription:', error);
    return res.status(500).json({
      error: 'Failed to process subscription'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📧 Email service: ${process.env.RESEND_API_KEY ? 'Configured' : 'Not configured'}`);
});
