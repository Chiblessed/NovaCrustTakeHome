"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Dropdown({ trigger, children, className = "" }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className={`relative w-full ${className}`}>
      <div onClick={() => setOpen((prev) => !prev)}>{trigger({ open })}</div>

      {open && (
        <div className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-100 rounded-[20px] px-4 py-5 shadow-lg z-50">
          {children({ close: () => setOpen(false) })}
        </div>
      )}
    </div>
  );
}
