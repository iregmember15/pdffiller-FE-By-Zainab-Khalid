import { useState, useEffect } from 'react';
import uploadIcon from '../assets/images/uploadpdf.png';
import createAPI from '../assets/images/create_api.png';
import arrowIcon from '../assets/images/arrow.png';
import { Link, useNavigate } from 'react-router-dom';
import CreateAPIMsg from '../components/CreateAPIMsg';

const PDFFillAPI: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [fileURL, setFileURL] = useState<string | null>(null);
    const [isCreateAPI, setIsCreateAPI] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {

        const storedFileURL = localStorage.getItem('uploadedPDF');
        if (storedFileURL) {
            setFileURL(storedFileURL);
        }
    }, [currentStep]);

    const handleNext = () => {
        setCurrentStep((prevStep) => prevStep + 1);
        if (currentStep === 3) {
            navigate('/');
        }
    };

    const handlePrevious = () => {
        if (currentStep === 1) {
            return navigate('/');
        }
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const fileURL = URL.createObjectURL(file);
            setFileURL(fileURL);
            localStorage.setItem('uploadedPDF', fileURL);
        }
    };

    const handleCreateAPI = () => {
        setIsCreateAPI(true);
    }

    return (
        <div className="flex flex-col min-h-screen">
            <div className="bg-[#182B57] fixed top-0 w-full h-10"></div>
            <div className='m-2 lg:mx-36 mt-16'>
                {!isCreateAPI && <h1 className="text-xl font-bold capitalize">Fill PDF via API</h1>}

                <div>
                    {currentStep === 1 && (
                        <div className="w-full p-4">
                            <div className="w-full bg-white shadow-md">
                                <div className='flex justify-center gap-3 lg:gap-20 items-center bg-[#9AA1B0] py-4  px-2'>
                                    <div className='flex flex-col items-center justify-center'>
                                        <img
                                            src={uploadIcon}
                                            alt="Upload icon"
                                            className="w-6 h-6"
                                        />
                                        <span>Upload PDF</span>
                                    </div>

                                    <img
                                        src={arrowIcon}
                                        alt="arrow icon"
                                        className="w-8 h-6"
                                    />

                                    <div className='flex flex-col items-center justify-center'>
                                        <img
                                            src={createAPI}
                                            alt="createAPI icon"
                                            className="w-6 h-6"
                                        />
                                        <span>Create API endpoint</span>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center items-center py-4 w-full'>
                                    <div className='w-full lg:w-1/2 flex justify-center items-center'>
                                        <input
                                            type="file"
                                            accept="application/pdf"
                                            className="hidden"
                                            id="pdfUpload"
                                            onChange={handleFileUpload}
                                        />
                                        <label htmlFor="pdfUpload" className="cursor-pointer text-center bg-[#6E86BE] text-white w-full p-3 m-4 font-bold">
                                            Upload PDF
                                        </label>
                                    </div>

                                    <div className='w-full lg:w-1/2 flex justify-center items-center'>
                                        <div id="pdfBox" className="flex justify-center items-center border border-gray-500 text-[#182B57] w-full min-h-[200px] p-3 mb-4 mx-2 font-bold">
                                            {fileURL ? (
                                                <embed src={fileURL} type="application/pdf" width="500px" height="500px" />
                                            ) : (
                                                "Your Uploaded PDF will show up here"
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-end mx-10 gap-4 my-3 pb-1'>
                                <button
                                    className="px-4 py-2 bg-[#3A4F72] text-white hover:bg-blue-600"
                                    onClick={handlePrevious}
                                >
                                    Back
                                </button>

                                <button
                                    className="px-4 py-2 bg-[#3A4F72] text-white hover:bg-blue-600"
                                    onClick={handleNext}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div className="w-full p-4">
                            <div className="w-full bg-white shadow-md">
                                <div className='flex justify-center gap-3 lg:gap-20  items-center bg-[#9AA1B0] py-4'>
                                    <div className='flex flex-col items-center justify-center'>
                                        <img
                                            src={uploadIcon}
                                            alt="Upload icon"
                                            className="w-6 h-6"
                                        />
                                        <span>Upload PDF</span>
                                    </div>

                                    <img
                                        src={arrowIcon}
                                        alt="arrow icon"
                                        className="w-8 h-6"
                                    />

                                    <div className='flex flex-col items-center justify-center'>
                                        <img
                                            src={createAPI}
                                            alt="createAPI icon"
                                            className="w-6 h-6"
                                        />
                                        <span>Create API endpoint</span>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center items-center py-4 w-full p-2'>
                                    <div className='w-full lg:w-1/2 flex justify-center items-center'>
                                        <button className="text-center bg-[#6E86BE] text-white w-full p-3 mb-4 font-bold capitalize">
                                            NEXT STEP: create API endpoints
                                        </button>
                                    </div>

                                    <div className='w-full lg:w-1/2 flex justify-center items-center'>
                                        <div id="pdfBox" className="flex justify-center items-center border border-gray-500 text-[#182B57] w-full min-h-[200px] p-3 mb-4 font-bold">
                                            {fileURL ? (
                                                <embed src={fileURL} type="application/pdf" width="500px" height="500px" />
                                            ) : (
                                                "Your Uploaded PDF will show up here"
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-end mx-10 gap-4 my-3 pb-1'>
                                <button
                                    className="px-4 py-2 bg-[#3A4F72] text-white hover:bg-blue-600"
                                    onClick={handlePrevious}
                                >
                                    Back
                                </button>

                                <button
                                    className="px-4 py-2 bg-[#3A4F72] text-white hover:bg-blue-600"
                                    onClick={handleNext}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    )}

                    {currentStep === 3 ? (
                        isCreateAPI ? (
                            <CreateAPIMsg setIsCreateAPI={setIsCreateAPI} />
                        ) : (
                            <div className="w-full p-4">
                                <div className="w-full bg-white shadow-md">
                                    <div className='flex justify-center gap-3 lg:gap-20 items-center bg-[#9AA1B0] py-4  px-2'>
                                        <div className='flex flex-col items-center justify-center'>
                                            <img
                                                src={uploadIcon}
                                                alt="Upload icon"
                                                className="w-6 h-6"
                                            />
                                            <span>Upload PDF</span>
                                        </div>

                                        <img
                                            src={arrowIcon}
                                            alt="arrow icon"
                                            className="w-8 h-6"
                                        />

                                        <div className='flex flex-col items-center justify-center'>
                                            <img
                                                src={createAPI}
                                                alt="createAPI icon"
                                                className="w-6 h-6"
                                            />
                                            <span>Create API endpoint</span>
                                        </div>
                                    </div>
                                    <div className='flex flex-col justify-center items-center py-4 w-full p-2'>
                                        <div className='w-full lg:w-1/2 flex justify-center items-center'>
                                            <button className="text-center bg-[#6E86BE] text-white w-full p-3 mb-4 font-bold capitalize">
                                                LAST STEP: Get / Set your API endpoints as shown below
                                            </button>
                                        </div>

                                        <div className='w-full lg:w-1/2 flex justify-center items-center'>
                                            <div id="pdfBox" className="flex justify-center items-center border border-gray-500 text-[#182B57] w-full min-h-[200px] p-3 mb-4 font-bold">
                                                {fileURL ? (
                                                    <embed src={fileURL} type="application/pdf" width="500px" height="500px" />
                                                ) : (
                                                    "Your Uploaded PDF will show up here"
                                                )}
                                            </div>
                                        </div>

                                        <div className='px-2 lg:px-10 text-sm w-full'>
                                            <p> A: call our API Endpoint & provide data in JSON format. Our API will respond with filled pdf documents:
                                                <span className='flex flex-wrap'><Link to={`https://app.pdfmama.com/api/fill/abc123456789.pdf`}>https://app.pdfmama.com/api/fill/abc123456789.pdf</Link></span>

                                            </p>
                                            <p>B: Provide/ (as explained below)your own data API Endpoint. We will call your API and will fill your template as per schedule you set up:
                                            </p>
                                            <p>
                                                C: <button onClick={handleCreateAPI}>Create api using our app</button>
                                            </p>
                                            <div className='flex flex-col lg:flex-row justify-between items-center w-full py-4 gap-2 '>
                                                <label htmlFor='API Endpoint' className='w-full lg:w-1/3 flex justify-center items-center gap-2'>API Endpoint
                                                    <input type='text' placeholder='' title='API Endpoint' className='w-full  border border-gray-700' />
                                                </label>
                                                <label htmlFor='Key' className='w-full lg:w-1/3 flex justify-center items-center gap-2'>Key
                                                    <input type='text' placeholder='' title='Key' className='w-full  border border-gray-700' />
                                                </label>
                                                <label htmlFor='Schedule' className='w-full lg:w-1/3 flex justify-center items-center gap-2'>Schedule
                                                    <input type='text' placeholder='' title='Schedule' className='w-full  border border-gray-700' />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-end mx-10 gap-4 my-3 pb-1'>
                                    <button
                                        className="px-4 py-2 bg-[#3A4F72] text-white hover:bg-blue-600"
                                        onClick={handlePrevious}
                                    >
                                        Back
                                    </button>

                                    <button
                                        className="px-4 py-2 bg-[#3A4F72] text-white hover:bg-blue-600"
                                        onClick={handleNext}
                                    >
                                        Download
                                    </button>
                                </div>
                            </div>
                        )
                    ) : null}
                </div>
            </div>
            <div className="bg-[#182B57] h-10 fixed bottom-0 w-full"></div>
        </div>
    );
};

export default PDFFillAPI