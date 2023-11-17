import React, { useState } from 'react'
import Navbar from '../component/Navbar'
import Login from '../component/Login'
import Register from '../component/Register';
import Footer from '../component/Footer';

function MyAccount() {
    const [active, SetActive] = useState(false);
  return (
    <div>
    <div className="bg-hero-pattern bg-no-repeat bg-cover w-full mb-10"
    >
      <Navbar/>
      <div className='flex items-center justify-center h-fit '>
       <div className='w-80 h-full pt-28 pb-10'>
         {/* Tabs  */}
        <div className='flex'>
            <div className='w-full text-center'>
                <div className='flex flex-col gap-1.5'>
                    <span onClick={() => SetActive(false)} className='font-semibold cursor-pointer'>Sign In</span>
                    <div className={`h-1.5 w-full ${!active ? "bg-secondary" : "bg-white"}`}/>
                </div>
        </div>
        <div className='w-full text-center'>
                <div className='flex flex-col gap-1.5'>
                <span onClick={() => SetActive(true)} className='font-semibold cursor-pointer'>Register</span>
                <div className={`h-1.5 w-full ${active ? "bg-secondary" : "bg-white"}`}/>
                </div>
        </div>
        </div>
        {active ? <Register /> : <Login />}
      
        </div>
      </div>
    </div>
        <Footer />
    </div>
  )
}

export default MyAccount
