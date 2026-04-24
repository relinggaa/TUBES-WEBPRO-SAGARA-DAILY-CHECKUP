<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StrukBensin extends Model
{
    protected $fillable = [
        'user_id',
        'gambar',
        'is_accept',
    ];

    protected $casts = [
        'is_accept' => 'boolean',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
