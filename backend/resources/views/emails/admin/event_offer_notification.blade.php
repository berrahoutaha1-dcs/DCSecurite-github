@component('mail::message')
# New Partnership Request

You have received a new partnership request from the "Partner With Us" form.

**Details:**

*   **Name:** {{ $offer->full_name }}
*   **Organization Type:** {{ $offer->organization_type }}
*   **Organization Name:** {{ $offer->organization_name }}
*   **Country:** {{ $offer->country }}
*   **Phone:** {{ $offer->phone }}
*   **Email:** {{ $offer->email }}
*   **Budget:** {{ $offer->budget }}
*   **IP Address:** {{ $offer->ip_address }}
*   **Referrer:** {{ $offer->referrer ?? 'N/A' }}

**Proposition:**
@component('mail::panel')
{{ $offer->proposition }}
@endcomponent

Please review this request in the admin dashboard.

@component('mail::button', ['url' => env('FRONTEND_URL', 'http://localhost:5173') . '/admin/event-offers'])
View Offer
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
