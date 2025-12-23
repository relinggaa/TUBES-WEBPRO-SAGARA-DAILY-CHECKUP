import React, { useState } from "react";
import { Link } from "@inertiajs/react";

export default function DashboardMekanik() {
    const [showModal, setShowModal] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const handleUpload = () => {
        // Handle upload logic here
        console.log("Uploading file:", selectedFile);
        setShowModal(false);
        setSelectedFile(null);
        setPreviewUrl(null);
    };
    const cars = [
        {
            id: 1,
            name: "Nissan Terrano 2014",
            jadwal: "17/March/2025",
            status: "FATAL",
            plate: "B 4121 QQ",
            kerusakan: "Kayanya kurang oli deh",
            image: "https://blog.gaadikey.com/wp-content/uploads/2017/01/Nissan-Terrano-2017-Edition.jpg"
        },
        {
            id: 2,
            name: "Nissan Terrano 2014",
            jadwal: "18/March/2025",
            status: "FATAL",
            plate: "B 4121 QQ",
            kerusakan: "Kruk as nya kena kayanya",
            image: "https://blog.gaadikey.com/wp-content/uploads/2017/01/Nissan-Terrano-2017-Edition.jpg"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4 md:p-6 relative overflow-hidden pb-20">

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-md mx-auto relative z-10">
                <h1 className="text-white text-2xl font-bold mb-6 animate-fade-in">
                    Dashboard
                </h1>

                {/* Profile Card */}
                <div className="bg-white/10 backdrop-blur-xl rounded-[28px] p-6 mb-6 shadow-2xl border border-white/10 animate-fade-in hover:scale-[1.02] hover:border-white/20 hover:shadow-cyan-500/30 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center gap-4 mb-4">

                        <div className="w-16 h-16 flex-shrink-0">
                            <div
                                onClick={() => setShowModal(true)}
                                className="w-full h-full rounded-full overflow-hidden border-2 border-white/20 shadow-lg cursor-pointer hover:border-white/30 transition-all"
                            >
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_qydwbyfzBseOkXvF2to4jax9f5yN6unb5g&s"
                                    alt="Profile picture"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="flex-1 min-w-0">
                            {/* Name */}
                            <h2 className="text-white text-lg font-bold truncate">
                                Hello Mechanic, Farras
                            </h2>
                            {/* Date */}
                            <p className="text-blue-200 text-xs flex items-center gap-1.5">
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                17/March/2025
                            </p>
                        </div>
                    </div>

                    {/* Edit Profile Button */}
                    <button
                        onClick={() => setShowModal(true)}
                        className="w-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold py-2.5 rounded-full hover:bg-white/15 transition-all mb-3 flex items-center justify-center gap-2"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                        Edit Profile
                    </button>

                    <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                        Mark As Full
                    </button>
                </div>

                <div className="flex items-center gap-3 mb-5">
                    <h2 className="text-white text-xl font-bold">
                        List Kendaraan
                    </h2>
                    <div className="flex-1 h-[1px] bg-gradient-to-r from-blue-400/30 to-transparent"></div>
                </div>

                {/* Vehicle Card*/}
                <div className="space-y-4">
                    {cars.map((car, index) => (
                        <div
                            key={car.id}
                            className="bg-white/10 backdrop-blur-xl rounded-[24px] overflow-hidden shadow-2xl border border-white/10 hover:bg-white/15 transition-all duration-300 animate-slide-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Vehicle Image */}
                            <div className="relative h-44 bg-gradient-to-br from-slate-800 to-slate-900">
                                <img
                                    src={car.image}
                                    alt={car.name}
                                    className="w-full h-full object-cover"
                                />

                                <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-all">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>
                            </div>

                            {/* Vehicle Info */}
                            <div className="p-5">
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex-1">
                                        <h3 className="text-white font-bold text-lg mb-1">
                                            {car.name}
                                        </h3>
                                        <p className="text-white/60 text-sm font-medium mb-2">
                                            {car.plate}
                                        </p>
                                        <p className="text-blue-200 text-xs flex items-center gap-1.5">
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            Jadwal: {car.jadwal}
                                        </p>
                                    </div>

                                    {/* Status Badge */}
                                    <div className="flex items-center gap-1.5 bg-red-500/20 border border-red-400/30 text-red-300 text-xs font-semibold px-3 py-1.5 rounded-full">
                                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse"></span>
                                        {car.status}
                                    </div>
                                </div>

                                {/* Kerusakan Section */}
                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-3 mb-4 border border-white/10">
                                    <p className="text-blue-100 text-xs flex items-start gap-2">
                                        <svg className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        {car.kerusakan}
                                    </p>
                                </div>

                                {/* Action Button */}
                                <a
                                    href="/mekanik/detailkerusakan"
                                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm"
                                >
                                    See Detail
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for Profile Photo Upload */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
                    <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-[28px] p-8 max-w-md w-full border border-white/20 shadow-2xl animate-slide-up">
                        <button
                            onClick={() => {
                                setShowModal(false);
                                setSelectedFile(null);
                                setPreviewUrl(null);
                            }}
                            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
                        >
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <h3 className="text-white text-2xl font-bold mb-6">Ganti Foto Profil</h3>

                        <div className="flex justify-center mb-6">
                            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white/40 shadow-xl">
                                <img
                                    src={previewUrl || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_qydwbyfzBseOkXvF2to4jax9f5yN6unb5g&s"}
                                    alt="Preview"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block w-full">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="hidden"
                                    id="profile-upload-mekanik"
                                />
                                <div className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-center cursor-pointer hover:bg-white/15 transition-all">
                                    <svg className="w-8 h-8 text-blue-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                    <p className="text-blue-200 text-sm">
                                        {selectedFile ? selectedFile.name : "Pilih foto dari perangkat"}
                                    </p>
                                </div>
                            </label>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={() => {
                                    setShowModal(false);
                                    setSelectedFile(null);
                                    setPreviewUrl(null);
                                }}
                                className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold py-3 rounded-full hover:bg-white/15 transition-all"
                            >
                                Batal
                            </button>
                            <button
                                onClick={handleUpload}
                                disabled={!selectedFile}
                                className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-3 rounded-full hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                            >
                                Upload
                            </button>
                        </div>
                    </div>
                </div>
            )}

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
