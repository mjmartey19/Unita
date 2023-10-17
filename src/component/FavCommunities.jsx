import React from "react";
import { IoDiamondOutline } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaFire } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { BsFillStarFill } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import favCommunities from "../data/favCommunities";
import platforms from "../data/platforms";
import { Link } from "react-router-dom";
import { circile } from "../assets";

function FavCommunities() {
  return (
    <div className="my-10 pt-10 pb-20 bg-hero-pattern w-full overflow-hidden">
      <div className="text-center px-10">
        <div className="flex md:flex-rol flex-col gap-3 justify-center items-center">
          <IoDiamondOutline className="text-5xl text-tertiary " />
          <h1 className="text-3xl text-primary font-extrabold pb-4">
            Check Our Favourites Communities
          </h1>
        </div>
        <p className="text-center md:text-xl font-light text-primary md:px-44">
          Are you looking to expand your professional network and join other
          like-minded founders? Here’s our top communities
        </p>
      </div>

      {favCommunities.map((favCommunity, index) => (
        <div key={index} className="lg:px-20 px-10 py-10">
        <div className="px-6 py-4 shadow-card bg-white rounded-lg">
          <div className="flex flex-col gap-5">
            <div className="grid md:grid-cols-5 grid-cols-4 lg:gap-5 gap-3">
              <img
                src={favCommunity.image}
                alt={favCommunity.image}
                className="rounded-[2.5rem] md:w-32 md:h-32 w-16 h-16"
              />
              <div className="space-y-3 col-span-3">
                <div className="flex gap-2 items-center">
                  <h4 className="font-medium">{favCommunity.name}</h4>
                  {favCommunity.verified && (
                    <MdVerified className="text-secondary text-xl" />
                  )}
                </div>
                <div className="flex flex-wrap gap-x-20 gap-y-3">
                  <div className="flex gap-1 items-center">
                    <FaFire className="text-tertiary" />
                    <h3 className="font-semibold md:text-base text-sm">Featured Community</h3>
                  </div>
                {favCommunity.star[0] && (
                  <div className="flex gap-2 items-center">
                    {[...Array(5)].map((_, index) => (
                      <div key={index} className="flex gap-2">
                        <BsFillStarFill className="text-tertiary" />
                      </div>
                    ))}
                     <span>( {favCommunity.star[1]} )</span>
                  </div>
                  )}
                  <div className="flex gap-2 items-center">
                   <HiUserGroup className="text-secondary"/> 
                   <p className="text-sm">{favCommunity.members} Members</p>
                </div> 
                </div>
                <p className="md:text-sm text-xs">{favCommunity.desc}</p>
              </div>
              <div className="flex md:flex-col gap-4 md:w-fit w-[20rem] text-center">
                  <Link to={favCommunity.viewLink} className="md:text-sm text-xs bg-secondary px-8 py-3 rounded-lg text-white md:w-fit">
                    View Community
                  </Link>
                  <Link to={favCommunity.viewLink} className="md:text-sm text-xs bg-tertiary px-8 py-3 rounded-lg text-black">
                      Visit Website
                  </Link>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:max-w-xl mx-auto">
                      <div className="flex justify-between">
                          <div className="flex flex-col gap-3">
                              {favCommunity.categories.map((cat, index) => (
                                <div key={index} className="flex gap-5 items-center">
                                  <Link
                                  to=''
                                   className="flex gap-2 px-4 py-2 bg-gray-200 rounded-full items-center md:text-sm text-xs">
                                      <div className="text-gray-500">
                                      {cat.icon}
                                      </div>
                                      <p>{cat.title}</p>
                                  </Link>
                                 {cat.number > 0 && (
                                  <Link
                                  to=''
                                   className="text-sm">+ {cat.number}</Link>
                                 )}
                                </div>
                              ))
                              }
                          </div>
                          <div className="flex items-center gap-2">
                              <Link to="" title="Bookmark" className="flex items-center gap-2">
                                <MdOutlineFavoriteBorder className="md:text-3xl xl text-red-500"/>
                                <p className="md:text-sm text-xs hover:text-secondary duration-200" title="Bookmark">Favorite</p>
                              </Link>
                             

                              <Link to=''>
                                <FiPlus className="md:text-3xl xl text-red-500" title="Add to comparison"/>
                              </Link>
                             
                          </div>
                      </div>
          </div>
          </div>
        </div>
      ))}
    <div className="flex md:flex-row gap-10 flex-col justify-between mt-20 items-center md:px-16 px-8">
      <div className="md:w-[35%]">
          <div className="flex gap-3 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="48.288" height="42.94" viewBox="0 0 48.288 42.94"><g id="leccion-en-linea" transform="translate(0.5 -28.452)"><circle id="Ellipse_40" data-name="Ellipse 40" cx="0.924" cy="0.924" r="0.924" transform="translate(22.721 56.124)" fill="#fdcc6f" stroke="#fdcc6f" stroke-width="1"></circle><path id="Path_1238" data-name="Path 1238" d="M43.587,28.952H3.7a3.706,3.706,0,0,0-3.7,3.7V58.492a3.706,3.706,0,0,0,3.7,3.7H18.557l-1.036,3.186a2.776,2.776,0,0,0,.464,5.513H29.3a2.776,2.776,0,0,0,.464-5.513l-1.036-3.186H43.586a3.706,3.706,0,0,0,3.7-3.7V32.654A3.706,3.706,0,0,0,43.587,28.952ZM30.228,68.116a.926.926,0,0,1-.925.925H17.985a.925.925,0,1,1,0-1.851H29.3A.927.927,0,0,1,30.228,68.116Zm-2.42-2.776H19.48L20.5,62.193h6.282Zm17.629-6.848a1.853,1.853,0,0,1-1.851,1.851H3.7a1.853,1.853,0,0,1-1.851-1.851V32.654A1.853,1.853,0,0,1,3.7,30.8H43.587a1.853,1.853,0,0,1,1.851,1.851V58.492Z" transform="translate(0 0)" fill="#fdcc6f" stroke="#fdcc6f" stroke-width="1"></path><path id="Path_1239" data-name="Path 1239" d="M82.228,74.646H48.008a2.316,2.316,0,0,0-2.314,2.314V97.133a2.316,2.316,0,0,0,2.314,2.314H60.97a.925.925,0,0,0,0-1.851H48.008a.463.463,0,0,1-.463-.463V76.96a.463.463,0,0,1,.463-.463H82.228a.463.463,0,0,1,.463.463V97.133a.463.463,0,0,1-.463.463H69.266a.925.925,0,1,0,0,1.851H82.228a2.316,2.316,0,0,0,2.314-2.314V76.96A2.316,2.316,0,0,0,82.228,74.646Z" transform="translate(-41.474 -41.474)" fill="#fdcc6f" stroke="#fdcc6f" stroke-width="1"></path><path id="Path_1240" data-name="Path 1240" d="M103.569,119.878v-3.069a2.316,2.316,0,0,0-2.314-2.314H96.278a2.316,2.316,0,0,0-2.314,2.314v3.069a2.316,2.316,0,0,0,2.314,2.314h4.978A2.316,2.316,0,0,0,103.569,119.878Zm-1.851,0a.463.463,0,0,1-.463.463H96.278a.463.463,0,0,1-.463-.463v-3.069a.463.463,0,0,1,.463-.463h4.978a.463.463,0,0,1,.463.463Z" transform="translate(-85.285 -77.642)" fill="#fdcc6f" stroke="#fdcc6f" stroke-width="1"></path><path id="Path_1241" data-name="Path 1241" d="M327.044,193.758a.926.926,0,0,0-.654-.654l-6.793-1.82a.925.925,0,0,0-1.133,1.133l1.82,6.793a.925.925,0,0,0,1.548.415l.524-.523,2.47,2.47a.925.925,0,0,0,1.309,0l2.617-2.617a.925.925,0,0,0,0-1.309l-2.47-2.47.523-.523A.925.925,0,0,0,327.044,193.758Zm-.257,4.541-1.309,1.309-2.47-2.47a.926.926,0,0,0-1.309,0l-.044.045-.991-3.7,3.7.991-.044.044a.925.925,0,0,0,0,1.309Z" transform="translate(-289.021 -147.309)" fill="#fdcc6f" stroke="#fdcc6f" stroke-width="1"></path><path id="Path_1242" data-name="Path 1242" d="M213.031,127.949h5.708a.925.925,0,1,0,0-1.851h-5.708a.925.925,0,1,0,0,1.851Z" transform="translate(-192.516 -88.174)" fill="#fdcc6f" stroke="#fdcc6f" stroke-width="1"></path><path id="Path_1243" data-name="Path 1243" d="M213.031,168.027h5.708a.925.925,0,0,0,0-1.851h-5.708a.925.925,0,0,0,0,1.851Z" transform="translate(-192.516 -124.55)" fill="#fdcc6f" stroke="#fdcc6f" stroke-width="1"></path><path id="Path_1244" data-name="Path 1244" d="M213.031,225.4h5.708a.925.925,0,1,0,0-1.851h-5.708a.925.925,0,1,0,0,1.851Z" transform="translate(-192.516 -176.629)" fill="#fdcc6f" stroke="#fdcc6f" stroke-width="1"></path><path id="Path_1245" data-name="Path 1245" d="M219.665,264.558a.925.925,0,0,0-.925-.925h-5.708a.925.925,0,1,0,0,1.851h5.708A.926.926,0,0,0,219.665,264.558Z" transform="translate(-192.516 -213.006)" fill="#fdcc6f" stroke="#fdcc6f" stroke-width="1"></path><path id="Path_1246" data-name="Path 1246" d="M104.3,216.786a3.848,3.848,0,1,0,3.848-3.848,3.852,3.852,0,0,0-3.848,3.848Zm5.845,0a2,2,0,1,1-2-2,2,2,0,0,1,2,2Z" transform="translate(-94.663 -166.993)" fill="#fdcc6f" stroke="#fdcc6f" stroke-width="1"></path></g></svg>
            
            <h1 className="text-3xl text-primary font-extrabold pb-4">
                Explore by platform
            </h1>
          </div>
          <p className="text-xl font-light text-primary">
          Choose the tool you feel most comfortable with and discover what communities are using it
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 relative" >
          {
            platforms.map((platform,index) => (
              <Link key={index}
              to={platform.siteLink}
               className={`px-4 py-4 rounded-lg flex items-center gap-3 text-white`}
               style={{ background: `${platform.color}`}}
               >
                    <img src={platform.image} className="md:w-16 w-12"/>
                    <div className="flex flex-col gap-1">
                      <h2 className="md:text-2xl text-xl font-bold">
                        {platform.name}
                      </h2>
                      <p className="md:text-base text-sm">{platform.groups} Groups</p>
                    </div>
              </Link>
            ))
          }
          <img src={circile} className="absolute -right-28 top-16 w-24" />
        </div>
    </div>
      
    </div>
  );
}

export default FavCommunities;
