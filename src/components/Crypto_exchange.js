"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import Crypto1 from "../../public/images/crypto1 (1).svg";
import Crypto2 from "../../public/images/crypto1 (2).svg";
import Crypto3 from "../../public/images/crypto1 (3).svg";
import Crypto from "../../public/images/crypto.svg";

const options = [
  { label: "USDT - CELO", image: Crypto3 },
  { label: "USDT - TON", image: Crypto2 },
  { label: "USDT - BNB", image: Crypto1 },
];

export default function CryptoExchange({
  items: propItems,
  selected: controlledSelected,
  onChange,
  className = "",
}) {
  const [open, setOpen] = useState(false);
  const [internalSelected, setInternalSelected] = useState(null);
  const dropdownRef = useRef(null);
  const items = propItems ?? options;
  const selected = controlledSelected ?? internalSelected;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    if (onChange) onChange(option);
    else setInternalSelected(option);
    setOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative w-1/2 bg-red-500">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="border border-gray-50 absolute bottom-0 right-0 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 rounded-[20px] font-medium text-green font-clash hover:bg-gray-100 transition-colors"
      >
        <span className="flex items-center gap-2 truncate font-medium text-green text-sm">
          {selected ? (
            <>
              <Image
                src={selected.image}
                alt={selected.label}
                width={20}
                height={20}
              />
              {selected.label}
            </>
          ) : (
            <div className="flex items-center justify-center gap-0.5">
              <Image src={Crypto} alt="Ethereum" width={25} height={25} />
              Eth
            </div>
          )}
        </span>

        <svg
          className={
            open ? "rotate-180 transition-transform" : "transition-transform"
          }
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.6922 7.94218L10.4422 14.1922C10.3841 14.2503 10.3152 14.2964 10.2393 14.3278C10.1634 14.3593 10.0821 14.3755 9.99998 14.3755C9.91785 14.3755 9.83652 14.3593 9.76064 14.3278C9.68477 14.2964 9.61584 14.2503 9.55779 14.1922L3.30779 7.94218C3.19052 7.82491 3.12463 7.66585 3.12463 7.5C3.12463 7.33414 3.19052 7.17508 3.30779 7.05781C3.42507 6.94053 3.58413 6.87465 3.74998 6.87465C3.91583 6.87465 4.07489 6.94053 4.19217 7.05781L9.99998 12.8664L15.8078 7.05781C15.8659 6.99974 15.9348 6.95368 16.0107 6.92225C16.0865 6.89082 16.1679 6.87465 16.25 6.87465C16.3321 6.87465 16.4134 6.89082 16.4893 6.92225C16.5652 6.95368 16.6341 6.99974 16.6922 7.05781C16.7502 7.11588 16.7963 7.18482 16.8277 7.26069C16.8592 7.33656 16.8753 7.41787 16.8753 7.5C16.8753 7.58212 16.8592 7.66344 16.8277 7.73931C16.7963 7.81518 16.7502 7.88412 16.6922 7.94218Z"
            fill="#013941"
          />
        </svg>
      </button>

      {open && (
        <div
          className={`absolute left-0 top-full mt-2 w-full space-y-3 bg-white border border-gray-100 rounded-[20px] px-4 py-5 shadow-lg z-50`}
        >
          <div className="flex items-center gap-2 border border-gray-50 px-3 py-2.5 rounded-[20px] w-full">
            <svg
              className="shrink-0"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.9422 17.0578L14.0305 13.1469C15.1642 11.7857 15.7296 10.0398 15.6089 8.27244C15.4883 6.50506 14.6909 4.85223 13.3826 3.65779C12.0744 2.46334 10.356 1.81926 8.58492 1.85951C6.81388 1.89976 5.12653 2.62125 3.87389 3.87389C2.62125 5.12653 1.89976 6.81388 1.85951 8.58492C1.81926 10.356 2.46334 12.0744 3.65779 13.3826C4.85223 14.6909 6.50506 15.4883 8.27244 15.6089C10.0398 15.7296 11.7857 15.1642 13.1469 14.0305L17.0578 17.9422C17.1159 18.0003 17.1848 18.0463 17.2607 18.0777C17.3366 18.1092 17.4179 18.1253 17.5 18.1253C17.5821 18.1253 17.6634 18.1092 17.7393 18.0777C17.8152 18.0463 17.8841 18.0003 17.9422 17.9422C18.0003 17.8841 18.0463 17.8152 18.0777 17.7393C18.1092 17.6634 18.1253 17.5821 18.1253 17.5C18.1253 17.4179 18.1092 17.3366 18.0777 17.2607C18.0463 17.1848 18.0003 17.1159 17.9422 17.0578ZM3.125 8.75C3.125 7.63748 3.4549 6.54994 4.07298 5.62491C4.69106 4.69989 5.56957 3.97892 6.5974 3.55317C7.62524 3.12743 8.75624 3.01604 9.84738 3.23308C10.9385 3.45012 11.9408 3.98585 12.7275 4.77252C13.5141 5.55919 14.0499 6.56147 14.2669 7.65261C14.484 8.74376 14.3726 9.87476 13.9468 10.9026C13.5211 11.9304 12.8001 12.8089 11.8751 13.427C10.9501 14.0451 9.86252 14.375 8.75 14.375C7.25866 14.3733 5.82888 13.7802 4.77435 12.7256C3.71981 11.6711 3.12665 10.2413 3.125 8.75Z"
                fill="#828282"
              />
            </svg>

            <input
              type="text"
              placeholder="Search"
              className="flex-1 min-w-0 outline-none text-sm font-normal text-gray-dark bg-transparent"
            />
          </div>

          {items.map((option, idx) => (
            <button
              key={option.id ?? option.label ?? idx}
              onClick={() => handleSelect(option)}
              className="w-full px-4 py-2 flex items-center gap-2 text-left hover:bg-gray-200 hover:rounded-[12px]"
            >
              {option.image ? (
                <Image
                  src={option.image}
                  alt={option.label}
                  width={24}
                  height={24}
                />
              ) : option.symbol ? (
                <span className="text-sm text-green font-medium">
                  {option.symbol}
                </span>
              ) : null}
              <span className="text-sm text-green font-medium">
                {option.label}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
