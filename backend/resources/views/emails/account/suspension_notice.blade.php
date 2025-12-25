<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
        .header { background-color: #f8f9fa; padding: 10px; text-align: center; border-bottom: 1px solid #ddd; }
        .content { padding: 20px 0; }
        .footer { font-size: 12px; color: #777; text-align: center; margin-top: 20px; border-top: 1px solid #ddd; padding-top: 10px; }
        .reason-box { background-color: #fff3cd; border: 1px solid #ffeeba; padding: 15px; margin: 15px 0; border-radius: 4px; color: #856404; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>Account Suspended</h2>
        </div>
        <div class="content">
            <p>Dear {{ $name }},</p>
            <p>We are writing to inform you that your client account with DC Sécurité has been <strong>suspended</strong>.</p>
            
            <p>Reason for suspension:</p>
            <div class="reason-box">
                {{ $reason }}
            </div>

            <p>During this period, you will not be able to access your dashboard or services. If you believe this action was taken in error, or to resolve this issue, please contact our support team immediately.</p>
        </div>
        <div class="footer">
            <p>This is an automated message. Please contact support via our website or email us at <a href="mailto:support@dcsecurite.com">support@dcsecurite.com</a> for inquiries.</p>
            <p>&copy; {{ date('Y') }} DC Sécurité. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
