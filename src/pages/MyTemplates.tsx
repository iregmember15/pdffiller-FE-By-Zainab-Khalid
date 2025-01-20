import React, { useState } from 'react';
import dotsVertical from '../assets/images/dotsVertical.png';

interface Template {
    id: number;
    name: string;
    sections: number;
}

const MyTemplates: React.FC = () => {
    const templates: Template[] = [
        { id: 1, name: 'Accounts Plan Worksheet', sections: 14 },
        { id: 2, name: 'Register A New Company', sections: 1 },
        { id: 3, name: 'Corporate Transparency Act', sections: 1 },
        { id: 4, name: 'Conflict Of Interest Waiver Form', sections: 4 },
        { id: 5, name: 'Disclosure Of Tax Information', sections: 3 },
        { id: 6, name: 'Funeral Arrangements', sections: 10 },
    ];

    const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

    const toggleDropdown = (id: number) => {
        setActiveDropdown((prev) => (prev === id ? null : id));
    };

    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-[#182B57]  py-4 shadow-md">
            </header>

            <main className="flex-grow container mx-auto px-20 py-8 border border-gray-950 bg-white my-10">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-semibold text-[#182B57]">My Templates</h2>
                    <button className="bg-[#182B57] text-white px-8 py-2 rounded-sm">
                        Add New
                    </button>
                </div>

                <div className="  overflow-y-visible">
                    <table className="min-w-full table-auto border-collapse  text-[#182B57] ">
                        <thead className="border-b-2 border-gray-600">
                            <tr>
                                <th className="text-left px-4 py-2 font-bold ">
                                    Name
                                </th>
                                <th className="text-left px-4 py-2 font-bold  ">
                                    Sections
                                </th>
                                <th className="px-4 py-2   w-1/4"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {templates.map((template) => (
                                <tr key={template.id} className="hover:bg-gray-100 font-medium">
                                    <td className="px-4 py-2 ">{template.name}</td>
                                    <td className="px-10 py-2 ">{template.sections}</td>
                                    <td className="px-4 py-2   relative">
                                        <button
                                            onClick={() => toggleDropdown(template.id)}
                                            className="text-gray-700 hover:text-gray-900 focus:outline-none"
                                        >
                                            <img src={dotsVertical} alt="dots" className='h-6' data-testid={`MoreOptions-${template.id}`} />
                                        </button>

                                        {activeDropdown === template.id && (
                                            <div className="absolute left-6 w-48 bg-[#D9D9D9] text[#182B57] shadow-lg rounded-md z-10 text-center mb-2">
                                                <ul className="py-1">
                                                    <li className="px-4 py-2 hover:bg-white cursor-pointer">
                                                        View
                                                    </li>
                                                    <li className="px-4 py-2 hover:bg-white cursor-pointer">
                                                        Edit
                                                    </li>
                                                    <li className="px-4 py-2 hover:bg-white cursor-pointer">
                                                        Duplicate
                                                    </li>
                                                    <li className="px-4 py-2 hover:bg-white cursor-pointer">
                                                        Add To My Library
                                                    </li>
                                                    <li className="px-4 py-2  hover:bg-white cursor-pointer">
                                                        Delete
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>

            <footer className="bg-[#182B57] py-4 ">
            </footer>
        </div>
    );
};

export default MyTemplates;
