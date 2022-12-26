<template>
     <div >
            <header>
                <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-transparent w-full z-20 top-0 left-0 ">
                    <div class="container flex flex-wrap items-center justify-between mx-auto">
                        <a href="/" class="flex items-center">
                            <img src="/img/soulthread-landing-logo.svg" class="h-full mr-3" alt="SoulThread Logo">
                        </a>
                        <div class="flex md:order-2">
                            <button @click="authDiscord" type="button" class="text-black bg-gradient-to-r from-st-green to-st-sky action-btn focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-semibold rounded-lg px-5 py-2.5 text-center mr-2 mb-2 m-2">Get started</button>
                            <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-neutral-500 rounded-lg md:hidden hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:ring-neutral-600" aria-controls="navbar-sticky" aria-expanded="false">
                                <span class="sr-only">Open main menu</span>
                                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>

                    </div>
                </nav>
            </header>
            <section class="bg-white dark:bg-neutral-900">
                <div class="max-w-screen-xl px-4 pt-8 mx-auto text-center lg:pt-16 lg:px-12">
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-neutral-900 md:text-5xl lg:text-6xl dark:text-white font-Allenoire">Proof-of-Ownership <br> Gatekeeping Bot for Discord</h1>
                    <p class="mb-8 font-light text-neutral-500 md:text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-neutral-400">Soul Thread connects identity and ownership of Crypto based holdings</p>
                    <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <button @click="authDiscord" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-neutral-900 border border-neutral-300 rounded-lg hover:bg-neutral-100 focus:ring-4 focus:ring-neutral-100 dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:ring-neutral-800">
                            Connect Discord
                            <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>  
                        <button class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-neutral-900 border border-neutral-300 rounded-lg hover:bg-neutral-100 focus:ring-4 focus:ring-neutral-100 dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:ring-neutral-800">
                            See Features
                           </button>  
                    </div> 
                    <img class="mx-auto mb-5 lg:mb-8 rounded-lg dark:border-neutral-600 z-1 dark:hidden" src="/img/connection.svg" alt="dashboard overview">
                    <img class="mx-auto mb-5 lg:mb-8  rounded-lg dark:border-neutral-600 hidden dark:block z-1" src="/img/connection.svg" alt="dashboard overview dark">
                </div>
            </section>
            <hr class="my-6 border-neutral-800 sm:mx-auto lg:my-20"></hr>
            <section class="bg-white dark:bg-neutral-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl text-center sm:py-16 lg:px-6">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-neutral-900 dark:text-white font-Allenoire">More Connectivity Less Problems</h2>
                    <p class="text-neutral-500 sm:text-xl dark:text-neutral-400">Soul Thread can help you grow your community by implementing <br> AUTOMATIC Proof-of-Ownership mechanics.</p>
                    <div class="mt-8 lg:mt-12 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                        <div>
                            <a class="mx-auto mb-4 w-12 h-12 text-primary-600 dark:text-primary-500 max">
                            <img src="/img/ease.svg" class="mx-auto mb-4 text-primary-600 dark:text-primary-500" width="62" height="62" alt="SoulThread Logo">
                             </a>
                            <h3 class="mb-2 text-xl font-bold dark:text-white">Ease of Use</h3>
                            <p class="mb-4 text-neutral-500 dark:text-neutral-400">Makes Proof-of-Ownership Possible</p>
                        </div>
                        <div>
                            <a class="mx-auto mb-4 w-12 h-12 text-primary-600 dark:text-primary-500 max">
                            <img src="/img/time.svg" class="mx-auto mb-4 text-primary-600 dark:text-primary-500" width="62" height="62" alt="SoulThread Logo">
                            </a>                            <h3 class="mb-2 text-xl font-bold dark:text-white">Time Saver</h3>
                            <p class="mb-4 text-neutral-500 dark:text-neutral-400">Saves your Discord Mods HOURS!</p>
                        </div>
                        <div>
                            <a class="mx-auto mb-4 w-12 h-12 text-primary-600 dark:text-primary-500 max">
                            <img src="/img/money.svg" class="mx-auto mb-4 text-primary-600 dark:text-primary-500" width="62" height="62" alt="SoulThread Logo">
                            </a>
                            <h3 class="mb-2 text-xl font-bold dark:text-white">Money Saver</h3>
                            <p class="mb-4 text-neutral-500 dark:text-neutral-400">Saves you Money on Mods and Custom Built Solutions</p>

                        </div>
                    </div>
                    
                </div>
            </section>
            <hr class="my-6 border-neutral-800 sm:mx-auto lg:my-20"></hr>
            <section class="bg-white dark:bg-neutral-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:px-12 sm:text-center lg:py-16">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-neutral-900 dark:text-white font-Allenoire">Your Data are secured</h2>
                    <p class="font-light text-neutral-500 sm:text-lg md:px-20 lg:px-38 xl:px-48 dark:text-neutral-400">SoulThread does not share your verified wallet address with anyone, that includes any third-parties, even community admins, without your explicit consent.</p>
                    <img src="/img/spill.svg" alt="dashboard overview dark" class="mx-auto lg:my-20 mb-5 lg:mb-8 rounded-lg dark:border-neutral-600 hidden dark:block z-1">
                </div>
            </section>
            <hr class="my-6 border-neutral-800 sm:mx-auto lg:my-20"></hr>
            <section class="bg-neutral-50 dark:bg-neutral-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-16">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-neutral-900 dark:text-white font-Allenoire">
                    SoulThread Features
                </h2>
                <p class="font-light text-neutral-500 dark:text-neutral-400 sm:text-xl">
                    Gatekeep roles, channels and prove NFT ownership on <br> Discord with minimal effort!
                </p>
                </div>
                <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 xl:gap-8 md:space-y-0">
                <div class="p-6 bg-white rounded shadow dark:bg-neutral-800">
                    <div class="flex justify-center items-center mb-4 w-10 h-10 rounded bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" /></svg>
                    </div>
                    <h3 class="mb-2 text-xl font-bold dark:text-white font-Allenoire">Free to use</h3>
                    <p class="font-light text-neutral-500 dark:text-neutral-400">
                        SoulThread is free to use, with no hidden fees or costs.
                    </p>
                </div>
                <div class="p-6 bg-white rounded shadow dark:bg-neutral-800">
                    <div class="flex justify-center items-center mb-4 w-10 h-10 rounded bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" /></svg>
                    </div>
                    <h3 class="mb-2 text-xl font-bold dark:text-white font-Allenoire">Open-source</h3>
                    <p class="font-light text-neutral-500 dark:text-neutral-400">
                        SoulThread is open-source and fully customizable, allowing users to tailor the platform to their own needs.
                    </p>
                </div>
                <div class="p-6 bg-white rounded shadow dark:bg-neutral-800">
                    <div class="flex justify-center items-center mb-4 w-10 h-10 rounded bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" /></svg>
                    </div>
                    <h3 class="mb-2 text-xl font-bold dark:text-white font-Allenoire">
                    Elegant design
                    </h3>
                    <p class="font-light text-neutral-500 dark:text-neutral-400">
                        SoulThread boasts a sleek and stylish user interface, making it easy to navigate and use.
                    </p>
                </div>
                <div class="p-6 bg-white rounded shadow dark:bg-neutral-800">
                    <div class="flex justify-center items-center mb-4 w-10 h-10 rounded bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" /></svg>
                    </div>
                    <h3 class="mb-2 text-xl font-bold dark:text-white font-Allenoire">Community automation</h3>
                    <p class="font-light text-neutral-500 dark:text-neutral-400">
                        SoulThread allows users to automate the process of customer segmentation and engagement, providing tailored content and messages to their target audiences.
                    </p>
                </div>
                </div>
            </div>
            </section>
            <hr class="my-6 border-neutral-800 sm:mx-auto lg:my-20"></hr>
            <section class="bg-white dark:bg-neutral-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-neutral-900 dark:text-white font-Allenoire">Our Team</h2>
                    </div> 
                    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                         <div class="bg-white rounded-lg shadow-sm dark:bg-neutral-800 ">
                            <a  >
                                <img class="p-4 w-full rounded-lg" src="https://i.seadn.io/gae/oGpn5ETVh8uORcU9kZE0SBpUpEPtl0F_Gp3K8QVKDosg2c_uooKTciXxboNLGQaZd9X2oG_nVVnQI98OpwY1HhF5C4PmsY3r7VVtgvc?auto=format&w=1000" alt="Captain Isaac">
                            </a>
                            <div class="px-5 pb-5">
                                <h3 class="text-xl font-bold tracking-tight text-neutral-900 dark:text-white font-Allenoire">
                                    <a  >Captain Isaac</a>
                                </h3>
                                <span class="text-neutral-500">Main Dev</span>
                                <!-- <ul class="flex space-x-4 sm:mt-0 lg:my-4">
                                    <li>
                                        <a   class="text-neutral-500 hover:text-neutral-900 dark:hover:text-white">
                                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a   class="text-neutral-500 hover:text-neutral-900 dark:hover:text-white">
                                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a   class="text-neutral-500 hover:text-neutral-900 dark:hover:text-white">
                                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a   class="text-neutral-500 hover:text-neutral-900 dark:hover:text-white">
                                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                                        </a>
                                    </li>
                                </ul> -->
                            </div>
                        </div>  
                         <div class="bg-white rounded-lg shadow-sm dark:bg-neutral-800 ">
                            <a  >
                                <img class="p-4 w-full rounded-lg" src="https://i.seadn.io/gae/Zf31dAvaVLWQ4_OVn7dzF11TiU0AGEGU4zgaOv272Cvov4Br8kmKvvWZqY-481NQSftRDzTcwpB86L0ufS_n2qjeTBJqT7s2u9d04w?auto=format&w=1000" alt="Captain Larry">
                            </a>
                            <div class="px-5 pb-5">
                                <h3 class="text-xl font-bold tracking-tight text-neutral-900 dark:text-white font-Allenoire">
                                    <a  >Captain Larry</a>
                                </h3>
                                <span class="text-neutral-500">Product Designer</span>
                                <!-- <ul class="flex space-x-4 sm:mt-0 lg:my-4">
                                    <li>
                                        <a   class="text-neutral-500 hover:text-neutral-900 dark:hover:text-white">
                                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a   class="text-neutral-500 hover:text-neutral-900 dark:hover:text-white">
                                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a   class="text-neutral-500 hover:text-neutral-900 dark:hover:text-white">
                                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a   class="text-neutral-500 hover:text-neutral-900 dark:hover:text-white">
                                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                                        </a>
                                    </li>
                                </ul> -->
                            </div>
                        </div> 
                         <div class="bg-white rounded-lg shadow-sm dark:bg-neutral-800 ">
                            <a  >
                                <img class="p-4 w-full rounded-lg" src="https://i.seadn.io/gae/EzYsdqx38TjR7PNgF72sFtTuT5edTpIYnZio38clBSDbcfn0nie87SARYPUr3qi3iUcC6jTq6d7Xw_oL7DW7LnYEqC6Ma39ASZzmNA?auto=format&w=1000" alt="Rukka Nova">
                            </a>
                            <div class="px-5 pb-5">
                                <h3 class="text-xl font-bold tracking-tight text-neutral-900 dark:text-white font-Allenoire">
                                    <a  >Rukka Nova</a>
                                </h3>
                                <span class="text-neutral-500">Marketing Lead</span>
                                <!-- <ul class="flex space-x-4 sm:mt-0 lg:my-4">
                                    <li>
                                        <a   class="text-neutral-500 hover:text-neutral-900 dark:hover:text-white">
                                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a   class="text-neutral-500 hover:text-neutral-900 dark:hover:text-white">
                                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a   class="text-neutral-500 hover:text-neutral-900 dark:hover:text-white">
                                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="text-neutral-500 hover:text-neutral-900 dark:hover:text-white">
                                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                                        </a>
                                    </li>
                                </ul> -->
                            </div>
                        </div> 
                         <div class="bg-white rounded-lg shadow-sm dark:bg-neutral-800 ">
                            <a>
                                <img class="p-4 w-full rounded-lg" src="https://i.seadn.io/gae/NofgDggJbuWl6lvo7qUTXvj96Ut-0cBaH1ErCgYGpHgj2MEISTEgyn7VFmbOx0_IW0y8sBEtMDPSFpd6OAHXDZOXNjlbslbTsrud?auto=format&w=1000" alt="0xRickJames">
                            </a>
                            <div class="px-5 pb-5">
                                <h3 class="text-xl font-bold tracking-tight text-neutral-900 dark:text-white font-Allenoire">
                                    <a>0xRickJames</a>
                                </h3>
                                <span class="text-neutral-500">Bot Developer</span>
                                <!-- <ul class="flex space-x-4 sm:mt-0 lg:my-4">
                                    <li>
                                        <a   class="text-neutral-500 hover:text-neutral-900 dark:hover:text-white">
                                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a   class="text-neutral-500 hover:text-neutral-900 dark:hover:text-white">
                                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a   class="text-neutral-500 hover:text-neutral-900 dark:hover:text-white">
                                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a   class="text-neutral-500 hover:text-neutral-900 dark:hover:text-white">
                                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                                        </a>
                                    </li>
                                </ul> -->
                            </div>
                        </div> 
                    </div>  
                </div>
                </section>
            <hr class="my-6 border-neutral-800 sm:mx-auto lg:my-20"></hr>
            <div class="col-span-2 border border-neutral-700 rounded-lg p-12 ">
            <div class="grid items-center gap-8 lg:gap-12 lg:grid-cols-12">
            <div class="col-span-7 text-center sm:mb-6 lg:text-left lg:mb-0">
                <h1 class="mb-2 text-4xl font-bold leading-none tracking-tight text-neutral-900 md:text-2xl xl:text-3xl dark:text-white">We are proud of our Community</h1>
                <p class="max-w-xl mx-auto mb-6 font-light text-neutral-500 lg:mx-0 xl:mb-8 text-base dark:text-neutral-400"> If you’are well-acquainted with our line of thought and philosophy, just share your ideas and arguments with us on discord.</p>
                <button type="button" class="text-black bg-gradient-to-r from-st-green to-st-sky action-btn focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-semibold rounded-lg px-5 py-2.5 text-center mr-2 mb-2 m-2"><svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg" class="inline mr-3 w-6 h-6 text-white"><path d="M20.317 2.15557C18.7873 1.45369 17.147 0.936576 15.4319 0.640403C15.4007 0.634687 15.3695 0.648971 15.3534 0.677541C15.1424 1.05276 14.9087 1.54226 14.7451 1.927C12.9004 1.65083 11.0652 1.65083 9.25832 1.927C9.09465 1.5337 8.85248 1.05276 8.64057 0.677541C8.62448 0.649924 8.59328 0.63564 8.56205 0.640403C6.84791 0.93563 5.20756 1.45275 3.67694 2.15557C3.66368 2.16129 3.65233 2.17082 3.64479 2.18319C0.533392 6.83155 -0.31895 11.3657 0.0991801 15.8436C0.101072 15.8655 0.11337 15.8864 0.130398 15.8997C2.18321 17.4073 4.17171 18.3225 6.12328 18.9291C6.15451 18.9386 6.18761 18.9272 6.20748 18.9015C6.66913 18.2711 7.08064 17.6063 7.43348 16.9073C7.4543 16.8664 7.43442 16.8178 7.39186 16.8016C6.73913 16.554 6.1176 16.2521 5.51973 15.9093C5.47244 15.8816 5.46865 15.814 5.51216 15.7816C5.63797 15.6873 5.76382 15.5893 5.88395 15.4902C5.90569 15.4721 5.93598 15.4683 5.96153 15.4797C9.88928 17.273 14.1415 17.273 18.023 15.4797C18.0485 15.4674 18.0788 15.4712 18.1015 15.4893C18.2216 15.5883 18.3475 15.6873 18.4742 15.7816C18.5177 15.814 18.5149 15.8816 18.4676 15.9093C17.8697 16.2588 17.2482 16.554 16.5945 16.8006C16.552 16.8168 16.533 16.8664 16.5538 16.9073C16.9143 17.6054 17.3258 18.2701 17.7789 18.9005C17.7978 18.9272 17.8319 18.9386 17.8631 18.9291C19.8241 18.3225 21.8126 17.4073 23.8654 15.8997C23.8834 15.8864 23.8948 15.8664 23.8967 15.8445C24.3971 10.6676 23.0585 6.17064 20.3482 2.18414C20.3416 2.17082 20.3303 2.16129 20.317 2.15557ZM8.02002 13.117C6.8375 13.117 5.86313 12.0313 5.86313 10.6981C5.86313 9.36477 6.8186 8.27912 8.02002 8.27912C9.23087 8.27912 10.1958 9.3743 10.1769 10.6981C10.1769 12.0313 9.22141 13.117 8.02002 13.117ZM15.9947 13.117C14.8123 13.117 13.8379 12.0313 13.8379 10.6981C13.8379 9.36477 14.7933 8.27912 15.9947 8.27912C17.2056 8.27912 18.1705 9.3743 18.1516 10.6981C18.1516 12.0313 17.2056 13.117 15.9947 13.117Z" fill="rgb(23,23,23)"></path></svg> Join Discord </button>
            </div>
            <div class="flex col-span-5  flex justify-center align-middle justify-center">
                <img src="/img/discord.svg" alt="mockup" class="w-full dark:hidden">
                <img src="/img/discord.svg" alt="Join Discord" class="w-80 hidden dark:block">
            </div>
            </div>
            </div>
              <hr class="my-6 border-neutral-800 sm:mx-auto lg:my-20"></hr>

              <div class="text-center p-4 py-6 mx-auto max-w-screen-xl md:p-8 lg:p-10">
          <a href="#" class="flex justify-center items-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
            <a href="/" class="flex items-center"><img src="/img/soulthread-landing-logo.svg" alt="SoulThread Logo" class="h-full mr-3"></a>
          </a>
          <span class="block text-sm text-center text-gray-500 dark:text-gray-400">© 2022-2023 . All Rights Reserved. SoulThread is Powerd by <a href="https://station0x.com/" target="_blank" class="hover:underline"> Station Zero X. </a>
          </span>
          <ul class="flex justify-center mt-5 space-x-5">
            <a href="https://discord.com/invite/9vdGaVWMFw" target="_blank" class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"><svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"><path d="M20.317 2.15557C18.7873 1.45369 17.147 0.936576 15.4319 0.640403C15.4007 0.634687 15.3695 0.648971 15.3534 0.677541C15.1424 1.05276 14.9087 1.54226 14.7451 1.927C12.9004 1.65083 11.0652 1.65083 9.25832 1.927C9.09465 1.5337 8.85248 1.05276 8.64057 0.677541C8.62448 0.649924 8.59328 0.63564 8.56205 0.640403C6.84791 0.93563 5.20756 1.45275 3.67694 2.15557C3.66368 2.16129 3.65233 2.17082 3.64479 2.18319C0.533392 6.83155 -0.31895 11.3657 0.0991801 15.8436C0.101072 15.8655 0.11337 15.8864 0.130398 15.8997C2.18321 17.4073 4.17171 18.3225 6.12328 18.9291C6.15451 18.9386 6.18761 18.9272 6.20748 18.9015C6.66913 18.2711 7.08064 17.6063 7.43348 16.9073C7.4543 16.8664 7.43442 16.8178 7.39186 16.8016C6.73913 16.554 6.1176 16.2521 5.51973 15.9093C5.47244 15.8816 5.46865 15.814 5.51216 15.7816C5.63797 15.6873 5.76382 15.5893 5.88395 15.4902C5.90569 15.4721 5.93598 15.4683 5.96153 15.4797C9.88928 17.273 14.1415 17.273 18.023 15.4797C18.0485 15.4674 18.0788 15.4712 18.1015 15.4893C18.2216 15.5883 18.3475 15.6873 18.4742 15.7816C18.5177 15.814 18.5149 15.8816 18.4676 15.9093C17.8697 16.2588 17.2482 16.554 16.5945 16.8006C16.552 16.8168 16.533 16.8664 16.5538 16.9073C16.9143 17.6054 17.3258 18.2701 17.7789 18.9005C17.7978 18.9272 17.8319 18.9386 17.8631 18.9291C19.8241 18.3225 21.8126 17.4073 23.8654 15.8997C23.8834 15.8864 23.8948 15.8664 23.8967 15.8445C24.3971 10.6676 23.0585 6.17064 20.3482 2.18414C20.3416 2.17082 20.3303 2.16129 20.317 2.15557ZM8.02002 13.117C6.8375 13.117 5.86313 12.0313 5.86313 10.6981C5.86313 9.36477 6.8186 8.27912 8.02002 8.27912C9.23087 8.27912 10.1958 9.3743 10.1769 10.6981C10.1769 12.0313 9.22141 13.117 8.02002 13.117ZM15.9947 13.117C14.8123 13.117 13.8379 12.0313 13.8379 10.6981C13.8379 9.36477 14.7933 8.27912 15.9947 8.27912C17.2056 8.27912 18.1705 9.3743 18.1516 10.6981C18.1516 12.0313 17.2056 13.117 15.9947 13.117Z" fill="#9CA3AF"></path></svg></a>
            <a href="https://twitter.com/station0x" target="_blank" class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"><svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" class="w-5 h-5"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg></a>               <a href="https://blog.station0x.com/" target="_blank" class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"><path d="M13.5374 11.8277C13.5374 15.5984 10.5069 18.6552 6.76884 18.6552C3.03073 18.6552 0 15.5977 0 11.8277C0 8.05767 3.0305 5 6.76884 5C10.5072 5 13.5374 8.05698 13.5374 11.8277Z" fill="#9CA3AF"></path><path d="M20.9628 11.8277C20.9628 15.377 19.4476 18.2554 17.5784 18.2554C15.7092 18.2554 14.194 15.377 14.194 11.8277C14.194 8.27834 15.709 5.3999 17.5782 5.3999C19.4473 5.3999 20.9626 8.27742 20.9626 11.8277" fill="#5C5E63"></path><path d="M24 11.8276C24 15.0069 23.4672 17.5858 22.8097 17.5858C22.1522 17.5858 21.6196 15.0076 21.6196 11.8276C21.6196 8.64758 22.1524 6.06934 22.8097 6.06934C23.4669 6.06934 24 8.64735 24 11.8276Z" fill="#5C5E63"></path></svg></a>
            <a href="https://t.me/station0x" target="_blank" class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.43 8.85893C11.2628 9.3444 8.93014 10.3492 5.43189 11.8733C4.86383 12.0992 4.56626 12.3202 4.53917 12.5363C4.49339 12.9015 4.95071 13.0453 5.57347 13.2411C5.65818 13.2678 5.74595 13.2954 5.83594 13.3246C6.44864 13.5238 7.27283 13.7568 7.70129 13.766C8.08994 13.7744 8.52373 13.6142 9.00264 13.2853C12.2712 11.079 13.9584 9.96381 14.0643 9.93977C14.139 9.92281 14.2426 9.90148 14.3128 9.96385C14.3829 10.0262 14.376 10.1443 14.3686 10.176C14.3233 10.3691 12.5281 12.0381 11.5991 12.9018C11.3095 13.171 11.1041 13.362 11.0621 13.4056C10.968 13.5033 10.8721 13.5958 10.78 13.6846C10.2108 14.2333 9.78391 14.6448 10.8036 15.3168C11.2936 15.6397 11.6858 15.9067 12.0769 16.1731C12.5042 16.4641 12.9303 16.7543 13.4816 17.1157C13.6221 17.2077 13.7562 17.3034 13.8869 17.3965C14.3841 17.751 14.8307 18.0694 15.3826 18.0186C15.7032 17.9891 16.0345 17.6876 16.2027 16.7884C16.6002 14.6631 17.3816 10.0585 17.5622 8.16097C17.578 7.99473 17.5581 7.78197 17.5422 7.68857C17.5262 7.59518 17.4928 7.46211 17.3714 7.3636C17.2276 7.24694 17.0056 7.22234 16.9064 7.22408C16.455 7.23203 15.7626 7.47282 12.43 8.85893Z" fill="#9CA3AF"></path></svg></a>
        </ul>
      </div>
                  
    </div>   
</template>

<script>
const lib = JsonUrl('lzw')

export default {
    data(){
        return {
            id: undefined,
            username: undefined,
            avatar: undefined
        }
    },
    methods: {
        authDiscord() {
            let endpoint = import.meta.env.MODE === 'development' ? 'http%3A%2F%2Flocalhost:3000' : 'https%3A%2F%2Fsoulthread.xyz'
            window.open(`https://discord.com/api/oauth2/authorize?client_id=1044688147902120089&redirect_uri=${endpoint}%2Fapi%2FauthDiscord%2FgetRedirect&response_type=code&scope=identify%20guilds`, '_self')
        }
    },
    async created() {
        if(this.$route.params.user) {
            var self = this
            await lib.decompress(this.$route.params.user).then(output => {
                self.avatar = output.avatar
                self.id = output.id
                self.username = output.username
            })
            this.$store.dispatch('signin', { id: this.id, username: this.username, avatar: this.avatar })
            this.$router.push({ name: 'Dashboard' })
        }
    }
}
</script>


    <!-- <section class="px-10 py-16">
        <div class="flex items-center mx-auto md:w-[42rem] px-4 md:px-8 xl:px-0">
                    <div class="w-full">
                        <a @click="authDiscord" class="block w-full text-white bg-neutral-600 hover:bg-neutral-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 sm:py-3.5 text-center dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-primary-800">
                            Connect Discord</a>
                    </div>
                </div> 
    </section> -->
    