import React from "react";
import b1 from "../../assets/Browse/b1.png";
import b2 from "../../assets/Browse/b2.png";
import b3 from "../../assets/Browse/b3.png";
import b4 from "../../assets/Browse/b4.png";
const Browse = () => {
  return (
    <div className="px-5 " id="browse-by-dress">
      <div className="w-full py-4 ">
        <div className="flex flex-col items-center w-full py-5 h-full ">
          <div className="text-4xl font-bold uppercase">
            BROWSE BY dress STYLE
          </div>

          <div className="w-full ">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-4 flex items-center justify-center  gap-8 sm:mb-8 md:mb-12"></div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                <a
                  href="#"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-[30rem]"
                >
                  <img
                    src={b1}
                    loading="lazy"
                    alt="Style"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                  <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                    Casual
                  </span>
                </a>

                <a
                  href="#"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-[30rem]"
                >
                  <img
                    src={b2}
                    loading="lazy"
                    alt="Style"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                  <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                    Formal
                  </span>
                </a>

                <a
                  href="#"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-[30rem]"
                >
                  <img
                    src={b3}
                    loading="lazy"
                    alt="Style"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                  <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                    Party
                  </span>
                </a>

                <a
                  href="#"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-[30rem]"
                >
                  <img
                    src={b4}
                    loading="lazy"
                    alt="Style"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                  <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                    Gym
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
