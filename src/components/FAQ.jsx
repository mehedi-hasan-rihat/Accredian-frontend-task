import React, { useState } from "react";
import SectionTitle from "./shared/SectionTitle";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqsData = {
  Eligibility: [
    {
      question:
        "Do I need to have prior Product Management and Project Management experience to enroll in the program??",
      answer: "No, the program is designed for all experience levels.",
    },
    {
      question:
        "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.",
      answer: "Anyone interested in learning can apply.",
    },
  ],
  "How To Use?": [
    {
      question:
        "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.",
      answer: "Simply select a category and browse the FAQs.",
    },
  ],
  "Terms & Conditions": [
    {
      question: "Are there any restrictions?",
      answer: "Yes, please review the terms before enrolling.",
    },
  ],
};

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("Eligibility");

  return (
    <div className="mt-44 max-w-[1360px] mx-auto">
      <SectionTitle text={"Frequently Asked "} highlightedText={"Questions"} />

      <div className="grid grid-cols-5 gap-64 mt-14">
        <div className="space-y-5 col-span-1">
          <div className="text-center py-5 w-[259px] text-[#1A73E8] font-semibold border  border-[#E2E8F0]  shadow-[0_4px_6px_rgba(0,0,0,0.18)] rounded-md ">
            Eligiblity
          </div>
          <div className="text-center py-5 text-[#737373] font-semibold w-[259px] border-2 border-[#737373] rounded-md">
            How to Use?
          </div>
          <div className="text-center py-5 w-[259px] text-[#737373] font-semibold border-2 border-[#737373]  rounded-md">
            Terms & Conditions
          </div>
        </div>
        <div className="col-span-4">
          {faqsData[activeCategory].map((faq, index) => (
            <Accordion key={index} className="shadow-md">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                className="bg-gray-100 hover:bg-gray-200"
              >
                <Typography className="font-medium">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails className="bg-white">
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
}
