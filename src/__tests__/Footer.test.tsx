import React from "react";
import { render } from "@testing-library/react";
import Footer from "../components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import '@testing-library/jest-dom';

describe("Footer component", () => {
    test("renders footer links correctly", () => {
        const { getByText } = render(
            <Router>
                <Footer />
            </Router>
        );

        expect(getByText("Product")).toBeInTheDocument();
        expect(getByText("Solutions")).toBeInTheDocument();
        expect(getByText("Company")).toBeInTheDocument();
    });

    test("renders social media icons correctly", () => {
        const { getByAltText } = render(
            <Router>
                <Footer />
            </Router>
        );

        expect(getByAltText("Instagram")).toBeInTheDocument();
        expect(getByAltText("Facebook")).toBeInTheDocument();
        expect(getByAltText("LinkedIn")).toBeInTheDocument();
        expect(getByAltText("Twitter")).toBeInTheDocument();
    });

});