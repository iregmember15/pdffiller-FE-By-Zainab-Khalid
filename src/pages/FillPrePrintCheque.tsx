import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import backIcon from '../assets/images/backIcon.png';

const FillPrePrintCheque: React.FC = () => {
  const navigate = useNavigate();
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  useEffect(() => {
    const storedPdf = localStorage.getItem("uploadedPdf");
    if (storedPdf) {
      setPdfUrl(storedPdf);
    }
  }, []);

  const handleNavigationForFillViaApi = () => {
    navigate("/print-check/fill-via-api");
  };

  const handleNavigationForFillViaCSV = () => {
    navigate("/print-check/fill-via-csv");
  };

  const handleNavigationForFillManually = () => {
    navigate("/print-check/fill-manually");
  };

  const handleBackButton = () => {
    navigate("/print-check/print-fill-cheque");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-[#182B57] fixed top-0 w-full h-10 z-50"></div>
      <div className="mt-20 flex justify-start w-full">
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
      <div className="flex flex-col md:flex-row items-center justify-center mb-8  px-4 py-6 w-full">
        <button
          onClick={handleNavigationForFillViaApi}
          className="mx-4 my-2 md:my-0 bg-[#59C059] rounded-md text-white flex justify-start items-center w-full"
        >
          <span className="bg-[#35B435] rounded-md">
            <img
              src="/money-check-solid-1.png"
              alt="money-check-solid-1"
              className="p-2"
            />
          </span>
          <span className="p-2">Fill Via API</span>
        </button>
        <button
          onClick={handleNavigationForFillViaCSV}
          className="mx-4 my-2 md:my-0 bg-[#DA5757] rounded-md text-white flex justify-start items-center w-full"
        >
          <span className="bg-[#9AA1B0] rounded-md">
            <img
              src="/money-check-solid-1.png"
              alt="money-check-solid-1"
              className="p-2"
            />
          </span>
          <span className="p-2">Fill Via CSV</span>
        </button>
        <button
          onClick={handleNavigationForFillManually}
          className="mx-4 my-2 md:my-0 bg-[#E6A911] rounded-md text-white flex justify-start items-center w-full"
        >
          <span className="bg-[#E0BE57] rounded-md">
            <img
              src="/money-check-solid-1.png"
              alt="money-check-solid-1"
              className="p-2"
            />
          </span>
          <span className="p-2">Fill Manually</span>
        </button>
      </div>

      <div
        id="pdfBox"
        className="flex justify-center items-center border-2 border-[#182B57] text-[#182B57] w-full min-h-[200px] p-3 mb-20 mx-2 font-bold"
      >
        {pdfUrl ? (
          <embed
            src={pdfUrl}
            className="w-full lg:w-[800px] h-[400px] border"
            title="Uploaded Cheque"
          ></embed>
        ) : (
          <p>No PDF uploaded</p>
        )}
      </div>
      <div className="bg-[#182B57] h-10 fixed bottom-0 w-full"></div>
    </div>
  );
};

export default FillPrePrintCheque;
