<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Kendaraan extends Model
{
    protected $fillable = [
        'merek',
        'plat_nomor',
        'driver_id',
        'gambar',
    ];

    /**
     * Relasi one-to-one dengan User (Driver)
     * Satu kendaraan hanya bisa memiliki satu driver
     */
    public function driver()
    {
        return $this->belongsTo(User::class, 'driver_id');
    }
}
