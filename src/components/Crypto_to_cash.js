"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Dropdown from "./Dropdown";
import CryptoExchange from "./Crypto_exchange";
import Image from "next/image";
import MuskImg from "../../public/images/wallet2.svg";
import RainbowImg from "../../public/images/wallet3.svg";
import WalletConnectImg from "../../public/images/wallet1.svg";
import Wallet from "../../public/images/Wallet.svg";
import NgnImg from "../../public/images/image.svg";
import Button from "./Button";

const wallets = [
  { label: "Metamask", image: MuskImg },
  { label: "Rainbow", image: RainbowImg },
  { label: "WalletConnect", image: WalletConnectImg },
  { label: "Other Crypto Wallets", image: Wallet },
];

const CryptoToCash = () => {
  const router = useRouter();
  const [isConverting, setIsConverting] = useState(false);
  const [selected, setSelected] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  function showReceiptantDetails(e) {
    e.preventDefault();

    if (!selected) {
      setErrorMsg("Please select a wallet");
      return;
    }
    setIsConverting(true);
    router.push("/Receiptant_Details");
  }
  return (
    <main className="font-sans">
      <div className="border border-gray-50 flex items-end justify-between py-6 px-6 rounded-[30px]">
        <p className="font-medium text-gray-dark text-base flex flex-col gap-2">
          You pay
          <span className="text-black font-semibold text-2xl">1.00</span>
        </p>
        <CryptoExchange />
      </div>
      <div className="mt-7 border border-gray-50 flex items-end justify-between py-6 px-6 rounded-[30px]">
        <p className="font-medium text-gray-dark text-base flex flex-col gap-2">
          You receive
          <span className="text-black font-semibold text-2xl">1.00</span>
        </p>
        <button className=" flex items-center border border-gray-50 justify-center gap-2 px-4 py-2 bg-gray-100 rounded-[20px] font-medium text-green font-clash hover:bg-gray-100 transition-colors">
          <Image src={NgnImg} alt="Ngn Image" width={24} height={24} />
          Ngn{" "}
          <svg
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
      </div>
      <p className="font-medium text-green text-base pt-5 pb-3.5">Pay from</p>
      <div className="border border-gray-50 rounded-[30px] flex items-center justify-between px-4 py-3">
        <p className="text-base text-green font-medium">Select an option </p>
        <svg
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
      </div>
      <p className="font-medium text-green text-base pt-5 pb-3.5">Pay to</p>
      <Dropdown
        trigger={({ open }) => (
          <button className="border border-gray-50 rounded-[30px] flex items-center justify-between px-4 py-3 w-full bg-white">
            <span className="flex items-center gap-2 text-green font-medium truncate">
              {selected ? selected.label : "Select an option"}
            </span>
            <svg
              className={`transition-transform ${open ? "rotate-180" : ""}`}
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
        )}
      >
        {({ close }) =>
          wallets.map((wallet) => (
            <button
              key={wallet.label}
              onClick={() => {
                setSelected(wallet);
                close();
              }}
              className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-200 rounded-[20px]"
            >
              <Image
                src={wallet.image}
                alt={wallet.label}
                width={24}
                height={24}
              />
              <span className="text-sm text-green font-medium">
                {wallet.label}
              </span>
            </button>
          ))
        }
      </Dropdown>
      {errorMsg && (
        <p className="text-red-500 font-medium text-base text-center">
          {errorMsg}
        </p>
      )}
      <Button onClick={showReceiptantDetails}>
        {isConverting ? (
          <div className="w-6 h-6 mx-auto border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
        ) : (
          "Convert Now"
        )}
      </Button>
    </main>
  );
};

export default CryptoToCash;
