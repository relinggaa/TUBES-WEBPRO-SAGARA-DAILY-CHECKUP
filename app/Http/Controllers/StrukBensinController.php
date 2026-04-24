<?php

namespace App\Http\Controllers;

use App\Models\StrukBensin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class StrukBensinController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        
        $riwayatStruk = StrukBensin::where('user_id', $user->id)
            ->orderBy('created_at', 'desc')
            ->get();

        return Inertia::render('Driver/UploadBill', [
            'riwayatStruk' => $riwayatStruk
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'gambar' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $user = Auth::user();

        if ($request->hasFile('gambar')) {
            $gambar = $request->file('gambar');
            $gambarPath = $gambar->store('struk_bensin', 'public');

            StrukBensin::create([
                'user_id' => $user->id,
                'gambar' => $gambarPath,
            ]);

            return redirect()->back()->with('success', 'Struk bensin berhasil diupload!');
        }

        return redirect()->back()->with('error', 'Gagal mengupload struk bensin.');
    }
}
