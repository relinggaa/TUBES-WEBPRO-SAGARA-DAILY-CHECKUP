<?php

namespace App\Http\Controllers;

use App\Models\Towing;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TowingController extends Controller
{
    /**
     * Tampilkan halaman request towing beserta history & active towing driver.
     */
    public function index()
    {
        $user = Auth::user();

        // Towing yang sedang aktif (Pending atau Diproses)
        $activeTowing = Towing::where('driver_id', $user->id)
            ->whereIn('status', ['Pending', 'Diproses'])
            ->latest()
            ->first();

        // Seluruh history towing driver (urut terbaru)
        $riwayatTowing = Towing::where('driver_id', $user->id)
            ->latest()
            ->get();

        return Inertia::render('Driver/RequestTowing', [
            'activeTowing'  => $activeTowing,
            'riwayatTowing' => $riwayatTowing,
        ]);
    }

    /**
     * Buat pengajuan towing baru.
     */
    public function store(Request $request)
    {
        $user = Auth::user();

        // Cek apakah driver sudah punya towing aktif
        $existingActive = Towing::where('driver_id', $user->id)
            ->whereIn('status', ['Pending', 'Diproses'])
            ->first();

        if ($existingActive) {
            return back()->with('error', 'Anda masih memiliki pengajuan towing yang aktif. Batalkan terlebih dahulu sebelum mengajukan yang baru.');
        }

        $validated = $request->validate([
            'lokasi'    => 'required|string|max:1000',
            'latitude'  => 'nullable|numeric',
            'longitude' => 'nullable|numeric',
            'keterangan'=> 'nullable|string|max:500',
        ], [
            'lokasi.required' => 'Lokasi harus diisi.',
        ]);

        Towing::create([
            'driver_id'  => $user->id,
            'lokasi'     => $validated['lokasi'],
            'latitude'   => $validated['latitude'] ?? null,
            'longitude'  => $validated['longitude'] ?? null,
            'keterangan' => $validated['keterangan'] ?? null,
            'status'     => 'Pending',
            'isproses'   => false,
        ]);

        return back()->with('success', 'Pengajuan towing berhasil dikirim! Silakan tunggu konfirmasi.');
    }

    /**
     * Batalkan pengajuan towing (hanya jika isproses = false).
     */
    public function cancel(Request $request)
    {
        $user = Auth::user();

        $validated = $request->validate([
            'towing_id' => 'required|exists:towings,id',
        ]);

        $towing = Towing::where('id', $validated['towing_id'])
            ->where('driver_id', $user->id)
            ->first();

        if (!$towing) {
            return back()->with('error', 'Pengajuan towing tidak ditemukan.');
        }

        if ($towing->isproses) {
            return back()->with('error', 'Pengajuan towing tidak dapat dibatalkan karena sedang dalam proses.');
        }

        if (!in_array($towing->status, ['Pending', 'Diproses'])) {
            return back()->with('error', 'Pengajuan towing tidak dapat dibatalkan dengan status saat ini.');
        }

        $towing->delete();

        return back()->with('success', 'Pengajuan towing berhasil dibatalkan.');
    }
}
