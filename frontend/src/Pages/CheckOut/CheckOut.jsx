import React from "react";
import LB from "../../assets/Flags/LB.png";
import { MdAlternateEmail, MdOutlinePhoneIphone } from "react-icons/md";

const CheckOut = () => {
  return (
    <div className="flex justify-center h-screen items-center">
      <div class="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0 w-[70%] lg:w-[50%] h-full">
        <p class="text-xl font-medium">Payment Details</p>
        <p class="text-gray-400">
          Complete your order by providing your payment details.
        </p>
        <div class="">
          <label for="card-holder" class="mt-4 mb-2 block text-sm font-medium">
            Name
          </label>
          <div class="relative">
            <input
              type="text"
              id="card-holder"
              name="card-holder"
              class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Your full name here"
            />
            <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <MdAlternateEmail />
            </div>
          </div>
          <label for="card-no" class="mt-4 mb-2 block text-sm font-medium">
            Phone Number
          </label>
          <div class="relative">
            <input
              type="tel"
              inputMode="numeric"
              id="card-holder"
              name="card-holder"
              class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="+961 xx xxxxxx"
              autoComplete="tel" // Add autoComplete attribute and set it to "tel"
            />
            <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <MdOutlinePhoneIphone />
            </div>
          </div>

          <label
            for="billing-address"
            class="mt-4 mb-2 block text-sm font-medium"
          >
            Billing Address
          </label>
          <div class="flex flex-col sm:flex-row">
            <div class="relative flex-shrink-0 sm:w-7/12">
              <input
                type="text"
                id="billing-address"
                name="billing-address"
                class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Street Address"
              />
              <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <img
                  src={LB}
                  alt="lebanon-flag"
                  className="w-[24px] h-[16px]"
                />
              </div>
            </div>
            <select
              type="text"
              name="billing-state"
              class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="State">State</option>
            </select>
            <input
              type="text"
              inputMode="numeric"
              name="billing-zip"
              class="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="ZIP"
            />
          </div>

          <div class="mt-6 border-t border-b py-2">
            <div class="flex items-center justify-between">
              <p class="text-sm font-medium text-gray-900">Subtotal</p>
              <p class="font-semibold text-gray-900">$399.00</p>
            </div>
          </div>
          <div class="mt-6 flex items-center justify-between">
            <p class="text-sm font-medium text-gray-900">Total</p>
            <p class="text-2xl font-semibold text-gray-900">$408.00</p>
          </div>
        </div>
        <button class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white hover:bg-orange-500 duration-300">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
