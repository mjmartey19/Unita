import React, { useState } from 'react'
import categories from './../data/categories'
import { Link } from 'react-router-dom'

function Featured({rounded}) {
  return (
    <div className={`bg-white text-left ${rounded} shadow-card`}>
        <p className='px-2 text-xs py-2 border-b-[1px] text-gray-800'>Featured</p>
   
        {categories.map((category,index) =>(
           index < 4 && (
            <Link className='px-4 py-3 flex gap-4 hover:bg-gray-800/10 overflow-hidden'>
               <p className='text-gray-800 text-sm'> { category.icon}</p>
               <p className='text-[10px]'>{category.title}</p>
           </Link>
           )
        ))}
    </div>
  )
}

export default Featured
