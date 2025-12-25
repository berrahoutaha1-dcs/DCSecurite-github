<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class TwoFactorCode extends Notification
{
    use Queueable;

    public $minutes;

    /**
     * Create a new notification instance.
     */
    public function __construct($minutes = 10)
    {
        $this->minutes = $minutes;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
                    ->subject('Your Two-Factor Authentication Code')
                    ->line('Your verification code is: ' . $notifiable->two_factor_code)
                    ->line('The code will expire in ' . $this->minutes . ' ' . ($this->minutes == 1 ? 'minute' : 'minutes') . '.')
                    ->line('If you did not attempt to login, no further action is required.');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
