<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GenerateKeyController;
use App\Http\Controllers\KendaraanController;
use App\Http\Controllers\KerusakanController;
use App\Http\Controllers\AdminAuthController;
use App\Http\Controllers\DriverAuthController;
use App\Http\Controllers\MekanikAuthController;

Route::get('/', function () {
    return inertia('Landing');
})->middleware('guest');

// Admin Auth Routes (Public)
Route::prefix('admin')->group(function () {
    Route::get('/login', [AdminAuthController::class, 'showLoginForm'])->name('admin.login');
    Route::post('/login', [AdminAuthController::class, 'login'])->name('admin.login.post');
    Route::post('/logout', [AdminAuthController::class, 'logout'])->name('admin.logout');
});

// Admin Protected Routes
Route::middleware(['admin'])->prefix('admin')->group(function () {
    Route::get('/dashboard', function () {
        return inertia('Admin/DashboardAdmin');
    })->name('admin.dashboard');

    Route::post('/update-gambar', [AdminAuthController::class, 'updateGambar'])->name('admin.update-gambar');

    Route::get('/pengajuan-perbaikan', [KerusakanController::class, 'index'])->name('admin.pengajuan-perbaikan');
    Route::post('/kerusakan/approve', [KerusakanController::class, 'approve'])->name('admin.kerusakan.approve');

    Route::get('/laporan-biaya', [App\Http\Controllers\BillController::class, 'index'])->name('admin.laporan-biaya');

    Route::prefix('kendaraan')->name('kendaraan.')->group(function () {
        Route::get('/', [KendaraanController::class, 'index'])->name('index');
        Route::post('/', [KendaraanController::class, 'store'])->name('store');
        Route::match(['post', 'put'], '/{id}', [KendaraanController::class, 'update'])->name('update');
        Route::delete('/{id}', [KendaraanController::class, 'destroy'])->name('destroy');
    });

    Route::prefix('generate-key')->name('generate-key.')->group(function () {
        Route::get('/', [GenerateKeyController::class, 'index'])->name('index');
        Route::post('/', [GenerateKeyController::class, 'store'])->name('store');
        Route::put('/{id}', [GenerateKeyController::class, 'update'])->name('update');
        Route::delete('/{id}', [GenerateKeyController::class, 'destroy'])->name('destroy');
    });
});

// Driver Auth Routes (Public)
Route::prefix('driver')->group(function () {
    Route::get('/login', [DriverAuthController::class, 'showLoginForm'])->name('driver.login');
    Route::post('/login', [DriverAuthController::class, 'login'])->name('driver.login.post');
    Route::post('/logout', [DriverAuthController::class, 'logout'])->name('driver.logout');
});

// Driver Protected Routes
Route::middleware(['driver'])->prefix('driver')->group(function () {
    Route::get('/dashboard', [KendaraanController::class, 'driverDashboard'])->name('driver.dashboard');

    Route::post('/update-gambar', [DriverAuthController::class, 'updateGambar'])->name('driver.update-gambar');

    Route::get('/report', [KendaraanController::class, 'driverReport'])->name('driver.report');
    Route::post('/report', [KerusakanController::class, 'store'])->name('driver.report.store');

    // Route untuk Tanya AI
    Route::get('/tanya-ai', [KendaraanController::class, 'driverTanyaAI'])->name('driver.tanya-ai');
    Route::post('/kerusakan/store-from-chat', [KerusakanController::class, 'storeFromChat'])->name('driver.kerusakan.store-from-chat');

    // Route untuk batalkan pengajuan perbaikan
    Route::post('/kerusakan/cancel', [KerusakanController::class, 'cancel'])->name('driver.kerusakan.cancel');

    // Route untuk update kendala kerusakan
    Route::put('/kerusakan/{id}', [KerusakanController::class, 'update'])->name('driver.kerusakan.update');
});

// Mekanik Auth Routes (Public)
Route::prefix('mekanik')->group(function () {
    Route::get('/login', [MekanikAuthController::class, 'showLoginForm'])->name('mekanik.login');
    Route::post('/login', [MekanikAuthController::class, 'login'])->name('mekanik.login.post');
    Route::post('/logout', [MekanikAuthController::class, 'logout'])->name('mekanik.logout');
});

// Mekanik Protected Routes
Route::middleware(['mekanik'])->prefix('mekanik')->group(function () {
    Route::get('/dashboard', [KerusakanController::class, 'mekanikDashboard'])->name('mekanik.dashboard');

    Route::post('/update-gambar', [MekanikAuthController::class, 'updateGambar'])->name('mekanik.update-gambar');

    Route::post('/mark-as-full', [MekanikAuthController::class, 'markAsFull'])->name('mekanik.mark-as-full');
    Route::post('/mark-as-available', [MekanikAuthController::class, 'markAsAvailable'])->name('mekanik.mark-as-available');

    // Route untuk Tanya AI
    Route::get('/tanya-ai', [KendaraanController::class, 'mekanikTanyaAI'])->name('mekanik.tanya-ai');

    Route::get('/detailkerusakan/{id}', [KerusakanController::class, 'mekanikDetail'])->name('mekanik.detailkerusakan');

    Route::post('/mark-as-pending', [KerusakanController::class, 'markAsPending'])->name('mekanik.mark-as-pending');

    Route::get('/bill', function () {
        return inertia('Mekanik/BillMekanik');
    })->name('mekanik.bill');

    Route::post('/bill', [App\Http\Controllers\BillController::class, 'store'])->name('mekanik.bill.store');
});
