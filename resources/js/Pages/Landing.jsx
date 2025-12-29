import React from 'react';
import { Link } from '@inertiajs/react';
import Lanyard from '../components/Lanyard/Relingga/Lanyard';
import LanyardAriq from '../components/Lanyard/Ariq/LanyardAriq';
import TextType from '../components/TextType';
import Aurora from '../components/Aurora';

export default function Landing() {
    return (
        <div className="relative w-full min-h-screen overflow-hidden" style={{ background: '#000000' }}>
            {/* Aurora Background */}
            <div className="fixed inset-0 w-full h-full" style={{ zIndex: 0, pointerEvents: 'none' }}>
                <Aurora
                    colorStops={["#AA2B1D", "#FFFFFF", "#AA2B1D"]}
                    blend={0.5}
                    amplitude={2.0}
                    speed={0.5}
                />
            </div>

            {/* Lanyard Components */}
            <div className="relative z-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 px-4 md:px-8 py-0">
                <div style={{ zIndex: 9999 }} className="flex items-start justify-center h-screen pt-0">
                    <Lanyard position={[0, 2, 20]} gravity={[0, -40, 0]} />
                </div>

                {/* Center Text */}
                <div style={{ zIndex: 100 }} className="flex flex-col items-center justify-center min-h-screen pointer-events-auto">
                    <div className="text-center mb-12 transform hover:scale-105 transition-transform duration-500 cursor-default">
                        <TextType
                            text={["Project Tugas Besar", "Perancangan Dan Pemrogaman Web", "Kelompok Sagara", "Devoloped By ", "Relingga Aditya", "Ariq Hisyam Nabil"]}
                            typingSpeed={75}
                            pauseDuration={2000}
                            showCursor={true}
                            cursorCharacter="|"
                            className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-red-200 to-red-500 drop-shadow-[0_0_15px_rgba(170,43,29,0.5)]"
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-2xl px-4 animate-fade-in-up">
                        <Link
                            href="/admin/login"
                            className="group relative px-6 py-3 overflow-hidden rounded-xl bg-black/40 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:border-[#AA2B1D]/50 hover:shadow-[0_0_20px_rgba(170,43,29,0.3)] hover:-translate-y-1"
                        >
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#AA2B1D]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative flex items-center justify-center gap-3">
                                <span className="p-2 rounded-lg bg-white/5 group-hover:bg-[#AA2B1D]/20 transition-colors">
                                    <svg className="w-5 h-5 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </span>
                                <span className="text-white font-medium tracking-wide group-hover:text-red-100 transition-colors">Admin</span>
                            </div>
                        </Link>

                        <Link
                            href="/mekanik/login"
                            className="group relative px-6 py-3 overflow-hidden rounded-xl bg-black/40 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:border-[#AA2B1D]/50 hover:shadow-[0_0_20px_rgba(170,43,29,0.3)] hover:-translate-y-1"
                        >
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#AA2B1D]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative flex items-center justify-center gap-3">
                                <span className="p-2 rounded-lg bg-white/5 group-hover:bg-[#AA2B1D]/20 transition-colors">
                                    <svg className="w-5 h-5 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </span>
                                <span className="text-white font-medium tracking-wide group-hover:text-red-100 transition-colors">Mekanik</span>
                            </div>
                        </Link>

                        <Link
                            href="/driver/login"
                            className="group relative px-6 py-3 overflow-hidden rounded-xl bg-black/40 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:border-[#AA2B1D]/50 hover:shadow-[0_0_20px_rgba(170,43,29,0.3)] hover:-translate-y-1"
                        >
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#AA2B1D]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative flex items-center justify-center gap-3">
                                <span className="p-2 rounded-lg bg-white/5 group-hover:bg-[#AA2B1D]/20 transition-colors">
                                    <svg className="w-5 h-5 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                    </svg>
                                </span>
                                <span className="text-white font-medium tracking-wide group-hover:text-red-100 transition-colors">Driver</span>
                            </div>
                        </Link>
                    </div>

                    <style jsx>{`
                        @keyframes fade-in-up {
                            from {
                                opacity: 0;
                                transform: translateY(20px);
                            }
                            to {
                                opacity: 1;
                                transform: translateY(0);
                            }
                        }
                        .animate-fade-in-up {
                            animation: fade-in-up 0.8s ease-out 1s backwards;
                        }
                    `}</style>
                </div>

                <div style={{ zIndex: 9999 }} className="flex items-start justify-center h-screen pt-0">
                    <LanyardAriq position={[0, 2, 20]} gravity={[0, -40, 0]} />
                </div>
            </div>

        </div>
    );
}
