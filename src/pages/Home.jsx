import React from 'react'
import Navbar from './../component/Navbar'
import Hero from '../component/Hero'
import Categories from '../component/Categories'
import FavCommunities from '../component/FavCommunities'
import Tags from '../component/Tags'
import CommunityBenefit from '../component/CommunityBenefit'
import Blog from '../component/Blog'
import Footer from '../component/Footer'

function Home() {
  return (
    <>
       <Navbar/>
       <Hero />
       <Categories />
       <FavCommunities />
       <Tags />
       <CommunityBenefit />
       <Blog />
       <Footer />
    </>
  )
}

export default Home
