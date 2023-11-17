import React, { useEffect, useRef, useState } from "react";
import { logo } from "../assets";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import NavLinks from "../data/navbar";
import { FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineShareLocation } from "react-icons/md";
import { BiSolidDownArrow } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Featured from "./Featured";
import AnimatedBar from "./AnimatedBar";

function Navbar() {
  const [visible, setVisible] = useState("");
  const [active, setActive] = useState("home");
  const [toggle, setToggle] = useState(false);
  const [navtoggle, setNavToggle] = useState(false);
  const [focus, setFocus] = useState(false);
  const searchInputRef = useRef(null);
 const [featured, setFeatured] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchInputRef.current && !searchInputRef.current.contains(event.target)) {
        setFocus(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="flex justify-between px-5 h-20 fixed left-0 right-0 gap-10 bg-bg-color z-20">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-8">
            <HiMenu
              className="text-2xl lg:hidden inline cursor-pointer"
              onClick={() => {
                setNavToggle(!navtoggle);
              }}
            />
            <Link to="/">
            <img src={logo} width={100} />
            </Link>
            <div className="lg:flex gap-3 items-center hidden relative">
              <AiOutlineSearch className="text-[#767676] text-lg" />
              <input
               ref={searchInputRef} 
                type="text"
                placeholder="Searches for..."
                className="text-[#1d1d23] font-normal placeholder:text-[#1d1d23] placeholder:text-xs bg-transparent outline-none"
                onClick={() => setFocus(true)}
              />
              {focus && (
                <div className="absolute top-10 w-full">
              <AnimatedBar />
                <Featured rounded={`rounded-b-0`}/>
              </div>
              )}
            </div>
          </div>
          <div className="flex gap-10 items-center h-full">
            <nav className="lg:block hidden">
              <ul className="flex gap-10">
                {NavLinks.map((navLink) => (
                  <li
                    key={navLink.id}
                    className="text-xs text-black-100 hover:black group h-20 flex gap-2 items-center"
                    onMouseEnter={() => setVisible(navLink.id)}
                    onMouseLeave={() => setVisible("")}
                  >
                    <NavLink to={`${navLink.id}`} className="flex gap-2 items-center ">
                      <span>{navLink.title}</span>
                      {navLink.subLink.length > 0 && (
                        <BiSolidDownArrow className="text-black-100/20 text-[6px] group-hover:text-black" />
                      )}
                    </NavLink>

                    {visible == navLink.id && navLink.subLink.length > 0 && (
                      <ul className="absolute bg-white top-16 shadow-card px-4 pt-2 w-52">
                        {navLink.subLink.map((link, index) => (
                          <NavLink  key={index} to={`${link.id}`} className="w-full relative">
                            <li
                              className={`py-3 border-b-[1px] hover:px-1 duration-300`}
                            >
                              {link.title}
                            </li>
                          </NavLink>
                        ))}
                        <NavLink to="/category/all" className="w-full relative">
                          <li className="py-3 hover:px-1 duration-300">
                              All Categories
                          </li>
                        </NavLink>
                        <AnimatedBar />
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex gap-4 items-center">
              <div className="py-4 px-4 md:flex hidden items-center gap-2 bg-tertiary rounded-md text-xs text-black-100 ">
                <FaUser />
                <div className="flex gap-1">
                  <Link to="/my-account" className="hover:text-black">
                    Sign in
                  </Link>
                  <span>or</span>
                  <Link to="/my-account?register" className="hover:text-black">
                    Register
                  </Link>
                </div>
              </div>
              <Link to="/add-communities">
                <div className="py-4 px-4 lg:flex hidden items-center gap-2 bg-secondary rounded-md text-xs text-white hover:opacity-90">
                  <MdOutlineShareLocation className="text-white" />
                  <span>Add your community</span>
                </div>
              </Link>
              <FaUser className="text-xl md:hidden inline" />
              <AiOutlineSearch className="text-2xl lg:hidden inline cursor-pointer duration-300" 
               onClick={() => setFeatured(true)}
              />
            </div>
          </div>
        </div>
      </div>

  {featured && (
  <div className="fixed w-full z-20 h-screen bg-slate-800/30">
    <div className=" bg-white">
      <div className="flex items-center px-4">
        <div className="flex items-center gap-3 w-full">
        <AiOutlineSearch className="text-2xl text-black group-focus:text-black"/>
        <input
          className="text-[#1d1d23] w-full font-normal placeholder:text-gray-800 placeholder:text-xs bg-transparent outline-none py-4" placeholder="What are you looking for?" 
          />
        </div>
        
         <div className="p-2 border rounded-full cursor-pointer"
          onClick={() => setFeatured(false)}
         >
         <AiOutlineClose className="text-xl text-gray-800"
         />
         </div>
         
        </div>
          <Featured />
       </div>
    </div>
  )}

      {/* Mobile version  */}
      {navtoggle && (
        <div className="fixed z-20">
        <div className="w-full fixed inset-0 bg-black/40"  onClick={() => setNavToggle(!navtoggle)}></div>
          <div
            className={`fixed top-0 bottom-0 -left-[50%] ${
              navtoggle && "left-[0%]"
            } duration-300 md:w-[50%] w-[75%] flex flex-col z-30 bg-white ${
              toggle && "overflow-y-scroll"
            }`}
          >
            <IoClose
              className="text-2xl absolute right-3 mt-4 cursor-pointer"
              onClick={() => {
                setNavToggle(!navtoggle);
              }}
            />
            <nav className="mt-14">
              <ul className="flex flex-col">
                {NavLinks.map((navLink, index) => (
                
                    <li
                      key={navLink.id}
                      className={`text-black-100 hover:text-black group gap-2 transition-all duration-300 text-xs font-medium cursor-pointer ${
                        index == 0 ? "border-y-[1px]" : "border-b-[1px]"
                      }`}
                      onClick={() => {
                        setActive(navLink.id);
                      }}
                    >
                      <div
                        className={`w-full h-full flex justify-between items-center  px-5 py-3 ${
                          active == navLink.id &&
                          "border-r-2 border-r-secondary text-secondary"
                        }`}
                      >
                        <NavLink to={navLink.id}>
                        <span>{navLink.title}</span>
                        </NavLink>
                        
                        {navLink.subLink.length > 0 && (
                          <BiSolidDownArrow
                            className="text-black-100/20 text-[8px] group-hover:text-black"
                            onClick={() => {
                              setToggle(!toggle);
                              setVisible(navLink.id);
                            }}
                          />
                        )}
                      </div>
                      {visible == navLink.id &&
                        toggle &&
                        navLink.subLink.length > 0 && (
                          <ul className="bg-[#f8f8f8]">
                            {navLink.subLink.map((link, index) => (
                              <NavLink to={link.id} className="w-full">
                                <li
                                  key={link.id}
                                  className=" px-5 py-3 border-b-[1px]"
                                >
                                  {link.title}
                                </li>
                              </NavLink>
                            ))}
                          </ul>
                        )}
                    </li>
             
                ))}
              </ul>
            </nav>
            <Link to="/add-community">
                <div className="py-3 px-4 flex items-center justify-center gap-2 bg-secondary text-xs text-white hover:opacity-90">
                  <MdOutlineShareLocation className="text-white" />
                  <span>Add your community</span>
                </div>
              </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
