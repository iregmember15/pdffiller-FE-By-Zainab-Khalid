import React from 'react';
// import ReactPDF from 'react-pdf-js';
import pdfFile from '../assets/filled_form.pdf'

const LibraryTemplates: React.FC = () => {
    const templates = [
        { id: 1, pdfUrl: pdfFile, title: 'Template 1' },
        { id: 2, pdfUrl: pdfFile, title: 'Template 2' },
        { id: 3, pdfUrl: pdfFile, title: 'Template 3' },
    ];

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col w-full">
            <header className="bg-[#182B57] text-white py-4 shadow-md">
            </header>

            <main className="flex-grow container mx-auto px-4 py-8 justify-center items-center">
                <div className='flex justify-center'>
                    <h2 className="text-center text-lg font-bold mb-6 bg-white text-[#182B57] capitalize p-2  md:px-20 w-max  ">Use Template Which You Want</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center ">
                    {templates.map((template) => (
                        <div
                            key={template.id}
                            className="bg-white shadow-md  overflow-hidden w-80   border border-gray-300"
                        >
                            {/* <ReactPDF file={template.pdfUrl} page={1} scale={0.5} /> */}
                            <div className="p-4 text-center">
                                <button
                                    className="text-blue-700 px-4 py-2 font-semibold border-t w-full"
                                    onClick={() => window.open(template.pdfUrl, '_blank')}
                                >
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
