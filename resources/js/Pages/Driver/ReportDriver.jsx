import React from "react";

export default function ReportDriver() {
  return(
    <>

<div className="mx-5 my-3">
    <a href="/driver/listcar">
 <button className="bg-blue-500 rounded-md px-4 py-2 text-white">Back</button>
    </a>

</div>

    <div className="m-10 max-w-sm">
  <label for="credit-card" className="mb-2 block text-sm font-medium">Masukkan Plat Nomor</label>
  <div className="relative">
    <input type="text" id="credit-card" name="credit-card" className="block w-full rounded-md border border-gray-200 py-3 px-4 pr-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="xx-xxxx-xx" />

  </div>
</div>



<div className="m-10 max-w-sm">
  <label for="phone" className="mb-2 block text-sm font-medium">Catatan</label>
  <div className="relative">
    <input type="text" id="phone" name="inline-add-on" className="block w-full rounded-md border border-gray-200 py-7 px-4 pl-20 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Masukkan Catatan" />
    <div className="absolute inset-y-0 left-0 flex items-center px-3 text-gray-500">

    </div>
  </div>
</div>

<div className="m-10 grid max-w-lg space-y-3 rounded-md border py-4 px-8">
    <button className="bg-blue-500 rounded-md text-white">Tambah Kendala</button>
  <div className="relative flex items-start">
    <div className="mt-1 flex h-5 items-center">
       <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 7l-.867 12.142A2 2 0 01 16.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7h6m2 0H7m3-3h4"
      />
    </svg>
    </div>
    <label for="delete" className="ml-3">
      <span className="block text-sm font-semibold text-gray-800">AC Bermasalah</span>
      <span id="delete-description" className="block text-sm text-gray-600">Notify me when this action happens.</span>
    </label>
  </div>

  <div className="relative flex items-start">
    <div className="mt-1 flex h-5 items-center">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 7l-.867 12.142A2 2 0 01 16.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7h6m2 0H7m3-3h4"
      />
    </svg>
    </div>
    <label for="archive" className="ml-3">
      <span className="block text-sm font-semibold text-gray-800">Mesin Ngelitik</span>
      <span id="archive-description" className="block text-sm text-gray-600">Notify me when this action happens.</span>
    </label>
  </div>
</div>

<div className="flex justify-center">
<div className="group flex w-50 cursor-pointer items-center justify-center rounded-md bg-blue-500 px-6 py-2 text-white transition">
  <span className="group flex w-full items-center justify-center rounded py-1 text-center font-bold"> Kirim Laporan </span>
  <svg className="flex-0 ml-4 h-6 w-6 transition-all group-hover:ml-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
</div>
</div>




    </>

  );
}
