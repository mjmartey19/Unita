import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import Featured from "./Featured";

function Hero() {
  const [focus, setFocus] = useState(false)
  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchInputRef.current && !searchInputRef.current.contains(event.target)) {
        // Click occurred outside the search input and the featured component
        setFocus(false);
      }
    };

    // Add event listener to the document body for click events
    document.body.addEventListener('click', handleClickOutside);

    // Clean up the event listener when the component is unmounted
    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-hero-pattern bg-no-repeat bg-cover md:pt-40 pt-32 pb-16 w-full flex items-center justify-center text-center "
    >
      <div>
          <h1 className="md:text-[40px] text-[26px] text-primary font-Mulish font-extrabold pb-4 px-4">Find the Community you belong to</h1>
          <p className="text-center md:text-[28px] text-[16px] font-Mulish font-light pb-10 px-2">
            Discover, compare and review the best communities,<br />masterminds and online groups.
          </p>
          <div className="relative flex items-center justify-between bg-white md:max-w-[70%] max-w-[80%] mx-auto py-4 px-4 rounded-lg shadow-card group mb-10">
          
            <input
             ref={searchInputRef} 
            className="text-[#1d1d23] w-full font-normal placeholder:text-gray-800 placeholder:text-sm bg-transparent outline-none" placeholder="What are you looking for?" 
              onFocus={() => setFocus(true)}
            on
            />
           {focus && (
            <div className="absolute left-0 right-0 top-[63px]">
              <Featured rounded={`rounded-b-xl`}/>
            </div>
           )}
           
            <AiOutlineSearch className="text-3xl text-secondary group-focus:text-black"/>
          </div>
        
        <div className="text-primary md:text-lg text-[14px]">
          <p className="pb-5 px-4">
            Subscribe to our newsletter and receive weekly guides with resources
            for indie founders starting with community building.
          </p>
          <form className="flex gap-2 justify-center">
            <input className="px-4 py-1 rounded-lg border border-black text-[#1d1d23] font-normal placeholder:text-gray-800 placeholder:text-xs text-xs w-60" placeholder="Email" required/>
            <button type="submit" className="flex gap-2 items-center bg-secondary w-fit py-2 px-3 text-white rounded-lg">
              <span className="text-xs">Subscribe</span>
              <HiOutlineArrowSmRight className="text-xl"/>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Hero;
