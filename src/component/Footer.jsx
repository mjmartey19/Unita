import React from 'react'
import { logo } from '../assets'
import { Link } from 'react-router-dom'
import { HiOutlineArrowSmRight } from "react-icons/hi";

const links = [
  {
    id: "/",
    title: "Home",
  },
  {
    id: "categories/all/",
    title: "Categories",
  },
  {
    id: "explore-communities",
    title: "Communities Explore",
  },

  {
    id: "blog",
    title: "Blog",
   
  },
  {
    id: "terms-conditions",
    title: "Terms & Conditions",

  },
  {
    id: "privacy-policy",
    title: "Privacy Policy",
  },
  {
    id: "sponsorship",
    title: "Sponsorship",
     
  },
  {
    id: "contact",
    title: "Contact",
     
  },
  
]

const categories = [	
  {
    id: "business",
    title: "Business",
  },  {
    id: "design",
    title: "Design",
     
  },
  {
    id: "marketing",
    title: "Marketing",
     
  },
  {
    id: "nocode",
    title: "No Code",
     
  },
  {
    id: "remote-work",
    title: "Remote Work",
     
  },
  {
    id: "developer",
    title: "Developer",
     
  },
  {
    id: "investing",
    title: "Investing",
     
  },
  {
    id: "entreprenuers-founders",
    title: "Entreprenuers",
     
  },
  {
    id: "climate-change",
    title: "Climate Change", 
     
  },
]

const platforms = [
  {
    id: "slack-groups",
    title: "Slack Groups", 
     
  },
  {
    id: "discord-servers",
    title: "Discord Servers", 
     
  },
  {
    id: "telegram",
    title: "Telegram Groups", 
     
  },
  {
    id: "Circle",
    title: "circle Groups", 
     
  },
  {
    id: "Reddit",
    title: "Reddit Groups", 
     
  },
  {
    id: "twitter",
    title: "Twitter communities", 
     
  },
]

const popular_searches = [
  {
    id: "fitness-discord",
    title: "Fitness Discord communities", 
     
  },
  {
    id: "crypto-discord",
    title: "Crypto Discord communities", 
     
  },
  {
    id: "women-in-tech-slack",
    title: "Slack Groups for Women in Tech", 
     
  },
  {
    id: "investing-discord-groups",
    title: "Investing Discord Groups", 
     
  },
  {
    id: "gaming-discord-communities",
    title: "Gaming Discord communities", 
     
  },
  {
    id: "ux-slack-channels",
    title: "UX Slack Channels", 
     
  },
  {
    id: "climate-change-slack-groups",
    title: "Climate Change Slack Groups", 
     
  },
  {
    id: "slack-groups-for-entreprenuers",
    title: "Entreprenuers Slack Groups", 
     
  },

]



function Footer() {

  return (
    <div className='grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 px-10 py-14 bg-bg-color gap-10'>
        <div>
          <img src={logo} width={80} />
          <p className='pt-6 text-[10px] text-gray-500'>
            Unita helps people discover relevant communities, masterminds and online groups based on their interests and needs. Compare them based on user reviews and ratings
          </p>
        </div>
        <div className='flex flex-col gap-4'>
          <h1 className='font-semibold'>Links</h1>
          <div className='flex flex-col gap-2'>
            {links.map(link => (
              <Link to={link.id} key={link.id}>
                  <p className='text-gray-800 text-[10px]'>{link.title}</p>
              </Link>
            ))}
            </div>
        </div>
        <div className='flex flex-col gap-4'>
          <h1 className='font-semibold'>Categories</h1>
          <div className='flex flex-col gap-2'>
            {categories.map(category => (
              <Link to={category.id} key={category.id}>
                  <p className='text-gray-800 text-[11px]'>{category.title} Communities</p>
              </Link>
            ))}
            </div>
        </div>
        <div className='flex flex-col gap-4'>
          <h1 className='font-semibold'>Categories</h1>
          <div className='flex flex-col gap-2'>
            {platforms.map(platform => (
              <Link to={platform.id} key={platform.id}>
                  <p className='text-gray-800 text-[11px]'>{platform.title}</p>
              </Link>
            ))}
            </div>
        </div>
        <div className='flex flex-col gap-4'>
          <h1 className='font-semibold'>Popular Searches</h1>
          <div className='flex flex-col gap-2'>
            {popular_searches.map(popular_search => (
              <Link to={popular_search.id} key={popular_search.id}>
                  <p className='text-gray-800 text-[11px]'>{popular_search.title}</p>
              </Link>
            ))}
            </div>
        </div>
        <div className=" lg:w-[120%]">
          <p className="pb-5 text-[11px]">
             Subscribe to our newsletter
          </p>
          <form className="flex gap-1 w-full">
            <input className="pl-2 py-1 rounded-lg border-[0.8px] border-gray-800 text-[#1d1d23] font-normal placeholder:text-gray-500 placeholder:text-[10px] text-xs w-[100%] outline-none" placeholder="Email" required/>
            <button type="submit" className="flex gap-2 items-center bg-secondary w-fit py-1 px-2 text-white rounded-md">
              <span className="text-[10px]">Subscribe</span>
              <HiOutlineArrowSmRight className="text-base"/>
            </button>
          </form>
        </div>
    </div>
  )
}

export default Footer
