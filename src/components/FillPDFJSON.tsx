import React, { useState } from "react";
import { PDFDocument } from "pdf-lib";
import { pdfjs } from "react-pdf";
import uploadIcon from "../assets/images/uploadpdf.png";
import createAPI from "../assets/images/create_api.png";
import arrowIcon from "../assets/images/arrow.png";
import CodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";
import { materialLight } from "@uiw/codemirror-theme-material";
import { fillPdfApi } from "../api/pdfApis";
import { useNavigate } from "react-router";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const FillPDFJSON: React.FC = () => {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [jsonData, setJsonData] = useState<string>("{}");
  const [step, setStep] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setError(null);

    const file = event.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      setError("File size should be less than 5MB.");
      setPdfUrl(null);
      setPdfFile(null);
      setJsonData("{}");
      return;
    }

    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);
      const pages = pdfDoc.getPageCount();

      if (pages > 5) {
        setError("PDF must have less than 5 pages.");
        setPdfUrl(null);
        setPdfFile(null);
        setJsonData("{}");
        return;
      }

      // Extract fields safely
      const extractedFields = await extractFieldsFromPDF(pdfDoc);

      if (!extractedFields || extractedFields === "{}") {
        setError("Error extracting fields from PDF.");
        setPdfUrl(null);
        setPdfFile(null);
        setJsonData("{}");
        return;
      }

      const newPdfUrl = URL.createObjectURL(file);
      setPdfUrl(newPdfUrl);
      setPdfFile(file);
      setJsonData(extractedFields);
    } catch (error) {
      setError("Error processing the PDF. Please try again.");
    }
  };

  const extractFieldsFromPDF = async (pdfDoc: PDFDocument): Promise<string> => {
    try {
      const form = pdfDoc.getForm();
      if (!form) {
        throw new Error("No form fields found in the PDF.");
      }

      const fields = form.getFields();
      if (fields.length === 0) {
        throw new Error("No fields found in the PDF.");
      }

      const jsonOutput: Record<string, string> = {};
      fields.forEach((field) => {
        jsonOutput[field.getName()] = "";
      });

      return JSON.stringify(jsonOutput, null, 2);
    } catch (error) {
      setError("Error extracting fields from PDF.");
      console.error("PDF Parsing Error:", error);
      return "{}";
    }
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
    if (step === 3) {
      navigate("/dashboard");
    }
  };

  const handlePrevious = () => {
    if (step === 1) {
      return navigate("/dashboard");
    }
    setStep((prevStep) => prevStep - 1);
  };
  const handleFillPdf = async () => {
    if (!pdfFile) return;
    setIsLoading(true);
    setError(null);

    try {
      const response = await fillPdfApi({
        pdfFile,
        rawJson: jsonData,
        isTrial: true,
      });
      if (response) {
        setPdfUrl(null);
        setPdfFile(null);
        setStep(1);
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {step === 1 && (
        <>
          <div className="w-full p-4">
            <div className="w-full bg-white shadow-md">
              <div className="flex justify-center gap-3 lg:gap-20 items-center bg-[#9AA1B0] py-4  px-2">
                <div className="flex flex-col items-center justify-center">
                  <img src={uploadIcon} alt="Upload icon" className="w-6 h-6" />
                  <span>Upload PDF</span>
                </div>

                <img src={arrowIcon} alt="arrow icon" className="w-8 h-6" />

                <div className="flex flex-col items-center justify-center">
                  <img
                    src={createAPI}
                    alt="createAPI icon"
                    className="w-6 h-6"
                  />
                  <span>Create API endpoint</span>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center py-4 w-full">
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                  <input
                    type="file"
                    accept="application/pdf"
                    className="hidden"
                    id="pdfUpload"
                    onChange={handleFileUpload}
                  />
                  <label
                    htmlFor="pdfUpload"
                    className="cursor-pointer text-center bg-[#6E86BE] text-white w-full p-3 m-4 font-bold"
                  >
                    Upload PDF
                  </label>
                </div>

                <div className="w-full lg:w-1/2 flex justify-center items-center">
                  <div
                    id="pdfBox"
                    className="flex justify-center items-center border border-gray-500 text-[#182B57] w-full min-h-[200px] p-3 mb-4 mx-2 font-bold"
                  >
                    {pdfUrl ? (
                      <embed
                        src={pdfUrl}
                        type="application/pdf"
                        width="100%"
                        height="500px"
                      />
                    ) : error ? (
                      <p className="text-red-500 mt-2">{error}</p>
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
                className="px-4 py-2 bg-[#3A4F72] text-white hover:bg-blue-600"
                onClick={() => {
                  jsonData !== "{}" && pdfUrl !== null && pdfFile !== null
                    ? handleNext()
                    : "";
                }}
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}

      {step === 2 && pdfUrl && (
        <div className="w-full p-4">
          <div className="w-full bg-white shadow-md">
            <div className="flex justify-center gap-3 lg:gap-20  items-center bg-[#9AA1B0] py-4">
              <div className="flex flex-col items-center justify-center">
                <img src={uploadIcon} alt="Upload icon" className="w-6 h-6" />
                <span>Upload PDF</span>
              </div>

              <img src={arrowIcon} alt="arrow icon" className="w-8 h-6" />

              <div className="flex flex-col items-center justify-center">
                <img src={createAPI} alt="createAPI icon" className="w-6 h-6" />
                <span>Create API endpoint</span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center py-4 w-full p-2">
              <div className="w-full lg:w-1/2 flex justify-center items-center">
                <button className="text-center bg-[#6E86BE] text-white w-full p-3 mb-4 font-bold capitalize">
                  NEXT STEP: create API endpoints
                </button>
              </div>
              <CodeMirror
                value={jsonData}
                extensions={[json()]}
                theme={materialLight}
                onChange={(value) => setJsonData(value)}
                className="border border-gray-300 rounded-lg"
              />

              <div className="w-full lg:w-1/2 flex justify-center items-center mt-3">
                <div
                  id="pdfBox"
                  className="flex justify-center items-center border border-gray-500 text-[#182B57] w-full min-h-[200px] p-3 mb-4 font-bold"
                >
                  <div className="border border-gray-300 shadow-md rounded-lg p-2">
                    {pdfUrl ? (
                      <embed
                        src={pdfUrl}
                        type="application/pdf"
                        width="100%"
                        height="500px"
                      />
                    ) : (
                      "Your Uploaded PDF will show up here"
                    )}
                  </div>
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
              className="px-4 py-2 bg-[#3A4F72] text-white hover:bg-blue-600"
              onClick={handleFillPdf}
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Fill PDF"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FillPDFJSON;
