import React, { useState } from 'react';

const Hero = () => {        
    return (
        <div className="relative">
      <header className="absolute inset-x-0 top-0 z-10 py-4 bg-transparent sm:py-5" x-data="{expanded: false}">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            <div className="flex shrink-0">
              <a href="#" title="" className="flex">
                <img className="w-auto h-8" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/logo.svg" alt=""/>
              </a>
            </div>

            <div className="flex lg:hidden">
              <button type="button" className="text-gray-900">
                <span x-show="!expanded" aria-hidden="true">
                  <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </span>

                <span x-show="expanded" aria-hidden="true">
                  <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
              </button>
            </div>

            <div className="hidden lg:flex lg:items-center lg:justify-start lg:ml-16 lg:mr-auto lg:space-x-10">
              <a href="#" title=""
                className="text-base font-medium text-gray-900 transition-all duration-200 hover:text-indigo-600">
                Features
              </a>

              <a href="#" title=""
                className="text-base font-medium text-gray-900 transition-all duration-200 hover:text-indigo-600">
                Pricing
              </a>

              <a href="#" title=""
                className="text-base font-medium text-gray-900 transition-all duration-200 hover:text-indigo-600">
                Support
              </a>
            </div>

            <div className="hidden lg:flex">
              <a href="#" title=""
                className="inline-flex items-center justify-center px-6 py-2 sm:py-2.5 text-base font-semibold text-white transition-all duration-200 bg-gray-900 rounded-lg sm:text-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button">
                Get Design Inspirations
              </a>
            </div>
          </nav>

          <nav x-show="expanded" x-collapse>
            <div className="px-1 pt-8 pb-4">
              <div className="grid gap-y-6">
                <a href="#" title=""
                  className="flex items-center text-base font-medium text-gray-900 transition-all duration-200 focus:outline-none focus:ring-0">
                  Features
                </a>

                <a href="#" title=""
                  className="flex items-center text-base font-medium text-gray-900 transition-all duration-200 focus:outline-none focus:ring-0">
                  Pricing
                </a>

                <a href="#" title=""
                  className="flex items-center text-base font-medium text-gray-900 transition-all duration-200 focus:outline-none focus:ring-0">
                  Support
                </a>

               
              </div>
            </div>
          </nav>
        </div>
      </header>

      <section className="relative pb-12 bg-white pt-28 sm:pb-16 sm:pt-32 lg:pb-20 xl:pt-48 xl:pb-32">
        <div className="absolute inset-0">
          <img className="hidden object-cover w-full h-full md:block" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/2/background.png" alt=""/>
        </div>

        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex">
            <div className="w-full md:max-w-xs lg:max-w-md">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                Weekly articles on design inspirations
              </h1>
              <p className="mt-5 text-base font-normal leading-7 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.
              </p>

              <p className="mt-10 text-base font-bold text-gray-900">
                Join the email list to:
              </p>
              <ul className="mt-4 space-y-4">
                <li className="flex items-center">
                  <span className="text-base">
                    💸
                  </span>
                  <span className="flex-1 text-base font-medium text-gray-900 ml-2.5">
                    Get 10 Web & Mobile UI Inspirations Every Week
                  </span>
                </li>

                <li className="flex items-center">
                  <span className="text-base">
                    🎁
                  </span>
                  <span className="flex-1 text-base font-medium text-gray-900 ml-2.5">
                    Exclusive Discount on Design Resources
                  </span>
                </li>

                <li className="flex items-center">
                  <span className="text-base">
                    ⌛️
                  </span>
                  <span className="flex-1 text-base font-medium text-gray-900 ml-2.5">
                    3 Random Subscriber will Get Featured on Emails
                  </span>
                </li>
              </ul>

              <div className="relative inline-flex mt-10 group">
                <div
                  className="absolute transitiona-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200">
                </div>

                <a href="#" title=""
                  className="relative inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button">
                  Join Newsletter For Free
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 md:hidden sm:mt-16">
          <img className="object-cover w-full h-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/2/background-mobile.png" alt=""/>
        </div>
      </section>
    </div>
      
        
    )
}
export default Hero;