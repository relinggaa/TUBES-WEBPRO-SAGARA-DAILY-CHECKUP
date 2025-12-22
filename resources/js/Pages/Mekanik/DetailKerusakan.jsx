import React, { useState } from "react";
import { Link } from "@inertiajs/react";

export default function DetailKerusakan() {
    const [kendalaList, setKendalaList] = useState([
        { id: 1, text: "AC Tidak dingin", checked: true },
        { id: 2, text: "Mesin Cepat panas", checked: true },
        { id: 3, text: "Air radiator hampir habis", checked: true },
        { id: 4, text: "Suara mesin kasar", checked: false },
    ]);

    const toggleKendala = (id) => {
        setKendalaList(
            kendalaList.map((item) =>
                item.id === id ? { ...item, checked: !item.checked } : item
            )
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4 md:p-6 relative overflow-hidden pb-24">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-md mx-auto relative z-10">
                {/* tombol back */}
                <Link
                    href="/mekanik/dashboard"
                    className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full mb-6 border border-white/10 hover:bg-white/15 transition-all duration-300 hover:scale-110 shadow-xl"
                >
                    <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </Link>

                {/* glassmorphism */}
                <div className="bg-white/10 backdrop-blur-xl rounded-[28px] p-6 shadow-2xl border border-white/10 mb-6 animate-fade-in">
                    {/* Car Header */}
                    <div className="flex justify-between items-start mb-5">
                        <div className="flex-1">
                            <h1 className="text-white text-xl font-bold mb-2">
                                Nissan Terrano 2014
                            </h1>
                            <div className="inline-flex items-center gap-1.5 bg-red-500/20 border border-red-500/30 text-red-300 font-semibold text-xs px-3 py-1.5 rounded-full backdrop-blur-sm">
                                <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse"></span>
                                Status: FATAL
                            </div>
                        </div>

                        {/* Car Image sama plat*/}
                        <div className="flex flex-col items-end ml-4">
                            <div className="w-24 h-20 mb-2 rounded-2xl overflow-hidden bg-white/60 backdrop-blur-sm border border-blue-300/40 p-2">
                                <img
                                    src="https://blog.gaadikey.com/wp-content/uploads/2017/01/Nissan-Terrano-2017-Edition.jpg"
                                    alt="Nissan Terrano"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <p className="text-white font-semibold text-xs bg-white/10 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                                B 4121 QQ
                            </p>
                        </div>
                    </div>

                    {/* Description Section */}
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-3.5 mb-5 border border-blue-300/40">
                        <p className="text-gray-900 text-sm">
                            Itu kayanya kurang oli deh
                        </p>
                    </div>

                    {/* Kendala Section */}
                    <div className="mb-5">
                        <h2 className="text-white text-base font-bold mb-4">
                            Kendala
                        </h2>
                        <div className="space-y-2.5">
                            {kendalaList.map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => toggleKendala(item.id)}
                                    className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-2xl p-3.5 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                                >
                                    <div
                                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 flex-shrink-0 ${item.checked
                                            ? "bg-blue-500 border-blue-400 shadow-lg shadow-blue-500/50"
                                            : "bg-white/10 border-white/30"
                                            }`}
                                    >
                                        {item.checked && (
                                            <svg
                                                className="w-3 h-3 text-gray-900"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={3}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        )}
                                    </div>
                                    <span
                                        className={`text-sm font-medium transition-colors ${item.checked ? "text-white" : "text-blue-200"
                                            }`}
                                    >
                                        {item.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="space-y-2.5">
                        <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-gray-900 font-semibold py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                            Mark As Pending
                        </button>
                        <a href="/mekanik/bill">
                            <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-gray-900 font-semibold py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                                Upload Bill
                            </button>
                        </a>
                    </div>
                </div>


                <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-gray-900 font-bold py-4 rounded-full shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-300 animate-slide-up">
                    Done
                </button>
            </div>

            <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out backwards;
        }

        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
        </div>
    );
}
