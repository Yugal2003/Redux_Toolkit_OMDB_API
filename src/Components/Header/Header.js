import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = ({isHeaderVisible}) => {
  return (
    <div>
      <div
        style={{ 
          transform: isHeaderVisible ? 'translateY(0)' : 'translateY(-100%)',
          border: "rgba(221, 221, 221, 0.8)",
        }}
       className='fixed z-50 w-full bg-blue-950 top-0 duration-500 mx-auto border-b border-white'>
        <div className='flex w-[90%] mx-auto justify-between h-[80px] items-center'>
            <div>
              <Link to='/'>
                <h1 className='cursor-pointer text-3xl font-bold text-white'>Movie App</h1>
              </Link>
            </div>
            <div>
              <FaRegUserCircle color='white' className='cursor-pointer' size={35}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header