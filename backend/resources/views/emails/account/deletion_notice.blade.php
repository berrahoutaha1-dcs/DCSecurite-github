<!DOCTYPE html>
<html>
<head>
    <title>Account Termination Notice</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #f8fafc; padding: 20px; text-align: center; border-bottom: 2px solid #e2e8f0; }
        .content { padding: 30px 20px; }
        .reason-box { background-color: #fef2f2; border-left: 4px solid #ef4444; padding: 15px; margin: 20px 0; color: #991b1b; }
        .footer { font-size: 12px; text-align: center; color: #64748b; margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>DCSecurite Administration</h2>
        </div>
        <div class="content">
            <p>Dear {{ $user_name }},</p>
            
            <p>We are writing to inform you that your account with DCSecurite has been permanently terminated.</p>
            
            <p><strong>Reason for termination:</strong></p>
            <div class="reason-box">
                {{ $reason }}
            </div>
            
            <p>If you believe this action has been taken in error, please contact our support team immediately.</p>
            
            <p>Regards,<br>DCSecurite Administration Team</p>
        </div>
        <div class="footer">
            <p>&copy; {{ date('Y') }} DCSecurite. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
