import React, { useState } from "react";

const DownloadFilledPDFOptions: React.FC = () => {
  const [checkboxes, setCheckboxes] = useState<{
    separated: boolean;
    combined: boolean;
  }>({
    separated: false,
    combined: true,
  });


  const [radioGroups, setRadioGroups] = useState({
    row1: "", // "keep" or "remove"
    row2: "", // "printBoth" or "printPlaceholders"
    row3: "", // "compress" or "doNotCompress"
  });

  const handleCheckboxChange = (key: keyof typeof checkboxes) => {
    setCheckboxes((prev) => ({ ...prev, [key]: !prev[key] }));
  };


  const handleRadioChange = (row: string, value: string) => {
    setRadioGroups((prev) => ({ ...prev, [row]: value }));
  };

  return (
    <div className="pb-5">
      <div className="flex justify-between items-center mb-6 gap-4">
        <div className="flex items-center w-1/2">
          <input
            type="checkbox"
            id="separated"
            checked={checkboxes.separated}
            onChange={() => handleCheckboxChange("separated")}
            className="mr-2"
          />
          <label htmlFor="separated" className="text-gray-700 border border-gray-400 p-2  w-full font-bold text-center">
            Separated PDF Document
          </label>
        </div>
        <div className="flex items-center w-1/2">
          <input
            type="checkbox"
            id="combined"
            checked={checkboxes.combined}
            onChange={() => handleCheckboxChange("combined")}
            className="mr-2"
          />
          <label htmlFor="combined" className="text-gray-700 border border-gray-400 p-2  w-full font-bold text-center">
            Combined PDF Document
          </label>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center gap-4">
          <div className="flex items-center w-1/2">
            <input
              type="radio"
              id="keep"
              name="row1"
              value="keep"
              checked={radioGroups.row1 === "keep"}
              onChange={() => handleRadioChange("row1", "keep")}
              className="mr-2"
            />
            <label htmlFor="keep" className="text-gray-700 border border-gray-400 p-2  w-full font-bold text-center">
              Keep Interactive Form Elements
            </label>
          </div>
          <div className="flex items-center w-1/2">
            <input
              type="radio"
              id="remove"
              name="row1"
              value="remove"
              checked={radioGroups.row1 === "remove"}
              onChange={() => handleRadioChange("row1", "remove")}
              className="mr-2"
            />
            <label htmlFor="remove" className="text-gray-700 border border-gray-400 p-2  w-full font-bold text-center">
              Remove Interactive Form Elements
            </label>
          </div>
        </div>

        <div className="flex justify-between items-center gap-4">
          <div className="flex items-center w-1/2">
            <input
              type="radio"
              id="printBoth"
              name="row2"
              value="printBoth"
              checked={radioGroups.row2 === "printBoth"}
              onChange={() => handleRadioChange("row2", "printBoth")}
              className="mr-2"
            />
            <label htmlFor="printBoth" className="text-gray-700 border border-gray-400 p-2  w-full font-bold text-center">
              Print PDF And Placeholders
            </label>
          </div>
          <div className="flex items-center w-1/2">
            <input
              type="radio"
              id="printPlaceholders"
              name="row2"
              value="printPlaceholders"
              checked={radioGroups.row2 === "printPlaceholders"}
              onChange={() => handleRadioChange("row2", "printPlaceholders")}
              className="mr-2"
            />
            <label htmlFor="printPlaceholders" className="text-gray-700 border border-gray-400 p-2  w-full font-bold text-center">
              Print Only Placeholders
            </label>
          </div>
        </div>

        <div className="flex justify-between items-center gap-4">
          <div className="flex items-center w-1/2">
            <input
              type="radio"
              id="compress"
              name="row3"
              value="compress"
              checked={radioGroups.row3 === "compress"}
              onChange={() => handleRadioChange("row3", "compress")}
              className="mr-2"
            />
            <label htmlFor="compress" className="text-gray-700 border border-gray-400 p-2  w-full font-bold text-center">
              Compress PDF Fields
            </label>
          </div>
          <div className="flex items-center w-1/2">
            <input
              type="radio"
              id="doNotCompress"
              name="row3"
              value="doNotCompress"
              checked={radioGroups.row3 === "doNotCompress"}
              onChange={() => handleRadioChange("row3", "doNotCompress")}
              className="mr-2"
            />
            <label htmlFor="doNotCompress" className="text-gray-700 border border-gray-400 p-2 w-full font-bold text-center  ">
              Do Not Compress
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadFilledPDFOptions;
