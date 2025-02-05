import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useRef } from "react";

const PrintCheck: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isRoot = location.pathname === "/print-check";

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file); 
      reader.onload = () => {
        if (typeof reader.result === "string") {
          localStorage.setItem("uploadedPdf", reader.result); 
          navigate("print-fill-cheque"); 
        }
      };
    }
  };

  const printCheckData = [
    {
      title: "Select Template",
      icon: "/selectTemplateIcon.png",
      path: "select-template",
      color: "#59C059",
    },
    {
      title: "Upload Cheque",
      icon: "/uploadChecqueIcon.png",
      path: "#",
      color: "#526695",
      onClick: handleFileUploadClick,
    },
    {
      title: "Create Template",
      desc: "(Coming Soon)",
      icon: "/createTemplateIcon.png",
      path: "/",
      color: "#B6A22E",
    },
    {
      title: "View Report",
      icon: "/viewReportIcon.png",
      path: "view-report",
      color: "#DA5757",
    },
  ];
  return (
    <div className="flex flex-row items-center justify-center text-center min-h-screen">
      {isRoot && (
      <div className="flex flex-row justify-center">
        <div className="bg-[#182B57] fixed top-0 w-full h-10 z-50"></div>
        <div className="flex flex-wrap justify-center gap-11 p-4 mb-10 mt-20  lg:my-0 ">
        {printCheckData.map((checkData, index) => (
        <Link
          to={checkData.path}
          key={index}
          className="flex flex-col justify-center items-center rounded-md py-6 relative w-full sm:w-48 h-48"
          style={{ backgroundColor: checkData.color }}
          onClick={checkData.onClick}
        >
          <div className="bg-white px-8 py-3 flex justify-center items-center rounded-full absolute top-[-20%] border border-black ">
          <img
            src={checkData.icon}
            alt={`${checkData.icon} icon`}
            className="mb-2 w-10 h-10"
          />
          </div>

          <h3 className="text-md font-bold text-white text-center">
          {checkData.title}
          </h3>
          <p className="text-white text-center">{checkData.desc}</p>
        </Link>
        ))}
        </div>
        <div className="bg-[#182B57] h-10 fixed bottom-0 w-full"></div>
      </div>
      )}

      <input
      type="file"
      accept="application/pdf"
      ref={fileInputRef}
      onChange={handleFileChange}
      placeholder="Upload pdf"
      className="hidden"
      />

      <Outlet />
    </div>
  );
};

export default PrintCheck;
