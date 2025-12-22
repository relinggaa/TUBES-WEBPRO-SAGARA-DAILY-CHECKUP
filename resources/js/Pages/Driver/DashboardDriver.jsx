import React from "react";

export default function DashboardDriver() {
  return(
    <>

<div class="mx-auto my-8 flex max-w-sm flex-col items-center gap-3 rounded-xl border border-gray-100 pt-8 text-gray-900 shadow-lg bg-blue-500">
  <img class="block h-25 w-25 max-w-full rounded-full align-middle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_qydwbyfzBseOkXvF2to4jax9f5yN6unb5g&s" alt="Profile picture" />
  <div class="flex flex-col items-center text-center mb-2">
      <h4 class="text-lg font-medium sm:m-0 text-white">Marc Silvester</h4>
    <p class="font-sans text-sm tracking-normal text-white mt-2">17/Maret/2025</p>
  </div>
  <div class="flex">

  </div>
  <div class="justify-center space-y-3 px-6 pt-6 text-center">
    <a href="/driver/listcar">
<button class="flex items-center rounded-lg bg-blue-500 px-6 py-1 text-sm font-medium text-white outline-none transition focus:ring active:bg-blue-500 active:text-white border-1">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
      Tambah Kendaraan
    </button>
    </a>



  </div>
  <div class="w-full bg-gray-100 px-4 py-6">

  <div class="mt-4 flex w-full items-center justify-between rounded-3xl bg-white p-5 shadow-lg ring-1 ring-black/5 sm:p-6">
    <div class="min-w-0">
      <h3 class="truncate text-lg font-semibold text-gray-900 sm:text-xl">
        Nissan Terrano 2014
      </h3>

      <p class="mt-6 text-base font-medium text-blue-600 sm:text-lg">
        Status: On Use
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
        Status: Free
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

</div>


    </>
  );
}
