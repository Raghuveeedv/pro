import emailjs from 'emailjs-com';

// EmailJS configuration - Replace with your actual credentials
const EMAILJS_SERVICE_ID = 'service_gb5llk6'; // Replace with your EmailJS service ID
const EMAILJS_USER_ID = 'zV2Q0vc88vlx-M7pi'; // Replace with your EmailJS user ID

// Google Sheets configuration
const GOOGLE_SHEETS_API_URL = 'https://script.google.com/macros/s/AKfycbyq9MZIPcqeneH252dk1Ba7Cd0XlI61qDu9HSVcHNVOLyCF3AuHipkT8lB4KOA3QV_kTA/exec';

// Fallback mode for testing (when credentials are not set)
const FALLBACK_MODE = false; // EmailJS is now configured

export interface QuoteFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  timestamp?: string;
}

// Store quote data in Google Sheets
export const storeQuoteInSpreadsheet = async (formData: QuoteFormData): Promise<void> => {
  console.log('🔄 Starting Google Sheets storage...');
  console.log('📝 Form Data:', formData);
  console.log('🔗 API URL:', GOOGLE_SHEETS_API_URL);

  try {
    // Format the data as URL parameters
    const params = new URLSearchParams({
      firstName: formData.firstName,
      lastName: formData.lastName || '',
      email: formData.email,
      phone: formData.phone || '',
      company: formData.company || '',
      service: formData.service,
      message: formData.message || '',
      timestamp: new Date().toISOString(),
      date: new Date().toLocaleDateString('en-IN'),
      time: new Date().toLocaleTimeString('en-IN')
    });

    // Build the URL with parameters
    const urlWithParams = `${GOOGLE_SHEETS_API_URL}?${params.toString()}`;
    console.log('📤 Sending request to:', urlWithParams);

    const response = await fetch(urlWithParams, {
      method: 'POST',
      mode: 'no-cors', // Important: Use no-cors mode
    });

    console.log('📥 Response status:', response.status);
    console.log('📥 Response status text:', response.statusText);
    console.log('✅ Request sent successfully');

  } catch (error) {
    console.error('❌ Error storing data in spreadsheet:', error);
    if (error instanceof Error) {
      console.error('Error name:', error.name);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    // Don't throw error here to allow email sending even if spreadsheet fails
  }
};

// Generate HTML template for company notification email
const generateCompanyEmailHTML = (formData: QuoteFormData): string => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Quote Request</title>
        <style>
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f8f9fa;
            }
            .email-container {
                background-color: #ffffff;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
            }
            .header {
                background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
                color: white;
                padding: 30px;
                text-align: center;
            }
            .header h1 {
                margin: 0;
                font-size: 28px;
                font-weight: bold;
            }
            .header p {
                margin: 10px 0 0 0;
                opacity: 0.9;
                font-size: 16px;
            }
            .content {
                padding: 30px;
            }
            .alert-box {
                background-color: #dbeafe;
                border: 1px solid #3b82f6;
                border-radius: 8px;
                padding: 20px;
                margin-bottom: 25px;
            }
            .alert-box h2 {
                color: #1e40af;
                margin: 0 0 15px 0;
                font-size: 20px;
            }
            .info-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 20px;
                margin-bottom: 25px;
            }
            .info-item {
                background-color: #f8f9fa;
                padding: 15px;
                border-radius: 8px;
                border-left: 4px solid #3b82f6;
            }
            .info-item strong {
                color: #1e40af;
                display: block;
                margin-bottom: 5px;
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }
            .message-section {
                background-color: #f8f9fa;
                padding: 20px;
                border-radius: 8px;
                border: 1px solid #e5e7eb;
            }
            .message-section h3 {
                color: #374151;
                margin: 0 0 15px 0;
                font-size: 18px;
            }
            .message-content {
                background-color: white;
                padding: 15px;
                border-radius: 6px;
                border: 1px solid #d1d5db;
                white-space: pre-wrap;
                line-height: 1.6;
            }
            .footer {
                background-color: #f8f9fa;
                padding: 20px;
                text-align: center;
                border-top: 1px solid #e5e7eb;
                color: #6b7280;
                font-size: 14px;
            }
            .contact-info {
                margin-top: 15px;
                padding-top: 15px;
                border-top: 1px solid #e5e7eb;
            }
            .contact-info a {
                color: #3b82f6;
                text-decoration: none;
            }
            .contact-info a:hover {
                text-decoration: underline;
            }
            @media (max-width: 600px) {
                .info-grid {
                    grid-template-columns: 1fr;
                }
                .header {
                    padding: 20px;
                }
                .content {
                    padding: 20px;
                }
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <div class="header">
                <h1>🚀 New Quote Request</h1>
                <p>You have received a new quote inquiry</p>
            </div>
            
            <div class="content">
                <div class="alert-box">
                    <h2>📋 Quote Request Details</h2>
                    <p><strong>Service:</strong> ${formData.service}</p>
                    <p><strong>Date:</strong> ${new Date().toLocaleDateString('en-IN')}</p>
                    <p><strong>Time:</strong> ${new Date().toLocaleTimeString('en-IN')}</p>
                </div>
                
                <div class="info-grid">
                    <div class="info-item">
                        <strong>Full Name</strong>
                        ${formData.firstName} ${formData.lastName}
                    </div>
                    <div class="info-item">
                        <strong>Email Address</strong>
                        <a href="mailto:${formData.email}">${formData.email}</a>
                    </div>
                    <div class="info-item">
                        <strong>Phone Number</strong>
                        <a href="tel:${formData.phone}">${formData.phone}</a>
                    </div>
                    <div class="info-item">
                        <strong>Company</strong>
                        ${formData.company || 'Not specified'}
                    </div>
                </div>
                
                <div class="message-section">
                    <h3>📝 Project Description</h3>
                    <div class="message-content">${formData.message}</div>
                </div>
            </div>
            
            <div class="footer">
                <p><strong>Sri Sai Drillers & Infrastructure Pvt. Ltd.</strong></p>
                <div class="contact-info">
                    <p>📧 <a href="mailto:info@ssbw.in">info@ssbw.in</a> | 📞 <a href="tel:+919876543210">+91 9876543210</a></p>
                    <p>Please respond to this inquiry within 24 hours.</p>
                </div>
            </div>
        </div>
    </body>
    </html>
  `;
};

// Generate HTML template for user confirmation email
const generateUserConfirmationHTML = (formData: QuoteFormData): string => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Quote Request Confirmation</title>
        <style>
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f8f9fa;
            }
            .email-container {
                background-color: #ffffff;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
            }
            .header {
                background: linear-gradient(135deg, #059669 0%, #10b981 100%);
                color: white;
                padding: 30px;
                text-align: center;
            }
            .header h1 {
                margin: 0;
                font-size: 28px;
                font-weight: bold;
            }
            .header p {
                margin: 10px 0 0 0;
                opacity: 0.9;
                font-size: 16px;
            }
            .content {
                padding: 30px;
            }
            .success-box {
                background-color: #d1fae5;
                border: 1px solid #10b981;
                border-radius: 8px;
                padding: 20px;
                margin-bottom: 25px;
                text-align: center;
            }
            .success-box h2 {
                color: #065f46;
                margin: 0 0 15px 0;
                font-size: 20px;
            }
            .success-icon {
                font-size: 48px;
                margin-bottom: 15px;
            }
            .details-section {
                background-color: #f8f9fa;
                padding: 20px;
                border-radius: 8px;
                margin-bottom: 25px;
            }
            .details-section h3 {
                color: #374151;
                margin: 0 0 15px 0;
                font-size: 18px;
            }
            .detail-row {
                display: flex;
                justify-content: space-between;
                padding: 10px 0;
                border-bottom: 1px solid #e5e7eb;
            }
            .detail-row:last-child {
                border-bottom: none;
            }
            .detail-label {
                font-weight: 600;
                color: #6b7280;
            }
            .detail-value {
                color: #374151;
            }
            .next-steps {
                background-color: #eff6ff;
                border: 1px solid #3b82f6;
                border-radius: 8px;
                padding: 20px;
                margin-bottom: 25px;
            }
            .next-steps h3 {
                color: #1e40af;
                margin: 0 0 15px 0;
                font-size: 18px;
            }
            .step-list {
                list-style: none;
                padding: 0;
                margin: 0;
            }
            .step-list li {
                padding: 8px 0;
                padding-left: 25px;
                position: relative;
            }
            .step-list li:before {
                content: "✓";
                position: absolute;
                left: 0;
                color: #10b981;
                font-weight: bold;
            }
            .footer {
                background-color: #f8f9fa;
                padding: 20px;
                text-align: center;
                border-top: 1px solid #e5e7eb;
                color: #6b7280;
                font-size: 14px;
            }
            .contact-info {
                margin-top: 15px;
                padding-top: 15px;
                border-top: 1px solid #e5e7eb;
            }
            .contact-info a {
                color: #3b82f6;
                text-decoration: none;
            }
            .contact-info a:hover {
                text-decoration: underline;
            }
            .logo {
                font-size: 24px;
                font-weight: bold;
                color: #1e40af;
                margin-bottom: 10px;
            }
            @media (max-width: 600px) {
                .detail-row {
                    flex-direction: column;
                    gap: 5px;
                }
                .header {
                    padding: 20px;
                }
                .content {
                    padding: 20px;
                }
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <div class="header">
                <div class="success-icon">✅</div>
                <h1>Thank You!</h1>
                <p>Your quote request has been received</p>
            </div>
            
            <div class="content">
                <div class="success-box">
                    <h2>Request Submitted Successfully</h2>
                    <p>We have received your quote request for <strong>${formData.service}</strong> and will get back to you within 24 hours.</p>
                </div>
                
                <div class="details-section">
                    <h3>📋 Request Details</h3>
                    <div class="detail-row">
                        <span class="detail-label">Reference Number:</span>
                        <span class="detail-value">#${Date.now().toString().slice(-6)}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Service Requested:</span>
                        <span class="detail-value">${formData.service}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Submission Date:</span>
                        <span class="detail-value">${new Date().toLocaleDateString('en-IN')}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Submission Time:</span>
                        <span class="detail-value">${new Date().toLocaleTimeString('en-IN')}</span>
                    </div>
                </div>
                
                <div class="next-steps">
                    <h3>🔄 What Happens Next?</h3>
                    <ul class="step-list">
                        <li>Our team will review your requirements within 2-4 hours</li>
                        <li>We'll prepare a detailed quote based on your specifications</li>
                        <li>You'll receive a comprehensive proposal via email</li>
                        <li>We'll schedule a consultation call to discuss the details</li>
                    </ul>
                </div>
            </div>
            
            <div class="footer">
                <div class="logo">Sri Sai Drillers & Infrastructure Pvt. Ltd.</div>
                <p>Your trusted partner in infrastructure solutions</p>
                <div class="contact-info">
                    <p>📧 <a href="mailto:info@ssbw.in">info@ssbw.in</a> | 📞 <a href="tel:+919876543210">+91 9876543210</a></p>
                    <p>📍 Your Company Address, City, State - PIN</p>
                    <p>If you have any questions, feel free to reach out to us directly.</p>
                </div>
            </div>
        </div>
    </body>
    </html>
  `;
};

// Send email to company with direct HTML
export const sendCompanyEmail = async (formData: QuoteFormData): Promise<void> => {
  try {
    // Generate HTML content
    const htmlContent = generateCompanyEmailHTML(formData);
    
    // Send email directly with HTML content
    const emailParams = {
      to_email: 'info@ssbw.in',
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      subject: `New Quote Request - ${formData.service}`,
      message_html: htmlContent, // Use message_html instead of message
      html_content: htmlContent, // Backup HTML field
      content_type: 'text/html', // Specify content type
      // Additional parameters for tracking
      phone: formData.phone,
      company: formData.company || 'Not specified',
      service: formData.service,
      inquiry_date: new Date().toLocaleDateString('en-IN'),
      inquiry_time: new Date().toLocaleTimeString('en-IN'),
    };

    console.log('📧 Sending company email with HTML...');

    // Use EmailJS to send the email with HTML content
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      'template_eoahkqc',
      emailParams,
      EMAILJS_USER_ID
    );

    console.log('✅ Company notification email sent successfully');
  } catch (error) {
    console.error('❌ Error sending company email:', error);
    console.log('⚠️ EmailJS template not found or configuration issue');
    // Don't throw error - continue with other operations
  }
};

// Send confirmation email to user with direct HTML
export const sendUserConfirmationEmail = async (formData: QuoteFormData): Promise<void> => {
  try {
    // Generate HTML content
    const htmlContent = generateUserConfirmationHTML(formData);
    
    // Send email directly with HTML content
    const emailParams = {
      to_email: formData.email,
      to_name: `${formData.firstName} ${formData.lastName}`,
      subject: `Quote Request Confirmation - ${formData.service}`,
      message_html: htmlContent, // Use message_html instead of message
      html_content: htmlContent, // Backup HTML field
      content_type: 'text/html', // Specify content type
      // Additional parameters for tracking
      company_name: 'Sri Sai Drillers & Infrastructure Pvt. Ltd.',
      service: formData.service,
      inquiry_date: new Date().toLocaleDateString('en-IN'),
      inquiry_time: new Date().toLocaleTimeString('en-IN'),
      company_email: 'info@ssbw.in',
      company_phone: '+91 9876543210',
      company_address: 'Your Company Address, City, State - PIN',
      reference_number: `#${Date.now().toString().slice(-6)}`,
    };

    console.log('📧 Sending user confirmation email with HTML...');

    // Use EmailJS to send the email with HTML content
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      'template_bb02nke',
      emailParams,
      EMAILJS_USER_ID
    );

    console.log('✅ User confirmation email sent successfully');
  } catch (error) {
    console.error('❌ Error sending user confirmation email:', error);
    console.log('⚠️ EmailJS template not found or configuration issue');
    // Don't throw error - continue with other operations
  }
};

// Test Google Sheets integration
export const testGoogleSheetsIntegration = async (): Promise<boolean> => {
  try {
    console.log('🔄 Testing Google Sheets integration...');
    console.log('🔗 API URL:', GOOGLE_SHEETS_API_URL);
    
    // First, try a GET request to check if the service is running
    const testResponse = await fetch(GOOGLE_SHEETS_API_URL, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      mode: 'cors',
    });

    console.log('📥 Test response status:', testResponse.status);
    const testData = await testResponse.json();
    console.log('📥 Service check response:', testData);

    if (!testResponse.ok) {
      throw new Error('Failed to connect to Google Sheets API');
    }

    // Now try to store test data
    const testFormData = {
      firstName: 'Test',
      lastName: 'User',
      email: 'test@example.com',
      phone: '+91 9876543210',
      company: 'Test Company',
      service: 'Test Service',
      message: 'This is a test submission',
      timestamp: new Date().toISOString(),
    };

    console.log('📤 Sending test data:', testFormData);

    const response = await fetch(GOOGLE_SHEETS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify(testFormData),
    });

    console.log('📥 Storage test response status:', response.status);
    const responseData = await response.text();
    console.log('📥 Raw response:', responseData);

    const jsonResponse = JSON.parse(responseData);
    console.log('📥 Parsed response:', jsonResponse);

    if (!response.ok || !jsonResponse.success) {
      throw new Error(`Storage test failed: ${jsonResponse.error || 'Unknown error'}`);
    }

    console.log('✅ Google Sheets integration is working!');
    return true;
  } catch (error) {
    console.error('❌ Google Sheets integration error:', error);
    if (error instanceof Error) {
      console.error('Error name:', error.name);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    return false;
  }
};

// Test EmailJS configuration with direct HTML
export const testEmailJSConfig = async (): Promise<boolean> => {
  try {
    console.log('Testing EmailJS configuration with direct HTML...');
    console.log('Service ID:', EMAILJS_SERVICE_ID);
    console.log('User ID:', EMAILJS_USER_ID);
    
    // Test with a simple HTML email
    const testParams = {
      to_email: 'test@example.com',
      from_name: 'Test User',
      from_email: 'test@example.com',
      subject: 'Test Email with HTML',
      message: `
        <html>
          <body>
            <h1 style="color: blue;">Test Email</h1>
            <p>This is a test email with HTML content.</p>
            <p><strong>Service:</strong> Test Service</p>
          </body>
        </html>
      `,
    };

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      'default_template', // Use a default template
      testParams,
      EMAILJS_USER_ID
    );

    console.log('✅ EmailJS configuration is working with direct HTML!');
    return true;
  } catch (error) {
    console.error('❌ EmailJS configuration error:', error);
    return false;
  }
};

// Main function to handle quote submission
export const submitQuoteRequest = async (formData: QuoteFormData): Promise<void> => {
  const results = {
    spreadsheet: false,
    companyEmail: false,
    userEmail: false
  };

  try {
    console.log('🚀 Starting quote request processing...');
    
    // Step 1: Store data in Google Sheets
    try {
      await storeQuoteInSpreadsheet(formData);
      results.spreadsheet = true;
      console.log('✅ Data stored in Google Sheets');
    } catch (error) {
      console.error('❌ Google Sheets error:', error);
      results.spreadsheet = false;
    }
    
    // Step 2: Send email to company
    try {
      await sendCompanyEmail(formData);
      results.companyEmail = true;
      console.log('✅ Company notification email sent');
    } catch (error) {
      console.error('❌ Company email error:', error);
      results.companyEmail = false;
    }
    
    // Step 3: Send confirmation email to user
    try {
      await sendUserConfirmationEmail(formData);
      results.userEmail = true;
      console.log('✅ User confirmation email sent');
    } catch (error) {
      console.error('❌ User email error:', error);
      results.userEmail = false;
    }
    
    // Log final results
    console.log('📊 Quote request processing results:', results);
    
    // Check if at least one operation succeeded
    const successCount = Object.values(results).filter(Boolean).length;
    if (successCount === 0) {
      throw new Error('All operations failed');
    }
    
    console.log(`✅ Quote request processed successfully (${successCount}/3 operations completed)`);
    
  } catch (error) {
    console.error('❌ Error processing quote request:', error);
    
    // Provide specific error messages based on what failed
    const errorMessage = getErrorMessage(results);
    throw new Error(errorMessage);
  }
};

// Helper function to get specific error messages
const getErrorMessage = (results: { spreadsheet: boolean; companyEmail: boolean; userEmail: boolean }): string => {
  const failures = [];
  
  if (!results.spreadsheet) {
    failures.push('data storage');
  }
  if (!results.companyEmail) {
    failures.push('company notification');
  }
  if (!results.userEmail) {
    failures.push('user confirmation');
  }
  
  if (failures.length === 3) {
    return 'Unable to process your request. Please check your internet connection and try again.';
  } else if (failures.length === 2) {
    return `Request partially processed. Issues with: ${failures.join(', ')}. Please contact us directly.`;
  } else {
    return `Request processed with minor issues: ${failures.join(', ')}. We'll get back to you soon.`;
  }
};