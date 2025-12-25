<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Mailables\Address;

class AccountSuspensionAlert extends Mailable
{
    use Queueable, SerializesModels;

    public $user_name;
    public $reason;

    /**
     * Create a new message instance.
     */
    public function __construct($user_name, $reason)
    {
        $this->user_name = $user_name;
        $this->reason = $reason;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            from: new Address('administration@dcsecurite.com', 'DC Sécurité Administration'),
            subject: 'Account Suspension Notice - DC Sécurité',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.account.suspension_notice',
            with: [
                'name' => $this->user_name,
                'reason' => $this->reason,
            ],
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
