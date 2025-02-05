import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import backIcon from '../assets/images/backIcon.png';

const PrintAndFillCheque: React.FC = () => {
  const navigate = useNavigate();
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  useEffect(() => {
    const storedPdf = localStorage.getItem("uploadedPdf");
    if (storedPdf) {
      setPdfUrl(storedPdf);
    }
  }, []);

  const handleDownload = () => {
    if (pdfUrl) {
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "blank_cheque.pdf"; 
      link.click(); 
    }
  };

  const handleNavigation = () => {
    navigate("/print-check/fill-pre-print-cheque");
  };

  const handleBackButton = () => {
    navigate("/print-check");
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
      <div className="flex flex-col md:flex-row items-center justify-center mb-8 px-4 py-6  space-y-4 md:space-y-0 md:space-x-4">
      <button
        onClick={handleDownload}
        className="w-full md:w-auto bg-[#59C059] rounded-md text-white flex justify-center items-center"
      >
        <span className="bg-[#35B435] rounded-md">
        <img
          src="/money-check-solid-1.png"
          alt="money-check-solid-1"
          className="p-2"
        />
        </span>
        <span className="p-2">Print Blank Cheque</span>
      </button>
      <button
        onClick={handleNavigation}
        className="w-full md:w-auto bg-[#DA5757] rounded-md text-white flex justify-center items-center"
      >
        <span className="bg-[#9AA1B0] rounded-md">
        <img
          src="/money-check-solid-1.png"
          alt="money-check-solid-1"
          className="p-2"
        />
        </span>
        <span className="p-2">Fill Pre Print Cheque</span>
      </button>
      <button className="w-full md:w-auto bg-[#E6A911] rounded-md text-white flex justify-center items-center">
        <span className="bg-[#E0BE57] rounded-md">
        <img
          src="/money-check-solid-1.png"
          alt="money-check-solid-1"
          className="p-2"
        />
        </span>
        <span className="p-2">Fill & Print Cheque</span>
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

export default PrintAndFillCheque;
