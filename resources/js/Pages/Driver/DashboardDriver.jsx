import React from "react";
import { Link } from "@inertiajs/react";

export default function DashboardDriver() {
  const vehicles = [
    {
      id: 1,
      name: "Nissan Terrano 2014",
      status: "Normal",
      plate: "B 4121 QQ",
      image: "https://blog.gaadikey.com/wp-content/uploads/2017/01/Nissan-Terrano-2017-Edition.jpg",
    },
    {
      id: 2,
      name: "Toyota Fortuner 2012",
      status: "Perbaikan",
      plate: "B 4317 SLK",
      image: "https://auto2000.co.id/mobil-baru-toyota/_next/image?url=https%3A%2F%2Ftsoimageprod.azureedge.net%2Fstatic-content%2Fprod%2F360degview%2FFORTUNER_IMPROVEMENT%2FExterior_360%2Fwhite.png&w=1920&q=75",
    },
    {
      id: 3,
      name: "Toyota Fortuner 2012",
      status: "Pengajuan Perbaikan",
      plate: "B 4317 SLK",
      image: "https://auto2000.co.id/mobil-baru-toyota/_next/image?url=https%3A%2F%2Ftsoimageprod.azureedge.net%2Fstatic-content%2Fprod%2F360degview%2FFORTUNER_IMPROVEMENT%2FExterior_360%2Fwhite.png&w=1920&q=75",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4 md:p-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-md mx-auto relative z-10">
        {/* Profile Card - Enhanced Glass Blur */}
        <div className="relative bg-gradient-to-br from-blue-500/20 via-blue-600/10 to-purple-500/20 backdrop-blur-2xl rounded-[32px] p-8 mb-8 shadow-2xl border border-white/30 overflow-hidden animate-fade-in">
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-transparent to-cyan-400/5 pointer-events-none"></div>

          {/* Animated glow effect */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-700"></div>

          <div className="relative flex flex-col items-center">
            {/* Profile Image with Gradient Border */}
            <div className="relative mb-6">
              {/* Gradient border ring */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500 rounded-full blur-sm opacity-75 animate-pulse"></div>

              {/* Image container */}
              <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-white/40 shadow-2xl backdrop-blur-sm">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_qydwbyfzBseOkXvF2to4jax9f5yN6unb5g&s"
                  alt="Profile picture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Name */}
            <h4 className="text-white text-3xl font-bold mb-2 drop-shadow-2xl tracking-tight">
              Marc Silvester
            </h4>

            {/* Date with Icon */}
            <div className="flex items-center gap-2 mb-8 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-blue-200 text-sm font-medium">
                17/Maret/2025
              </p>
            </div>

            {/* Tambah Kendaraan Button - Gradient */}
            <Link href="/driver/listcar" className="w-full">
              <button className="group relative w-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 text-white font-bold px-6 py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden">
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>

                <div className="relative flex items-center justify-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <span className="text-lg">Tambah Kendaraan</span>
                </div>
              </button>
            </Link>
          </div>
        </div>

        {/* Vehicle Cards */}
        <div className="space-y-5">
          {vehicles.map((vehicle, index) => (
            <div
              key={vehicle.id}
              className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-500/30 group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-start">
                {/* Vehicle Info */}
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg mb-3 group-hover:text-blue-300 transition-colors">
                    {vehicle.name}
                  </h3>
                  <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 text-blue-300 font-bold text-sm px-4 py-2 rounded-full backdrop-blur-sm">
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                    Status: {vehicle.status}
                  </div>
                </div>

                {/* Vehicle Image and Plate */}
                <div className="flex flex-col items-end ml-4">
                  <div className="w-28 h-20 mb-3 rounded-lg overflow-hidden bg-white/60 backdrop-blur-sm border border-blue-300/40 p-2 hover:scale-110 transition-transform duration-300">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-white font-bold text-sm bg-white/10 px-4 py-2 rounded-lg border border-white/20 backdrop-blur-sm">
                    {vehicle.plate}
                  </p>
                </div>
              </div>
            </div>
          ))}
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
