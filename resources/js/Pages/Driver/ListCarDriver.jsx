import React from "react";
import { Link } from "@inertiajs/react";

export default function ListCarDriver() {
  const vehicles = [
    {
      id: 1,
      name: "Nissan Terrano 2014",
      status: "Fatal",
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
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4 md:p-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Back Button */}
        <Link
          href="/driver/dashboard"
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

        {/* Tambah Data Kendaraan Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 mb-8 overflow-hidden hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-500/20 animate-fade-in">
          <div className="flex flex-col sm:flex-row">

            <div className="flex-1 p-8 flex flex-col justify-center">
              <h2 className="text-white text-3xl font-bold mb-6 drop-shadow-lg">
                Tambah Data Kendaraan
              </h2>
              <Link
                href="/driver/report"
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-gray-900 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 active:scale-95 w-fit"
              >
                <span>Tambah</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
              </Link>
            </div>

            <div className="sm:w-1/2 h-64 sm:h-auto">
              <img
                className="h-full w-full object-cover"
                src="https://userimg-assets-eu.customeriomail.com/images/client-env-107673/1726825864979_how-to-set-up-a-car-showroom-for-your-dealership-6_01J87DF81XF3E6E2DPHE4RC3AR.jpg"
                alt="Car Showroom"
              />
            </div>
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

                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg mb-3 group-hover:text-blue-300 transition-colors">
                    {vehicle.name}
                  </h3>
                  <div className={`inline-flex items-center gap-2 ${vehicle.status === "Fatal"
                    ? "bg-red-500/20 border-red-500/30 text-red-300"
                    : "bg-yellow-500/20 border-yellow-500/30 text-yellow-300"
                    } border font-bold text-sm px-4 py-2 rounded-full backdrop-blur-sm`}>
                    <span className={`w-2 h-2 ${vehicle.status === "Fatal" ? "bg-red-400" : "bg-yellow-400"
                      } rounded-full animate-pulse`}></span>
                    Status: {vehicle.status}
                  </div>
                </div>


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
