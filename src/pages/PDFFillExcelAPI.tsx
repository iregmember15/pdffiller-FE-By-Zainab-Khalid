import { useState } from 'react';
import uploadIcon from '../assets/images/uploadpdf.png';    
import arrowIcon from '../assets/images/arrow.png';
import arrowDownIcon from '../assets/images/arrowDown.png';
import templatesIcon from '../assets/images/template.png';
import demoIcon from '../assets/images/demo.png';
// import sheetIcon from '../assets/images/sheetIcon.png';
import uploadPDF from '../assets/images/upload_body.png';
import { useNavigate } from 'react-router';
import { PDFFillExcelAPIItems } from '../data/data';

const PDFFillExcelAPI: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleNext = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const handlePrevious = () => {
        if (currentStep === 1) {

            return navigate('/');

        };
        setCurrentStep((prevStep) => prevStep - 1);
    };



    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOptionClick = (path: string) => {
        setIsDropdownOpen(false); // Close dropdown
        navigate(path); // Redirect to the specified path
    };

    return (
        <div className=" flex flex-col min-h-screen ">
            <div className="bg-[#182B57] fixed top-0 w-full h-10"></div>
            <div className='my-2 lg:mx-36 mt-16'>
                <h1 className="text-xl font-bold capitalize">Fill pdf via spreadsheet / API</h1>

                <div>
                    {currentStep === 1 && (
                        <div className="w-full p-4">
                            <div className="w-full  bg-white  shadow-md">
                                <div className='flex justify-center gap-20 items-center bg-[#9AA1B0] py-4'>
                                    {PDFFillExcelAPIItems.map((item, index) => {
                                        return (
                                            <div key={index} className='flex  items-center justify-center'>
                                                <div className='flex flex-col items-center justify-center'>
                                                    <img
                                                        src={item.icon}
                                                        alt={`Upload icon`}
                                                        className="w-6 h-6 "
                                                    />
                                                    <span>{item.label}</span>
                                                </div>

                                                {index < PDFFillExcelAPIItems.length - 1 && <img
                                                    src={arrowIcon}
                                                    alt={`arrow icon`}
                                                    className="w-8 h-6 ms-2 "
                                                />
                                                }
                                            </div>
                                        )
                                    }
                                    )}
                                </div>

                                <div className='flex flex-col justify-center items-center py-4 px-10'>
                                    <div className='capitalize text-[#1951D1] text-[12px]  flex justify-center items-center py-2 gap-5'>
                                        <div>
                                            <h2 className='font-semibold'>Create document template</h2>
                                            <p>Templates can be filled Via API or used to kickstart a work flow or E-sign project</p>
                                        </div>
                                        <span><img
                                            src={demoIcon}
                                            alt={`Upload icon`}
                                            className="w-10 h-10 "
                                        /></span>
                                    </div>

                                    <div className='flex  w-full gap-3 mx-10'>
                                        <div className=' flex flex-col justify-center items-center capitalize w-full border border-gray-500 p-12 rounded-md'>
                                            <img
                                                src={uploadPDF}
                                                alt={`Upload icon`}
                                                className="w-10 h-10 "
                                            />
                                            <div className=" flex justify-center items-center  text-[#182B57] w-full  font-bold ">Upload PDF</div>
                                            <p>Drag and drop pdf file here</p>
                                        </div>

                                        <div className=' relative flex flex-col justify-center items-center capitalize border border-gray-500 p-10 w-1/3 rounded-md'>
                                            <img
                                                src={templatesIcon}
                                                alt={`Upload icon`}
                                                className="w-10 h-10 "
                                            />
                                            <div className=" flex justify-center items-center gap-2 text-[#182B57] w-full  font-bold cursor-pointer " onClick={handleDropdownToggle}>
                                                <h2>Template</h2>
                                                <img
                                                    src={arrowDownIcon}
                                                    alt={`Upload icon`}
                                                    className="w-3 h-5 "
                                                />
                                            </div>
                                            {isDropdownOpen && (
                                                <div className="absolute top-32 bg-white shadow-md border rounded-md text-sm">
                                                    <div
                                                        className="p-2 hover:bg-gray-100 cursor-pointer"
                                                        onClick={() => handleOptionClick('/my-templates')}
                                                    >
                                                        My Templates
                                                    </div>
                                                    <div
                                                        className="p-2 hover:bg-gray-100 cursor-pointer"
                                                        onClick={() => handleOptionClick('/history')}
                                                    >
                                                        History
                                                    </div>
                                                    <div
                                                        className="p-2 hover:bg-gray-100 cursor-pointer"
                                                        onClick={() => handleOptionClick('/library')}
                                                    >
                                                        Library
                                                    </div>
                                                    <div
                                                        className="p-2 hover:bg-gray-100 cursor-pointer"
                                                        onClick={() => handleOptionClick('/from-Elistener')}
                                                    >
                                                        From E-Listener
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className='border border-gray-500 rounded-md flex justify-center items-start my-3 p-3'>
                                        <input type='checkbox' className='m-2' title='' />
                                        <div className='text-[12px] text-[#182B57]'>
                                            <h2 className='font-semibold'>Use AI For Document Detection </h2>
                                            <p>To Detect and tag fields on the PDF?</p>
                                        </div>
                                    </div>
                                    <div className='w-1/2 flex justify-center items-center'>
                                        <button className=" text-center bg-[#3A4F72] text-white px-4 p-1 font-md rounded-sm">Upload</button>
                                    </div>
                                </div>

                            </div>
                            <div className='flex justify-end mx-10 gap-4 my-3 pb-10'>
                                <button
                                    className="px-4 py-2 bg-[#3A4F72] text-white  hover:bg-blue-600"
                                    onClick={handlePrevious}
                                >
                                    Back
                                </button>

                                <button
                                    className="px-4 py-2 bg-[#3A4F72] text-white  hover:bg-blue-600"
                                    onClick={handleNext}
                                >
                                    Next
                                </button>
                            </div></div>
                    )}

                    {currentStep === 2 && (
                        <div className="w-full p-4">
                            <div className="w-full  bg-white  shadow-md">
                                <div className='flex justify-center gap-20 items-center bg-[#9AA1B0] py-4'>
                                    <div className='flex flex-col items-center justify-center'>
                                        <img
                                            src={uploadIcon}
                                            alt={`Upload icon`}
                                            className="w-6 h-6 "
                                        />
                                        <span>Upload PDF</span>
                                    </div>

                                    <img
                                        src={arrowIcon}
                                        alt={`arrow icon`}
                                        className="w-8 h-6 "
                                    />

                                    <div className='flex flex-col items-center justify-center'>
                                        <img
                                            src={createAPI}
                                            alt={`createAPI icon`}
                                            className="w-6 h-6 "
                                        />
                                        <span>Create API endpoint</span>
                                    </div>

                                </div>
                                <div className='flex flex-col justify-center items-center py-4'>
                                    <div className='w-1/2 flex justify-center items-center'>
                                        <button className=" text-center bg-[#6E86BE] text-white w-full p-3 mb-4 font-bold capitalize "> NEXT STEP: create API endpoints</button>
                                    </div>

                                    <div className='w-1/2 flex justify-center items-center'>
                                        <div className=" flex justify-center items-center border border-gray-500 text-[#182B57] w-full min-h-[200px] p-3 mb-4  font-bold">Your Uploaded PDF will show up here</div>
                                    </div>
                                </div>

                            </div>
                            <div className='flex justify-end mx-10 gap-4 my-3 pb-1'>
                                <button
                                    className="px-4 py-2 bg-[#3A4F72] text-white  hover:bg-blue-600"
                                    onClick={handlePrevious}
                                >
                                    Back
                                </button>

                                <button
                                    className="px-4 py-2 bg-[#3A4F72] text-white  hover:bg-blue-600"
                                    onClick={handleNext}
                                >
                                    Next
                                </button>
                            </div></div>
                    )}

                    {currentStep === 3 && (
                        <div className="w-full p-4">
                            <div className="w-full  bg-white  shadow-md">
                                <div className='flex justify-center gap-20 items-center bg-[#9AA1B0] py-4'>
                                    <div className='flex flex-col items-center justify-center'>
                                        <img
                                            src={uploadIcon}
                                            alt={`Upload icon`}
                                            className="w-6 h-6 "
                                        />
                                        <span>Upload PDF</span>
                                    </div>

                                    <img
                                        src={arrowIcon}
                                        alt={`arrow icon`}
                                        className="w-8 h-6 "
                                    />

                                    <div className='flex flex-col items-center justify-center'>
                                        <img
                                            src={createAPI}
                                            alt={`createAPI icon`}
                                            className="w-6 h-6 "
                                        />
                                        <span>Create API endpoint</span>
                                    </div>

                                </div>
                                <div className='flex flex-col justify-center items-center py-4'>
                                    <div className='w-1/2 flex justify-center items-center'>
                                        <button className=" text-center bg-[#6E86BE] text-white w-full p-3 mb-4 font-bold capitalize "> LAST  STEP: Get / Set your API endpoints as shown below</button>
                                    </div>

                                    <div className='w-1/2 flex justify-center items-center'>
                                        <div className=" flex justify-center items-center border border-gray-500 text-[#182B57] w-full min-h-[200px] p-3 mb-4  font-bold">Your Uploaded PDF will show up here</div>
                                    </div>
                                </div>

                            </div>
                            <div className='flex justify-end mx-10 gap-4 my-3 pb-1'>
                                <button
                                    className="px-4 py-2 bg-[#3A4F72] text-white  hover:bg-blue-600"
                                    onClick={handlePrevious}
                                >
                                    Back
                                </button>

                                <button
                                    className="px-4 py-2 bg-[#3A4F72] text-white  hover:bg-blue-600"
                                    onClick={handleNext}
                                >
                                    Download
                                </button>
                            </div></div>

                    )}

                </div>
            </div>
            <div className="bg-[#182B57] h-10 fixed bottom-0 w-full"></div>
        </div>
    );
};

export default PDFFillExcelAPI