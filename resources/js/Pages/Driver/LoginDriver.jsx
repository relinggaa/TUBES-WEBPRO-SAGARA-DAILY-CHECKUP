import React from "react";

export default function LoginUser() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 animate-fade-in">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
              Sign in
            </h1>
            <p className="text-blue-200">Sign in to access your account</p>
          </div>

          {/* Username Input */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                id="email"
                className="peer block w-full appearance-none rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm px-4 pt-6 pb-3 text-sm text-white placeholder-transparent focus:border-blue-400/50 focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition-all"
                placeholder="Enter Username"
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-2 text-xs text-blue-200 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-blue-300/50 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-300"
              >
                Enter Username
              </label>
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="password"
                id="password"
                className="peer block w-full appearance-none rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm px-4 pt-6 pb-3 text-sm text-white placeholder-transparent focus:border-blue-400/50 focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition-all"
                placeholder="Enter Your Key"
              />
              <label
                htmlFor="password"
                className="absolute left-4 top-2 text-xs text-blue-200 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-blue-300/50 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-300"
              >
                Enter Your Key
              </label>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mb-6">
            <button className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-gray-900 font-bold py-3 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 active:scale-95">
              Login
            </button>
            <button className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 text-blue-300 font-bold py-3 rounded-xl hover:bg-white/15 transition-all duration-300 hover:scale-105 active:scale-95">
              <a href="#" className="block">
                Contact Admin?
              </a>
            </button>
          </div>

          {/* Forget Password Link */}
          <p className="text-center text-blue-200 text-sm">
            Forget Your Key?{" "}
            <a
              href="#"
              className="font-semibold text-blue-400 hover:text-blue-300 hover:underline transition-colors"
            >
              Click Here?
            </a>
          </p>
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

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
    </div>
  );
}
