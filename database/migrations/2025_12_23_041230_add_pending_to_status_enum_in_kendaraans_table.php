<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Modify enum to include 'Pending'
        DB::statement("ALTER TABLE kendaraans MODIFY COLUMN status ENUM('Normal', 'Pengajuan Perbaikan', 'Perbaikan', 'Pending') DEFAULT 'Normal'");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Revert enum back to original values
        DB::statement("ALTER TABLE kendaraans MODIFY COLUMN status ENUM('Normal', 'Pengajuan Perbaikan', 'Perbaikan') DEFAULT 'Normal'");
    }
};
