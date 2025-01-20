import React from "react";
import { render, fireEvent } from "@testing-library/react";
import PasswordProtection from "../components/PasswordProtection";
import '@testing-library/jest-dom';

describe("PasswordProtection Component", () => {
    test("renders without crashing", () => {
        const { getByText } = render(<PasswordProtection />);
        expect(getByText("Create PIN as Combination of 2 or 3 Columns")).toBeInTheDocument();
    });

    test("toggles main dropdown", () => {
        const { getByText, queryByText } = render(<PasswordProtection />);
        const button = getByText("Create PIN as Combination of 2 or 3 Columns");
        fireEvent.click(button);
        expect(queryByText("ID")).toBeInTheDocument();
        fireEvent.click(button);
    });

    test("select an option", () => {
        const { getByText, queryByText } = render(<PasswordProtection />);
        const button = getByText("Create PIN as Combination of 2 or 3 Columns");
        fireEvent.click(button);
        const option = getByText("ID");
        fireEvent.click(option);
        expect(queryByText("ID")).toBeInTheDocument();
    });

    test("removes a selected option", () => {
        const { getByText, queryByText } = render(<PasswordProtection />);
        const button = getByText("Create PIN as Combination of 2 or 3 Columns");
        fireEvent.click(button);
        const option = getByText("ID");
        fireEvent.click(option);
        const removeButton = getByText("x");
        fireEvent.click(removeButton);
        expect(queryByText("ID")).not.toBeInTheDocument();
    });

});