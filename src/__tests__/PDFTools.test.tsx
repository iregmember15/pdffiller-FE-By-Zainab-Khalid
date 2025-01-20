import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import PDFTools from "../components/Home/PDFTools";
import { toolsData } from "../data/data";
import '@testing-library/jest-dom';

describe("PDFTools Component", () => {
  test("renders the main heading", () => {
    const { getByText } = render(
      <Router>
        <PDFTools />
      </Router>
    );
    expect(getByText("All the tools you need in one location to deal with PDFs")).toBeInTheDocument();
  });

  test("renders the description paragraph", () => {
    const { getByText } = render(
      <Router>
        <PDFTools />
      </Router>
    );
    expect(getByText(/You can access all the tools you need to use PDFs/i)).toBeInTheDocument();
  });

  test("renders all tools from toolsData", () => {
    const { getByText } = render(
      <Router>
        <PDFTools />
      </Router>
    );
    toolsData.forEach((tool) => {
      expect(getByText(tool.title)).toBeInTheDocument();
      expect(getByText(tool.content)).toBeInTheDocument();
    });
  });

  test("renders the 'The PDF program that millions of people rely on' section", () => {
    const { getByText } = render(
      <Router>
        <PDFTools />
      </Router>
    );
    expect(getByText("The PDF program that millions of people rely on")).toBeInTheDocument();
    expect(getByText(/Ireg is the best web application for easily editing PDFs/i)).toBeInTheDocument();
  });

  test("renders the 'Contact with Widgets' section", () => {
    const { getByText, getByAltText } = render(
      <Router>
        <PDFTools />
      </Router>
    );
    expect(getByText("Contact with Widgets")).toBeInTheDocument();
    expect(getByAltText("contact with widgets")).toBeInTheDocument();
  });

  test("renders the 'About us' section", () => {
    const { getByText } = render(
      <Router>
        <PDFTools />
      </Router>
    );
    expect(getByText("About us")).toBeInTheDocument();
    expect(getByText(/A top web application for smooth PDF editing/i)).toBeInTheDocument();
  });
});