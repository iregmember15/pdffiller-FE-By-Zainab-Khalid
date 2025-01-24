import React from 'react'

const HistoryPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-[#182B57]  py-4 shadow-md">
            </header>

            <main className="flex-grow container mx-auto  px-2 lg:px-20 py-8 border border-gray-950 my-10 flex justify-center items-center">
                <div className='flex justify-center items-center bg-white font-bold p-5 md:p-20 border border-gray-400 capitalize'>
                    After You fill Pdf your history will maintain here
                </div>
            </main>

            <footer className="bg-[#182B57] py-4 ">
            </footer>
        </div>
    )
}

export default HistoryPage