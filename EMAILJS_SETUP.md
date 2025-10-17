# EmailJS Setup Guide for Contact Form

## Overview
The contact form is now configured to send emails to `flamingoacademiccollege@gmail.com` using EmailJS service.

## Setup Steps

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your `flamingoacademiccollege@gmail.com` email account
5. Note down the Service ID (it will look like `service_xxxxxxx`)

### 3. Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Submission - {{subject}}

**Content:**
```
You have received a new message from the Flamingo Academic College website contact form.

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from the school website contact form.
Reply directly to this email to respond to {{from_name}}.
```

4. Save the template and note down the Template ID (it will look like `template_xxxxxxx`)

### 4. Get Public Key
1. Go to "Account" > "General"
2. Copy your Public Key (it will look like `xxxxxxxxxxxxxxxx`)

### 5. Configure Environment Variables
Create a `.env.local` file in your project root with:

```
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_SCHOOL_EMAIL=flamingoacademiccollege@gmail.com
```

### 6. Test the Form
1. Restart your development server
2. Go to the Contact page
3. Fill out and submit the form
4. Check if the email arrives at `flamingoacademiccollege@gmail.com`

## Features Implemented

✅ **Form Validation**: Required fields are validated
✅ **Loading State**: Button shows "Sending..." during submission
✅ **Success Message**: Green confirmation when email is sent
✅ **Error Handling**: Red error message if sending fails
✅ **Form Reset**: Form clears after successful submission
✅ **Email Content**: Includes all form fields and sender information
✅ **Reply-To**: Emails can be replied to directly

## Email Content
When someone submits the form, you'll receive an email with:
- Sender's name and email
- Phone number (if provided)
- Subject they selected
- Their message
- Direct reply capability

## Troubleshooting
- Check browser console for any errors
- Verify EmailJS service is properly connected
- Ensure environment variables are set correctly
- Test with a simple email first

## Security Note
The EmailJS public key is safe to expose in client-side code. The service handles rate limiting and spam protection.
