<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Admin/DashboardAdmin');
});

Route::get('/admin/pengajuan-perbaikan', function () {
    return inertia('Admin/PengajuanPerbaikan');
});

Route::get('/admin/laporan-biaya', function () {
    return inertia('Admin/LaporanBiaya');
});

Route::get('/admin/generate-key', function () {
    return inertia('Admin/GenerateKey');
});
