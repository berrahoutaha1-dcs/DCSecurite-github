@component('mail::message')
# New Client Contact

A new client has contacted you via the DCS platform.

**Client Details:**
- **Name:** {{ $submission->first_name }} {{ $submission->last_name }}
- **Email:** {{ $submission->email }}
- **Company:** {{ $submission->company }}
- **Product Interest:** {{ $submission->product_interest }}

**Message:**
{{ $submission->message }}

@component('mail::button', ['url' => config('app.url') . '/admin/contact'])
View Submission in Dashboard
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
