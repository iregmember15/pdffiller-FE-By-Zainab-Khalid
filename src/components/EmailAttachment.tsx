import React, { useState } from 'react';
import infoIcon from '../assets/images/infoIcon.png';
import arrowDownIcon from '../assets/images/arrowDown.png';
import EmailContent from './EmailContent';

const EmailAttachment: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    const subMenus = ["Type", "CSV file", "Connect with gmail contact via api"];
    return (
        <div className='text-[#182B57]'>
            Disabled
            <div className='flex justify-between items-center '>
                <input
                    type="email"
                    value=""
                    onChange={(e) => (e.target.value)}
                    placeholder="From Email"
                    className="mt-2 border border-gray-400 px-4 py-2  w-[60%]"
                />
                <img src={infoIcon} alt="infoIcon" className="w-5 h-5" />
                <button className='border border-gray-400 font-bold  px-5 py-2 m-0'> + Add</button>
            </div>
            <input
                type="text"
                value=""
                onChange={(e) => (e.target.value)}
                placeholder="From Name"
                className="mt-2 border border-gray-400 px-4 py-2  w-full"
            />
            <p className='capitalize text-[12px] py-2'>enter a name (e.g. your company name) to help recipients recognize you in their inbox recognize you in their inbox( max.50 characters)
            </p>

            <button
                className="relative flex justify-between items-center border border-gray-400 px-4 py-2 w-full"
                onClick={() => setIsDropdownOpen((prev) => !prev)}
            >
                Recipients
                <img
                    src={arrowDownIcon}
                    alt={`arrow icon`}
                    className="w-3 h-5"
                />
                {isDropdownOpen && (
                    <div className="absolute top-8 right-2 w-48 bg-white border border-gray-400 z-10 ">
                        {subMenus.map((subMenu, subIndex) => (
                            <div
                                key={subIndex}
                                className="w-full py-2 hover:bg-gray-200 cursor-pointer my-1 p-2"
                            >
                                {subMenu}
                            </div>
                        ))}
                    </div>
                )}
            </button>

            <p className='capitalize text-[12px] py-2'>choose the excel column that contain the recipients email addresses
            </p>

            <div className='ms-10 mb-5'>
                <button
                    className="relative flex justify-between items-center px-4 pt-2 gap-3"
                >
                    <img
                        src={arrowDownIcon}
                        alt={`arrow icon`}
                        className="w-3 h-4"
                    />

                    Add CC and BCC
                </button>
                <button
                    className="relative flex justify-between items-center px-4 py-2 gap-3"
                >
                    <img
                        src={arrowDownIcon}
                        alt={`arrow icon`}
                        className="w-3 h-4"
                    />

                    Upload static attachments
                </button>
            </div>

            <label className='capitalize my-2 font-bold' >
                subject Line
                <input
                    type="text"
                    value=""
                    onChange={(e) => (e.target.value)}
                    placeholder=""
                    className="mt-2 border border-gray-400 px-4 py-2  w-full"
                />
            </label>

            <p className='capitalize text-[12px] py-2'>type@to select an excel column as a placeholder variable.
            </p>

            <div>
                <h1 className='capitalize my-2 font-bold'>Email Content</h1>
                <EmailContent />
                <p className='capitalize text-[12px] py-2'>type@to select an excel column as a placeholder variable.
            </p>
            </div>

            <div className='flex justify-end items-center gap-3 mt-5'>
            <button className='font-bold px-3 py-2 text-white bg-[#182B57] '>Send test email</button>
            <button className='font-bold px-3 py-2 text-white bg-[#182B57] '>Save</button>
            </div>
        </div>
    )
}

export default EmailAttachment