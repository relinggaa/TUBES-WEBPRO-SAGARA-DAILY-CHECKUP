import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    const [themeColor, setThemeColor] = useState(() => {
        // Load from localStorage or default to 'purple'
        if (typeof window !== 'undefined') {
            return localStorage.getItem('adminThemeColor') || 'purple';
        }
        return 'purple';
    });

    const themeConfig = {
        purple: {
            name: 'Ungu',
            primary: 'purple',
            gradient: {
                from: 'from-gray-900',
                via: 'via-purple-900/20',
                to: 'to-gray-900',
            },
            colors: {
                bg: 'bg-purple-500/20',
                border: 'border-purple-500/20',
                text: 'text-purple-300',
                glow: 'shadow-purple-500/20',
                button: 'from-purple-600/30 to-purple-500/20',
                gradient: 'from-purple-500 via-purple-600 to-purple-700',
            },
            hex: {
                primary: '#8b5cf6',
                secondary: '#a855f7',
                glow: 'rgba(168, 85, 247, 0.2)',
            }
        },
        red: {
            name: 'Merah',
            primary: 'red',
            gradient: {
                from: 'from-gray-900',
                via: 'via-red-900/20',
                to: 'to-gray-900',
            },
            colors: {
                bg: 'bg-red-500/20',
                border: 'border-red-500/20',
                text: 'text-red-300',
                glow: 'shadow-red-500/20',
                button: 'from-red-600/30 to-red-500/20',
                gradient: 'from-red-500 via-red-600 to-red-700',
            },
            hex: {
                primary: '#ef4444',
                secondary: '#f87171',
                glow: 'rgba(239, 68, 68, 0.2)',
            }
        },
        blue: {
            name: 'Biru',
            primary: 'blue',
            gradient: {
                from: 'from-gray-900',
                via: 'via-blue-900/20',
                to: 'to-gray-900',
            },
            colors: {
                bg: 'bg-blue-500/20',
                border: 'border-blue-500/20',
                text: 'text-blue-300',
                glow: 'shadow-blue-500/20',
                button: 'from-blue-600/30 to-blue-500/20',
                gradient: 'from-blue-500 via-blue-600 to-blue-700',
            },
            hex: {
                primary: '#3b82f6',
                secondary: '#60a5fa',
                glow: 'rgba(59, 130, 246, 0.2)',
            }
        },
        green: {
            name: 'Hijau',
            primary: 'green',
            gradient: {
                from: 'from-gray-900',
                via: 'via-green-900/20',
                to: 'to-gray-900',
            },
            colors: {
                bg: 'bg-green-500/20',
                border: 'border-green-500/20',
                text: 'text-green-300',
                glow: 'shadow-green-500/20',
                button: 'from-green-600/30 to-green-500/20',
                gradient: 'from-green-500 via-green-600 to-green-700',
            },
            hex: {
                primary: '#22c55e',
                secondary: '#4ade80',
                glow: 'rgba(34, 197, 94, 0.2)',
            }
        },
        yellow: {
            name: 'Kuning',
            primary: 'yellow',
            gradient: {
                from: 'from-gray-900',
                via: 'via-yellow-900/20',
                to: 'to-gray-900',
            },
            colors: {
                bg: 'bg-yellow-500/20',
                border: 'border-yellow-500/20',
                text: 'text-yellow-300',
                glow: 'shadow-yellow-500/20',
                button: 'from-yellow-600/30 to-yellow-500/20',
                gradient: 'from-yellow-500 via-yellow-600 to-yellow-700',
            },
            hex: {
                primary: '#eab308',
                secondary: '#facc15',
                glow: 'rgba(234, 179, 8, 0.2)',
            }
        },
    };

    const changeTheme = (color) => {
        setThemeColor(color);
        if (typeof window !== 'undefined') {
            localStorage.setItem('adminThemeColor', color);
        }
    };

    const currentTheme = themeConfig[themeColor] || themeConfig.purple;

    useEffect(() => {
        // Apply theme to document root for CSS variables if needed
        if (typeof document !== 'undefined') {
            document.documentElement.setAttribute('data-theme', themeColor);
        }
    }, [themeColor]);

    return (
        <ThemeContext.Provider value={{ themeColor, changeTheme, currentTheme, themeConfig }}>
            {children}
        </ThemeContext.Provider>
    );
};
