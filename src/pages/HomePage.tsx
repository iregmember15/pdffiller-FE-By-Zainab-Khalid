import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Home/Navbar";
import PDFTools from "../components/Home/PDFTools";
import Cookies from "js-cookie";

const HomePage = () => {
  useEffect(() => {
    console.log("Data of crsf,", Cookies.get("csrftoken"));
  }, []);
  return (
    <div data-testid="home-page">
      <Navbar data-testid="navbar" />
      <PDFTools data-testid="pdftools" />
      <Footer data-testid="footer" />
      <div className="bg-[#182B57] h-10 bottom-container "></div>
    </div>
  );
};

export default HomePage;
