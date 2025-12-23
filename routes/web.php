<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GenerateKeyController;
use App\Http\Controllers\KendaraanController;
use App\Http\Controllers\AdminAuthController;
use App\Http\Controllers\DriverAuthController;

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

    Route::get('/pengajuan-perbaikan', function () {
        return inertia('Admin/PengajuanPerbaikan');
    })->name('admin.pengajuan-perbaikan');

    Route::get('/laporan-biaya', function () {
        return inertia('Admin/LaporanBiaya');
    })->name('admin.laporan-biaya');

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
    Route::get('/dashboard', function () {
        return inertia('Driver/DashboardDriver');
    })->name('driver.dashboard');

    Route::post('/update-gambar', [DriverAuthController::class, 'updateGambar'])->name('driver.update-gambar');

    Route::get('/report', function () {
        return inertia('Driver/ReportDriver');
    })->name('driver.report');
});

Route::get('/mekanik/dashboard', function () {
    return inertia('Mekanik/DashboardMekanik');
});

Route::get('/mekanik/detailkerusakan', function () {
    return inertia('Mekanik/DetailKerusakan');
});

Route::get('/mekanik/bill', function () {
    return inertia('Mekanik/BillMekanik');
});
