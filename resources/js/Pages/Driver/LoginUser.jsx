import React from "react";
export default function LoginUser() {
    return (
        <>
            <div className="bg-gradient-to-r from-purple-500 from- via-cyan-500 via-">
                <div class="mx-auto my-10 grid max-w-screen-xl gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div class="mx-2 rounded-xl bg-gray-100"></div>
                    <div class="group cursor mx-4 overflow-hidden rounded-2xl bg-white shadow-xl duration-200 hover:-translate-y-4">
                        <div class="flex h-60 flex-col justify-between overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHZpZGVvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                class="group-hover:scale-110 h-full w-full object-cover duration-200"
                            />
                        </div>
                        <div class="flex-1 overflow-hidden bg-white px-6 py-8">
                            <h5 class="group-hover:text-indigo-600 mb-4 text-xl font-bold">
                                Video 6: Learn more about marketing
                            </h5>
                            <p class="mb-8 text-gray-600">
                                Cras ultricies ligula sed magna dictum porta.
                                Praesent sapien massa, convallis a pellentesque
                                nec, egestas non nisi.
                            </p>
                            <div class="flex justify-between">
                                <a
                                    href="#"
                                    class="group text-lg font-bold focus:text-indigo-600 hover:text-indigo-600"
                                >
                                    <span>▷</span>
                                    <span class="underline">Watch Now</span>
                                </a>
                                <div class="max-w-full flex-none lg:px-4">
                                    <h5 class="text-lg font-bold">Video 6</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mx-2 rounded-xl bg-gray-100"></div>
                </div>

                <article class="mx-2 my-10 max-w-screen-lg rounded-md border border-gray-100 text-gray-700 shadow-md md:mx-auto">
                    <div class="flex flex-col md:flex-row">
                        <div class="p-5 md:w-4/6 md:p-8">
                            <span class="rounded-md bg-orange-400 px-2 py-1 text-xs uppercase text-white">
                                Tailwind
                            </span>
                            <p class="mt-2 text-xl font-black md:mt-6 md:text-4xl">
                                How to make comment card with tailwind?
                            </p>
                            <p class="mt-3 text-gray-600">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quos voluptate vero soluta
                                voluptatum error non.
                            </p>

                            <button class="mt-4 mr-2 flex items-center justify-center rounded-md bg-sky-400 px-8 py-2 text-center text-white duration-150 md:mb-4 hover:translate-y-1 hover:bg-sky-500">
                                Read More
                            </button>
                        </div>
                        <div class="mx-auto hidden items-center px-5 md:flex md:p-8">
                            <img
                                class="rounded-md shadow-lg"
                                src="/images/4PQXlbagb4MqcadNmeo0D.png"
                                alt="Shop image"
                            />
                        </div>
                    </div>
                </article>
            </div>
        </>
    );
}
