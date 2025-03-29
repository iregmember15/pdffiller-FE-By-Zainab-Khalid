import { useState, useEffect } from "react";
import arrowIcon from "../assets/images/arrow.png";
import arrowDownIcon from "../assets/images/arrowDown.png";
import templatesIcon from "../assets/images/template.png";
import demoIcon from "../assets/images/demo.png";
import uploadPDF from "../assets/images/upload_body.png";
import uploadedPdf from "../assets/images/uploadedPDF.png";
import { PDFFillExcelAPIItems } from "../data/data";
import { Link, useNavigate } from "react-router-dom";
import DropdownMenu from "../components/DropdownMenu";
import CreateAPIMsg from "../components/CreateAPIMsg";

const PDFFillExcelAPI: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [uploadedFileURL, setUploadedFileURL] = useState<string | null>(null);
  const [isCreateAPI, setIsCreateAPI] = useState<boolean>(false);
  const [endPoint, setEndPoint] = useState('');
  const [key, setKey] = useState('');
  const [schedule, setSchedule] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedFileURL = localStorage.getItem("uploadedFileURL");
    if (storedFileURL) {
      setUploadedFileURL(storedFileURL);
    }
  }, []);

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep === 1) {
      return navigate("/");
    }
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (path: string) => {
    setIsDropdownOpen(false);
    navigate(path);
  };

  const handleFileUpload = (file: File) => {
    const fileURL = URL.createObjectURL(file);
    localStorage.setItem("uploadedFileURL", fileURL);
    setUploadedFileURL(fileURL);
    console.log("File uploaded:", fileURL);
    alert("File uploaded successfully!");
  };

  const hanldeCreateAPI = () => {
    setIsCreateAPI(true);

  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-[#182B57] fixed top-0 w-full h-10 z-50"></div>
      <div className="my-2 lg:mx-36 mt-16">
        {!isCreateAPI && <h1 className="text-xl font-bold capitalize">Fill pdf via spreadsheet / API</h1>}
        <div>
          {currentStep === 1 && (
            <div className="w-full p-4">
              <div className="w-full bg-white shadow-md">
                <div className="flex lg:justify-center items-center gap-10 px-10 bg-[#9AA1B0] py-4 overflow-x-auto lg:overflow-hidden">
                  {PDFFillExcelAPIItems.map((item, index) => {
                    const isActive = index + 1 === currentStep;
                    return (
                      <div key={index} className={`flex items-center justify-center`}>
                        <div className={`flex flex-col items-center justify-center ${isActive ? 'border-2 border-gray-500' : ''}`}>
                          <img src={item.icon} alt={`Upload icon`} className="w-6 h-6" />
                          <span>{item.label}</span>
                        </div>
                        {index < PDFFillExcelAPIItems.length - 1 && (
                          <img src={arrowIcon} alt={`arrow icon`} className="w-8 h-6 ms-2" />
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-col justify-center items-center py-4 px-10">
                  <div className="capitalize text-[#1951D1] text-[12px] lg:flex justify-center items-center py-2 gap-5">
                  <div>
                    <h2 className="font-semibold">Create document template</h2>
                    <p>Templates can be filled Via API or used to kickstart a work flow or E-sign project</p>
                  </div>
                  <span>
                    <img src={demoIcon} alt={`Upload icon`} className="w-10 h-10" />
                  </span>
                  </div>

                  <div className="lg:flex w-full gap-3 mx-10">
                  <div
                    className="cursor-pointer mb-2 lg:mb-0 flex flex-col justify-center items-center capitalize w-full border border-gray-500 p-12 rounded-md"
                    onClick={() => document.getElementById("pdfUpload")?.click()}
                    onDrop={(e) => {
                    e.preventDefault();
                    const file = e.dataTransfer.files?.[0];
                    if (file) {
                      handleFileUpload(file);
                    }
                    }}
                    onDragOver={(e) => e.preventDefault()}
                  >
                    <img src={uploadPDF} alt={`Upload icon`} className="w-10 h-10" />
                    <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <input
                      type="file"
                      accept="application/pdf"
                      className="hidden"
                      id="pdfUpload"
                      onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        handleFileUpload(file);
                      }
                      }}
                    />
                    <label htmlFor="pdfUpload" className="flex justify-center items-center text-[#182B57] w-full font-bold">
                      Upload PDF
                    </label>
                    </div>
                    <p>Drag and drop pdf file here</p>
                  </div>

                  <div className="relative flex flex-col justify-center items-center capitalize border border-gray-500 p-10 lg:w-1/3 rounded-md">
                    <img src={templatesIcon} alt={`Upload icon`} className="w-10 h-10" />
                    <div className="flex justify-center items-center gap-2 text-[#182B57] w-full font-bold cursor-pointer" onClick={handleDropdownToggle}>
                    <h2>Template</h2>
                    <img src={arrowDownIcon} alt={`Upload icon`} className="w-3 h-5" />
                    </div>
                    {isDropdownOpen && (
                    <div className="absolute top-32 bg-white shadow-md border rounded-md text-sm">
                      <div className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleOptionClick("/my-templates")}>
                      My Templates
                      </div>
                      <div className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleOptionClick("/history")}>
                      History
                      </div>
                      <div className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleOptionClick("/library")}>
                      Library
                      </div>
                      <div className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleOptionClick("/from-Elistener")}>
                      From E-Listener
                      </div>
                    </div>
                    )}
                  </div>
                  </div>

                  <div className="border border-gray-500 rounded-md flex justify-center items-start my-3 p-3">
                  <input type="checkbox" className="m-2" title="" aria-label="checkbox" />
                  <div className="text-[12px] text-[#182B57]">
                    <h2 className="font-semibold">Use AI For Document Detection</h2>
                    <p>To Detect and tag fields on the PDF?</p>
                  </div>
                  </div>
                  <div className="w-1/2 flex justify-center items-center">
                  <button className="text-center bg-[#3A4F72] text-white px-4 p-1 font-md rounded-sm">Upload</button>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mx-10 gap-4 my-3 pb-10">
                <button className="px-4 py-2 bg-[#3A4F72] text-white hover:bg-blue-600" onClick={handlePrevious}>
                  Back
                </button>
                <button className="px-4 py-2 bg-[#3A4F72] text-white hover:bg-blue-600" onClick={handleNext}>
                  Next
                </button>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="w-full p-4">
              <div className="w-full bg-white shadow-md">
                <div className="flex lg:justify-center items-center gap-10 px-10 bg-[#9AA1B0] py-4 overflow-x-scroll lg:overflow-hidden">
                  {PDFFillExcelAPIItems.map((item, index) => {
                    const isActive = index + 1 === currentStep;
                    return (
                      <div key={index} className="flex items-center justify-center">
                        <div className={`flex flex-col items-center justify-center ${isActive ? 'border-2 border-gray-500' : ''}`}>
                          <img src={item.icon} alt={`Upload icon`} className="w-6 h-6" />
                          <span>{item.label}</span>
                        </div>
                        {index < PDFFillExcelAPIItems.length - 1 && (
                          <img src={arrowIcon} alt={`arrow icon`} className="w-8 h-6 ms-2" />
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-col justify-center items-center py-4">
                  <div className="lg:w-1/2 flex justify-center items-center">
                    <input
                      type="file"
                      accept=".csv, .xlsx, .xls"
                      className="hidden"
                      id="csvUpload"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const fileURL = URL.createObjectURL(file);
                          localStorage.setItem("uploadedCSVFileURL", fileURL);
                          alert("CSV/MS Excel file uploaded successfully!");
                        }
                      }}
                    />
                    <label htmlFor="csvUpload" className="text-center bg-[#6E86BE] text-white w-full p-3 mb-4 font-bold capitalize cursor-pointer">
                      NEXT STEP: upload CSV / MS EXCEL / OPEN OFFICE CALC
                    </label>
                  </div>

                  <div className="flex justify-center items-center mx-10">
                    <div className="flex justify-center items-center w-full min-h-[200px] p-3 mb-4">
                      {uploadedFileURL ? (
                        <iframe src={uploadedFileURL} width="500px" height="500px" title="Uploaded PDF"></iframe>
                      ) : (
                        <img src={uploadedPdf} alt="document" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mx-10 gap-4 my-3 pb-10">
                <button className="px-4 py-2 bg-[#3A4F72] text-white hover:bg-blue-600" onClick={handlePrevious}>
                  Back
                </button>
                <button className="px-4 py-2 bg-[#3A4F72] text-white hover:bg-blue-600" onClick={handleNext}>
                  Next
                </button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="w-full p-4">
              <div className="w-full bg-white shadow-md">
                <div className="flex lg:justify-center items-center gap-10 px-10 bg-[#9AA1B0] py-4 overflow-x-scroll lg:overflow-hidden">
                  {PDFFillExcelAPIItems.map((item, index) => {
                    const isActive = index + 1 === currentStep;
                    return (
                      <div key={index} className="flex items-center justify-center">
                        <div className={`flex flex-col items-center justify-center ${isActive ? 'border-2 border-gray-500' : ''}`}>
                          <img src={item.icon} alt={`Upload icon`} className="w-6 h-6" />
                          <span>{item.label}</span>
                        </div>
                        {index < PDFFillExcelAPIItems.length - 1 && (
                          <img src={arrowIcon} alt={`arrow icon`} className="w-8 h-6 ms-2" />
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className="flex flex-col justify-center items-center py-4">
                  <div className="lg:w-1/2 flex justify-center items-center">
                    <button className="text-center bg-[#6E86BE] text-white w-full p-3 mb-4 font-bold capitalize">
                      NEXT STEP: Drag Field names from uploaded spreadsheet and place them on PDF file
                    </button>
                  </div>

                  <div className="flex justify-center items-center mx-10">
                    <div className="flex justify-center items-center w-full min-h-[200px] p-3 mb-4">
                      {uploadedFileURL ? (
                        <iframe src={uploadedFileURL} width="500px" height="500px" title="Uploaded PDF"></iframe>
                      ) : (
                        <img src={uploadedPdf} alt="document" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mx-10 gap-4 my-3 pb-10">
                <button className="px-4 py-2 bg-[#3A4F72] text-white hover:bg-blue-600" onClick={handlePrevious}>
                  Back
                </button>
                <button className="px-4 py-2 bg-[#3A4F72] text-white hover:bg-blue-600" onClick={handleNext}>
                  Create API endpoints
                </button>
              </div>
            </div>
          )}

          {currentStep === 4 ? (
            isCreateAPI ? (
              <CreateAPIMsg setIsCreateAPI={setIsCreateAPI} />
            ) : (
              <div className="w-full p-4">
                <div className="w-full bg-white shadow-md">
                  <div className="flex lg:justify-center items-center gap-10 px-10 bg-[#9AA1B0] py-4 overflow-x-scroll lg:overflow-hidden">
                    {PDFFillExcelAPIItems.map((item, index) => {
                      const isActive = index + 1 === 4;
                      return (
                        <div key={index} className="flex items-center justify-center">
                          <div className={`flex flex-col items-center justify-center ${isActive ? 'border-2 border-gray-500' : ''}`}>
                            <img src={item.icon} alt={`Upload icon`} className="w-6 h-6" />
                            <span>{item.label}</span>
                          </div>
                          {index < PDFFillExcelAPIItems.length - 1 && (
                            <img src={arrowIcon} alt={`arrow icon`} className="w-8 h-6 ms-2" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex flex-col justify-center items-center py-4">
                    <div className="lg:w-1/2 flex justify-center items-center">
                      <button className="text-center bg-[#6E86BE] text-white w-full p-3 mb-4 font-bold capitalize">
                        NEXT STEP: Drag Field names from uploaded spreadsheet and place them on PDF file
                      </button>
                    </div>

                    <div className="flex justify-center items-center mx-10">
                      <div className="flex justify-center items-center w-full min-h-[200px] p-3 mb-4">
                        {uploadedFileURL ? (
                          <iframe src={uploadedFileURL} width="500px" height="500px" title="Uploaded PDF"></iframe>
                        ) : (
                          <img src={uploadedPdf} alt="document" />
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
                        C: <button onClick={hanldeCreateAPI}>Create api using our app</button>
                      </p>
                      <div className='flex flex-col lg:flex-row justify-between items-center w-full py-4 gap-2 '>
                        <label htmlFor='API Endpoint' className='w-full lg:w-1/3 flex justify-center items-center gap-2'>API Endpoint
                          <input type='text'
                          value={endPoint}
                           onChange={(e) =>{
                            setEndPoint(e.target.value);
                           }}
                           placeholder='' title='API Endpoint' className='w-full  border border-gray-700' />
                        </label>
                        <label htmlFor='Key' className='w-full lg:w-1/3 flex justify-center items-center gap-2'>Key
                          <input type='text' 
                          value={key}
                          onChange={(e) =>{
                            setKey(e.target.value);
                          }}
                          placeholder='' title='Key' className='w-full  border border-gray-700' />
                        </label>
                        <label htmlFor='Schedule' className='w-full lg:w-1/3 flex justify-center items-center gap-2'>Schedule
                          <input type='text' 
                          value={schedule}
                          onChange={(e) =>{
                            setSchedule(e.target.value);
                          }}
                          placeholder='' title='Schedule' className='w-full  border border-gray-700' />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end mx-10 gap-4 my-3 pb-10">
                  <button className="px-4 py-2 bg-[#3A4F72] text-white hover:bg-blue-600" onClick={handlePrevious}>
                    Back
                  </button>
                  <button className="px-4 py-2 bg-[#3A4F72] text-white hover:bg-blue-600" onClick={handleNext}>
                    Download
                  </button>
                </div>
              </div>
            )) : null}

          {currentStep === 5 && (
            <div className="w-full p-4">
              <div className="w-full bg-white shadow-md mb-10">
                <div className="flex lg:justify-center items-center gap-10 px-10 bg-[#9AA1B0] py-4 overflow-x-scroll lg:overflow-hidden">
                  {PDFFillExcelAPIItems.map((item, index) => {
                    const isActive = index + 1 === 5;
                    return (
                      <div key={index} className="flex items-center justify-center">
                        <div className={`flex flex-col items-center justify-center ${isActive ? 'border-2 border-gray-500' : ''}`}>
                          <img src={item.icon} alt={`Upload icon`} className="w-6 h-6" />
                          <span>{item.label}</span>
                        </div>
                        {index < PDFFillExcelAPIItems.length - 1 && (
                          <img src={arrowIcon} alt={`arrow icon`} className="w-8 h-6 ms-2" />
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className="flex flex-col justify-center items-center py-4">
                  <div className="flex flex-col justify-center items-center mx-10 w-full gap-5">
                    <DropdownMenu />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="bg-[#182B57] h-10 fixed bottom-0 w-full"></div>
    </div>
  );
};

export default PDFFillExcelAPI;
