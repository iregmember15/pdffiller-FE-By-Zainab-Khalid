import React, { useState } from "react";
import { banks } from "../data/bankdata";

const FilterBankDetails: React.FC = () => {
  const [selectedBank, setSelectedBank] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedBranch, setSelectedBranch] = useState<string>("");
  const [finalSelection, setFinalSelection] = useState<string>("");

  return (
    <div className="flex flex-col items-center justify-center h-auto">
      <div className="flex flex-col  lg:flex-row gap-2 lg:h-12 ">
        {/* Bank Dropdown */}
        {
          selectedBank && banks[selectedBank] && (
        <select
          className="border border-gray-500 px-4 py-2 rounded-r-md"
          title="banks"
          value={selectedBank}
          onChange={(e) => {
            setSelectedBank(e.target.value);
            setSelectedCity("");
            setSelectedBranch("");
            setFinalSelection("");
          }}
        >
          <option value="">Select Bank</option>
          {Object.keys(banks).map((bank) => (
            <option key={bank} value={bank}>
              {bank}
            </option>
          ))}
        </select>)
        }

        {/* City Dropdown */}
        {selectedBank && (
          <select
            className="border border-gray-500 px-4 py-2 rounded-md"
            title="cities"
            value={selectedCity}
            onChange={(e) => {
              setSelectedCity(e.target.value);
              setSelectedBranch("");
              setFinalSelection("");
            }}
          >
            <option value="">Select City</option>
            {Object.keys(banks[selectedBank]).map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        )}

        {/* Branch Dropdown */}
        {selectedCity && (
          <select
            className="border border-gray-500 px-4 py-2 rounded-md"
            title="branches"
            value={selectedBranch}
            onChange={(e) => {
              setSelectedBranch(e.target.value);
              setFinalSelection(
                `${selectedBank}-${selectedCity}-${e.target.value}`
              );
            }}
          >
            <option value="">Select Branch</option>
            {banks[selectedBank][selectedCity].map((branch: string) => (
              <option key={branch} value={branch}>
                {branch}
              </option>
            ))}
          </select>
        )}
      </div>
      {finalSelection && (
        <div className="px-4 py-2 rounded-md bg-gray-100 ml-2 mt-2">
          {finalSelection}
        </div>
      )}
    </div>
  );
};

export default FilterBankDetails;
