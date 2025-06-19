# EmailJS HTML Setup Guide

## 🎯 **Simple HTML Email Setup**

Since you want to send HTML emails directly without complex templates, here's how to set up EmailJS:

## 📋 **Step 1: Create a Simple EmailJS Template**

### 1. Go to EmailJS Dashboard
- Visit: https://dashboard.emailjs.com/
- Go to "Email Templates"

### 2. Create a Simple Template
- Click "Create New Template"
- Name it: `default_template`
- Set "To Email" to: `{{to_email}}`
- Set "Subject" to: `{{subject}}`
- Set "Message" to: `{{message}}`

### 3. Template Content
```
To: {{to_email}}
From: {{from_email}}
Subject: {{subject}}

{{message}}
```

**That's it!** This simple template will accept the HTML content directly.

## 🔧 **Step 2: Alternative - Use EmailJS Raw HTML**

If you want to send HTML without any template, you can also use EmailJS's raw HTML feature:

### Update the email service to use raw HTML:

```typescript
// In src/utils/emailService.ts, you can also use:
await emailjs.sendForm(
  EMAILJS_SERVICE_ID,
  'default_template',
  formElement, // Create a hidden form with HTML content
  EMAILJS_USER_ID
);
```

## 🧪 **Step 3: Test the Setup**

1. **Create the simple template** as described above
2. **Test using the EmailTest component** in your app
3. **Check if HTML emails are sent** with full styling

## 📧 **How It Works**

1. **HTML Generation**: The code generates complete HTML emails with CSS styling
2. **Direct Sending**: EmailJS sends the HTML content directly in the `message` field
3. **No Complex Templates**: No need for template variables or complex setup

## 🎨 **Email Features**

Your HTML emails include:
- ✅ **Responsive Design** - Works on mobile and desktop
- ✅ **Professional Styling** - Modern, branded appearance
- ✅ **Complete Information** - All quote details included
- ✅ **Call-to-Action** - Clear next steps for users
- ✅ **Company Branding** - Your company colors and logo

## 🚀 **Ready to Test**

Once you create the simple `default_template`, your system will:
1. Generate beautiful HTML emails
2. Send them directly via EmailJS
3. Store data in Google Sheets
4. Provide user feedback

**No complex template setup needed!** Just create one simple template and you're done! 🎉 