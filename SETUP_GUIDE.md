# Quote System Setup Guide

This guide will help you set up the complete quote system with HTML email templates and Google Sheets integration.

## Prerequisites

- EmailJS account (free tier available)
- Google account for Google Sheets
- Your company email address

## Step 1: EmailJS Setup

### 1.1 Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 1.2 Add Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID**

### 1.3 Create Email Templates

#### Company Notification Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Name it: `company_notification_template`
4. Set the HTML content to use the template variables:
   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <title>New Quote Request</title>
   </head>
   <body>
       <h1>New Quote Request</h1>
       <p><strong>From:</strong> {{from_name}} ({{from_email}})</p>
       <p><strong>Phone:</strong> {{phone}}</p>
       <p><strong>Company:</strong> {{company}}</p>
       <p><strong>Service:</strong> {{service}}</p>
       <p><strong>Message:</strong></p>
       <p>{{message}}</p>
       <p><strong>Date:</strong> {{inquiry_date}}</p>
       <p><strong>Time:</strong> {{inquiry_time}}</p>
   </body>
   </html>
   ```
5. Set "To Email" to your company email (e.g., `info@ssbw.in`)
6. Set "Subject" to: `New Quote Request - {{service}}`
7. Save the template

#### User Confirmation Template
1. Create another template named: `user_confirmation_template`
2. Set the HTML content:
   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <title>Quote Request Confirmation</title>
   </head>
   <body>
       <h1>Thank You!</h1>
       <p>Dear {{to_name}},</p>
       <p>We have received your quote request for <strong>{{service}}</strong>.</p>
       <p>Our team will review your requirements and get back to you within 24 hours.</p>
       <p><strong>Reference Number:</strong> {{reference_number}}</p>
       <p><strong>Submission Date:</strong> {{inquiry_date}}</p>
       <p><strong>Submission Time:</strong> {{inquiry_time}}</p>
       <p>If you have any questions, please contact us:</p>
       <p>Email: {{company_email}}</p>
       <p>Phone: {{company_phone}}</p>
       <p>Best regards,<br>{{company_name}}</p>
   </body>
   </html>
   ```
3. Set "To Email" to: `{{to_email}}`
4. Set "Subject" to: `Quote Request Confirmation - {{service}}`
5. Save the template

### 1.4 Get Your Credentials
1. Go to "Account" → "API Keys"
2. Note down your **User ID**
3. Note down your **Service ID** (from step 1.2)

## Step 2: Google Sheets Setup

### 2.1 Create Google Spreadsheet
1. Go to [Google Sheets](https://sheets.google.com/)
2. Create a new spreadsheet
3. Name it "Quote Requests"
4. Copy the spreadsheet ID from the URL (the long string between /d/ and /edit)

### 2.2 Set Up Google Apps Script
1. Go to [Google Apps Script](https://script.google.com/)
2. Create a new project
3. Replace the default code with the content from `google-apps-script.js`
4. Replace `YOUR_SPREADSHEET_ID` with your actual spreadsheet ID
5. Save the project with a name like "Quote Form Handler"

### 2.3 Deploy the Script
1. Click "Deploy" → "New deployment"
2. Choose "Web app"
3. Set "Execute as" to your Google account
4. Set "Who has access" to "Anyone"
5. Click "Deploy"
6. Copy the web app URL

### 2.4 Set Up Spreadsheet Headers
1. In the Apps Script editor, run the `setupSpreadsheet` function once
2. This will create the proper headers in your spreadsheet

## Step 3: Update Configuration

### 3.1 Update Email Service Configuration
Open `src/utils/emailService.ts` and replace the placeholder values:

```typescript
// Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = 'your_actual_service_id';
const EMAILJS_USER_ID = 'your_actual_user_id';

// Replace with your Google Apps Script web app URL
const GOOGLE_SHEETS_API_URL = 'https://script.google.com/macros/s/YOUR_ACTUAL_SCRIPT_ID/exec';
```

### 3.2 Update Company Information
In the same file, update the company details:

```typescript
// Update these with your actual company information
company_email: 'info@ssbw.in',
company_phone: '+91 9876543210', // Your actual phone number
company_address: 'Your Company Address, City, State - PIN', // Your actual address
```

## Step 4: Test the System

### 4.1 Test Email Templates
1. In EmailJS dashboard, test both templates
2. Make sure emails are being sent correctly
3. Check spam folders if emails don't arrive

### 4.2 Test Google Sheets Integration
1. Submit a test quote request
2. Check if data appears in your Google Sheet
3. Verify all fields are populated correctly

### 4.3 Test Complete Flow
1. Fill out the quote form on your website
2. Verify that:
   - Data is stored in Google Sheets
   - Company receives notification email
   - User receives confirmation email
   - Success message appears in the modal

## Troubleshooting

### Common Issues

1. **Emails not sending**
   - Check EmailJS credentials
   - Verify email service is properly connected
   - Check spam folders

2. **Google Sheets not updating**
   - Verify spreadsheet ID is correct
   - Check Apps Script deployment settings
   - Ensure script has proper permissions

3. **CORS errors**
   - Make sure Google Apps Script is deployed as web app
   - Check that "Anyone" has access to the web app

### Debug Mode
To enable debug logging, add this to your browser console:
```javascript
localStorage.setItem('debug', 'true');
```

## Security Considerations

1. **EmailJS Credentials**: Keep your EmailJS credentials secure
2. **Google Apps Script**: The script URL is public, but it only accepts POST requests with proper data
3. **Rate Limiting**: Consider implementing rate limiting for the quote form
4. **Data Validation**: The system includes basic validation, but consider adding more robust validation

## Customization

### Email Templates
You can customize the HTML email templates in the `generateCompanyEmailHTML` and `generateUserConfirmationHTML` functions in `emailService.ts`.

### Form Fields
To add or modify form fields:
1. Update the `QuoteFormData` interface
2. Modify the form in `QuoteModal.tsx`
3. Update the Google Apps Script to handle new fields
4. Update email templates to include new fields

### Styling
The email templates use inline CSS for maximum compatibility. You can modify the styles in the template functions.

## Support

If you encounter any issues:
1. Check the browser console for errors
2. Verify all credentials are correct
3. Test each component individually
4. Check EmailJS and Google Apps Script logs 