import React from 'react';
import { Link } from 'react-router-dom'

interface CreateAPIMsgProps {
    setIsCreateAPI: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateAPIMsg: React.FC<CreateAPIMsgProps> = ({ setIsCreateAPI }) => {

    return (
        <div className='flex justify-center items-center min-h-screen '>
            <div className="bg-[#182B57] fixed top-0 h-10 w-full"></div>
            <div className=' bg-white flex  flex-col justify-center items-center m-3 lg:mx-20 lg:my-10 h-[400px] w-full p-2 lg:w-1/2'>

                <h1 className='font-semibold text-lg  capitalize text-[#182B57]'>Use our app to create api</h1>
                <Link to={`https://sheetify.clicflo.com`} className='underline text-[#182B57]'>https://sheetify.clicflo.com</Link>
                <button type="button" onClick={() => setIsCreateAPI(false)} className='mt-4 px-4 py-2 bg-[#3A4F72] text-white'>Done</button>
            </div>

            <div className="bg-[#182B57] h-10 fixed bottom-0 w-full"></div>
        </div>
    )
}

export default CreateAPIMsg