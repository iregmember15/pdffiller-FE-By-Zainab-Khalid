import React, { useState } from "react";
import uploadIcon from "../../assets/images/uploadpdf.png";
import createAPI from "../../assets/images/create_api.png";
import arrowIcon from "../../assets/images/arrow.png";
import { useNavigate } from "react-router";
import { FillPDFJSONStep1Props } from "../../@types/fillPDF";

const FillPDFJSONStep1: React.FC<FillPDFJSONStep1Props> = ({
  step,
  setStep,
  setPdfFile,
  setPdfUrl,
  pdfFile,
  pdfUrl,
}) => {
  const navigate = useNavigate();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPdfFile(file);
      const fileURL = URL.createObjectURL(file);
      setPdfUrl(fileURL);
    }
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
    if (step === 3) {
      navigate("/dashboard");
    }
  };

  const handlePrevious = () => {
    if (step === 1) {
      return navigate("/dashboard");
    }
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="w-full p-4">
      <div className="w-full bg-white shadow-md">
        <div className="flex justify-center gap-3 lg:gap-20 items-center bg-[#9AA1B0] py-4  px-2">
          <div className="flex flex-col items-center justify-center">
            <img src={uploadIcon} alt="Upload icon" className="w-6 h-6" />
            <span>Upload PDF</span>
          </div>

          <img src={arrowIcon} alt="arrow icon" className="w-8 h-6" />

          <div className="flex flex-col items-center justify-center">
            <img src={createAPI} alt="createAPI icon" className="w-6 h-6" />
            <span>Create API endpoint</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center py-4 w-full">
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <input
              type="file"
              accept="application/pdf"
              className="hidden"
              id="pdfUpload"
              onChange={handleFileUpload}
            />
            <label
              htmlFor="pdfUpload"
              className="cursor-pointer text-center bg-[#6E86BE] text-white w-full p-3 m-4 font-bold"
            >
              Upload PDF
            </label>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div
              id="pdfBox"
              className="flex justify-center items-center border border-gray-500 text-[#182B57] w-full min-h-[200px] p-3 mb-4 mx-2 font-bold"
            >
              {pdfUrl ? (
                <embed
                  src={pdfUrl}
                  type="application/pdf"
                  width="100%"
                  height="500px"
                />
              ) : (
                "Your Uploaded PDF will show up here"
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mx-10 gap-4 my-3 pb-1">
        <button
          className="px-4 py-2 bg-[#3A4F72] text-white hover:bg-blue-600"
          onClick={handlePrevious}
        >
          Back
        </button>

        <button
          className="px-4 py-2 bg-[#3A4F72] text-white hover:bg-blue-600"
          onClick={() => {
            pdfUrl !== null && pdfFile !== null ? handleNext() : "";
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FillPDFJSONStep1;
