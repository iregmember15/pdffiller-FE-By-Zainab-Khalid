import React from 'react';
import template1 from '../assets/images/template1.png';
import template2 from '../assets/images/template2.png';
import template3 from '../assets/images/template3.png';

const LibraryTemplates: React.FC = () => {
    const templates = [
        { id: 1, imgSrc: template1, title: 'Template 1' },
        { id: 2, imgSrc: template2, title: 'Template 2' },
        { id: 3, imgSrc: template3, title: 'Template 3' },
    ];

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <header className="bg-[#182B57] text-white py-4 shadow-md">
                {/* <div className="container mx-auto px-4 text-center">
                    <h1 className="text-xl font-bold">Library</h1>
                </div> */}
            </header>

            <main className="flex-grow container mx-auto px-4 py-8 justify-center items-center">
                <div className='flex justify-center'>
                <h2 className="text-center text-lg font-bold mb-6 bg-white text-[#182B57] capitalize p-2  px-20 w-max  ">Use Template Which You Want</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-items-center mx-20">
                    {templates.map((template) => (
                        <div
                            key={template.id}
                            className="bg-white shadow-md  overflow-hidden w-80  border border-gray-300"
                        >
                            <img
                                src={template.imgSrc}
                                alt={template.title}
                                className="w-full h-80 object-cover"
                            />
                            <div className="p-4 text-center">
                                <button className="text-blue-700 px-4 py-2 font-semibold  border-t w-full">
                                    Use Template
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <footer className="bg-[#182B57] text-white py-4 ">
            </footer>
        </div>
    );
};

export default LibraryTemplates;
