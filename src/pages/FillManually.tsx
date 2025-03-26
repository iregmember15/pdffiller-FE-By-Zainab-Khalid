import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import backIcon from '../assets/images/backIcon.png';

const FillViaApi: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [fileURL, setFileURL] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const storedFileURL = localStorage.getItem("uploadedPdf");
    if (storedFileURL) {
      setFileURL(storedFileURL);
    }
  }, [currentStep]);

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
    if (currentStep === 1) {
      navigate("/");
    }
  };

  const handlePrevious = () => {
    if (currentStep === 1) {
      return navigate(-1);
    }
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleBackButton = () => {
    navigate("/print-check");
  }

  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="bg-[#182B57] fixed top-0 w-full h-10"></div>
      <div className="ms-10 mt-20 flex justify-start w-full">
        <button
          onClick={handleBackButton}
        >
          <img
            src={backIcon}
            alt="back button"
            className="w-8 h-8"
          />
        </button>
      </div>
      <div className="m-2 lg:mx-36 ">
      {/* <h1 className="text-xl font-bold capitalize">Fill Manually</h1> */}
        <div>
          {currentStep === 1 && (
            <div className="w-full p-4">
              <div className="w-full bg-white shadow-md">
                <div className="flex justify-center gap-3 lg:gap-20 items-center bg-[#9AA1B0] py-4  px-2">
                  <h1 className="font-bold">Fill Manually</h1>
                </div>
                <div className="flex flex-col justify-center items-center py-4 w-full ">
                  <div className="w-full flex justify-center items-center">
                    <div
                      id="pdfBox"
                      className="flex justify-center items-center border border-gray-500 text-[#182B57] w-full lg:mx-20 min-h-[300px] p-3 mb-4 mx-2 font-bold"
                    >
                      {fileURL ? (
                        <embed
                          src={fileURL}
                          type="application/pdf"
                          width="800px"
                          height="300px"
                        />
                      ) : (
                        "Your Uploaded PDF will show up here"
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mx-10 gap-4 my-3 pb-1">
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
        </div>
      </div>
      <div className="bg-[#182B57] h-10 fixed bottom-0 w-full"></div>
    </div>
  );
};

export default FillViaApi;
