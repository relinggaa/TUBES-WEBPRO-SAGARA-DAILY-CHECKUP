import React from "react";

export default function DashboardMekanik() {
  const cars = [
    {
      id: 1,
      name: "Nissan Terrano 2014",
      jadwal: "17/March/2025",
      status: "FATAL",
      plate: "B 4121 QQ",
      kerusakan: "Kerusakan berada pada liman",
      image: "https://blog.gaadikey.com/wp-content/uploads/2017/01/Nissan-Terrano-2017-Edition.jpg"
    },
    {
      id: 2,
      name: "Nissan Terrano 2014",
      jadwal: "18/March/2025",
      status: "FATAL",
      plate: "B 4121 QQ",
      kerusakan: "Kerusakan berada pada liman",
      image: "https://blog.gaadikey.com/wp-content/uploads/2017/01/Nissan-Terrano-2017-Edition.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <h1 className="text-blue-900 text-2xl font-bold mb-6">Dashboard</h1>

        {/* Profile Card */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 mb-6 shadow-xl">
          <div className="flex flex-col items-center">
            {/* Profile Image */}
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-white/30 shadow-lg">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_qydwbyfzBseOkXvF2to4jax9f5yN6unb5g&s"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name */}
            <h2 className="text-white text-2xl font-bold mb-1">Hello Mechanic, Farras</h2>

            {/* Date */}
            <p className="text-white/90 text-sm mb-6">17/March/2025</p>

            {/* Mark As Full Button */}
            <button className="bg-white text-gray-800 font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 w-full max-w-xs">
              Mark As Full
            </button>
          </div>
        </div>

        {/* List Kendaraan Section */}
        <h2 className="text-blue-900 text-xl font-bold mb-4">List Kendaraan</h2>

        {/* Vehicle Cards */}
        <div className="space-y-4">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex justify-between items-start mb-3">
                {/* Left Side - Car Info */}
                <div className="flex-1">
                  <h3 className="text-gray-900 font-bold text-lg mb-1">
                    {car.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Jadwal: {car.jadwal}
                  </p>
                  <div className="mb-3">
                    <span className="text-red-600 font-bold text-sm">
                      Status: <span className="text-red-600">{car.status}</span>
                    </span>
                  </div>
                </div>

                {/* Right Side - Car Image and Plate */}
                <div className="flex flex-col items-end ml-4">
                  <div className="w-24 h-16 mb-2">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-gray-900 font-bold text-sm">
                    {car.plate}
                  </p>
                </div>
              </div>

              {/* Kerusakan Section */}
              <div className="bg-gray-100 rounded-lg p-3 mb-3">
                <p className="text-gray-700 text-sm">
                  {car.kerusakan}
                </p>
              </div>

              {/* See Detail Link */}
              <div className="text-right">
                <a
                  href="#"
                  className="text-blue-500 text-sm font-medium hover:text-blue-600 transition-colors"
                >
                  See Detail
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
