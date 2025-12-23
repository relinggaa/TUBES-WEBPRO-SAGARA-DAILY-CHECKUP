<?php

namespace App\Http\Controllers;

use App\Models\Bill;
use App\Models\Keruskaanacc;
use App\Models\Kendaraan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class BillController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'keruskaanacc_id' => 'required|exists:keruskaanaccs,id',
            'detail_biaya' => 'required|array',
            'detail_biaya.*.text' => 'required|string',
            'detail_biaya.*.nominal' => 'required|numeric',
            'detail_biaya.*.sparepart' => 'nullable|string',
            'bukti_bill' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:5120', // Max 5MB
        ]);

        $keruskaanAcc = Keruskaanacc::findOrFail($validated['keruskaanacc_id']);

        if ($keruskaanAcc->mekanik_id !== Auth::id()) {
            return back()->with('error', 'Unauthorized access.');
        }

  
        if ($keruskaanAcc->bill) {
            return back()->with('error', 'Bill untuk perbaikan ini sudah dibuat sebelumnya.');
        }


        $totalBiaya = 0;
        foreach ($validated['detail_biaya'] as $item) {
            $totalBiaya += $item['nominal'];
        }

 
        $buktiBillPath = null;
        if ($request->hasFile('bukti_bill')) {
            $buktiBillPath = $request->file('bukti_bill')->store('bukti-bills', 'public');
        }

        Bill::create([
            'keruskaanacc_id' => $keruskaanAcc->id,
            'detail_biaya' => $validated['detail_biaya'],
            'total_biaya' => $totalBiaya,
            'bukti_bill' => $buktiBillPath,
        ]);


        $kendaraan = Kendaraan::findOrFail($keruskaanAcc->kendaraan_id);
        $kendaraan->status = 'Normal';
        $kendaraan->save();

        return redirect()->route('mekanik.dashboard')->with('success', 'Bill berhasil di buat');
    }
}
