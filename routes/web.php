<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GenerateKeyController;
use App\Http\Controllers\KendaraanController;

Route::get('/', function () {
    return inertia('Admin/DashboardAdmin');
});

Route::get('/admin/pengajuan-perbaikan', function () {
    return inertia('Admin/PengajuanPerbaikan');
});

Route::get('/admin/laporan-biaya', function () {
    return inertia('Admin/LaporanBiaya');
});

Route::prefix('admin/kendaraan')->name('kendaraan.')->group(function () {
    Route::get('/', [KendaraanController::class, 'index'])->name('index');
    Route::post('/', [KendaraanController::class, 'store'])->name('store');
    Route::match(['post', 'put'], '/{id}', [KendaraanController::class, 'update'])->name('update');
    Route::delete('/{id}', [KendaraanController::class, 'destroy'])->name('destroy');
});

Route::prefix('admin/generate-key')->name('generate-key.')->group(function () {
    Route::get('/', [GenerateKeyController::class, 'index'])->name('index');
    Route::post('/', [GenerateKeyController::class, 'store'])->name('store');
    Route::put('/{id}', [GenerateKeyController::class, 'update'])->name('update');
    Route::delete('/{id}', [GenerateKeyController::class, 'destroy'])->name('destroy');
});


Route::get('/driver/login', function () {
    return inertia('Driver/LoginDriver');
});

Route::get('/driver/dashboard', function () {
    return inertia('Driver/DashboardDriver');
});

Route::get('/driver/listcar', function () {
    return inertia('Driver/ListCarDriver');
});

Route::get('/driver/report', function () {
    return inertia('Driver/ReportDriver');
});

Route::get('/mekanik/dashboard', function () {
    return inertia('Mekanik/DashboardMekanik');
});
