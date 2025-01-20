import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DownloadFilledPDFOptions from "../components/DownloadFilledPDFOptions";
import '@testing-library/jest-dom';

describe("DownloadFilledPDFOptions", () => {
    test("should toggle the separated checkbox", () => {
        const { getByLabelText } = render(<DownloadFilledPDFOptions />);
        const separatedCheckbox = getByLabelText("Separated PDF Document") as HTMLInputElement;

        expect(separatedCheckbox.checked).toBe(false);
        fireEvent.click(separatedCheckbox);
        expect(separatedCheckbox.checked).toBe(true);
    });

    test("should toggle the combined checkbox", () => {
        const { getByLabelText } = render(<DownloadFilledPDFOptions />);
        const combinedCheckbox = getByLabelText("Combined PDF Document") as HTMLInputElement;

        expect(combinedCheckbox.checked).toBe(true);
        fireEvent.click(combinedCheckbox);
        expect(combinedCheckbox.checked).toBe(false);
    });

    test("should select the keep radio button", () => {
        const { getByLabelText } = render(<DownloadFilledPDFOptions />);
        const keepRadio = getByLabelText("Keep Interactive Form Elements") as HTMLInputElement;

        expect(keepRadio.checked).toBe(false);
        fireEvent.click(keepRadio);
        expect(keepRadio.checked).toBe(true);
    });

    test("should select the remove radio button", () => {
        const { getByLabelText } = render(<DownloadFilledPDFOptions />);
        const removeRadio = getByLabelText("Remove Interactive Form Elements") as HTMLInputElement;

        expect(removeRadio.checked).toBe(false);
        fireEvent.click(removeRadio);
        expect(removeRadio.checked).toBe(true);
    });

    test("should select the printBoth radio button", () => {
        const { getByLabelText } = render(<DownloadFilledPDFOptions />);
        const printBothRadio = getByLabelText("Print PDF And Placeholders") as HTMLInputElement;

        expect(printBothRadio.checked).toBe(false);
        fireEvent.click(printBothRadio);
        expect(printBothRadio.checked).toBe(true);
    });

    test("should select the printPlaceholders radio button", () => {
        const { getByLabelText } = render(<DownloadFilledPDFOptions />);
        const printPlaceholdersRadio = getByLabelText("Print Only Placeholders") as HTMLInputElement;

        expect(printPlaceholdersRadio.checked).toBe(false);
        fireEvent.click(printPlaceholdersRadio);
        expect(printPlaceholdersRadio.checked).toBe(true);
    });

    test("should select the compress radio button", () => {
        const { getByLabelText } = render(<DownloadFilledPDFOptions />);
        const compressRadio = getByLabelText("Compress PDF Fields") as HTMLInputElement;

        expect(compressRadio.checked).toBe(false);
        fireEvent.click(compressRadio);
        expect(compressRadio.checked).toBe(true);
    });

    test("should select the doNotCompress radio button", () => {
        const { getByLabelText } = render(<DownloadFilledPDFOptions />);
        const doNotCompressRadio = getByLabelText("Do Not Compress") as HTMLInputElement;

        expect(doNotCompressRadio.checked).toBe(false);
        fireEvent.click(doNotCompressRadio);
        expect(doNotCompressRadio.checked).toBe(true);
    });
});