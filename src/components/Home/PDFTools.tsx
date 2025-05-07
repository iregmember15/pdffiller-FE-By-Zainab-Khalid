import React from "react";
import { Link } from "react-router-dom";
import { toolsData } from "../../data/data";
import contact_us_new from "../../assets/images/contact-us-new.jpg";
import uploadedPDF from "../../assets/images/uploadedPDF.png";

const PDFTools = () => {
  return (
    <div className=" mt-20 min-h-screen ">
      <div className=" mx-2 lg:mx-72 text-center capitalize">
        <h1 className="text-[#182B57] font-bold text-[24px] ">
          All the tools you need in one location to deal with PDFs
        </h1>
        <p className="text-[#2F4D94] font-semibold text-wrap lg:mx-16">
          You can access all the tools you need to use PDFs. They're all simple
          to use and completely free! With a few clicks, you can watermark,
          rotate, split, compress, convert, and unlock PDFs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 lg:m-10 ">
        {toolsData.map((tool, index) => (
          <Link
            to={tool.path}
            key={index}
            className="bg-white rounded-xl shadow-md p-5 flex flex-col transition-all duration-300 hover:shadow-xl hover:scale-105  cursor-pointer  shadow-blue-400"
            onClick={() => localStorage.clear()}
          >
            <div className="flex justify-end mb-3">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-lg">
                <img
                  src={tool.icon}
                  alt={`${tool.title} icon`}
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>

            <h3 className="text-lg font-bold mb-3 text-[#1951D1]">
              {tool.title}
            </h3>

            <p className="text-sm text-[#2F4D94] line-clamp-3">{tool.content}</p>
          </Link>
        ))}
      </div>

      <div className="mx-2 lg:mx-14 border bg-gradient-to-r from-white to-blue-50 rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between py-8 px-6">
          <div className="md:w-1/2 text-left md:pl-6 lg:pl-16">
            <h1 className="text-[#182B57] font-bold text-[28px] mb-4">
              The PDF program that millions of people rely on
            </h1>
            <p className="text-[#2F4D94] font-semibold text-wrap text-lg leading-relaxed">
              Ireg is the best web application for easily editing PDFs. Take use
              of all the tools you need to work effectively with your digital
              documents while protecting your data.
            </p>
            <button className="mt-6 bg-[#1951D1] hover:bg-[#0d3ba3] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
              Get Started
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
            <img
              src={uploadedPDF}
              alt="PDF Document"
              className="w-full max-w-md object-contain rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      <div className="mx-2 lg:mx-14 my-6 border bg-gradient-to-r from-blue-50 to-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between py-8 px-6">
          <div className="md:w-1/2 text-left md:pl-6 lg:pl-16 mt-8 md:mt-0">
            <h1 className="text-[#182B57] font-bold text-[28px] mb-4">
              Contact with Widgets
            </h1>
            <p className="text-[#2F4D94] font-semibold text-wrap text-lg leading-relaxed">
              Connect with our support team through convenient widgets. Get real-time assistance for any questions or issues with your PDF documents.
            </p>
            <button className="mt-6 bg-[#1951D1] hover:bg-[#0d3ba3] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
              Contact Support
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src={contact_us_new}
              alt="contact_us_new"
              className="w-full max-w-md object-contain rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>



      <div
        className="mx-2 lg:mx-14 my-6 border bg-gradient-to-r from-white to-blue-50 rounded-lg shadow-lg overflow-hidden bg-cover bg-center"
      >
        <div className="mx-10 lg:mx-28 py-10 flex flex-col justify-center items-center">
          <h1 className="text-[#182B57] font-bold text-[28px] mb-4">About us</h1>
          <p className="text-[#2F4D94] font-semibold text-lg leading-relaxed max-w-4xl text-center">
            A top web application for smooth PDF editing, iREG prioritizes the
            security of your digital documents while offering all the necessary
            tools to increase your productivity.
          </p>
          <button className="mt-6 bg-[#1951D1] hover:bg-[#0d3ba3] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default PDFTools;
