import { Link, useNavigate } from "react-router";
import backIcon from '../assets/images/backIcon.png';

interface Template {
  id: number;
  category: string;
  noofcheques: number;
  totalamount: number;
}

const ViewReport: React.FC = () => {
  const navigate = useNavigate();

  const templates: Template[] = [
    { id: 1, category: "Category 1", noofcheques: 10, totalamount: 1000 },
    { id: 2, category: "Category 2", noofcheques: 3, totalamount: 700 },
    { id: 3, category: "Category 3", noofcheques: 2, totalamount: 300 },
  ];

  const handleBackButton = () => {
    navigate("/print-check");
  }

  return (
    <div className="h-full flex flex-col w-full lg:overflow-x-hidden">
      <div className="bg-[#182B57] fixed top-0 w-full h-10 z-50"></div>
      <div className="ms-10 mt-10 lg:mt-0 flex justify-start w-full">
        <button
          onClick={handleBackButton}
        >
          <img
            src={backIcon}
            alt="back button"
            className="w-8 h-8"
          />
        </button>
      </div>
      <main className="flex-grow container mx-auto  px-2 md:px-20 py-8 border border-gray-950 bg-white mt-10 ">
        <div className="flex justify-between items-center mb-6 p-2 border border-b-gray-500">
          <h2 className="text-lg font-bold">Check-Book Report</h2>
          <h2 className="text-lg">None</h2>
          <Link to={"/profession-page"}>Go to Profession Page</Link>
        </div>

        <div className="border border-t-gray-500 flex lg:justify-center overflow-x-auto w-full">
          <table className="w-full md:w-[70%] m-4 h-full">
            <caption className="text-start font-bold">Final Summary: </caption>
            <tbody>
              <tr>
                <th className="px-4 py-2 font-bold ">Category</th>
                <th className="px-4 py-2 font-bold  ">No. of Cheques</th>
                <th className="px-4 py-2 font-bold  ">Total Amount</th>
              </tr>

              {templates.map((template) => (
                <tr key={template.id} className="hover:bg-gray-100 font-medium">
                  <td className="px-4 py-2 ">{template.category}</td>
                  <td className="px-4 py-2 ">{template.noofcheques}</td>
                  <td className="px-4 py-2 ">{template.totalamount}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <table className="w-full md:w-[30%] m-4 h-full">
            <tbody>
              <tr className="hover:bg-gray-100 font-medium">
                <td className="px-4 py-2 ">Total Cheques Printed: </td>
                <td className="px-4 py-2 ">10</td>
              </tr>
              <tr className="hover:bg-gray-100 font-medium">
                <td className="px-4 py-2 ">Total Cheques: </td>
                <td className="px-4 py-2 ">15</td>
              </tr>
              <tr className="hover:bg-gray-100 font-medium">
                <td className="px-4 py-2 ">Total Amount: </td>
                <td className="px-4 py-2 ">2000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

      <div className="bg-[#182B57] h-10 fixed bottom-0 w-full"></div>
    </div>
  );
};

export default ViewReport;
