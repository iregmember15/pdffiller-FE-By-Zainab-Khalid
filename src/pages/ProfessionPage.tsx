import FilterBankDetails from "../components/FilterBankDetails";

const ProfessionPage: React.FC = () => {
  const profession = [
    {
      title: "Business",
      thumbnail: "/profession_thumbnail.png",
    },
    {
      title: "Marketing",
      thumbnail: "/profession_thumbnail.png",
    },
    {
      title: "Education",
      thumbnail: "/profession_thumbnail.png",
    },
    {
      title: "Governmental",
      thumbnail: "/profession_thumbnail.png",
    },
  ];
  return (
    <div className=" flex flex-col items-center justify-center">
      <div className="bg-[#182B57] fixed top-0 w-full h-10"></div>
      <div className="mt-20 flex items-start justify-between w-full flex-col lg:flex-row">
        <div className="flex items-start justify-start lg:ml-44 lg:w-1/2 lg:mr-10">
          <img
            src="/filter-icon.png"
            alt="filter-icon"
            className="bg-[#1951D1] size-12 rounded-l-md p-2 border border-gray-500"
          />
          <FilterBankDetails />
        </div>

        <div className="flex items-start justify-center border border-gray-500 rounded-md me-44 mt-2 lg:mt-0">
          <img
            src="/magnifying-glass.png"
            alt="magnifying-glass"
            className="size-12 bg-[#1951D1] rounded-l-md p-2"
          />
          <input
            type="text"
            placeholder="Search"
            className="h-12 focus:outline-none px-2 rounded-r-md w-[250px]"
          />
        </div>
      </div>
      <div className="lg:flex items-center justify-center w-full h-full  px-2 lg:px-40 py-10 mb-20">
        {profession.map((items, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center border border-gray-500 mx-2 h-80 mb-4"
          >
            <div className="flex items-center justify-center w-full h-[50%] p-2">
              <img
                src={items.thumbnail}
                alt={`${items.title} thumbnail`}
                className="h-full"
              />
            </div>
            <div className="flex items-center justify-center bg-[#446ED2] w-full h-[50%] p-2">
              <button className="bg-white text-[#446ED2] rounded-md px-8 py-2 font-bold">
                {items.title}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#182B57] h-10 fixed bottom-0 w-full"></div>
    </div>
  );
};

export default ProfessionPage;
