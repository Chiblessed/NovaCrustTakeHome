"use client";
import React, { useState } from "react";
import CryptoToCash from "../components/Crypto_to_cash";

export default function Home() {
  const [active, setActive] = useState("crypto_to_cash");

  return (
    <div className="min-h-screen overflow-hidden font-sans bg-[rgba(255,255,255,0.2)] flex items-center justify-center p-4 ">
      <div className="bg-white rounded-[30px] shadow-2xl max-w-2xl w-full overflow-x-hidden custom-scrollbar max-sm:max-w-3xl">
        <div className="flex items-center justify-around gap-4 max-sm:gap-0.5 rounded-[30px] bg font-medium text-sm bg-gray max-sm:mx-0  mx-26 my-9">
          <button
            onClick={() => setActive("crypto_to_cash")}
            className={`px-5 max-sm:px-2 max-sm:text-xs py-2 rounded-[30px] cursor-pointer text-center font-medium transition-colors ${
              active === "crypto_to_cash"
                ? "bg-green text-white-50"
                : " text-gray-dark hover:bg-gray-100"
            }`}
          >
            Crypto to cash
          </button>
          <button
            onClick={() => setActive("cash_to_crypto")}
            className={` px-5 max-sm:px-2 py-2 rounded-[30px] max-sm:text-xs cursor-pointer text-center font-medium transition-colors ${
              active === "cash_to_crypto"
                ? "bg-green text-white-50"
                : " text-gray-dark hover:bg-gray-100"
            }`}
          >
            Cash to crypto
          </button>
          <button
            onClick={() => setActive("crypto_to_fiat_loan")}
            className={` px-5 max-sm:px-2 py-2 rounded-[30px] max-sm:text-xs cursor-pointer text-center font-medium transition-colors ${
              active === "crypto_to_fiat_loan"
                ? "bg-green text-white-50 "
                : " text-gray-dark hover:bg-gray-100"
            }`}
          >
            Crypto to fiat loan
          </button>
        </div>

        {/* Content Area */}
        <div className="px-14 pb-10 max-sm:px-3">
          {active === "crypto_to_cash" && <CryptoToCash />}
          {active === "cash_to_crypto" && (
            <div className="text-center text-gray-500">
              Cash to crypto component coming soon
            </div>
          )}
          {active === "crypto_to_fiat_loan" && (
            <div className="text-center text-gray-500">
              Crypto to fiat loan component coming soon
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
