<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
        .header { background-color: #f8f9fa; padding: 10px; text-align: center; border-bottom: 1px solid #ddd; }
        .content { padding: 20px 0; }
        .footer { font-size: 12px; color: #777; text-align: center; margin-top: 20px; border-top: 1px solid #ddd; padding-top: 10px; }
        .success-box { background-color: #d4edda; border: 1px solid #c3e6cb; padding: 15px; margin: 15px 0; border-radius: 4px; color: #155724; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>Account Activated</h2>
        </div>
        <div class="content">
            <p>Dear {{ $name }},</p>
            <p>We are pleased to inform you that your client account with DC Sécurité has been <strong>successfully activated</strong>.</p>
            
            @if($reason)
            <p>Note from administrator:</p>
            <div class="success-box">
                {{ $reason }}
            </div>
            @else
            <div class="success-box">
                Your account is now fully active.
            </div>
            @endif

            <p>You can now log in to the client portal and access all available services.</p>
            
            <p><a href="{{ env('APP_URL') }}/login" style="background-color: #28a745; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; display: inline-block;">Login to Dashboard</a></p>
        </div>
        <div class="footer">
            <p>This is an automated message. Please contact support via our website or email us at <a href="mailto:support@dcsecurite.com">support@dcsecurite.com</a> for inquiries.</p>
            <p>&copy; {{ date('Y') }} DC Sécurité. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
