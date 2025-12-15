<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GenerateKeyController;

Route::get('/', function () {
    return inertia('Admin/DashboardAdmin');
});

Route::get('/admin/pengajuan-perbaikan', function () {
    return inertia('Admin/PengajuanPerbaikan');
});

Route::get('/admin/laporan-biaya', function () {
    return inertia('Admin/LaporanBiaya');
});

Route::prefix('admin/generate-key')->name('generate-key.')->group(function () {
    Route::get('/', [GenerateKeyController::class, 'index'])->name('index');
    Route::post('/', [GenerateKeyController::class, 'store'])->name('store');
    Route::put('/{id}', [GenerateKeyController::class, 'update'])->name('update');
    Route::delete('/{id}', [GenerateKeyController::class, 'destroy'])->name('destroy');
});
