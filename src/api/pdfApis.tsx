import apiClient from "./index"; // Import the Axios instance
import { FillPdfRequest } from "../@types/fillPDF";

export const fillPdfApi = async (payload: FillPdfRequest) => {
  try {
    const formData = new FormData();

    if (payload.pdfFile)
      formData.append("pdfFile", payload.pdfFile, payload.pdfFile.name);
    if (payload.jsonFile)
      formData.append("jsonFile", payload.jsonFile, payload.jsonFile.name);
    formData.append("rawJson", payload.rawJson || "");

    const isTrialQuery = payload.isTrial ? "true" : "false";

    const { data } = await apiClient.post(
      `/pdf_filler/api/fill-pdf?isTrial=${isTrialQuery}`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
        responseType: "blob", // Important for handling PDF response
      }
    );

    // Create a Blob URL and trigger the download
    const blob = new Blob([data], { type: "application/pdf" });
    const downloadUrl = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = downloadUrl;
    a.download = "filled_pdf.pdf"; // Set filename
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(downloadUrl); // Clean up

    return true; // Indicate success
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to fill PDF");
  }
};
