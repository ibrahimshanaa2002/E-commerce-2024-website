import React, { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    // Fetch orders from the API
    axios
      .get("http://localhost:4001/api/get-orders")
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, []);

  return (
    <div>
      <div className="mx-auto max-w-screen-xl bg-white">
        <h1 className="mt-20 mb-10 ml-5 text-2xl font-bold text-gray-900">
          Order Management
        </h1>
        <div className="bg-white py-2 px-3">
          <nav className="flex flex-wrap gap-4">
            <li className="inline-flex whitespace-nowrap border-b-2 border-transparent border-b-purple-600 py-2 px-3 text-sm font-semibold text-purple-600 transition-all duration-200 ease-in-out">
              {" "}
              Orders{" "}
            </li>
          </nav>
        </div>
      </div>
      <div className="w-screen bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-2 py-10">
          <div className="mt-4 w-full">
            <div className="overflow-hidden rounded-xl bg-white px-6 shadow lg:px-4">
              <table className="min-w-full border-collapse border-spacing-y-2 border-spacing-x-2">
                <thead className="hidden border-b lg:table-header-group">
                  <tr className="">
                    <th className="whitespace-normal py-4 text-sm font-semibold text-gray-800 sm:px-3">
                      Order Date
                    </th>
                    <th className="whitespace-normal py-4 text-sm font-semibold text-gray-800 sm:px-3">
                      image of product
                    </th>
                    <th className="whitespace-normal py-4 text-sm font-semibold text-gray-800 sm:px-3">
                      Customer Name
                    </th>
                    <th className="whitespace-normal py-4 text-sm font-semibold text-gray-800 sm:px-3">
                      Customer Email
                    </th>
                    <th className="whitespace-normal py-4 text-sm font-semibold text-gray-800 sm:px-3">
                      Customer Phone Number
                    </th>
                    <th className="whitespace-normal py-4 text-sm font-semibold text-gray-800 sm:px-3">
                      Customer Address
                    </th>
                    <th className="whitespace-normal py-4 text-sm font-semibold text-gray-800 sm:px-3">
                      Product Name
                    </th>
                    <th className="whitespace-normal py-4 text-sm font-semibold text-gray-800 sm:px-3">
                      Product Color
                    </th>
                    <th className="whitespace-normal py-4 text-sm font-semibold text-gray-800 sm:px-3">
                      Product Size
                    </th>
                    <th className="whitespace-normal py-4 text-sm font-semibold text-gray-800 sm:px-3">
                      Quantity
                    </th>
                    <th className="whitespace-normal py-4 text-sm font-semibold text-gray-800 sm:px-3">
                      Total
                    </th>
                    <th className="whitespace-normal py-4 text-sm font-semibold text-gray-800 sm:px-3">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white lg:border-gray-300">
                  {orders.map((order) => (
                    <tr key={order._id} className="">
                      <td className="whitespace-no-wrap py-4 text-left text-sm text-gray-600 sm:px-3 lg:text-left">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </td>
                      <td className="whitespace-no-wrap py-4 text-left text-sm text-gray-600 sm:px-3 lg:text-left">
                        {order.products.length > 0 && order.products[0].img ? (
                          <img src={order.products[0].img} alt="" />
                        ) : null}
                      </td>
                      <td className="whitespace-no-wrap font-bold py-4 text-left text-sm text-gray-600 sm:px-3 lg:text-left">
                        {order.name}
                      </td>
                      <td className="whitespace-no-wrap font-bold py-4 text-left text-sm text-gray-600 sm:px-3 lg:text-left">
                        {order.email}
                      </td>
                      <td className="whitespace-no-wrap  font-bold py-4 text-left text-sm text-gray-600 sm:px-3 lg:text-left">
                        {order.phoneNumber}
                      </td>
                      <td className="whitespace-no-wrap py-4 text-left text-sm text-gray-600 sm:px-3 lg:text-left">
                        {order.streetAddress}, {order.state}, {order.zip}
                      </td>
                      <td className="whitespace-no-wrap py-4 text-left text-sm text-gray-600 sm:px-3 lg:text-left">
                        {/* Assuming each order has only one product */}
                        {order.products.length > 0 ? order.products[0].title : ""}
                      </td>
                      <td className="whitespace-no-wrap font-bold py-4 text-left text-sm text-gray-600 sm:px-3 lg:text-left">
                        {order.products.length > 0 ? order.products[0].color[0] : ""}
                      </td>
                      <td className="whitespace-no-wrap py-4 font-bold text-left text-sm text-gray-600 sm:px-3 lg:text-left">
                        {order.products.length > 0 ? order.products[0].size[0] : ""}
                      </td>
                      <td className="whitespace-no-wrap py-4 font-extrabold text-left text-sm text-gray-600 sm:px-3 lg:text-left">
                        {/* Assuming each order has only one product */}
                        {order.quantity}
                      </td>
                      <td className="whitespace-no-wrap py-4 text-left font-bold text-sm text-gray-600 sm:px-3 lg:text-left">
                        ${order.total}
                      </td>
                      <td
                        className="whitespace-no-wrap py
-4 text-left text-sm text-gray-600 sm:px-3 lg:text-left"
                      >
                        {order.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
