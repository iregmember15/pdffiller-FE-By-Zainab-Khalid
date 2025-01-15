import React, { useState } from "react";
import { PDFFillExcelAPIMenus } from "../data/data";
import arrowDownIcon from "../assets/images/arrowDown.png";
import DownloadFilledPDFOptions from "./DownloadFilledPDFOptions";
import PasswordProtection from "./PasswordProtection";
import EmailAttachment from "./EmailAttachment";

const DropdownMenu: React.FC = () => {
    const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
        null
    );
    const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(
        null
    );

    const handleDropdownToggle = (index: number) => {
        setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const handleAccordionToggle = (index: number) => {
        setOpenAccordionIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="w-1/2">
            {PDFFillExcelAPIMenus.map((menu, index) => (
                <div key={index} className="mb-4 border border-gray-400 rounded-sm w-full">
                    {/* For Dropdown Menus */}
                    {menu.type === "dropdown" ? (
                        <div className="flex justify-between items-center px-5 py-3">
                            <div className="flex items-center capitalize text-[#182B57] font-bold">
                                <img src={menu.icon} alt="icon" className="w-10 h-10 me-2" />
                                {menu.title}
                            </div>

                            <button
                                className="relative"
                                onClick={() => handleDropdownToggle(index)}
                            >
                                <img
                                    src={arrowDownIcon}
                                    alt={`arrow icon`}
                                    className="w-3 h-5"
                                />
                                {openDropdownIndex === index && (
                                    <div className="absolute top-12 left-0 w-48 bg-white border border-gray-400 z-10 p-2">
                                        {menu.subMenus.map((subMenu, subIndex) => (
                                            <div
                                                key={subIndex}
                                                className="w-full px-3 py-2 hover:bg-gray-200 cursor-pointer border border-gray-900 my-1"
                                            >
                                                {subMenu}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </button>
                        </div>
                    ) : (
                        /* For Accordions */
                        <div>
                            <div
                                className="flex justify-between items-center px-5 py-3 cursor-pointer"
                                onClick={() => handleAccordionToggle(index)}
                            >
                                <div className="flex items-center capitalize text-[#182B57] font-bold">
                                    <img src={menu.icon} alt="icon" className="w-10 h-10 me-2" />
                                    {menu.title}
                                </div>
                                <img
                                    src={arrowDownIcon}
                                    alt="arrow icon"
                                    className={`w-3 h-5 transform transition-transform ${openAccordionIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </div>

                            {openAccordionIndex === index && (
                                <div className="px-5 py-3 border-t border-gray-400 text-[#182B57]">
                                    {menu.title === "Specify Custom Filenames" && (
                                        <div className="text-sm">
                                            <p>Specify a custom file name</p>
                                            <input type="text" placeholder="Enter a custom file name" className="border border-gray-400 p-2 w-3/4" /> .Pdf
                                            <p>type @ to select an excel column as a placeholder variable.</p>
                                            <div className="flex justify-end mt-2">
                                                <button className="bg-[#3A4F72] font-bold text-white px-3 py-2">Save</button>
                                            </div>
                                        </div>
                                    )}

                                    {menu.title === "Output Options" && (
                                        <div className="text-sm flex flex-col justify-center items-center">
                                            <button className="border border-gray-400 p-2 w-1/2 font-bold my-3">1. Leave PDF  Unchange </button>
                                            <div className="border-t border-gray-400 w-full">
                                                <p className=" p-2  font-bold my-3 text-center">2. Download filled pdf </p>
                                                <DownloadFilledPDFOptions />
                                            </div>
                                            <div className="flex justify-end mt-2">
                                                <button className=" font-bold px-12  py-2 border border-gray-400">Download</button>
                                            </div>
                                        </div>
                                    )}

                                    {menu.title === "Password-Protection" && (
                                        <div className="text-sm flex  items-center ">
                                            <PasswordProtection />
                                        </div>
                                    )}
                                    {menu.title === "Send As Email Attachment" && (
                                        <div className="text-sm flex  items-center ">
                                            <EmailAttachment />
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default DropdownMenu;
