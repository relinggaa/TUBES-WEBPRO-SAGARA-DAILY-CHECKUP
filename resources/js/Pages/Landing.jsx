import React, { useEffect, useRef } from 'react';
import Lanyard from '../components/Lanyard/Relingga/Lanyard';
import LanyardAriq from '../components/Lanyard/Ariq/LanyardAriq';
import TextType from '../components/TextType';
export default function Landing() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Create floating particles
        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.opacity = Math.random() * 0.3 + 0.1;
                this.color = Math.random() > 0.7 ? '#DC2626' : '#FFFFFF';
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.opacity;
                ctx.fill();
                ctx.globalAlpha = 1;
            }
        }

        // Initialize particles
        for (let i = 0; i < 50; i++) {
            particles.push(new Particle());
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw gradient background
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, '#0A0A0A');
            gradient.addColorStop(0.3, '#1A1A1A');
            gradient.addColorStop(0.6, '#0F0F0F');
            gradient.addColorStop(1, '#000000');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw animated gradient orbs
            const time = Date.now() * 0.0005;
            const orb1 = {
                x: canvas.width * 0.2 + Math.sin(time) * 100,
                y: canvas.height * 0.3 + Math.cos(time) * 80,
                radius: 300 + Math.sin(time * 0.5) * 50
            };
            const orb2 = {
                x: canvas.width * 0.8 + Math.cos(time * 0.7) * 120,
                y: canvas.height * 0.7 + Math.sin(time * 0.7) * 100,
                radius: 250 + Math.cos(time * 0.6) * 40
            };

            // Red orb
            const gradient1 = ctx.createRadialGradient(orb1.x, orb1.y, 0, orb1.x, orb1.y, orb1.radius);
            gradient1.addColorStop(0, 'rgba(220, 38, 38, 0.15)');
            gradient1.addColorStop(0.5, 'rgba(220, 38, 38, 0.08)');
            gradient1.addColorStop(1, 'rgba(220, 38, 38, 0)');
            ctx.fillStyle = gradient1;
            ctx.beginPath();
            ctx.arc(orb1.x, orb1.y, orb1.radius, 0, Math.PI * 2);
            ctx.fill();

            // White orb
            const gradient2 = ctx.createRadialGradient(orb2.x, orb2.y, 0, orb2.x, orb2.y, orb2.radius);
            gradient2.addColorStop(0, 'rgba(255, 255, 255, 0.1)');
            gradient2.addColorStop(0.5, 'rgba(255, 255, 255, 0.05)');
            gradient2.addColorStop(1, 'rgba(255, 255, 255, 0)');
            ctx.fillStyle = gradient2;
            ctx.beginPath();
            ctx.arc(orb2.x, orb2.y, orb2.radius, 0, Math.PI * 2);
            ctx.fill();

            // Draw grid pattern
            // ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
            // ctx.lineWidth = 1;
            // const gridSize = 50;
            // for (let x = 0; x < canvas.width; x += gridSize) {
            //     ctx.beginPath();
            //     ctx.moveTo(x, 0);
            //     ctx.lineTo(x, canvas.height);
            //     ctx.stroke();
            // }
            // for (let y = 0; y < canvas.height; y += gridSize) {
            //     ctx.beginPath();
            //     ctx.moveTo(0, y);
            //     ctx.lineTo(canvas.width, y);
            //     ctx.stroke();
            // }

            // Update and draw particles
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            {/* Animated Background Canvas */}
            <canvas
                ref={canvasRef}
                className="fixed inset-0 w-full h-full -z-10"
                style={{ background: '#000000' }}
            />

            {/* Animated Gradient Overlays */}
            <div className="fixed inset-0 -z-10">
                {/* Red gradient accent */}
                <div 
                    className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse"
                    style={{
                        background: 'radial-gradient(circle, rgba(220, 38, 38, 0.4), transparent 70%)',
                        animation: 'float-orb 8s ease-in-out infinite'
                    }}
                ></div>
                
                {/* White gradient accent */}
                <div 
                    className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10"
                    style={{
                        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3), transparent 70%)',
                        animation: 'float-orb-reverse 10s ease-in-out infinite'
                    }}
                ></div>

                {/* Animated lines */}
                {/* <div className="absolute inset-0 overflow-hidden">
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-full h-px opacity-10"
                            style={{
                                background: `linear-gradient(to right, transparent, ${i % 2 === 0 ? '#DC2626' : '#FFFFFF'}, transparent)`,
                                top: `${20 + i * 20}%`,
                                transform: `translateX(${Math.sin(Date.now() * 0.001 + i) * 50}px)`,
                                animation: `slide-line ${5 + i}s ease-in-out infinite`,
                                animationDelay: `${i * 0.5}s`
                            }}
                        ></div>
                    ))}
                </div> */}
            </div>

            {/* Geometric Shapes */}
            <div className="fixed inset-0 -z-10 pointer-events-none">
                {/* Large circle */}
                <div 
                    className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full border opacity-5"
                    style={{
                        borderColor: '#DC2626',
                        animation: 'rotate-slow 20s linear infinite'
                    }}
                ></div>
                
                {/* Medium circle */}
                <div 
                    className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full border opacity-5"
                    style={{
                        borderColor: '#FFFFFF',
                        animation: 'rotate-slow-reverse 15s linear infinite'
                    }}
                ></div>

                {/* Small circles */}
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 rounded-full opacity-20"
                        style={{
                            backgroundColor: i % 2 === 0 ? '#DC2626' : '#FFFFFF',
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `pulse-dot ${2 + Math.random() * 2}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 2}s`
                        }}
                    ></div>
                ))}
            </div>

            {/* Lanyard Components */}
            <div className="relative z-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 px-4 md:px-8 py-0">
                <div style={{ zIndex:9999}} className="flex items-start justify-center h-screen pt-0">
                    <Lanyard position={[0, 2, 20]} gravity={[0, -40, 0]} />
                </div>
                
                {/* Center Text */}
                <div style={{ zIndex:-9999}} className="flex items-center justify-center min-h-screen">
                    <div className="text-center space-y-5 px-4">
                        <TextType 
                            text={["Project Tugas Besar", "Perancangan Dan Pemrogaman Web", "Kelompok Sagara","Devoloped By :","Relingga Aditya","Ariq Hisyam Nabil"]}
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

            {/* CSS Animations */}
            <style>{`
                @keyframes float-orb {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                    }
                    50% {
                        transform: translate(50px, -50px) scale(1.1);
                    }
                }
                
                @keyframes float-orb-reverse {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                    }
                    50% {
                        transform: translate(-50px, 50px) scale(1.1);
                    }
                }
                
                @keyframes slide-line {
                    0%, 100% {
                        transform: translateX(-100px);
                        opacity: 0.1;
                    }
                    50% {
                        transform: translateX(100px);
                        opacity: 0.2;
                    }
                }
                
                @keyframes rotate-slow {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
                
                @keyframes rotate-slow-reverse {
                    0% {
                        transform: rotate(360deg);
                    }
                    100% {
                        transform: rotate(0deg);
                    }
                }
                
                @keyframes pulse-dot {
                    0%, 100% {
                        opacity: 0.2;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 0.5;
                        transform: scale(1.5);
                    }
                }
            `}</style>
        </div>
    );
}
