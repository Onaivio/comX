import React from "react";
import Table from "./Table";
import Tradelog from "./Tradelog";

const Content = () => {
  return (
    <div className="md:pl-24 w-full">
      <div className="sm:grid-cols-1 sm:gap-2 sm:space-y-2 xl:grid-cols-2 md:flex lg:grid-cols-2 lg:flex w-full flex-cols-2  gap-3 p-2">
        <div class="grid grid-cols-1 xl:grid-cols-1 lg:grid-cols-1 items-center justify-center p-2 bg-white rounded-md md: xl:max-w-[15rem]">
          <div class="relative flex-shrink-0 text-gray-600 dark:focus-within:text-light w-full focus-within:text-gray-700">
            <span class="absolute inset-y-0 inline-flex items-center px-3">
              <svg
                class="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
            <input
              x-ref="searchInput"
              type="text"
              class="w-full py-2 pl-10 bg-gray-50 pr-4 border rounded-md placeholder:text-gray-600 focus:outline-none focus:ring"
              placeholder="Search..."
            />
          </div>
          <div className="mt-2 w-full md:block sm:">
            <div className="flex items-center justify-center hover:text-red-600 hover:bg-gray-100 pr-4 py-2 cursor-pointer rounded-md">
              <div>
                <span>
                  <svg
                    class="w-6 h-6 text-gray-300 pr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </div>
              <div className="">
                <h6 class="text-xs font-bold leading-none tracking-wider text-gray-500">
                  Product View
                </h6>
              </div>
            </div>
            <div className="flex items-center justify-center hover:bg-gray-100 pr-7 py-2 cursor-pointer rounded-md ">
              <div>
                <span>
                  <svg
                    class="w-6 h-6 text-gray-300 pr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </div>
              <div className="">
                <h6 class="text-xs font-bold leading-none tracking-wider text-orange-800">
                  Order Book
                </h6>
              </div>
            </div>
            <div className="flex items-center justify-center hover:bg-gray-100 pr-4 py-2 cursor-pointer rounded-md ">
              <div>
                <span>
                  <svg
                    class="w-6 h-6 text-gray-300 pr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </div>
              <div className="">
                <h6 class="text-xs font-bold leading-none tracking-wider text-gray-500">
                  Price History
                </h6>
              </div>
            </div>
            <div className="flex items-center justify-center hover:bg-gray-100 pr-6 py-2 cursor-pointer rounded-md ">
              <div>
                <span>
                  <svg
                    class="w-6 h-6 text-gray-300 pr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </div>
              <div className="">
                <h6 class="text-xs font-bold leading-none tracking-wider text-gray-500">
                  Open Order
                </h6>
              </div>
            </div>
            <div className="flex items-center justify-center hover:bg-gray-100 pr-1 py-2 cursor-pointer rounded-md ">
              <div>
                <span>
                  <svg
                    class="w-6 h-6 text-gray-300 pr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </div>
              <div className="">
                <h6 class="text-xs font-bold leading-none tracking-wider text-gray-500">
                  Closed Trades
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-1 flex-col p-4 md:p-2 bg-white rounded-md dark:bg-darker max-w-full h-24 sm:h-[9rem] lg:h-[6.5rem] md:h-[8.5rem] gap-3">
          <div className="flex items-center flex-wrap">
            <h6 class="text-[.8rem] font-bold px-3 leading-none tracking-wider text-gray-500">
              Board
            </h6>
            <span class="inline-block font-medium px-4 py-2 ml-1 text-[.8rem] sm:text-[.7rem] text-white bg-orange-700 rounded-full">
              X-Traded
            </span>
            <span class="inline-block font-medium px-4 py-2 ml-1 text-[.8rem] sm:text-[.7rem] text-black bg-gray-50 rounded-full uppercase">
              otc
            </span>
            <span class="inline-block font-medium px-4 py-2 ml-1 text-[.8rem] sm:text-[.7rem] text-black bg-gray-50 rounded-full uppercase">
              fi
            </span>
            <span class="inline-block font-medium px-4 py-2 ml-1 text-[.8rem] sm:text-[.7rem] text-black bg-gray-50 rounded-full capitalize">
              derivatives
            </span>
          </div>
          <div className="flex items-center flex-wrap sm:gap-1">
            <h6 class="text-[.8rem] font-bold px-3 leading-none tracking-wider text-gray-500">
              Product
            </h6>
            <span class="inline-block font-medium px-4 py-2 ml-1 text-[.8rem] sm:text-[.7rem] text-white bg-orange-700 rounded-full">
              All
            </span>
            <span class="inline-block font-medium px-4 py-2 ml-1 text-[.8rem] sm:text-[.7rem] text-black bg-gray-50 rounded-full uppercase">
              smaz
            </span>
            <span class="inline-block font-medium px-4 py-2 ml-1 text-[.8rem] sm:text-[.7rem] text-black bg-gray-50 rounded-full uppercase">
              sbbs
            </span>
            <span class="inline-block font-medium px-4 py-2 ml-1 text-[.8rem] sm:text-[.7rem] text-black bg-gray-50 rounded-full uppercase">
              spril
            </span>
            <span class="inline-block font-medium px-4 py-2 ml-1 text-[.8rem] sm:text-[.7rem] text-black bg-gray-50 rounded-full uppercase">
              sgng
            </span>
            <span class="inline-block font-medium px-4 py-2 ml-1 text-[.8rem] sm:text-[.7rem] text-black bg-gray-50 rounded-full uppercase">
              ssgm
            </span>
            <span class="inline-block font-medium px-4 py-2 ml-1 text-[.8rem] sm:text-[.7rem] text-black bg-gray-50 rounded-full uppercase">
              fetc
            </span>
            <span class="inline-block font-medium px-4 py-2 ml-1 text-[.8rem] sm:text-[.7rem] text-black bg-gray-50 rounded-full uppercase">
              scoc
            </span>
          </div>
          <div className="my-1"></div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
            <Table />
            <Table />
          </div>
          <Tradelog />
        </div>
      </div>
    </div>
  );
};

export default Content;
