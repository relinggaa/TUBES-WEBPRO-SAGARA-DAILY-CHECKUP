import React from 'react';
import {
    getThemeBorder,
    getThemeShadow,
    getThemeShadowHover,
    getThemeText,
    getThemeBg,
    getThemeGradient
} from '../../../Color/DashboardAdminColor';

export default function Chart({ currentTheme }) {
    return (
        <div className={`bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-xl rounded-2xl p-6 border ${getThemeBorder(currentTheme, '20')} shadow-xl hover:shadow-2xl ${getThemeShadowHover(currentTheme, '10')} transition-all duration-300`}>
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center">
                    <span 
                        className="w-1 h-8 rounded-full mr-3"
                        style={{
                            background: `linear-gradient(to bottom, ${currentTheme.hex.primary}, ${currentTheme.hex.secondary})`
                        }}
                    ></span>
                    Statistik Bulanan
                </h2>
                <div className="flex items-center space-x-2">
                    <button className={`px-3 py-1.5 text-xs font-medium ${getThemeText(currentTheme, '300')} ${getThemeBg(currentTheme, '20')} rounded-lg ${getThemeBg(currentTheme, '30').replace('bg-', 'hover:bg-')} transition-colors`}>
                        Bulan
                    </button>
                    <button className="px-3 py-1.5 text-xs font-medium text-gray-400 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-colors">
                        Tahun
                    </button>
                </div>
            </div>
            
            {/* Chart Placeholder */}
            <div className="h-64 flex items-center justify-center bg-gradient-to-br from-gray-800/30 to-gray-800/20 rounded-xl border border-gray-700/30 relative overflow-hidden">
             
                <div className={`absolute inset-0 bg-gradient-to-r ${getThemeGradient(currentTheme, 'from', '500', '5')} via-transparent ${getThemeGradient(currentTheme, 'to', '500', '5')}`}></div>
                
         
                <div className="relative z-10 flex flex-col items-center space-y-2" style={{ color: currentTheme.hex.secondary }}>
                    <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'inherit' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <p className="text-sm" style={{ color: 'inherit' }}>Chart akan ditampilkan di sini</p>
                </div>
            </div>
        </div>
    );
}
