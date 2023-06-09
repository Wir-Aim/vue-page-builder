export const Blogs = [
  {
    category: "Blog",
    id: "blog__1", // id is mandatory
    label: "<b>blog</b>", // You can use HTML/SVG inside labels
    attributes: { class: "gjs-block-section" },
    content: `
        <!-- Section 1 -->
        <section class="bg-white">
            <div class="w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
        
                <div class="flex flex-col items-center sm:px-5 md:flex-row">
                    <div class="w-full md:w-1/2">
                        <a href="#_" class="block">
                            <img class="object-cover w-full h-full rounded-lg max-h-64 sm:max-h-96" src="https://cdn.devdojo.com/images/may2021/cupcakes.jpg">
                        </a>
                    </div>
                    <div class="flex flex-col items-start justify-center w-full h-full py-6 mb-6 md:mb-0 md:w-1/2">
                        <div class="flex flex-col items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">
                            <div class="bg-pink-500 flex items-center pl-2 pr-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                                <svg class="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <span>Featured</span>
                            </div>
                            <h1 class="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl"><a href="#_">Savory Templates. Sweet Designs.</a></h1>
                            <p class="pt-2 text-sm font-medium">by <a href="#_" class="mr-1 underline">John Doe</a> · <span class="mx-1">April 23rd, 2021</span> · <span class="mx-1 text-gray-600">5 min. read</span></p>
                        </div>
                    </div>
                </div>
        
                <div class="flex grid grid-cols-12 pb-10 sm:px-5 gap-x-8 gap-y-16">
                    <div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
                        <a href="#_" class="block">
                            <img class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56" src="https://cdn.devdojo.com/images/may2021/fruit.jpg">
                        </a>
                        <div class="bg-purple-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                            <span>Lifestyle</span>
                        </div>
                        <h2 class="text-lg font-bold sm:text-xl md:text-2xl"><a href="#_">Creating a Future Worth Living</a></h2>
                        <p class="text-sm text-gray-500">Learn the attributes you need to gain in order to build a future and create a life that you are truly happy with.</p>
                        <p class="pt-2 text-xs font-medium"><a href="#_" class="mr-1 underline">Mary Jane</a> · <span class="mx-1">April 17, 2021</span> · <span class="mx-1 text-gray-600">3 min. read</span></p>
                    </div>
        
                    <div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
                        <a href="#_" class="block">
                            <img class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56" src="https://cdn.devdojo.com/images/may2021/workout.jpg">
                        </a>
                        <div class="bg-pink-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                            <span>Health</span>
                        </div>
                        <h2 class="text-lg font-bold sm:text-xl md:text-2xl">The Healther Version of Yourself</h2>
                        <p class="text-sm text-gray-500">If you want to excel in life and become a better version of yourself, you'll need to upgrade your life.</p>
                        <p class="pt-2 text-xs font-medium"><a href="#_" class="mr-1 underline">Fred Jones</a> · <span class="mx-1">April 10, 2021</span> · <span class="mx-1 text-gray-600">3 min. read</span></p>
                    </div>
        
                    <div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
                        <a href="#_" class="block">
                            <img class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56" src="https://cdn.devdojo.com/images/may2021/food.jpg">
                        </a>
                        <div class="bg-red-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                            <span>Food</span>
                        </div>
                        <h2 class="text-lg font-bold sm:text-xl md:text-2xl">Enjoy the Meals of the Kings</h2>
                        <p class="text-sm text-gray-500">Take the time to enjoy the life that you've created. It's totally fine to live like kings and eat like royalty.</p>
                        <p class="pt-2 text-xs font-medium"><a href="#_" class="mr-1 underline">Mike Roberts</a> · <span class="mx-1">April 6, 2021</span> · <span class="mx-1 text-gray-600">3 min. read</span></p>
                    </div>
        
                    <div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
                        <a href="#_" class="block">
                            <img class="object-cover w-full mb-2 overflow-hidden rounded-lg max-h-56" src="https://cdn.devdojo.com/images/may2021/books.jpg">
                        </a>
                        <div class="bg-blue-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                            <span>Motivation</span>
                        </div>
                        <h2 class="text-lg font-bold sm:text-xl md:text-2xl">Writing for Success</h2>
                        <p class="text-sm text-gray-500">Writing about your plans for success is extremely helpful for yourself and it will allow you to share your story.</p>
                        <p class="pt-2 text-xs font-medium"><a href="#_" class="mr-1 underline">Tom Johnson</a> · <span class="mx-1">May 25, 2021</span> · <span class="mx-1 text-gray-600">3 min. read</span></p>
                    </div>
        
                    <div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
                        <a href="#_" class="block">
                            <img class="object-cover w-full mb-2 overflow-hidden rounded-lg max-h-56" src="https://cdn.devdojo.com/images/may2021/clock.jpg">
                        </a>
                        <div class="bg-gray-800 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                            <span>Business</span>
                        </div>
                        <h2 class="text-lg font-bold sm:text-xl md:text-2xl">Simple Time Management</h2>
                        <p class="text-sm text-gray-500">Managing your time can make the difference between getting ahead in life or staying exactly where you are.</p>
                        <p class="pt-2 text-xs font-medium"><a href="#_" class="mr-1 underline">Scott Reedman</a> · <span class="mx-1">May 18, 2021</span> · <span class="mx-1 text-gray-600">3 min. read</span></p>
                    </div>
        
                    <div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
                        <a href="#_" class="block">
                            <img class="object-cover w-full mb-2 overflow-hidden rounded-lg max-h-56" src="https://cdn.devdojo.com/images/may2021/lemons.jpg">
                        </a>
                        <div class="bg-yellow-400 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                            <span>Nutrition</span>
                        </div>
                        <h2 class="text-lg font-bold sm:text-xl md:text-2xl">The Fruits Life</h2>
                        <p class="text-sm text-gray-500">Take a moment and enjoy to enjoy the many fruits of life. Relaxation and a healthy diet can go a long way.</p>
                        <p class="pt-2 text-xs font-medium"><a href="#_" class="mr-1 underline">Jake Caldwell</a> · <span class="mx-1">May 15, 2021</span> · <span class="mx-1 text-gray-600">3 min. read</span></p>
                    </div>
        
                </div>
            </div>
        </section>
        `,
  },
  {
    category: "Blog",
    id: "blog__2", // id is mandatory
    label: "<b>blog</b>", // You can use HTML/SVG inside labels
    attributes: { class: "gjs-block-section" },
    content: `
        <!-- Section 1 -->
        <section class="relative w-full bg-white">
            <div class="absolute w-full h-32 bg-gradient-to-b from-gray-100 to-white"></div>
            <div class="relative w-full px-5 py-10 mx-auto sm:py-12 md:py-16 md:px-10 max-w-7xl">
        
                <h1 class="mb-1 text-4xl font-extrabold leading-none text-gray-900 lg:text-5xl xl:text-6xl sm:mb-3"><a href="#_">The Project Blog</a></h1>
                <p class="text-lg font-medium text-gray-500 sm:text-2xl">Designs and layouts to help you with your app.</p>
                <div class="flex grid h-full grid-cols-12 gap-10 pb-10 mt-8 sm:mt-16">
                    <div class="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group md:col-span-6 xl:col-span-4">
                        <a href="#_" class="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110" style="background-image:url('https://cdn.devdojo.com/images/may2021/quench-satisfying.jpg')">
                        </a>
                        <div class="relative z-20 w-full h-auto py-8 text-white bg-purple-500 border-t-0 border-yellow-200 px-7">
                            <a href="#_" class="inline-block text-xs font-semibold absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-purple-500 bg-white">Resources</a>
                            <h2 class="mb-5 text-5xl font-bold"><a href="#_">Refreshing Designs</a></h2>
                            <p class="mb-2 text-lg font-normal text-purple-100 opacity-100">Quench satisfying designs to help you stir up emotion and tell a story.</p>
        
                        </div>
                    </div>
        
                    <div class="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group md:col-span-6 xl:col-span-4">
                        <a href="#_" class="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110" style="background-image:url('https://cdn.devdojo.com/images/may2021/orange.jpg')">
                        </a>
                        <div class="relative z-20 w-full h-auto py-8 text-white bg-blue-400 border-t-0 border-yellow-200 px-7">
                            <a href="#_" class="inline-block text-xs font-semibold absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-blue-500 bg-white">Lifestyle</a>
                            <h2 class="mb-5 text-5xl font-bold"><a href="#_">Healthier Lifestyle</a></h2>
                            <p class="mb-2 text-lg font-normal text-blue-100 opacity-100">Living a healthier lifestyle will help with your productivity and your mind-set.</p>
        
                        </div>
                    </div>
        
                    <div class="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group sm:col-span-12 xl:col-span-4 sm:flex-row xl:flex-col">
                        <a href="#_" class="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110" style="background-image:url('https://cdn.devdojo.com/images/may2021/gbc.jpg')"></a>
                        <div class="relative z-20 flex flex-col items-start justify-center w-full h-auto py-8 text-white bg-yellow-400 border-t-0 border-yellow-200 sm:h-full xl:h-auto px-7">
                            <a href="#_" class="inline-block text-xs font-semibold absolute sm:mb-5 xl:mb-0 sm:relative xl:absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-yellow-400 bg-white">Entertainment</a>
                            <h2 class="mb-5 text-5xl font-bold"><a href="#_">Gaming Evolution</a></h2>
                            <p class="mb-2 text-lg font-normal opacity-100 text-yellow-50">Learn about the evolution of gaming and how it started a revolution.</p>
        
                        </div>
                    </div>
        
                    <div class="grid grid-cols-12 col-span-12 gap-7">
                        <div class="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                            <a href="#_" class="block transition duration-200 ease-out transform hover:scale-110">
                                <img class="object-cover w-full shadow-sm max-h-56" src="https://cdn.devdojo.com/images/may2021/workstation.jpg">
                            </a>
                            <div class="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                                <div class="bg-indigo-400 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
                                    <span>Inspiration</span>
                                </div>
                                <h2 class="text-base font-bold sm:text-lg md:text-xl"><a href="#_">Best Workstations of the Year</a></h2>
                                <p class="mt-2 text-sm text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                            </div>
                        </div>
        
                        <div class="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                            <a href="#_" class="block transition duration-200 ease-out transform hover:scale-110">
                                <img class="object-cover w-full shadow-sm max-h-56" src="https://cdn.devdojo.com/images/may2021/snacks.jpg">
                            </a>
                            <div class="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                                <div class="bg-red-400 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
                                    <span>Food</span>
                                </div>
                                <h2 class="text-base font-bold sm:text-lg md:text-xl"><a href="#_">Eating for Productivity</a></h2>
                                <p class="mt-2 text-sm text-gray-500">Learn how to be more disciplined in your diet and how you can eat to maximize productivity.</p>
                            </div>
                        </div>
        
                        <div class="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                            <a href="#_" class="block transition duration-200 ease-out transform hover:scale-110">
                                <img class="object-cover w-full shadow-sm max-h-56" src="https://cdn.devdojo.com/images/may2021/book-design.jpg">
                            </a>
                            <div class="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                                <div class="bg-purple-500 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
                                    <span>Resources</span>
                                </div>
                                <h2 class="text-base font-bold sm:text-lg md:text-xl"><a href="#_">A Design Mind-set</a></h2>
                                <p class="mt-2 text-sm text-gray-500">What does it mean to have a design mind-set? Learn how to improve your eye for design.</p>
                            </div>
                        </div>
                    </div>
        
                </div>
            </div>
        </section>
        `,
  },
];
