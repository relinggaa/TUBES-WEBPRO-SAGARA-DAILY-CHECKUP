import React from 'react';
import { Link } from '@inertiajs/react';
import LayoutAdmin from '../../layout/LayoutAdmin';
import { useTheme } from '../../contexts/ThemeContext';

const DashboardAdmin = () => {
    const { currentTheme } = useTheme();
    
  
    const getThemeBorder = (opacity = '20') => {
        const colorMap = {
            purple: `border-purple-500/${opacity}`,
            red: `border-red-500/${opacity}`,
            blue: `border-blue-500/${opacity}`,
            green: `border-green-500/${opacity}`,
            yellow: `border-yellow-500/${opacity}`,
        };
        return colorMap[currentTheme.primary] || colorMap.purple;
    };
    
    const getThemeBorderHover = (opacity = '30') => {
        const colorMap = {
            purple: `hover:border-purple-500/${opacity}`,
            red: `hover:border-red-500/${opacity}`,
            blue: `hover:border-blue-500/${opacity}`,
            green: `hover:border-green-500/${opacity}`,
            yellow: `hover:border-yellow-500/${opacity}`,
        };
        return colorMap[currentTheme.primary] || colorMap.purple;
    };
    
    const getThemeShadow = (opacity = '10') => {
        const colorMap = {
            purple: `shadow-purple-500/${opacity}`,
            red: `shadow-red-500/${opacity}`,
            blue: `shadow-blue-500/${opacity}`,
            green: `shadow-green-500/${opacity}`,
            yellow: `shadow-yellow-500/${opacity}`,
        };
        return colorMap[currentTheme.primary] || colorMap.purple;
    };
    
    const getThemeShadowHover = (opacity = '20') => {
        const colorMap = {
            purple: `hover:shadow-purple-500/${opacity}`,
            red: `hover:shadow-red-500/${opacity}`,
            blue: `hover:shadow-blue-500/${opacity}`,
            green: `hover:shadow-green-500/${opacity}`,
            yellow: `hover:shadow-yellow-500/${opacity}`,
        };
        return colorMap[currentTheme.primary] || colorMap.purple;
    };
    
    const getThemeText = (shade = '300') => {
        const colorMap = {
            purple: `text-purple-${shade}`,
            red: `text-red-${shade}`,
            blue: `text-blue-${shade}`,
            green: `text-green-${shade}`,
            yellow: `text-yellow-${shade}`,
        };
        return colorMap[currentTheme.primary] || colorMap.purple;
    };
    
    const getThemeBg = (opacity = '20') => {
        const colorMap = {
            purple: `bg-purple-500/${opacity}`,
            red: `bg-red-500/${opacity}`,
            blue: `bg-blue-500/${opacity}`,
            green: `bg-green-500/${opacity}`,
            yellow: `bg-yellow-500/${opacity}`,
        };
        return colorMap[currentTheme.primary] || colorMap.purple;
    };
    
    const getThemeGradient = (type = 'from', shade = '500', opacity = '20') => {
        const colorMap = {
            purple: {
                from: `from-purple-${shade}/${opacity}`,
                via: `via-purple-${shade}/${opacity}`,
                to: `to-purple-${shade}/${opacity}`,
            },
            red: {
                from: `from-red-${shade}/${opacity}`,
                via: `via-red-${shade}/${opacity}`,
                to: `to-red-${shade}/${opacity}`,
            },
            blue: {
                from: `from-blue-${shade}/${opacity}`,
                via: `via-blue-${shade}/${opacity}`,
                to: `to-blue-${shade}/${opacity}`,
            },
            green: {
                from: `from-green-${shade}/${opacity}`,
                via: `via-green-${shade}/${opacity}`,
                to: `to-green-${shade}/${opacity}`,
            },
            yellow: {
                from: `from-yellow-${shade}/${opacity}`,
                via: `via-yellow-${shade}/${opacity}`,
                to: `to-yellow-${shade}/${opacity}`,
            },
        };
        const theme = colorMap[currentTheme.primary] || colorMap.purple;
        return theme[type] || theme.from;
    };
    
    const getThemeGradientSolid = (type = 'from', shade = '500') => {
        const colorMap = {
            purple: {
                from: `from-purple-${shade}`,
                via: `via-purple-${shade}`,
                to: `to-purple-${shade}`,
            },
            red: {
                from: `from-red-${shade}`,
                via: `via-red-${shade}`,
                to: `to-red-${shade}`,
            },
            blue: {
                from: `from-blue-${shade}`,
                via: `via-blue-${shade}`,
                to: `to-blue-${shade}`,
            },
            green: {
                from: `from-green-${shade}`,
                via: `via-green-${shade}`,
                to: `to-green-${shade}`,
            },
            yellow: {
                from: `from-yellow-${shade}`,
                via: `via-yellow-${shade}`,
                to: `to-yellow-${shade}`,
            },
        };
        const theme = colorMap[currentTheme.primary] || colorMap.purple;
        return theme[type] || theme.from;
    };
    const stats = [
        {
            title: 'Total Pengajuan',
            value: '24',
            description: 'Pengajuan yang masuk bulan ini',
        },
        {
            title: 'Perbaikan Selesai',
            value: '18',
            description: 'Perbaikan yang telah diselesaikan',
        },
        {
            title: 'Pending Review',
            value: '6',
            description: 'Menunggu persetujuan',
        },
        {
            title: 'Total Biaya',
            value: '110+',
            description: 'Jutaan rupiah bulan ini',
        },
    ];

    const recentActivities = [
        { id: 1, activity: 'Pengajuan perbaikan baru diterima', time: '2 jam lalu', type: 'info' },
        { id: 2, activity: 'Perbaikan #123 telah disetujui', time: '5 jam lalu', type: 'success' },
        { id: 3, activity: 'Laporan biaya bulan ini telah dibuat', time: '1 hari lalu', type: 'info' },
        { id: 4, activity: 'Key baru telah di-generate', time: '2 hari lalu', type: 'warning' },
    ];

    return (
        <LayoutAdmin>
            <div className="space-y-12">
          
                <div className="relative group">
           
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${getThemeGradient('from', '600', '20')} ${getThemeGradient('via', '500', '20')} ${getThemeGradient('to', '600', '20')} rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 -z-10`}></div>
                    
                 
                    <div className={`relative bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-800/80 backdrop-blur-2xl rounded-3xl border ${getThemeBorder('20')} shadow-2xl ${getThemeShadow('10')} ${getThemeShadowHover('20')} ${getThemeBorderHover('30')} transition-all duration-500 p-8 md:p-10 overflow-hidden`}>
                
                        <div className={`absolute top-0 left-0 w-32 h-32 bg-gradient-to-br ${getThemeGradient('from', '500', '10')} to-transparent rounded-tl-3xl`}></div>
                        <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${getThemeGradient('from', '500', '10')} to-transparent rounded-br-3xl`}></div>
                  
                        <div className="absolute inset-0 opacity-0">
                            <div 
                                className="absolute inset-0 bg-[size:2rem_2rem]"
                                style={{
                                    backgroundImage: `linear-gradient(to right, ${currentTheme.hex.primary} 1px, transparent 1px), linear-gradient(to bottom, ${currentTheme.hex.primary} 1px, transparent 1px)`
                                }}
                            ></div>
                        </div>
                        
                      
                        <div className={`absolute top-0 right-0 w-96 h-96 ${getThemeBg('5')} rounded-full blur-3xl animate-pulse`}></div>
                        <div className={`absolute bottom-0 left-0 w-96 h-96 ${getThemeBg('5')} rounded-full blur-3xl animate-pulse`} style={{ animationDelay: '1s' }}></div>
                        
                    
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
             
                        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex-1">
                            {/* Badge Section with Animation */}
                            <div className="flex items-center gap-3 mb-4 group">
                                <span className={`relative px-3 py-1.5 ${currentTheme.colors.button} backdrop-blur-sm ${getThemeText()} text-xs font-bold rounded-full border ${getThemeBorder('30')} shadow-lg ${getThemeShadow('20')} ${getThemeShadowHover('40')} transition-all duration-300 hover:scale-105`}>
                                    <span className="relative z-10 flex items-center space-x-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                                        <span>New</span>
                                    </span>
                                    <span className={`absolute inset-0 rounded-full bg-gradient-to-r ${getThemeGradient('from', '500', '20')} to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></span>
                                </span>
                                <Link 
                                    href="#" 
                                    className="text-sm font-medium transition-all duration-300 flex items-center space-x-1 group/link"
                                    style={{
                                        color: currentTheme.hex.secondary
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = currentTheme.hex.primary;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = currentTheme.hex.secondary;
                                    }}
                                >
                                    <span>Dashboard Update</span>
                                    <svg 
                                        className="w-4 h-4 group-hover/link:translate-x-1 transition-all duration-300" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor"
                                        style={{
                                            color: 'inherit'
                                        }}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                            
                         
                            <h1 className="relative text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
                                <span className={`block bg-gradient-to-r from-white ${getThemeGradientSolid('via', '200')} ${getThemeGradientSolid('to', '400')} bg-clip-text text-transparent`}>
                                    Dashboard Admin
                                </span>
                         
                                <span className={`absolute inset-0 bg-gradient-to-r ${getThemeGradient('from', '600', '20')} ${getThemeGradient('via', '400', '20')} ${getThemeGradient('to', '600', '20')} blur-2xl -z-10 opacity-50 animate-pulse`}></span>
                            </h1>
                            
                           
                            <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
                                Kelola semua aktivitas dan pengajuan perbaikan dengan mudah dan efisien
                            </p>
                            
                            {/* Stats Preview */}
                            <div className="flex items-center gap-6 mt-6">
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                    <span className="text-sm text-gray-400">System Active</span>
                                </div>
                                <div className="h-4 w-px bg-gray-700"></div>
                                <div className="flex items-center space-x-2" style={{ color: currentTheme.hex.secondary }}>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'inherit' }}>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                    <span className="text-sm" style={{ color: 'inherit' }}>Real-time Updates</span>
                                </div>
                            </div>
                        </div>
                        
                    
                        <div className="mt-8 md:mt-0 md:ml-8">
                            <button className={`group relative px-8 py-4 text-white rounded-2xl font-bold text-sm transition-all duration-500 shadow-2xl ${getThemeShadow('40')} ${getThemeShadowHover('60')} hover:scale-110 flex items-center space-x-3 overflow-hidden`}>
                              
                                <div 
                                    className="absolute inset-0 rounded-2xl z-0 transition-all duration-500"
                                    style={{
                                        background: `linear-gradient(to right, ${currentTheme.hex.primary}, ${currentTheme.hex.secondary}, ${currentTheme.hex.primary})`
                                    }}
                                ></div>
                                
                               
                                <div 
                                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
                                    style={{
                                        background: `linear-gradient(to right, ${currentTheme.hex.secondary}, ${currentTheme.hex.primary}, ${currentTheme.hex.secondary})`
                                    }}
                                ></div>
                                
                         
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-2xl z-0"></div>
                                
                                <span className="relative z-10 flex items-center space-x-2">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                    <span>Lihat Pengajuan Perbaikan</span>
                                </span>
                                <svg className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                                
                           
                                <div className={`absolute -inset-1 bg-gradient-to-r ${getThemeGradientSolid('from', '600')} ${getThemeGradientSolid('to', '400')} rounded-2xl opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-500 -z-10`}></div>
                            </button>
                        </div>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => {
                 
                        const baseGradients = [
                            { from: 'from-blue-500/20', to: 'to-cyan-500/20', glow: 'from-blue-500', textColor: 'text-cyan-300', glowColor: 'rgba(103, 232, 249, 0.6)' },
                            { from: 'from-green-500/20', to: 'to-emerald-500/20', glow: 'from-green-500', textColor: 'text-emerald-300', glowColor: 'rgba(110, 231, 183, 0.6)' },
                            { from: 'from-yellow-500/20', to: 'to-orange-500/20', glow: 'from-yellow-500', textColor: 'text-orange-300', glowColor: 'rgba(251, 146, 60, 0.6)' },
                            { from: `${getThemeGradient('from', '500', '20')}`, to: `${getThemeGradient('to', '600', '20')}`, glow: `${getThemeGradientSolid('from', '500')}`, textColor: getThemeText('300'), glowColor: currentTheme.hex.glow },
                        ];
                        const gradients = baseGradients;
                        const gradient = gradients[index % gradients.length];
   
                        return (
                            <div
                                key={index}
                                className={`group relative bg-gradient-to-br from-gray-900/70 via-gray-900/50 to-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border ${getThemeBorder('20')} ${getThemeBorderHover('40')} transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${getThemeShadowHover('20')} overflow-hidden cursor-pointer`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                             
                                <div className={`absolute inset-0 bg-gradient-to-br ${gradient.from} ${gradient.to} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0`}></div>
                                
                        
                                <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradient.glow} ${getThemeGradientSolid('to', '400')} rounded-2xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 -z-10`}></div>
                                
                           
                                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${gradient.from} to-transparent rounded-tr-2xl opacity-20 z-0`}></div>
                                
                           
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none z-0"></div>
                                
                                <div className="relative z-30">
                                    {/* Icon Section */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${gradient.from} ${gradient.to} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg z-10`}>
                                            <div className={`w-3 h-3 rounded-full ${gradient.textColor} animate-pulse shadow-lg relative z-10`} style={{ boxShadow: `0 0 10px ${gradient.glowColor}` }}></div>
                                            <div className={`absolute inset-0 rounded-xl ${gradient.textColor} opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300 -z-10`}></div>
                                        </div>
                                
                                        <div className="flex items-center space-x-1 px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-sm z-10 relative">
                                            <svg className="w-3 h-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                            </svg>
                                            <span className="text-xs text-green-400 font-semibold">+12%</span>
                                        </div>
                                    </div>
                                    
                                    {/* Main Value */}
                                    <div className="mb-3 relative z-30">
                                        <p 
                                            className={`text-6xl font-extrabold ${gradient.textColor} mb-1 group-hover:scale-105 transition-transform duration-300 inline-block`}
                                            style={{ 
                                                textShadow: `0 0 20px ${gradient.glowColor}, 0 0 40px ${gradient.glowColor}`,
                                                filter: 'none',
                                                WebkitTextStroke: '0px'
                                            }}
                                        >
                                            {stat.value}
                                        </p>
                                    </div>
                                    
                                    {/* Title */}
                                    <h3 className={`text-white text-lg font-bold mb-2 ${getThemeText('200').replace('text-', 'group-hover:text-')} transition-colors relative z-30`}>
                                        {stat.title}
                                    </h3>
                                    
                                    {/* Description */}
                                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors relative z-30">
                                        {stat.description}
                                    </p>
                                    
                                    {/* Progress Bar */}
                                    <div className="mt-5 relative z-30">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs font-medium" style={{ color: gradient.glowColor.replace('0.6', '0.8') }}>Progress</span>
                                            <span className="text-xs font-bold" style={{ color: gradient.glowColor.replace('0.6', '1') }}>
                                                {`${(index + 1) * 25}%`}
                                            </span>
                                        </div>
                                        <div 
                                            className="h-2.5 rounded-full overflow-hidden relative border"
                                            style={{ 
                                                backgroundColor: gradient.glowColor.replace('0.6', '0.15'),
                                                borderColor: gradient.glowColor.replace('0.6', '0.3')
                                            }}
                                        >
                                            <div 
                                                className="h-full rounded-full transition-all duration-1000 group-hover:w-full relative"
                                                style={{ 
                                                    width: `${(index + 1) * 25}%`,
                                                    background: `linear-gradient(90deg, ${gradient.glowColor.replace('0.6', '1')}, ${gradient.glowColor.replace('0.6', '0.7')})`,
                                                    boxShadow: `0 0 15px ${gradient.glowColor}, 0 0 30px ${gradient.glowColor.replace('0.6', '0.4')}, inset 0 0 10px ${gradient.glowColor.replace('0.6', '0.5')}`
                                                }}
                                            >
                                             
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full animate-pulse"></div>
                                              
                                                <div 
                                                    className="absolute inset-0 rounded-full opacity-50"
                                                    style={{
                                                        background: `radial-gradient(circle at center, ${gradient.glowColor.replace('0.6', '0.8')}, transparent)`,
                                                        animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                 
                    <div className="lg:col-span-2 group relative">
                    
                        <div className={`absolute -inset-0.5 bg-gradient-to-r ${getThemeGradient('from', '600', '20')} ${getThemeGradient('via', '500', '20')} ${getThemeGradient('to', '600', '20')} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10`}></div>
                        
                    
                        <div className={`relative bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-800/60 backdrop-blur-2xl rounded-3xl p-6 md:p-8 border ${getThemeBorder('20')} shadow-2xl ${getThemeShadowHover('20')} ${getThemeBorderHover('30')} transition-all duration-500 overflow-hidden`}>
                         
                            <div className="absolute inset-0 opacity-0">
                                <div 
                                    className="absolute inset-0 bg-[size:1.5rem_1.5rem]"
                                    style={{
                                        backgroundImage: `linear-gradient(to right, ${currentTheme.hex.primary} 1px, transparent 1px), linear-gradient(to bottom, ${currentTheme.hex.primary} 1px, transparent 1px)`
                                    }}
                                ></div>
                            </div>
                            
                           
                            <div className={`absolute top-0 right-0 w-64 h-64 ${getThemeBg('5')} rounded-full blur-3xl`}></div>
                            <div className={`absolute bottom-0 left-0 w-64 h-64 ${getThemeBg('5')} rounded-full blur-3xl`}></div>
                            
                            <div className="relative z-10">
                             
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center space-x-3">
                                        <div 
                                            className={`w-10 h-10 rounded-xl ${currentTheme.colors.button} flex items-center justify-center`}
                                            style={{
                                                borderColor: `${currentTheme.hex.primary}4D`,
                                                borderWidth: '1px',
                                                borderStyle: 'solid'
                                            }}
                                        >
                                            <svg className={`w-5 h-5 ${getThemeText('300')}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-white">Aktivitas Terkini</h2>
                                            <p className="text-xs text-gray-400 mt-0.5">Update terbaru dari sistem</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                                        <span className="text-xs text-green-400 font-medium">Live</span>
                                    </div>
                                </div>
                                
                                {/* Activities List */}
                                <div className="space-y-3">
                                    {recentActivities.map((activity, index) => {
                                        const typeColors = {
                                            success: { bg: 'bg-green-500', glow: 'rgba(34, 197, 94, 0.4)' },
                                            warning: { bg: 'bg-yellow-500', glow: 'rgba(234, 179, 8, 0.4)' },
                                            info: { bg: 'bg-blue-500', glow: 'rgba(59, 130, 246, 0.4)' }
                                        };
                                        const color = typeColors[activity.type] || typeColors.info;
                                        
                                        return (
                                            <div
                                                key={activity.id}
                                                className={`group/item relative flex items-start space-x-4 p-4 bg-gradient-to-r from-gray-800/40 to-gray-800/20 rounded-2xl hover:from-gray-800/60 hover:to-gray-800/40 transition-all duration-300 border border-gray-700/30 ${getThemeBorderHover('40')} hover:shadow-xl ${getThemeShadowHover('10')} cursor-pointer overflow-hidden`}
                                                style={{ animationDelay: `${index * 100}ms` }}
                                            >
                                                {/* Shine Effect */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/item:translate-x-full transition-transform duration-1000"></div>
                                                
                                                {/* Status Indicator */}
                                                <div className="relative flex-shrink-0 mt-1 z-10">
                                                    <div className={`w-4 h-4 rounded-full ${color.bg} group-hover/item:scale-125 transition-transform duration-300`} style={{ boxShadow: `0 0 12px ${color.glow}` }}></div>
                                                    <div className={`absolute inset-0 w-4 h-4 rounded-full ${color.bg} opacity-30 group-hover/item:opacity-60 group-hover/item:scale-200 transition-all duration-300 animate-ping`}></div>
                                                </div>
                                                
                                                {/* Content */}
                                                <div className="flex-1 min-w-0 relative z-10">
                                                    <p className={`text-white font-semibold ${getThemeText('200').replace('text-', 'group-hover/item:text-')} transition-colors`}>{activity.activity}</p>
                                                    <div className="flex items-center space-x-2 mt-1.5">
                                                        <svg className="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        <p className="text-gray-400 text-xs group-hover/item:text-gray-300 transition-colors">{activity.time}</p>
                                                    </div>
                                                </div>
                                                
                                                {/* Arrow Icon */}
                                                <div className="flex-shrink-0 mt-1 relative z-10">
                                                    <div className={`w-8 h-8 rounded-lg bg-gray-800/50 ${getThemeBg('20').replace('bg-', 'group-hover/item:bg-')} flex items-center justify-center transition-all duration-300 group-hover/item:scale-110`}>
                                                        <svg className={`w-4 h-4 text-gray-400 ${getThemeText('300').replace('text-', 'group-hover/item:text-')} group-hover/item:translate-x-0.5 transition-all duration-300`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </div>
                                                </div>
                                         </div>
                                        );
                                    })}
                                </div>
                                
                                {/* View All Button */}
                                <button 
                                    className="mt-6 w-full py-3.5 font-semibold rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group/btn border transition-all duration-300"
                                    style={{
                                        color: currentTheme.hex.secondary,
                                        borderColor: `${currentTheme.hex.primary}33`,
                                        backgroundColor: `${currentTheme.hex.primary}08`
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = currentTheme.hex.primary;
                                        e.currentTarget.style.borderColor = `${currentTheme.hex.primary}66`;
                                        e.currentTarget.style.backgroundColor = `${currentTheme.hex.primary}14`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = currentTheme.hex.secondary;
                                        e.currentTarget.style.borderColor = `${currentTheme.hex.primary}33`;
                                        e.currentTarget.style.backgroundColor = `${currentTheme.hex.primary}08`;
                                    }}
                                >
                                    <span>Lihat Semua Aktivitas</span>
                                    <svg 
                                        className="w-4 h-4 group-hover/btn:translate-x-1 transition-all duration-300" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor"
                                        style={{
                                            color: 'inherit'
                                        }}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="group relative">
                    
                        <div className={`absolute -inset-0.5 bg-gradient-to-r ${getThemeGradient('from', '600', '20')} ${getThemeGradient('via', '500', '20')} ${getThemeGradient('to', '600', '20')} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10`}></div>
                        <div className={`relative bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-800/60 backdrop-blur-2xl rounded-3xl p-6 md:p-8 border ${getThemeBorder('20')} shadow-2xl ${getThemeShadowHover('20')} ${getThemeBorderHover('30')} transition-all duration-500 overflow-hidden`}>
                            <div className="absolute inset-0 opacity-0">
                                <div 
                                    className="absolute inset-0 bg-[size:1.5rem_1.5rem]"
                                    style={{
                                        backgroundImage: `linear-gradient(to right, ${currentTheme.hex.primary} 1px, transparent 1px), linear-gradient(to bottom, ${currentTheme.hex.primary} 1px, transparent 1px)`
                                    }}
                                ></div>
                            </div>
                            
                            {/* Gradient Overlay */}
                            <div className={`absolute top-0 left-0 w-64 h-64 ${getThemeBg('5')} rounded-full blur-3xl`}></div>
                            
                            <div className="relative z-10">
                                {/* Header */}
                                <div className="mb-8">
                                    <div className="flex items-center space-x-3 mb-2">
                                        <div 
                                            className={`w-10 h-10 rounded-xl ${currentTheme.colors.button} flex items-center justify-center`}
                                            style={{
                                                borderColor: `${currentTheme.hex.primary}4D`,
                                                borderWidth: '1px',
                                                borderStyle: 'solid'
                                            }}
                                        >
                                            <svg className={`w-5 h-5 ${getThemeText('300')}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-white">Quick Actions</h2>
                                            <p className="text-xs text-gray-400 mt-0.5">Akses cepat ke fitur utama</p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Actions List */}
                                <div className="space-y-3">
                                    <button className={`group/btn relative w-full px-4 py-4 text-white rounded-2xl font-semibold transition-all duration-300 text-left flex items-center justify-between shadow-xl ${getThemeShadow('40')} ${getThemeShadowHover('60')} hover:scale-[1.02] overflow-hidden`}>
                                        <div 
                                            className="absolute inset-0 rounded-2xl z-0 transition-all duration-300"
                                            style={{
                                                background: `linear-gradient(to right, ${currentTheme.hex.primary}, ${currentTheme.hex.secondary}, ${currentTheme.hex.primary})`
                                            }}
                                        ></div>
                                        
                                   
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 rounded-2xl z-0"></div>
                                        
                                        <span className="relative z-10 flex items-center space-x-3">
                                            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover/btn:scale-110 transition-transform">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <span>Review Pengajuan</span>
                                        </span>
                                        <svg className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </button>
                                    
                                    {[
                                        { name: 'Lihat Laporan', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
                                        { name: 'Generate Key', icon: 'M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z' },
                                        { name: 'Pengaturan', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z' }
                                    ].map((action, index) => (
                                        <button 
                                            key={index}
                                            className={`group/btn relative w-full px-4 py-4 bg-gradient-to-r from-gray-800/50 to-gray-800/30 hover:from-gray-800/70 hover:to-gray-800/50 text-white rounded-2xl font-semibold transition-all duration-300 text-left flex items-center justify-between border border-gray-700/50 ${getThemeBorderHover('40')} hover:shadow-xl ${getThemeShadowHover('10')} hover:scale-[1.02] overflow-hidden`}
                                        >
                                        
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                                            
                                            <span className="relative z-10 flex items-center space-x-3">
                                                <div 
                                                    className={`w-10 h-10 rounded-xl bg-gray-700/50 ${getThemeBg('20').replace('bg-', 'group-hover/btn:bg-')} flex items-center justify-center transition-all duration-300 group-hover/btn:scale-110`}
                                                    style={{
                                                        borderColor: `${currentTheme.hex.primary}80`
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.borderColor = `${currentTheme.hex.primary}CC`;
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.borderColor = `${currentTheme.hex.primary}80`;
                                                    }}
                                                >
                                                    <svg className={`w-5 h-5 text-gray-400 ${getThemeText('300').replace('text-', 'group-hover/btn:text-')} transition-colors`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={action.icon} />
                                                    </svg>
                                                </div>
                                                <span>{action.name}</span>
                                            </span>
                                            <svg className={`w-5 h-5 relative z-10 ${getThemeText('500')} ${getThemeText('400').replace('text-', 'group-hover/btn:text-')} group-hover/btn:translate-x-1 transition-all duration-300`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Chart Section Placeholder */}
                <div className={`bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-xl rounded-2xl p-6 border ${getThemeBorder('20')} shadow-xl hover:shadow-2xl ${getThemeShadowHover('10')} transition-all duration-300`}>
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
                            <button className={`px-3 py-1.5 text-xs font-medium ${getThemeText('300')} ${getThemeBg('20')} rounded-lg ${getThemeBg('30').replace('bg-', 'hover:bg-')} transition-colors`}>
                                Bulan
                            </button>
                            <button className="px-3 py-1.5 text-xs font-medium text-gray-400 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-colors">
                                Tahun
                            </button>
                        </div>
                    </div>
                    <div className="h-64 flex items-center justify-center bg-gradient-to-br from-gray-800/30 to-gray-800/20 rounded-xl border border-gray-700/30 relative overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-r ${getThemeGradient('from', '500', '5')} via-transparent ${getThemeGradient('to', '500', '5')}`}></div>
                        <div className="relative z-10 flex flex-col items-center space-y-2" style={{ color: currentTheme.hex.secondary }}>
                            <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'inherit' }}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            <p className="text-sm" style={{ color: 'inherit' }}>Chart akan ditampilkan di sini</p>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    );
};

export default DashboardAdmin;