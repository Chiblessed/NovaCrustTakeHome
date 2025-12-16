"use client";
import React, { useState } from "react";
import Link from "next/link";
import Button from "../../components/Button";
import Image from "next/image";
import NgnImg from "../../../public/images/image.svg";
import { useRouter } from "next/navigation";

const countries = [
  { name: "Nigeria", code: "+234", flag: NgnImg },
  {
    name: "United States",
    code: "+1",
    flag: "data:image/png;base64,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",
  },
  {
    name: "United Kingdom",
    code: "+44",
    flag: "data:image/png;base64,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",
  },
  {
    name: "Ghana",
    code: "+233",
    flag: "data:image/png;base64,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",
  },
  {
    name: "Canada",
    code: "+1",
    flag: "data:image/png;base64,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",
  },
];

const page = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const router = useRouter();
  const [isConverting, setIsConverting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    recipientEmail: "",
    recipientNumber: "",
  });

  function showMoreReceiptantDetails(e) {
    e.preventDefault();

    if (
      !formData.recipientEmail ||
      !formData.recipientNumber ||
      !selectedCountry
    ) {
      setErrorMsg("Please fill all fields");
      return;
    }

    const fullPhoneNumber = `${selectedCountry.code}${formData.recipientNumber}`;

    setIsConverting(true);
    router.push("/Address_Details");
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

        <p className="text-green font-medium text-xl text-center relative bottom-8">
          Recipient details
        </p>

        <div className="flex flex-col items-center justify-between">
          <div className="w-full">
            <p className="text-base font-medium text-green pb-3">
              Recipient email
            </p>
            <input
              type="text"
              placeholder="Enter recipient email"
              value={formData.recipientEmail}
              onChange={(e) =>
                setFormData({ ...formData, recipientEmail: e.target.value })
              }
              className="w-full border border-gray-50 rounded-[30px] px-4 py-3 text-green placeholder:text-gray-dark font-normal focus:outline-none text-sm"
            />

            <p className="text-base font-medium text-green pb-3 pt-6">
              Recipient phone number
            </p>

            <div className="flex gap-0 w-full relative border border-gray-50 rounded-[30px]">
              {/* Country Dropdown */}
              <button
                type="button"
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 border border-gray-50 bg-gray-250 rounded-l-[30px] px-4 py-3 text-sm "
              >
                <span className="text-gray-dark text-base font-medium">
                  {selectedCountry.code}
                </span>
                <Image
                  src={selectedCountry.flag}
                  alt={selectedCountry.name}
                  width={20}
                  height={14}
                  className="rounded-sm"
                />
                <svg
                  className={`transition-transform ${open ? "rotate-180" : ""}`}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6923 7.9422L10.4423 14.1922C10.3842 14.2503 10.3153 14.2964 10.2394 14.3279C10.1636 14.3593 10.0822 14.3755 10.0001 14.3755C9.91797 14.3755 9.83664 14.3593 9.76077 14.3279C9.68489 14.2964 9.61596 14.2503 9.55792 14.1922L3.30792 7.9422C3.19064 7.82492 3.12476 7.66586 3.12476 7.50001C3.12476 7.33416 3.19064 7.1751 3.30792 7.05782C3.42519 6.94055 3.58425 6.87466 3.7501 6.87466C3.91596 6.87466 4.07502 6.94055 4.19229 7.05782L10.0001 12.8664L15.8079 7.05782C15.866 6.99976 15.9349 6.95369 16.0108 6.92227C16.0867 6.89084 16.168 6.87466 16.2501 6.87466C16.3322 6.87466 16.4135 6.89084 16.4894 6.92227C16.5653 6.95369 16.6342 6.99976 16.6923 7.05782C16.7504 7.11589 16.7964 7.18483 16.8278 7.2607C16.8593 7.33657 16.8755 7.41789 16.8755 7.50001C16.8755 7.58213 16.8593 7.66345 16.8278 7.73932C16.7964 7.81519 16.7504 7.88413 16.6923 7.9422Z"
                    fill="#013941"
                  />
                </svg>
              </button>

              {/* Dropdown Country Phone Code */}
              {open && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border rounded-xl shadow-lg z-50">
                  {countries.map((country) => (
                    <div
                      key={country.code}
                      onClick={() => {
                        setSelectedCountry(country);
                        setOpen(false);
                      }}
                      className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-50"
                    >
                      <Image
                        src={country.flag}
                        alt={country.name}
                        width={20}
                        height={14}
                        className="rounded-sm"
                      />
                      <span className="text-sm text-green">
                        {country.name} ({country.code})
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <input
                type="tel"
                placeholder="000-000-00000"
                value={formData.recipientNumber}
                onChange={(e) =>
                  setFormData({ ...formData, recipientNumber: e.target.value })
                }
                className="flex-1 border border-gray-50 rounded-r-[30px] px-4 py-3 text-green placeholder:text-gray-dark text-sm focus:outline-none"
              />
            </div>
            {errorMsg && (
              <p className="text-red-500 font-medium text-base text-center pt-1">
                {errorMsg}
              </p>
            )}
          </div>
          <Button onClick={showMoreReceiptantDetails} className="mt-48">
            {isConverting ? (
              <div className="w-6 h-6 mx-auto border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
            ) : (
              "Next"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
