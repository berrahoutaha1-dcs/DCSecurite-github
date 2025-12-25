<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\SubscriptionController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\LogisticsController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\EventOfferController;
use App\Http\Controllers\EagloAIController;
use App\Http\Controllers\ProposalController; // Add this
use App\Http\Controllers\SessionController; // Add this
use App\Http\Controllers\NewsTickerController; // Add this
use App\Http\Controllers\AnalyticsController; // Add this
use App\Http\Middleware\CheckRole;

Route::post('/ask-eaglo', [EagloAIController::class, 'ask']);
Route::post('/analytics/track', [AnalyticsController::class, 'track']); // Public tracking endpoint
Route::get('/eaglo/history', [EagloAIController::class, 'getHistory']);
Route::get('/eaglo/chat/{id}', [EagloAIController::class, 'getChat']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

Route::get('/email/verify/{id}/{hash}', [AuthController::class, 'verify'])->name('verification.verify');
Route::post('/email/resend', [AuthController::class, 'resend'])->name('verification.send');
Route::post('/2fa/verify', [AuthController::class, 'verifyTwoFactor']);

// Password Reset
Route::post('/forgot-password', [AuthController::class, 'forgotPassword']);
Route::post('/reset-password', [AuthController::class, 'resetPassword']);

// Public Contact Form
Route::post('/contact', [ContactController::class, 'store']);
Route::post('/event-offers', [EventOfferController::class, 'store']);
Route::get('/news-ticker', [NewsTickerController::class, 'active']); // Public active news

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', [AuthController::class, 'me']);
    Route::put('/me', [AuthController::class, 'updateProfile']);
    
    // Change Password with OTP (Authenticated)
    Route::post('/user/password/otp', [AuthController::class, 'sendPasswordChangeOtp']);
    Route::post('/user/password/update', [AuthController::class, 'updatePasswordWithOtp']);
    
    // Login History & Sessions
    Route::get('/sessions', [SessionController::class, 'index']);
    Route::delete('/sessions/{id}', [SessionController::class, 'destroy']);

    // Admin Dashboard
    Route::middleware([CheckRole::class . ':admin'])->group(function () {
        Route::get('/admin/dashboard', [AdminController::class, 'dashboard']);
        Route::get('/admin/analytics', [AnalyticsController::class, 'stats']); // Admin Stats
        Route::apiResource('admin/news-ticker', NewsTickerController::class); // Admin CRUD
        
        // Client Management
        Route::get('/admin/clients', [UserController::class, 'index']);
        Route::post('/admin/impersonate/{id}', [UserController::class, 'impersonate']);
        Route::post('/admin/clients/{id}/toggle-status', [UserController::class, 'toggleStatus']);
        Route::post('/admin/clients/{id}/terminate', [UserController::class, 'terminate']);
        Route::delete('/admin/clients/{id}', [UserController::class, 'destroy']);
    });

    // Modules
    Route::apiResource('products', ProductController::class);
    Route::apiResource('orders', OrderController::class);
    Route::apiResource('subscriptions', SubscriptionController::class);
    Route::apiResource('payments', PaymentController::class);
    Route::apiResource('logistics', LogisticsController::class);
    Route::apiResource('contact-submissions', ContactController::class);
    Route::apiResource('admin/event-offers', EventOfferController::class)->only(['index', 'show', 'update', 'destroy']);
    
    // Proposals
    Route::get('/proposals', [ProposalController::class, 'index']);
    Route::post('/generate-proposal', [ProposalController::class, 'generate']);
    Route::get('/proposals/{id}', [ProposalController::class, 'show']);
    Route::post('/proposals/{id}/sign', [ProposalController::class, 'sign']); // Add this
});
