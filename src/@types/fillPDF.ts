import { Dispatch, SetStateAction } from "react";

export interface FillPDFJSONStep1Props {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  setPdfFile: Dispatch<SetStateAction<File | null>>;
  pdfFile: File | null;
  pdfUrl: string | null;
  setPdfUrl: Dispatch<SetStateAction<string | null>>;
}
export interface FillPDFJSONStep2Props {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  setPdfFile: Dispatch<SetStateAction<File | null>>;
  pdfFile: File | null;
  pdfUrl: string | null;
  setPdfUrl: Dispatch<SetStateAction<string | null>>;
  jsonData: string;
  setJsonData: Dispatch<SetStateAction<string>>;
  setError: Dispatch<SetStateAction<string | null>>;
  error: string | null;
}
export interface FillPdfRequest {
  pdfFile?: File | null;
  jsonFile?: File | null;
  rawJson?: string;
  isTrial?: boolean;
}

export interface extractAcroFields {
  extractionMode: Number | null;
  pdfFile: File | null;
}
