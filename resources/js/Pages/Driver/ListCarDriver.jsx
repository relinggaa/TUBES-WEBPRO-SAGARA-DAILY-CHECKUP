import React from "react";

export default function ListCarDriver() {
  return(
    <>
<div className="mx-5 my-3">
    <a href="/driver/dashboard">
 <button className="bg-blue-500 rounded-md px-4 py-2 text-white">Back</button>
    </a>

</div>


    <div className="mb-10 mx-4 max-w-screen-lg overflow-hidden rounded-xl  shadow-lg md:pl-8">
  <div className="flex flex-col overflow-hidden bg-white sm:flex-row md:h-80">
    <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
      <h2 className="text-xl font-semibold text-gray-900 md:text-2xl lg:text-4xl mb-3">Tambah Data Kendaraan</h2>
      <a href="/driver/report" className="group mt-auto flex w-44 cursor-pointer select-none items-center justify-center rounded-md bg-blue-500 px-6 py-2 text-white transition">
        <span className="group flex w-full items-center justify-center rounded py-1 text-center font-bold"> Tambah </span>
        <svg class="flex-0 group-hover:w-6 ml-4 h-6 w-0 transition-all" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>

    <div className="order-first ml-auto h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
      <img class="h-full w-full object-cover" src="https://userimg-assets-eu.customeriomail.com/images/client-env-107673/1726825864979_how-to-set-up-a-car-showroom-for-your-dealership-6_01J87DF81XF3E6E2DPHE4RC3AR.jpg" loading="lazy" />
    </div>
  </div>
</div>



  <div class="w-full mt-10">

  <div class="mt-4 flex w-full items-center justify-between rounded-3xl bg-white p-5 shadow-lg ring-1 ring-black/5 sm:p-6">
    <div class="min-w-0">
      <h3 class="truncate text-lg font-semibold text-gray-900 sm:text-xl">
        Nissan Terrano 2014
      </h3>

      <p class="mt-6 text-base font-medium text-blue-600 sm:text-lg">
        Status: Fatal
      </p>
    </div>


    <div class="ml-4 flex shrink-0 flex-col items-end">
      <img
        class="h-14 w-auto sm:h-16"
        src="https://blog.gaadikey.com/wp-content/uploads/2017/01/Nissan-Terrano-2017-Edition.jpg"
        alt="car"
      />
      <p class="mt-3 text-sm font-bold tracking-wide text-gray-900 sm:text-xl">
        B 4121 QQ
      </p>
    </div>
  </div>


  <div class="mt-5 flex w-full items-center justify-between rounded-3xl bg-white p-5 shadow-lg ring-1 ring-black/5 sm:p-6">

    <div class="min-w-0">
      <h3 class="truncate text-lg font-semibold text-gray-900 sm:text-xl">
        Toyota Fortuner 2012
      </h3>

      <p class="mt-6 text-base font-medium text-blue-600 sm:text-lg">
        Status: Med
      </p>
    </div>

    <div class="ml-4 flex shrink-0 flex-col items-end">
      <img
        class="h-14 w-auto sm:h-16"
        src="https://auto2000.co.id/mobil-baru-toyota/_next/image?url=https%3A%2F%2Ftsoimageprod.azureedge.net%2Fstatic-content%2Fprod%2F360degview%2FFORTUNER_IMPROVEMENT%2FExterior_360%2Fwhite.png&w=1920&q=75"
        alt="car"
      />
      <p class="mt-3 text-sm font-bold tracking-wide text-gray-900 sm:text-xl">
        B 4317 SLK
      </p>
    </div>
  </div>
</div>



    </>
  );
}
