import React, { useState, useEffect } from "react";
import { Link, usePage, router } from "@inertiajs/react";
import { toast } from "react-toastify";

const buildStoragePath = (value) => {
  if (!value || typeof value !== "string") return "/storage/";
  const normalized = value.replace(/^\/+/, "");
  const safePath = normalized
    .split("/")
    .map((segment) => segment.replace(/[^a-zA-Z0-9._-]/g, ""))
    .filter(Boolean)
    .join("/");
  return `/storage/${safePath}`;
};

export default function UploadBill({ riwayatStruk = [] }) {
  const { flash } = usePage().props;
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (flash?.success) {
      toast.success(flash.success, {
        position: "top-right",
        autoClose: 3000,
      });
    }

    if (flash?.error) {
      toast.error(flash.error, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  }, [flash?.success, flash?.error]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleUpload = () => {
    if (!selectedFile) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append("gambar", selectedFile);

    router.post("/driver/struk-bensin", formData, {
      preserveScroll: true,
      onSuccess: () => {
        setSelectedFile(null);
        setPreviewUrl(null);
        setIsUploading(false);
      },
      onError: (errors) => {
        console.error("Error uploading image:", errors);
        toast.error("Gagal mengupload struk bensin. Pastikan format file adalah gambar dan ukurannya tidak lebih dari 2MB.", {
            position: "top-right"
        });
        setIsUploading(false);
      },
    });
  };

  const handleCancelPengajuan = (strukId) => {
    router.post(
      "/driver/struk-bensin/cancel",
      { struk_bensin_id: strukId },
      { preserveScroll: true }
    );
  };

  const getStatusInfo = (isAccept) => {
    if (isAccept === true) {
      return {
        label: "Success",
        className: "bg-emerald-500/20 text-emerald-300 border border-emerald-400/30",
      };
    }

    if (isAccept === false) {
      return {
        label: "Ditolak",
        className: "bg-red-500/20 text-red-300 border border-red-400/30",
      };
    }

    return {
      label: "Menunggu",
      className: "bg-amber-500/20 text-amber-300 border border-amber-400/30",
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4 md:p-8 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-xl mx-auto relative z-10 space-y-6">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-amber-500/10 animate-pulse pointer-events-none"></div>
          
          <div className="flex items-center gap-3">
            <Link
              href="/driver/dashboard"
              className="text-white hover:text-amber-300 transition-colors bg-white/10 p-2 rounded-xl border border-white/10 hover:bg-white/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </Link>
            <h1 className="text-xl font-bold text-white tracking-wide">Upload Struk Bensin</h1>
          </div>
        </div>

        {/* Upload Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[32px] p-6 shadow-2xl relative overflow-hidden">
             
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl"></div>

          <h2 className="text-white text-lg font-semibold mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-amber-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
            </svg>
            Daftarkan Struk Baru
          </h2>

          <div className="flex flex-col gap-4">
            {previewUrl && (
              <div className="relative w-full h-48 rounded-xl overflow-hidden border-2 border-amber-300/30">
                <img src={previewUrl} alt="Preview Struk" className="w-full h-full object-cover" />
                <button
                    onClick={() => {
                        setSelectedFile(null);
                        setPreviewUrl(null);
                    }}
                    className="absolute top-2 right-2 bg-red-500/80 p-1.5 rounded-full text-white hover:bg-red-600 transition"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
              </div>
            )}

            {!previewUrl && (
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-white/20 border-dashed rounded-xl cursor-pointer bg-white/5 hover:bg-white/10 transition-all group">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg className="w-8 h-8 mb-3 text-amber-400/70 group-hover:text-amber-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                  <p className="mb-1 text-sm text-blue-200"><span className="font-semibold text-white">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-blue-300/70">PNG, JPG or GIF (MAX. 2MB)</p>
                </div>
                <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
              </label>
            )}

            <button
              onClick={handleUpload}
              disabled={!selectedFile || isUploading}
              className="w-full group relative bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white font-bold py-3.5 px-4 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
               {isUploading ? (
                   <span className="flex items-center gap-2">
                       <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                       </svg>
                       Mengupload...
                   </span>
               ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  <span className="relative">Upload Struk Bensin</span>
                </>
               )}
            </button>
          </div>
        </div>

        {/* History List as Stack */}
        <div className="space-y-4">
          <h3 className="text-white text-xl font-bold px-2 flex items-center gap-2 drop-shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            History Upload
          </h3>

          {riwayatStruk.length === 0 ? (
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/10 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-blue-500/20 mx-auto mb-3">
                <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <p className="text-white text-md font-semibold">Belum ada history</p>
              <p className="text-blue-200 text-sm">Struk yang diupload akan muncul di sini</p>
            </div>
          ) : (
            <div className="relative pt-4">
              {riwayatStruk.map((struk, index) => {
                // Formatting date nicely
                const dateObj = new Date(struk.created_at);
                const filePath = buildStoragePath(struk.gambar);
                const status = getStatusInfo(struk.is_accept);
                const formattedDate = dateObj.toLocaleDateString('id-ID', {
                   weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
                });
                const formattedTime = dateObj.toLocaleTimeString('id-ID', {
                    hour: '2-digit', minute: '2-digit'
                });

                return (
                  <div
                    key={struk.id}
                    className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-xl mb-4 group hover:bg-white/15 hover:-translate-y-1 hover:shadow-cyan-500/20 transition-all duration-300"
                    style={{
                      // Stack effect simulating physical depth
                      transform: `perspective(1000px) translateY(${index === 0 ? 0 : -10}px) scale(${1 - index * 0.02})`,
                      zIndex: riwayatStruk.length - index,
                      opacity: 1 - index * 0.1,
                      marginTop: index === 0 ? '0' : '-1rem'
                    }}
                  >
                    <div className="flex items-center gap-4">
                      {/* Image Thumbnail */}
                      <div className="w-20 h-20 rounded-xl overflow-hidden shadow-inner border border-white/10 bg-white/5 flex-shrink-0">
                        <img 
                          src={filePath}
                          alt="Struk" 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                        />
                      </div>
                      
                      {/* Details */}
                      <div className="flex-1 min-w-0 flex flex-col justify-center">
                         <p className="text-white font-semibold text-base mb-1 truncate">
                             Struk #{struk.id}
                         </p>
                         <span className={`inline-flex w-fit px-2 py-1 rounded-lg text-xs font-semibold mb-2 ${status.className}`}>
                            {status.label}
                         </span>
                         <div className="flex items-center gap-2 text-blue-200 text-xs sm:text-sm">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                             </svg>
                             <span>{formattedDate}</span>
                         </div>
                         <div className="flex items-center gap-2 text-blue-300/80 text-xs mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{formattedTime}</span>
                         </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <a href={filePath} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-300 hover:bg-blue-500 hover:text-white flex items-center justify-center transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </a>
                        <button
                          onClick={() => handleCancelPengajuan(struk.id)}
                          disabled={struk.is_accept !== null}
                          className="px-3 py-2 rounded-lg text-xs font-semibold bg-red-500/20 text-red-300 border border-red-400/30 hover:bg-red-500/30 transition disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                          Batalkan
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
