"use client";  // Add this line at the very top

import React, { useState } from "react";
import { GrAddCircle, GrSubtractCircle } from "react-icons/gr";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { question: "What is Neeca?", answer: "NEECA stands for National Energy Efficiency and Conservation Authority, which is a federal entity, which is the focal point for advising the government and driving all energy efficiency and conservation drives." },
    { question: "Does Neeca have representation in the provinces?", answer: "NEECA has designated agencies in all the provinces. Some have already become functional in a few provices, while in the remaining they are under the process of being set-up." },
    { question: "What is energy conservation?", answer: "Energy conservation is the process through which the usage of energy is reduced without reducing the number of appliances using effective measures. In short this means that less energy is consumed which is termed as Energy Conservation." },
    { question: "What is meant by energy effeceiency?", answer: "Energy Efficiency is created by replacing the currently used appliances such as Lighting, Air Conditioners, Refrigerators, Electric Fans etc. with appliances which conform to MINIMUM energy Performance Standards (MEPS) as issued by the Pakistan Standards and Quality Control Authority (PSQCA)." },
    { question: "If MEPS are approved by PSQCA; then what is the role NEECA?", answer: "As stated above, NEECA is the focal authority regulating the availability of MEPS compliant electrical products in the country." },
    { question: "Does NEECA have a list of compliant sellers and their corresponding products?", answer: "Yes, NEECA is regularly updating it's list of approved sellers/manufacturers on it's Web Portal." },
    { question: "What is the web Portal?", answer: "The web portal is a software tool, wherein both the prospective sellers and buyers (consumers) can find lists of approved vendors (sellers/manufacturers) and products. This web portal will also carry news of interest for all regarding conservation activities by NEECA and tips on energy conservation, etc." },
  ];

  return (
    <div className=" text-gray-900 bg-white px-80 border-2 p-16">
      {faqs.map((faq, index) => (
        <div key={index} className=" p-10 border-2 border-[rgb(240,241,243)] ">
          <button
            onClick={() => toggleFaq(index)}
            className="flex justify-between w-full text-lg"
          >
            {faq.question}
            {openIndex === index ? (
              <GrSubtractCircle className="" />
            ) : (
              <GrAddCircle className="" />
            )}
          </button>
          {openIndex === index && <p className="mt-2 text-gray-300">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default Faqs;
