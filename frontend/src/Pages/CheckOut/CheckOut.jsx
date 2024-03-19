import React, { useContext, useState } from "react";
import LB from "../../assets/Flags/LB.png";
import { MdAlternateEmail, MdOutlinePhoneIphone } from "react-icons/md";
import axios from "axios"; // Import axios for making HTTP requests
import { UserContext } from "../../context/userContext/userContextProvider";
import { useLocation } from "react-router-dom";

const CheckOut = () => {
  const governorates = [
    "Beirut",
    "Mount Lebanon",
    "North Lebanon",
    "South Lebanon",
    "Beqaa",
    "Nabatieh",
    "Saida",
  ];
  const location = useLocation();
  const { user } = useContext(UserContext);
  const [email, setEmail] = useState(user.email.toLowerCase());
  const [name, setName] = useState(user.username.toLowerCase());
  const { cartItems, subtotal, total } = location.state;

  const [phoneNumber, setPhoneNumber] = useState("");
  const [street, setStreet] = useState("");
  const [selectedGovernorate, setSelectedGovernorate] = useState("");
  const [zip, setZip] = useState("");

  const handleSelectChange = (event) => {
    setSelectedGovernorate(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const orderData = {
        user: user._id,
        email: email,
        name: name,
        products: cartItems.map((product) => product._id),
        subtotal: subtotal,
        total: total,
        phoneNumber: phoneNumber,
        streetAddress: street,
        state: selectedGovernorate,
        zip: zip,
        size: cartItems.map((product) => product.size),
        color: cartItems.map((product) => product.color),
      };

      // Place the order
      const response = await axios.post(
        "http://localhost:4001/api/create-order",
        orderData
      );

      // If the order is placed successfully, clear the cart
      const userData = JSON.parse(localStorage.getItem("user"));
      const userToken = userData ? userData.token : null;
      const clearTheCart = await axios.delete("http://localhost:4001/api/cart/deleteAllFromTheCart", {
        headers: {
          Authorization: `Bearer ${userToken}` // Replace your_token_here with the actual token
        }
      });

      // Reset state variables
      alert("Ordered successfully");
      setPhoneNumber("");
      setZip("");
      setSelectedGovernorate("");
      setStreet("");
      
      // Reload the page to clear the displayed data
      window.location.reload();

      console.log("Order placed successfully:", response.data);
    } catch (error) {
      console.error("Error placing order:", error);
      // Handle error scenarios (e.g., display error message to user)
    }
  };

  return (
    <div className="flex justify-center h-screen items-center">
      <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0 w-[70%] lg:w-[50%] h-full">
        <p className="text-xl font-medium">Payment Details</p>
        <p className="text-gray-400">
          Complete your order by providing your payment details.
        </p>
        <div className="">
          <label
            htmlFor="card-holder"
            className="mt-4 mb-2 block text-sm font-medium"
          >
            Email *
          </label>
          <div className="relative">
            <input
              type="text"
              id="card-holder"
              name="card-holder"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Your email here"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <MdAlternateEmail />
            </div>
          </div>
          <label
            htmlFor="card-holder"
            className="mt-4 mb-2 block text-sm font-medium"
          >
            Name *
          </label>
          <div className="relative">
            <input
              type="text"
              id="card-holder"
              name="card-holder"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Your full name here"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <MdAlternateEmail />
            </div>
          </div>
          <label
            htmlFor="card-no"
            className="mt-4 mb-2 block text-sm font-medium"
          >
            Phone Number
          </label>
          <div className="relative">
            <input
              type="tel"
              inputMode="numeric"
              onChange={(e) => setPhoneNumber(e.target.value)}
              id="card-holder"
              name="card-holder"
              className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="+961 xx xxxxxx"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <MdOutlinePhoneIphone />
            </div>
          </div>

          <label
            htmlFor="billing-address"
            className="mt-4 mb-2 block text-sm font-medium"
          >
            Billing Address
          </label>
          <div className="flex flex-col sm:flex-row">
            <div className="relative flex-shrink-0 sm:w-7/12">
              <input
                type="text"
                id="billing-address"
                onChange={(e) => setStreet(e.target.value)}
                name="billing-address"
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Street Address"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <img
                  src={LB}
                  alt="lebanon-flag"
                  className="w-[24px
                  ] h-[16px]"
                />
              </div>
            </div>
            <select
              type="text"
              name="billing-governorate"
              value={selectedGovernorate} // Bind the selected value to the state
              onChange={handleSelectChange}
              className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus
              :border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select</option>
              {governorates.map((governorate, index) => (
                <option key={index} value={governorate}>
                  {governorate}
                </option>
              ))}
            </select>
            <input
              type="text"
              inputMode="numeric"
              name="billing-zip"
              onChange={(e) => setZip(e.target.value)}
              className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="ZIP"
            />
          </div>
          <div className="mt-6 border-t border-b py-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Subtotal</p>
              <p className="font-semibold text-gray-900">${subtotal}</p>
            </div>
          </div>
          <div className="mt-6 border-t border-b py-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Quantity</p>
              <p className="font-semibold text-gray-900">
                {cartItems.reduce((total, product) => total + product.quantity, 0)}
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">Total</p>
            <p className="text-2xl font-semibold text-gray-900">${total}</p>
          </div>
        </div>
        <button
          className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white hover:bg-orange-500 duration-300"
          onClick={handleSubmit} 
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
