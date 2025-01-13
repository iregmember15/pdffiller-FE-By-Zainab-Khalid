import { Link } from "react-router";
import { toolsData } from "../../data/data";
import About_bg from "../../assets/images/About_bg.png";
import contact_widgets from "../../assets/images/contact_widgets.png";

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
            className="bg-white shadow-md  p-4 flex flex-col  hover:shadow-lg hover:border-1 hover:border-gray-950 transition-shadow duration-300 border border-gray-500 cursor-pointer"
          >
            <div className="flex justify-end mr-3">
              <div className="w-12 h-12 flex items-center justify-center mb-2 ">
                <img
                  src={tool.icon}
                  alt={`${tool.title} icon`}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <h3 className="text-lg font-bold mb-2 text-[#1951D1] text-left">
              {tool.title}
            </h3>

            <p className="text-sm font-bold text-[#2F4D94]">{tool.content}</p>
          </Link>
        ))}
      </div>

      <div className="mx-2 lg:mx-14 border border-gray-500">
        <div className=" mx-3 lg:mx-72 text-center capitalize py-20">
          <h1 className="text-[#182B57] font-bold text-[24px] ">
            The PDF program that millions of people rely on
          </h1>
          <p className="text-[#2F4D94] font-semibold text-wrap mx-18">
            Ireg is the best web application for easily editing PDFs. Take use
            of all the tools you need to work effectively with your digital
            documents while protecting your data.
          </p>
        </div>
      </div>

      <div className="mx-2 lg:mx-14 my-3 border border-gray-500 ">
        <div className=" mx-3 lg:mx-72 text-center capitalize py-20 flex justify-between items-center">
          <h1 className="text-[#182B57] font-bold text-[24px] ">
            Contact with Widgets
          </h1>
          <img
            src={contact_widgets}
            alt={`contact with widgets`}
            className="w-96 h-96 object-contain"
          />
        </div>
      </div>

      <div
        className="mx-2 lg:mx-14 my-3 border border-gray-500 bg-cover bg-center"
        style={{
          backgroundImage: `url(${About_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" mx-28 capitalize py-20 ">
          <h1 className="text-[#182B57] font-bold text-[20px] ">About us</h1>
          <p className="text-[#2F4D94] font-semibold pr-72 ">
            A top web application for smooth PDF editing, iREG prioritizes the
            security of your digital documents while offering all the necessary
            tools to increase your productivity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PDFTools;
