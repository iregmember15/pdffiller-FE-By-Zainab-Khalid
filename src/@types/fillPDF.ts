export interface FillPdfRequest {
  pdfFile?: File | null;
  jsonFile?: File | null;
  rawJson?: string;
  isTrial?: boolean;
}
