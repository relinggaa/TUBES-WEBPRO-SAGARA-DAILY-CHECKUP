<?php

namespace App\Http\Controllers;

use App\Models\StrukBensin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class BensinController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        $riwayatStruk = StrukBensin::where('user_id', $user->id)
            ->latest()
            ->get();

        return Inertia::render('Driver/UploadBill', [
            'riwayatStruk' => $riwayatStruk,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'gambar' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $user = Auth::user();

        if (!$request->hasFile('gambar')) {
            return back()->with('error', 'Gagal mengupload struk bensin.');
        }

        $gambarPath = $request->file('gambar')->store('struk_bensin', 'public');

        StrukBensin::create([
            'user_id' => $user->id,
            'gambar' => $gambarPath,
            'is_accept' => null,
        ]);

        return back()->with('success', 'Struk bensin berhasil diupload!');
    }

    public function cancel(Request $request)
    {
        $user = Auth::user();

        $validated = $request->validate([
            'struk_bensin_id' => 'required|exists:struk_bensins,id',
        ]);

        $struk = StrukBensin::where('id', $validated['struk_bensin_id'])
            ->where('user_id', $user->id)
            ->first();

        if (!$struk) {
            return back()->with('error', 'Pengajuan struk bensin tidak ditemukan.');
        }

        if (!is_null($struk->is_accept)) {
            return back()->with('error', 'Pengajuan tidak bisa dibatalkan karena sudah diproses.');
        }

        $struk->delete();

        return back()->with('success', 'Pengajuan struk bensin berhasil dibatalkan.');
    }
}
