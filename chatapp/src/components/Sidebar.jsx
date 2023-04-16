import React from 'react'
import ChatIcon from '@mui/icons-material/Chat';
import CircleIcon from '@mui/icons-material/Circle';
import { Avatar } from '@mui/material';

const Sidebar = ({ handleTabChange }) => {
  return (
    <div className='flex flex-col pt-10 pb-2'>
        <div className='flex justify-center'>
            <h2 className='text-3xl mr-10 ml-14'>Add Friend</h2>
            <button className='bg-gray-900 w-12 h-12 rounded-lg'>
                <ChatIcon
                    sx={{
                        width: '30px',
                        height: '30px',
                    }}
                />
            </button>
        </div>
        <hr className='m-6 border-gray-600'/>
        <div
            className='flex items-center border-2 border-b-4 border-gray-700 m-10 mb-0 mt-2 pt-2 pb-2 border-b-purple-600 cursor-pointer hover:bg-gray-600'
            onClick={() => handleTabChange(0)}
        >
            <Avatar className='ml-10' />
            <p className='ml-2 text-xl'>John Doe</p>
            <div className='flex-grow' />
            <CircleIcon
                className='justify-self-end mr-4'
                sx={{
                    color: 'green',
                    height: '20px',
                    width: '20px',
                }}
            />
        </div>
        <div
            className='flex items-center border-2 border-b-4 border-gray-700 m-10 mb-0 mt-2 pt-2 pb-2 border-b-purple-600 cursor-pointer hover:bg-gray-600'
            onClick={() => handleTabChange(1)}
        >
            <Avatar className='ml-10' />
            <p className='ml-2 text-xl'>John Doe</p>
            <div className='flex-grow' />
            <CircleIcon
                className='justify-self-end mr-4'
                sx={{
                    color: 'red',
                    height: '20px',
                    width: '20px',
                }}
            />
        </div>
    </div>
  )
}

export default Sidebar