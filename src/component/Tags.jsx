import React from 'react'
import tags from '../data/tags'
import { Link } from 'react-router-dom'

function Tags() {
  return (
    <div className='py-10 lg:px-20 px-10'>
         <div className="flex gap-3 justify-center items-center">
          <h1 className="text-5xl text-tertiary font-extrabold">#</h1>
          <h1 className="text-3xl text-primary font-extrabold">
              Or check by tags
          </h1>
        </div>

        <div className='grid md:grid-cols-3 gap-5 pt-10'>
            {tags.map((tag, index) => (
               <Link key={index}
               to={tag.viewLink}
                className='p-3 shadow-card bg-tertiary flex gap-3 items-center rounded-lg'>
                  <div className='p-3 bg-white rounded-full text-secondary text-4xl'>
                   {tag.icon} 
                </div>
                <h4>{tag.name}</h4>
               </Link> 
            ))}
        </div>
    </div>
  )
}

export default Tags
