import React, { useState } from "react";
import { Link } from "@inertiajs/react";

export default function ReportDriver() {
  const [kendalaList, setKendalaList] = useState([
    { id: 1, name: "Kendala 1", description: "Deskripsi kendala 1" },
    { id: 2, name: "Kendala 2", description: "Deskripsi kendala 2" },
  ]);

  const removeKendala = (id) => {
    setKendalaList(kendalaList.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4 md:p-8 relative overflow-hidden">

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Back Button */}
        <Link
          href="/driver/listcar"
          className="inline-flex items-center justify-center w-14 h-14 bg-white/10 backdrop-blur-xl rounded-full mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-110 shadow-2xl group"
        >
          <svg
            className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </Link>


        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 mb-6 animate-fade-in">
          {/* Plat Nomor Input */}
          <div className="mb-6">
            <label htmlFor="credit-card" className="block text-white font-medium mb-3 drop-shadow-lg">
              Masukkan Plat Nomor
            </label>
            <input
              type="text"
              id="credit-card"
              name="credit-card"
              className="block w-full rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm py-4 px-4 text-white placeholder-blue-200 shadow-lg outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/30 transition-all"
              placeholder="xx-xxxx-xx"
            />
          </div>

          {/* Catatan Input */}
          <div className="mb-6">
            <label htmlFor="phone" className="block text-white font-medium mb-3 drop-shadow-lg">
              Catatan
            </label>
            <textarea
              id="phone"
              name="inline-add-on"
              rows="4"
              className="block w-full rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm py-4 px-4 text-white placeholder-blue-200 shadow-lg outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/30 transition-all resize-none"
              placeholder="Masukkan Catatan"
            />
          </div>

          {/* Kendala Section */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-blue-300/40 mb-6">
            <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-gray-900 font-semibold py-3 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 active:scale-95 mb-6">
              Tambah Kendala
            </button>

            <div className="space-y-4">
              {kendalaList.map((item, index) => (
                <div
                  key={item.id}
                  className="flex items-start gap-4 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-blue-300/40 hover:bg-white/10 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <button
                    onClick={() => removeKendala(item.id)}
                    className="flex-shrink-0 mt-1 text-red-400 hover:text-red-300 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7h6m2 0H7m3-3h4"
                      />
                    </svg>
                  </button>
                  <div className="flex-1">
                    <span className="block text-gray-900 font-semibold mb-1">
                      {item.name}
                    </span>
                    <span className="block text-blue-700 text-sm">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-gray-900 font-bold px-10 py-4 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 active:scale-95 animate-slide-up">
            <span>Kirim Laporan</span>
            <svg
              className="w-6 h-6 group-hover:translate-x-1 transition-transform"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
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
