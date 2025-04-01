import { useEffect, useState } from "react";
import FillPDFJSONStep1 from "../components/FillPDFJSON/FillPDFJSONStep1";
import FillPDFJSONStep2 from "../components/FillPDFJSON/FillPDFJSONStep2";
import { extractAcroFieldsApi } from "../api/pdfApis";
import PDFViewer from "../components/FillPDFJSON/PDFViewer";

const PDFFillAPI: React.FC = () => {
  const [step, setStep] = useState(1);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [jsonData, setJsonData] = useState<string>("{}");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const extractFields = async () => {
      if (step === 2 && pdfFile) {
        setIsLoading(true);
        setError(null);
        try {
          const extractedData = await extractAcroFieldsApi({
            pdfFile,
            extractionMode: 3, // Choose the extraction mode as needed (1, 2, or 3)
          });
          setJsonData(JSON.stringify(extractedData, null, 2)); // Pretty print JSON
        } catch (err: any) {
          setError(err.message || "Failed to extract fields");
        } finally {
          setIsLoading(false);
        }
      }
    };

    extractFields();
  }, [step, pdfFile]);

  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="bg-[#182B57] fixed top-0 w-full h-10 z-10"></div>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
            <p className="mt-2 text-blue-500 font-semibold text-lg">
              Extracting fields...
            </p>
          </div>
        </div>
      )}
      <div className="m-2 lg:mx-36 mt-16">
        {!isLoading && step === 1 && (
          <FillPDFJSONStep1
            step={step}
            setStep={setStep}
            setPdfFile={setPdfFile}
            setPdfUrl={setPdfUrl}
            pdfFile={pdfFile}
            pdfUrl={pdfUrl}
          />
        )}
        {!isLoading && step === 2 && (
          <FillPDFJSONStep2
            step={step}
            setStep={setStep}
            setPdfFile={setPdfFile}
            setPdfUrl={setPdfUrl}
            pdfFile={pdfFile}
            pdfUrl={pdfUrl}
            setJsonData={setJsonData}
            jsonData={jsonData}
            setError={setError}
            error={error}
          />
        )}

        {!isLoading && step === 2 && (
          <PDFViewer
            // step={step}
            // setStep={setStep}
            // setPdfFile={setPdfFile}
            // setPdfUrl={setPdfUrl}
            pdfFile={pdfFile}
            // pdfUrl={pdfUrl}
            setJsonData={setJsonData}
            jsonData={jsonData}
            // setError={setError}
            // error={error}
          />
        )}

      </div>
      <div className="bg-[#182B57] h-10 fixed bottom-0 w-full"></div>
    </div>
  );
};

export default PDFFillAPI;
