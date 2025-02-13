import React from "react";

export default function SectionTitle({text, highlightedText}) {
  return (
    <>
      <p className="text-[#1A202C] text-2xl robotoFont text-center font-semibold">
        {text} <span className="text-[#1A73E8]">{highlightedText}</span>
      </p>
    </>
  );
}
