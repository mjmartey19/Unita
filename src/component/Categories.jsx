import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import categories from '../data/categories';
import { Link } from 'react-router-dom';

const CategoryCard = ({category}) => (
    
  <Link
  to={category.viewLink}
   className='flex gap-5 shadow-card items-center rounded-xl py-8 px-6'>
    <div className='text-6xl text-secondary'>
      {category.icon}
    </div>
    <div className='text-left'>
        <h4 className='pb-2 text-lg'>{category.title}</h4>
        <p className='text-gray-500 text-sm'>{category.listing} listings</p>
    </div>
   
  </Link>
)

function Categories() {
  return (
    <div className='py-16'>
        <div className='text-center'>
            <div className='flex gap-3 justify-center items-center'>
                <AiOutlineSearch className='text-5xl text-tertiary '/>
                <h1 className='text-3xl text-primary font-extrabold pb-4' >Explore Categories</h1>
            </div>
            <p className='text-center text-xl font-light text-primary'>Explore through our more than 30+ categories</p>

            <div className='mt-20 mb-14 grid lg:grid-cols-3 md:grid-cols-2 gap-10 lg:px-32 px-10'>
                {categories.map(category => (
                  <CategoryCard key={category.title} category = {category}/>
                ))}
            </div>
            <Link to='category/all' className='rounded-md px-5 py-3 bg-secondary text-white hover:opacity-90 text-sm' >
                All Categories
            </Link>
        </div>
    </div>
  )
}

export default Categories
