import React from "react";
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

import {
  Mastercard,
  Visa,
  Paypal,
  Unionpay,
  Hiper,
} from "react-payment-logos/dist/flat";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#F0F0F0] h-full flex flex-col items-center justify-center relative w-full px-16">
        <div className="flex flex-col items-center justify-between w-full py-24">
          {/* shopco */}
          <div className="flex-col bg items-center justify-center gap-4 w-full mr-8 py-10">
            <h1 className="font-extrabold text-xl py-2">SHOP.CO</h1>
            <p className="py-2">
              We have clothes that suit your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="flex items-center justify-start gap-4 w-full">
              <FaTwitter />
              <FaFacebookF />
              <FaInstagram />
              <FaGithub />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            {/* company */}
            <div className="flex-col items-center justify-center gap-4 w-full sm:w-auto">
              <h1 className="font-semibold">Company</h1>
              <ul className="mt-2 gap-2 flex-col items-start justify-center">
                <li>
                  <Link to={"/AboutUs"} target="_blank">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to={"/Features"} target="_blank">
                    Features
                  </Link>
                </li>
                <li>Works</li>
                <li>Career</li>
              </ul>
            </div>
            {/* Help */}
            <div className="flex-col items-center justify-center gap-4 w-full py-10 sm:py-0 sm:w-auto">
              <h1 className="font-semibold">Help</h1>
              <ul className="mt-2 gap-2 flex-col items-start justify-center">
                <Link to={"ContactUs"} target="_blank">
                  <li>Customer Support</li>
                </Link>
                <li>Delivery Details</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            {/* FAQ */}
            <div className="flex-col items-center justify-center gap-4 w-full sm:w-auto mb-7">
              <h1 className="font-semibold">FAQ</h1>
              <ul className="mt-2 gap-2 flex-col items-start justify-center">
                <li>Account</li>
                <li>Manage Deliveries</li>
                <li>Orders</li>
                <li>Payments</li>
              </ul>
            </div>
            {/* Resources */}
            <div className="flex-col items-center justify-center gap-4 w-full sm:w-auto">
              <h1 className="font-semibold">Resources</h1>
              <ul className="mt-2 gap-2 flex-col items-start justify-center">
                <li>Free eBook</li>
                <li>Development Tutorials</li>
                <li>How To Blog</li>
                <li>YouTube Playlist</li>
              </ul>
            </div>
          </div>
          <div className="w-full h-[1px] bg-orange-600 my-4"></div>
          <div className="flex  flex-row items-center justify-between w-full py-4">
            <div className="w-full">
              Shop.co © 2000-2023, All Rights Reserved
            </div>
            <div className="flex items-center justify-between sm:justify-end sm:gap-10 w-full ">
              <div className="hover:cursor-pointer">
                <Visa />
              </div>
              <div className="hover:cursor-pointer">
                <Mastercard />
              </div>
              <div className="hover:cursor-pointer">
                <Paypal />
              </div>
              <div className="hover:cursor-pointer">
                <Unionpay />
              </div>
              <div className="hover:cursor-pointer">
                <Hiper />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
