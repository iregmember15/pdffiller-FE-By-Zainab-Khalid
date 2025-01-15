import  { useState } from 'react';
import uploadIcon from '../assets/images/uploadpdf.png';
import createAPI from '../assets/images/create_api.png';
import arrowIcon from '../assets/images/arrow.png';
import { useNavigate } from 'react-router';

const PDFFillAPI: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const navigate = useNavigate();

    const handleNext = () => {
        setCurrentStep((prevStep) => prevStep + 1);
        if(currentStep === 3){
            navigate('/');
        }
    };

    const handlePrevious = () => {
        if (currentStep === 1) {

            return navigate('/');

        };
        setCurrentStep((prevStep) => prevStep - 1);
    };

    return (
        <div className=" flex flex-col min-h-screen ">
            <div className="bg-[#182B57] fixed top-0 w-full h-10"></div>
            <div className='my-2 lg:mx-36 mt-16'>
                <h1 className="text-xl font-bold capitalize">Fill PDF via aPI</h1>

                <div>
                    {currentStep === 1 && (
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
                                        <button className=" text-center bg-[#6E86BE] text-white w-full p-3 m-4 font-bold ">Upload PDF</button>
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


export default PDFFillAPI;