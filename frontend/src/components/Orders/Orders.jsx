import React from "react";

const Orders = () => {
  return (
    <div>
      <div class="mx-auto max-w-screen-xl bg-white">
        <h1 class="mt-20 mb-10 ml-5 text-2xl font-bold text-gray-900">
          Order Management
        </h1>
        <div class="bg-white py-2 px-3">
          <nav class="flex flex-wrap gap-4">
            <li class="inline-flex whitespace-nowrap border-b-2 border-transparent border-b-purple-600 py-2 px-3 text-sm font-semibold text-purple-600 transition-all duration-200 ease-in-out">
              {" "}
              Orders{" "}
            </li>
          </nav>
        </div>
      </div>
      <div class="w-screen bg-gray-50">
        <div class="mx-auto max-w-screen-xl px-2 py-10">
          <div class="mt-4 w-full">
            <div class="flex w-full flex-col items-center justify-between space-y-2 sm:flex-row sm:space-y-0">
              <form class="relative flex w-full max-w-2xl items-center">
                <svg
                  class="absolute left-2 block h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="11" cy="11" r="8" class=""></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65" class=""></line>
                </svg>
                <input
                  type="name"
                  name="search"
                  class="h-12 w-full border-b-gray-400 bg-transparent py-4 pl-12 text-sm outline-none focus:border-b-2"
                  placeholder="Search by Order ID, Date, Customer"
                />
              </form>
            </div>
          </div>

          <div class="mt-6 overflow-hidden rounded-xl bg-white px-6 shadow lg:px-4">
            <table class="min-w-full border-collapse border-spacing-y-2 border-spacing-x-2">
              <thead class="hidden border-b lg:table-header-group">
                <tr class="">
                  <td class="whitespace-normal py-4 text-sm font-semibold text-gray-800 sm:px-3">
                    Order Date
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="float-right mt-1 h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="3"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </td>

                  <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
                    Customer Name
                  </td>
                  <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
                    Customer Email
                  </td>

                  <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
                    Customer Phone Number
                  </td>
                  <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
                    Customer Address
                  </td>

                  <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
                    Product Name
                  </td>
                  <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
                    Product Color
                  </td>
                  <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
                    Product Size
                  </td>
                  <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
                    Quantity
                  </td>

                  <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
                    Total
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="float-right mt-1 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                      />
                    </svg>
                  </td>

                  <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
                    Status
                  </td>
                </tr>
              </thead>

              <tbody class="bg-white lg:border-gray-300">
                <tr class="">
                  <td class="whitespace-no-wrap py-4 text-left text-sm text-gray-600 sm:px-3 lg:text-left">
                    07 February, 2022
                    <div class="mt-1 flex flex-col text-xs font-medium lg:hidden">
                      <div class="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="mr-1 h-3 w-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        Name: Ibrahim Shanaa
                      </div>
                      <div class="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="mr-1 h-3 w-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4 6h16M4 10h16M4 14h16M4 18h16"
                          />
                        </svg>
                        Email: ibrahim.shanaa122@gmail.com
                      </div>
                      <div class="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="mr-1 h-3 w-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4 6h16M4 10h16M4 14h16M4 18h16"
                          />
                        </svg>
                        Phone Number: +961 76760016
                      </div>
                      <div class="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="mr-1 h-3 w-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4 6h16M4 10h16M4 14h16M4 18h16"
                          />
                        </svg>
                        Address: Lebanone, Saida
                      </div>
                      <div class="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="mr-1 h-3 w-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4 6h16M4 10h16M4 14h16M4 18h16"
                          />
                        </svg>
                        Product Title: T-shirt
                      </div>
                      <div class="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="mr-1 h-3 w-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4 6h16M4 10h16M4 14h16M4 18h16"
                          />
                        </svg>
                        Product Color: black
                      </div>
                      <div class="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="mr-1 h-3 w-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4 6h16M4 10h16M4 14h16M4 18h16"
                          />
                        </svg>
                        Quantity: 2
                      </div>
                    </div>
                  </td>

                  <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">
                    Ibrahim Shanaa
                  </td>

                  <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">
                    ibrahim.shanaa122@gmail.com
                  </td>

                  <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">
                    +961 76760016
                  </td>
                  <td class="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">
                    Lebanone, Saida
                  </td>
                  <td class="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">
                    T-shirt
                  </td>
                  <td class="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">
                    black
                  </td>
                  <td class="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">
                    sm
                  </td>
                  <td class="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">
                    2
                  </td>
                  <td class="whitespace-no-wrap py-4 text-right text-sm text-gray-600 sm:px-3 lg:text-left">
                    $59.00
                    <span class="mt-1 ml-auto block w-fit whitespace-nowrap rounded-full bg-purple-100 px-2 py-0.5 text-center text-xs text-purple-800 lg:hidden">
                      Action Required
                    </span>
                  </td>

                  <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-3 lg:table-cell">
                    <span class="ml-2 mr-3 whitespace-nowrap rounded-full bg-purple-100 px-2 py-0.5 text-purple-800">
                      Action Required
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
