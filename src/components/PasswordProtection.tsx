import React, { useState } from "react";
import arrowDownIcon from "../assets/images/arrowDown.png";

const PasswordProtection: React.FC = () => {
    const [isMainDropdownOpen, setIsMainDropdownOpen] = useState<boolean>(false);
    const [openSubDropdownIndex, setOpenSubDropdownIndex] = useState<number | null>(null);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [manualPin, setManualPin] = useState("");
    const [selectedRadio, setSelectedRadio] = useState("combination");
    const [passwordError,setPasswordError] = useState("");
    const columns = ["ID", "First Name", "Last Name", "DOB", "Address"];

    const dropdownOptions = ["First 4 Char", "Last 4 Char"];

    const toggleMainDropdown = () => {
        setIsMainDropdownOpen((prev) => !prev);
    };

    const handleOptionSelect = (option: string) => {
        if (!selectedOptions.includes(option)) {
            setSelectedOptions((prev) => [...prev, option]);
        }
        setIsMainDropdownOpen(false);
    };

    const handleSubOptionSelect = (index: number, value: string) => {
        const updatedOptions = [...selectedOptions];
        updatedOptions[index] = `${updatedOptions[index]} (${value})`;
        setSelectedOptions(updatedOptions);
        setOpenSubDropdownIndex(null); 
    };

    const handleRemoveOption = (index: number) => {
        setSelectedOptions((prev) => prev.filter((_, i) => i !== index));
    };

    const handleRadioChange = (value: string) => {
        setSelectedRadio(value);
    };

    return (
        <div className="w-full">
            <div className="my-4">
                <button
                    onClick={toggleMainDropdown}
                    className="border border-gray-400 px-4 py-2  flex items-center gap-2 font-bold text-[#182B57]"
                >
                    Create PIN as Combination of 2 or 3 Columns

                    <img src={arrowDownIcon} alt="arrow" className="w-3 h-5" />
                </button>
                {isMainDropdownOpen && (
                    <div className="absolute bg-white border border-gray-400 mt-1 w-48 z-10 p-2">
                        {columns.map((column, index) => (
                            <div
                                key={index}
                                className="px-3 py-2 hover:bg-gray-200 cursor-pointer border border-gray-300 my-1"
                                onClick={() => handleOptionSelect(column)}
                            >
                                {column}
                            </div>
                        ))}
                    </div>
                )}
                <div className="flex flex-wrap gap-2 mt-4">
                    {selectedOptions.length > 0 && (
                        <input
                            type="radio"
                            name="pinMethod"
                            value="combination"
                            checked={selectedRadio === "combination"}
                            onChange={() => handleRadioChange("combination")}
                            aria-label="combination"
                        />
                    )}

                    {selectedOptions.map((option, index) => (
                        <div
                            key={index}
                            className="border border-gray-400 px-3 py-2 rounded flex items-center gap-2"
                        >
                            <button
                                onClick={() => handleRemoveOption(index)}
                                className="text-red-500"
                            >
                                x
                            </button>
                            <span>{option}</span>

                            <div className="relative">
                                <button
                                    onClick={() => {
                                        setOpenSubDropdownIndex((prev) =>
                                            prev === index ? null : index
                                        );
                                    }}
                                    className="ml-2 px-2 py-1"
                                >
                                    <img src={arrowDownIcon} alt="arrow" className="w-3 h-5" />
                                </button>
                                {openSubDropdownIndex === index && <div className="absolute bg-white border border-gray-400 mt-1 w-36 z-10 p-2">
                                    {dropdownOptions.map((subOption, subIndex) => (
                                        <div
                                            key={subIndex}
                                            className="px-3 py-2 hover:bg-gray-200 cursor-pointer border border-gray-300 my-1"
                                            onClick={() =>
                                                handleSubOptionSelect(index, subOption)
                                            }
                                        >
                                            {subOption}
                                        </div>
                                    ))}
                                </div>
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-6">
                {selectedOptions.length > 0 && (
                    <>
                        <p className="font-bold py-2 ">Create Your Own PIN: </p>
                        <div className="flex flex-col ">
                            
                            <div className=" flex">
                                <div className="flex gap-2">
                            <input
                                type="radio"
                                name="pinMethod"
                                value="manual"
                                checked={selectedRadio === "manual"}
                                onChange={() => handleRadioChange("manual")}
                                className=""
                                aria-label="manual"
                            />
                            <input
                                type="text"
                                value={manualPin}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setManualPin(value)

                                    if( value.length < 4) {
                                        
                                        setPasswordError('pin must be minimum 4 digits');
                                    } else if(value.length > 9) {
                                        setPasswordError('pin must be maximum 9 digits');
                                    } else {
                                        setPasswordError('');
                                    }
                                }}
                                
                                placeholder="Enter your PIN"
                                className="border border-gray-400 px-4 py-2 rounded w-1/3"
                            />
                            </div>
                            <div className="flex justify-center items-center mx-3 ">upto: {" "}
                                <div className="flex flex-col mx-2">
                                    <span> ( max 9 digits)</span>
                                    <span> ( min 4 digits)</span>
                                </div>
                            </div>
                            </div>
                            {passwordError &&<span className="text-red-600 block">{passwordError}</span>}
                        </div>
                    </>
                )}

            </div>
            <div className="mt-6">
                <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Use My Selection of PIN as Default for All PDF Docs
                </label>
            </div>
            <div className="flex justify-end"><button disabled={Boolean(passwordError)} className="mt-4 px-6 disabled:bg-gray-200 py-2 bg-[#182B57] text-white rounded">
                Set Password
            </button></div>

        </div>
    );
};

export default PasswordProtection;
