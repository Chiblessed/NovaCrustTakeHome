"use client";
import Button from "../../components/Button";
import Dropdown from "../../components/Dropdown";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const banks = [
  { label: "GTCO" },
  { label: "Access Bank" },
  { label: "Eco Bank" },
  { label: "Zenith Bank" },
];
const page = () => {
  const router = useRouter();
  const [selected, setSelected] = useState(null);
  const [isConverting, setIsConverting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    accountNumber: "",
    accountName: "",
  });

  function showMoreReceiptantDetails(e) {
    e.preventDefault();

    if (!formData.accountNumber || !formData.accountName || !selected) {
      setErrorMsg("Please fill all fields");
      return;
    }

    setIsConverting(true);
    router.push("/More_Details");
  }
  return (
    <div className="min-h-screen overflow-hidden font-sans bg-[rgba(255,255,255,0.2)] flex items-center justify-center p-4 ">
      <div className="bg-white rounded-[30px] shadow-2xl max-w-2xl w-full overflow-visible max-sm:px-3 px-14 py-9">
        <Link
          href="/"
          className="cursor-pointer inline-flex items-center justify-center"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H5.56029L11.0306 18.2194C11.1003 18.2891 11.1556 18.3718 11.1933 18.4628C11.231 18.5539 11.2504 18.6515 11.2504 18.75C11.2504 18.8485 11.231 18.9461 11.1933 19.0372C11.1556 19.1282 11.1003 19.2109 11.0306 19.2806C10.9609 19.3503 10.8782 19.4056 10.7872 19.4433C10.6961 19.481 10.5985 19.5004 10.5 19.5004C10.4014 19.5004 10.3039 19.481 10.2128 19.4433C10.1218 19.4056 10.039 19.3503 9.96935 19.2806L3.21935 12.5306C3.14962 12.461 3.0943 12.3783 3.05656 12.2872C3.01882 12.1962 2.99939 12.0986 2.99939 12C2.99939 11.9014 3.01882 11.8038 3.05656 11.7128C3.0943 11.6217 3.14962 11.539 3.21935 11.4694L9.96935 4.71938C10.1101 4.57865 10.301 4.49958 10.5 4.49958C10.699 4.49958 10.8899 4.57865 11.0306 4.71938C11.1713 4.86011 11.2504 5.05098 11.2504 5.25C11.2504 5.44902 11.1713 5.6399 11.0306 5.78063L5.56029 11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12Z"
              fill="black"
            />
          </svg>
        </Link>

        <p className="text-green font-medium text-xl text-center relative bottom-6">
          Recipient details
        </p>

        <div>
          <p className="text-base text-green font-medium py-4">Bank</p>
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
              banks.map((bank) => (
                <button
                  key={bank.label}
                  onClick={() => {
                    setSelected(bank);
                    close();
                  }}
                  className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-200 rounded-[20px]"
                >
                  <span className="text-sm text-green font-medium">
                    {bank.label}
                  </span>
                </button>
              ))
            }
          </Dropdown>
          <p className="text-base text-green font-medium py-4">
            Account Number
          </p>
          <input
            type="tel"
            placeholder="Enter your account number"
            value={formData.accountNumber}
            onChange={(e) =>
              setFormData({ ...formData, accountNumber: e.target.value })
            }
            className="w-full border border-gray-50 rounded-[30px] px-4 py-3 text-green placeholder:text-gray-dark font-normal focus:outline-none text-sm"
          />
          <p className="text-base text-green font-medium py-4">Account Name</p>
          <input
            type="text"
            placeholder="Enter your account name"
            value={formData.accountName}
            onChange={(e) =>
              setFormData({ ...formData, accountName: e.target.value })
            }
            className="w-full bg-gray rounded-[30px] outline-none focus:outline-none px-4 py-3 uppercase placeholder:capitalize text-green placeholder:text-gray-dark text-sm"
          />
          {errorMsg && (
            <p className="text-red-500 font-medium text-base text-center pt-1">
              {errorMsg}
            </p>
          )}
        </div>
        <Button onClick={showMoreReceiptantDetails} className="mt-44">
          {isConverting ? (
            <div className="w-6 h-6 mx-auto border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
          ) : (
            "Next"
          )}
        </Button>
      </div>
    </div>
  );
};

export default page;
