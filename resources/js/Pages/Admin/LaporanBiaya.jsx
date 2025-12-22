import React from 'react';
import LayoutAdmin from '../../layout/LayoutAdmin';

export default function LaporanBiaya() {
    return (
        <LayoutAdmin>
            <div className="space-y-6">
                <div>
                    <h1 className="text-4xl font-bold text-white mb-2">Laporan Biaya</h1>
                    <p className="text-gray-400">Lihat dan kelola laporan biaya operasional</p>
                </div>

                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 shadow-xl">
                    <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, molestiae.</p>
                </div>
            </div>
        </LayoutAdmin>
    );
}