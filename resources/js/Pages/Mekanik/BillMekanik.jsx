import React, { useState } from "react";
import { Link } from "@inertiajs/react";

export default function BillMekanik() {
    const [selectedKendala] = useState([
        { id: 1, name: "AC Tidak Dingin" },
        { id: 2, name: "Mesin Cepat Panas" },
        { id: 3, name: "Air Radiator Udah Mau Habis" },
    ]);

    const [billData, setBillData] = useState(
        selectedKendala.map((item) => ({
            id: item.id,
            name: item.name,
            nominal: "",
            sparepart: "",
        }))
    );

    const handleInputChange = (id, field, value) => {
        setBillData(
            billData.map((item) =>
                item.id === id ? { ...item, [field]: value } : item
            )
        );
    };

    const handleSubmit = () => {
        console.log("Bill Data:", billData);
        // Handle submit logic here
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4 md:p-6 relative overflow-hidden pb-24">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-md mx-auto relative z-10">
                {/* Back Button */}
                <Link
                    href="/mekanik/detailkerusakan"
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


                <div className="bg-white/10 backdrop-blur-xl rounded-[28px] p-6 shadow-2xl border border-white/10 mb-6 animate-fade-in">

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

                    {/* Kendala Yang Dipilih Section */}
                    <div className="mb-5">
                        <h2 className="text-white text-base font-bold mb-4">
                            Kendala Yang Dipilih
                        </h2>

                        <div className="space-y-4">
                            {billData.map((item, index) => (
                                <div
                                    key={item.id}
                                    className="space-y-3 animate-slide-up"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    {/* nama kendala*/}
                                    <div className="flex items-center gap-2">
                                        <div className="w-5 h-5 rounded-full bg-blue-500 border-2 border-blue-400 shadow-lg shadow-blue-500/50 flex items-center justify-center flex-shrink-0">
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
                                        </div>
                                        <span className="text-white font-medium text-sm">
                                            {item.name}
                                        </span>
                                    </div>

                                    <div className="space-y-2.5 pl-7">
                                        {/* Nominal Input */}
                                        <input
                                            type="text"
                                            placeholder="Masukkan Nominal Rp"
                                            value={item.nominal}
                                            onChange={(e) =>
                                                handleInputChange(item.id, "nominal", e.target.value)
                                            }
                                            className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-4 py-3 text-white text-sm placeholder-blue-200/50 focus:bg-white/10 focus:border-blue-400/50 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                                        />

                                        {/* Sparepart/Maintenance Input */}
                                        <input
                                            type="text"
                                            placeholder="Nama Sparepart/Maintanance Yang Dilakukan"
                                            value={item.sparepart}
                                            onChange={(e) =>
                                                handleInputChange(item.id, "sparepart", e.target.value)
                                            }
                                            className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-4 py-3 text-white text-sm placeholder-blue-200/50 focus:bg-white/10 focus:border-blue-400/50 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Fixed Bottom Button */}
                <div className="fixed bottom-6 left-0 right-0 px-4 md:px-6">
                    <div className="max-w-md mx-auto">
                        <button
                            onClick={handleSubmit}
                            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-gray-900 font-bold py-4 rounded-full shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
                        >
                            Send
                        </button>
                    </div>
                </div>
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
