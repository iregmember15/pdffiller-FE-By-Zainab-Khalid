import { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Import necessary styles
import "react-pdf/dist/Page/AnnotationLayer.css"; // Fixes annotation warning
import "react-pdf/dist/Page/TextLayer.css"; // Fixes text layer warning

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.mjs",
  import.meta.url
).toString();

interface FillPDFJSONStep2Props {
  pdfFile: File | null;
  jsonData: string;
  setJsonData: (json: string) => void;
}

const FillPDFJSONStep2: React.FC<FillPDFJSONStep2Props> = ({
  pdfFile,
  jsonData,
  setJsonData,
}) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pdfBlobUrl, setPdfBlobUrl] = useState<string | null>(null);
  const [scale, setScale] = useState<number>(1);
  const pdfContainerRef = useRef<HTMLDivElement>(null);

  // Convert File to Blob URL
  useEffect(() => {
    if (pdfFile) {
      const url = URL.createObjectURL(pdfFile);
      setPdfBlobUrl(url);
    }
  }, [pdfFile]);

  // Adjust scaling when PDF loads
  useEffect(() => {
    if (pdfContainerRef.current) {
      const containerWidth = pdfContainerRef.current.clientWidth || 600;
      const baseWidth = 595; // Standard PDF width in points
      setScale(containerWidth / baseWidth);
    }
  }, []);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  // **Extract Fields from Nested JSON**
  const extractFields = (
    obj: any,
    path: string[] = []
  ): { key: string; field: any }[] => {
    let fields: { key: string; field: any }[] = [];
    for (const key in obj) {
      const currentPath = [...path, key];
      if (typeof obj[key] === "object" && obj[key] !== null) {
        if ("type" in obj[key] && "x" in obj[key] && "y" in obj[key]) {
          fields.push({ key: currentPath.join("."), field: obj[key] });
        } else {
          fields = fields.concat(extractFields(obj[key], currentPath));
        }
      }
    }
    return fields;
  };

  // **Parse JSON and Extract Fields**
  let parsedJson: any = {};
  try {
    parsedJson = typeof jsonData === "string" ? JSON.parse(jsonData) : jsonData;
  } catch (error) {
    console.error("Invalid JSON format", error, jsonData);
  }

  console.log("Parsed JSON:", parsedJson);

  const fields = extractFields(parsedJson);
  console.log("Extracted Fields:", fields);

  // **Update JSON State Correctly**
  const updateFieldValue = (keyPath: string, newValue: string | boolean) => {
    const keys = keyPath.split(".");
    let obj = JSON.parse(JSON.stringify(parsedJson)); // Deep copy

    let temp = obj;
    for (let i = 0; i < keys.length - 1; i++) {
      if (!temp[keys[i]]) return; // Prevent errors
      temp = temp[keys[i]];
    }

    if (temp[keys[keys.length - 1]]) {
      if (typeof newValue === "string") {
        temp[keys[keys.length - 1]].value = newValue;
      } else {
        temp[keys[keys.length - 1]].isChecked = newValue;
      }
    }

    console.log("Updated JSON:", obj);
    setJsonData(JSON.stringify(obj, null, 2));
  };

  return (
    <div className="relative w-full flex flex-col items-center">
      <div
        ref={pdfContainerRef}
        className="relative border w-[600px] overflow-hidden"
      >
        {/* Render PDF */}
        {pdfBlobUrl ? (
          <Document file={pdfBlobUrl} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (_, index) => (
              <Page
                key={index}
                pageNumber={index + 1}
                renderAnnotationLayer={false}
                renderTextLayer={true}
                scale={scale}
              />
            ))}
          </Document>
        ) : (
          <p>No PDF selected</p>
        )}

        {/* Overlay Editable Fields */}
        <div className="absolute top-0 left-0 w-full h-full">
          {fields.map(({ key, field }, index) => (
            <input
              key={index}
              type={field.type === "text" ? "text" : "checkbox"}
              value={field.type === "text" ? field.value || "" : undefined}
              checked={
                field.type === "checkbox" ? field.isChecked || false : undefined
              }
              onChange={(e) =>
                updateFieldValue(
                  key,
                  field.type === "text" ? e.target.value : e.target.checked
                )
              }
              style={{
                position: "absolute",
                left: (field.x || 0) * scale + "px",
                top: (field.y || 0) * scale + "px",
                width: (field.width || 100) * scale + "px",
                height: (field.height || 20) * scale + "px",
                border: "1px solid red",
                background: "rgba(255,255,255,0.8)",
                fontSize: `${Math.max(10 * scale, 8)}px`, // Prevents text from getting too small
                padding: "2px",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FillPDFJSONStep2;
