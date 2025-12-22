import React from 'react';
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
                <div style={{ zIndex:9999}} className="flex items-start justify-center h-screen pt-0">
                    <Lanyard position={[0, 2, 20]} gravity={[0, -40, 0]} />
                </div>
                
                {/* Center Text */}
                <div style={{ zIndex:-9999}} className="flex items-center justify-center min-h-screen">
                    <div className="text-center ">
                        <TextType 
                            text={["Project Tugas Besar", "Perancangan Dan Pemrogaman Web", "Kelompok Sagara","Devoloped By ","Relingga Aditya","Ariq Hisyam Nabil"]}
                            typingSpeed={75}
                            pauseDuration={2000}
                            showCursor={true}
                            cursorCharacter="|"
                            className="text-3xl md:text-4xl lg:text-5xl"
                          
                        />
                    </div>
                </div>
                
                <div style={{ zIndex:9999}} className="flex items-start justify-center h-screen pt-0">
                    <LanyardAriq  position={[0, 2, 20]} gravity={[0, -40, 0]} />
                </div>
            </div>

        </div>
    );
}
