import { useState, useEffect } from "react";
import arrowIcon from "../assets/images/arrow.png";
import uploadedPdf from "../assets/images/uploadedPDF.png";
import { FillViaCSVItems } from "../data/data";
import { Link, useNavigate } from "react-router";
import CreateAPIMsg from "../components/CreateAPIMsg";

const PDFFillExcelAPI: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedFileURL, setUploadedFileURL] = useState<string | null>(null);
  const [isCreateAPI, setIsCreateAPI] = useState<boolean>(false);

  const navigate = useNavigate();

  const DragDropButtons = [
    {
      title: "Payee Name",
    },
    {
      title: "Date",
    },
    {
      title: "Amount in Number",
    },
    {
      title: "Amount in Words",
    },
    {
      title: "Signature",
    },

    {
      title: "Memo/Notes",
    },
    {
      title: "Cheque Number",
    },
  ];

  useEffect(() => {
    const storedFileURL = localStorage.getItem("uploadedPdf");
    if (storedFileURL) {
      setUploadedFileURL(storedFileURL);
    }
  }, []);

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
    if (currentStep === 4) {
      navigate("/");
    }
  };

  const handlePrevious = () => {
    if (currentStep === 1) {
      return navigate(-1);
    }
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const hanldeCreateAPI = () => {
    setIsCreateAPI(true);
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="bg-[#182B57] fixed top-0 w-full h-10 z-50"></div>
      <div className="my-2 lg:mx-36 mt-16">

      <div>
        {currentStep === 1 && (
        <div className="w-full p-4 mt-10">
          <div className="w-full bg-white shadow-md">
          <div className="flex lg:justify-center items-center gap-10 px-10 bg-[#9AA1B0] py-4 overflow-x-auto lg:overflow-hidden">
            {FillViaCSVItems.map((item, index) => {
            const isActive = index + 1 === currentStep;
            return (
              <div
              key={index}
              className={`flex items-center justify-center`}
              >
              <div
                className={`flex flex-col items-center justify-center ${
                isActive ? "border-t-4 border-[#E20000]" : ""
                }`}
              >
                <img
                src={item.icon}
                alt={`Cheque icon`}
                className="w-6 h-6"
                />
                <span>{item.label}</span>
              </div>
              {index < FillViaCSVItems.length - 1 && (
                <img
                src={arrowIcon}
                alt={`arrow icon`}
                className="w-8 h-6 ms-2"
                />
              )}
              </div>
            );
            })}
          </div>

          <div className="flex flex-col justify-center items-center py-4 w-full ">
            <div className="w-full flex justify-center items-center">
            <div
              id="pdfBox"
              className="flex justify-center items-center border border-gray-500 text-[#182B57] w-full lg:mx-20 min-h-[300px] p-3 mb-4 mx-2 font-bold"
            >
              {uploadedFileURL ? (
              <iframe
                src={uploadedFileURL}
                className="w-full h-[300px] lg:w-[800px] lg:h-[300px]"
                title="Uploaded PDF"
              />
              ) : (
              "Your Uploaded PDF will show up here"
              )}
            </div>
            </div>
          </div>
          </div>
          <div className="flex justify-end mx-10 gap-4 my-3 pb-10">
          <button
            className="px-4 py-2 bg-[#3A4F72] text-white hover:bg-blue-600"
            onClick={handlePrevious}
          >
            Back
          </button>
          <button
            className="px-4 py-2 bg-[#35B435] text-white hover:bg-blue-600"
            onClick={handleNext}
          >
            Next
          </button>
          </div>
        </div>
        )}

        {currentStep === 2 && (
        <div className="w-full p-4 mt-10">
          <div className="w-full bg-white shadow-md">
          <div className="flex lg:justify-center items-center gap-10 px-10 bg-[#9AA1B0] py-4 overflow-x-scroll lg:overflow-hidden">
            {FillViaCSVItems.map((item, index) => {
            const isActive = index + 1 === currentStep;
            return (
              <div
              key={index}
              className="flex items-center justify-center"
              >
              <div
                className={`flex flex-col items-center justify-center ${
                isActive ? "border-2 border-gray-500" : ""
                }`}
              >
                <img
                src={item.icon}
                alt={`Upload icon`}
                className="w-6 h-6"
                />
                <span>{item.label}</span>
              </div>
              {index < FillViaCSVItems.length - 1 && (
                <img
                src={arrowIcon}
                alt={`arrow icon`}
                className="w-8 h-6 ms-2"
                />
              )}
              </div>
            );
            })}
          </div>

          <div className="flex flex-col justify-center items-center py-4">
            {/* <div className="lg:w-1/2 flex justify-center items-center">
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
            <label
              htmlFor="csvUpload"
              className="text-center bg-[#6E86BE] text-white w-full p-3 mb-4 font-bold capitalize cursor-pointer"
            >
              NEXT STEP: upload CSV / MS EXCEL / OPEN OFFICE CALC
            </label>
            </div> */}

            <div className="flex justify-center  lg:mx-10">
            <div className="flex justify-center items-center border border-gray-500 text-[#182B57] w-full lg:mx-20 min-h-[300px] p-3 mb-4 mx-2 font-bold">
              {uploadedFileURL ? (
              <iframe
                src={uploadedFileURL}
                className="w-full h-[300px] lg:w-[800px] lg:h-[300px]"
                title="Uploaded PDF"
              />
              ) : (
              <img src={uploadedPdf} alt="document" />
              )}
            </div>
            </div>
          </div>
          </div>
          <div className="flex justify-end mx-10 gap-4 my-3 pb-10">
          <button
            className="px-4 py-2 bg-[#3A4F72] text-white hover:bg-blue-600"
            onClick={handlePrevious}
          >
            Back
          </button>
          <button
            className="px-4 py-2 bg-[#35B435] text-white hover:bg-blue-600"
            onClick={handleNext}
          >
            Next
          </button>
          </div>
        </div>
        )}

        {currentStep === 3 && (
        <div className="w-full p-4 mt-32">
          <div className="w-full bg-white shadow-md">
          <div className="flex lg:justify-center items-center gap-10 px-10 bg-[#9AA1B0] py-4 overflow-x-scroll lg:overflow-hidden">
            {FillViaCSVItems.map((item, index) => {
            const isActive = index + 1 === currentStep;
            return (
              <div
              key={index}
              className="flex items-center justify-center"
              >
              <div
                className={`flex flex-col items-center justify-center ${
                isActive ? "border-2 border-gray-500" : ""
                }`}
              >
                <img
                src={item.icon}
                alt={`Upload icon`}
                className="w-6 h-6"
                />
                <span>{item.label}</span>
              </div>
              {index < FillViaCSVItems.length - 1 && (
                <img
                src={arrowIcon}
                alt={`arrow icon`}
                className="w-8 h-6 ms-2"
                />
              )}
              </div>
            );
            })}
          </div>
          <div className="flex flex-col justify-center items-center py-4">
            {/* <div className="lg:w-1/2 flex justify-center items-center">
            <button className="text-center bg-[#6E86BE] text-white w-full p-3 mb-4 font-bold capitalize">
              NEXT STEP: Drag Field names from uploaded spreadsheet and
              place them on PDF file
            </button>
            </div> */}

            <div className="lg:flex justify-center items-center lg:mx-10 w-full">
            <div className="flex flex-col justify-center items-center text-[#182B57] font-bold  w-full lg:w-[20%]">
              {DragDropButtons.map((items, index) => (
              <button
                key={index}
                className="border border-gray-500 rounded-md p-2 w-[200px] mb-2 mx-2"
              >
                {items.title}
              </button>
              ))}
            </div>
            <div className="flex justify-center items-center border border-gray-500 text-[#182B57] w-full lg:w-[70%]  min-h-[300px] p-3 mb-4 lg:mx-2 font-bold">
              {uploadedFileURL ? (
              <iframe
                src={uploadedFileURL}
                className="w-full h-[300px] lg:w-[800px] lg:h-[300px]"
                title="Uploaded PDF"
              />
              ) : (
              <img src={uploadedPdf} alt="document" />
              )}
            </div>
            </div>
          </div>
          </div>
          <div className="flex justify-end mx-10 gap-4 my-3 pb-10">
          <button
            className="px-4 py-2 bg-[#3A4F72] text-white hover:bg-blue-600"
            onClick={handlePrevious}
          >
            Back
          </button>
          <button
            className="px-4 py-2 bg-[#35B435] text-white hover:bg-blue-600"
            onClick={handleNext}
          >
            Next
          </button>
          </div>
        </div>
        )}

        {currentStep === 4 ? (
        isCreateAPI ? (
          <CreateAPIMsg setIsCreateAPI={setIsCreateAPI} />
        ) : (
          <div className="w-full p-4 mt-10">
          <div className="w-full bg-white shadow-md">
            <div className="flex lg:justify-center items-center gap-10 px-10 bg-[#9AA1B0] py-4 overflow-x-scroll lg:overflow-hidden">
            {FillViaCSVItems.map((item, index) => {
              const isActive = index + 1 === 4;
              return (
              <div
                key={index}
                className="flex items-center justify-center"
              >
                <div
                className={`flex flex-col items-center justify-center ${
                  isActive ? "border-2 border-gray-500" : ""
                }`}
                >
                <img
                  src={item.icon}
                  alt={`Upload icon`}
                  className="w-6 h-6"
                />
                <span>{item.label}</span>
                </div>
                {index < FillViaCSVItems.length - 1 && (
                <img
                  src={arrowIcon}
                  alt={`arrow icon`}
                  className="w-8 h-6 ms-2"
                />
                )}
              </div>
              );
            })}
            </div>
            <div className="flex flex-col justify-center items-center py-4">
            {/* <div className="lg:w-1/2 flex justify-center items-center">
              <button className="text-center bg-[#6E86BE] text-white w-full p-3 mb-4 font-bold capitalize">
              NEXT STEP: Drag Field names from uploaded spreadsheet
              and place them on PDF file
              </button>
            </div> */}

            <div className="flex justify-center items-center lg:mx-10">
              <div className="flex justify-center items-center border border-gray-500 text-[#182B57] w-full lg:mx-20 min-h-[300px] p-3 mb-4 mx-2 font-bold">
              {uploadedFileURL ? (
                <iframe
                src={uploadedFileURL}
                className="w-full h-[300px] lg:w-[800px] lg:h-[300px]"
                title="Uploaded PDF"
                />
              ) : (
                <img src={uploadedPdf} alt="document" />
              )}
              </div>
            </div>
            <div className="px-2 lg:px-10 text-sm w-full flex flex-col justify-start items-start">
              <p>
              {" "}
              A: call our API Endpoint & provide data in JSON format.
              Our API will respond with filled pdf documents:
              <p className="flex flex-wrap">
                <Link
                to={`https://app.pdfmama.com/api/fill/abc123456789.pdf`}
                >
                https://app.pdfmama.com/api/fill/abc123456789.pdf
                </Link>
              </p>
              </p>
              <p>
              B: Provide/ (as explained below)your own data API
              Endpoint. We will call your API and will fill your
              template as per schedule you set up:
              </p>
              <p>
              C:{" "}
              <button onClick={hanldeCreateAPI}>
                Create api using our app
              </button>
              </p>
              <div className="flex flex-col lg:flex-row justify-between items-center w-full py-4 gap-2 ">
              <label
                htmlFor="API Endpoint"
                className="w-full lg:w-1/3 flex justify-center items-center gap-2"
              >
                API Endpoint
                <input
                type="text"
                placeholder=""
                title="API Endpoint"
                className="w-full  border border-gray-700"
                />
              </label>
              <label
                htmlFor="Key"
                className="w-full lg:w-1/3 flex justify-center items-center gap-2"
              >
                Key
                <input
                type="text"
                placeholder=""
                title="Key"
                className="w-full  border border-gray-700"
                />
              </label>
              <label
                htmlFor="Schedule"
                className="w-full lg:w-1/3 flex justify-center items-center gap-2"
              >
                Schedule
                <input
                type="text"
                placeholder=""
                title="Schedule"
                className="w-full  border border-gray-700"
                />
              </label>
              </div>
            </div>
            </div>
          </div>
          <div className="flex justify-end mx-10 gap-4 my-3 pb-10">
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

        {/* {currentStep === 5 && (
        <div className="w-full p-4">
          <div className="w-full bg-white shadow-md mb-10">
          <div className="flex lg:justify-center items-center gap-10 px-10 bg-[#9AA1B0] py-4 overflow-x-scroll lg:overflow-hidden">
            {FillViaCSVItems.map((item, index) => {
            const isActive = index + 1 === 5;
            return (
              <div
              key={index}
              className="flex items-center justify-center"
              >
              <div
                className={`flex flex-col items-center justify-center ${
                isActive ? "border-2 border-gray-500" : ""
                }`}
              >
                <img
                src={item.icon}
                alt={`Upload icon`}
                className="w-6 h-6"
                />
                <span>{item.label}</span>
              </div>
              {index < FillViaCSVItems.length - 1 && (
                <img
                src={arrowIcon}
                alt={`arrow icon`}
                className="w-8 h-6 ms-2"
                />
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
        )} */}
      </div>
      </div>
      <div className="bg-[#182B57] h-10 fixed bottom-0 w-full"></div>
    </div>
  );
};

export default PDFFillExcelAPI;
