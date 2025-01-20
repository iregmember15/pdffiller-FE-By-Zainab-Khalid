import React from 'react';
import { Link } from 'react-router-dom'

const CreateAPIMsg = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="bg-[#182B57] fixed top-0 h-10 w-full"></div>
            <div className=' bg-white flex  flex-col justify-center items-center mx-20 my-10 h-[400px] w-1/2'>

                <h1 className='font-semibold text-lg  capitalize text-[#182B57]'>Use our app to create api</h1>
                <Link to={`https://sheetify.clicflo.com`} className='underline text-[#182B57]'>https://sheetify.clicflo.com</Link>

            </div>

            <div className="bg-[#182B57] h-10 fixed bottom-0 w-full"></div>
        </div>
    )
}

export default CreateAPIMsg