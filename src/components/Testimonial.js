import React from 'react'
import Card from './Card'
import{FaQuoteRight, FaQuoteLeft} from 'react-icons/fa'
import{FiChevronLeft, FiChevronRight} from "react-icons/fi"


const Testimonial = (props) => {
  let reviews= props.reviews
  return (
    <div>
      
        <Card review={reviews[0]}></Card>

        <div className='flex text-3xl mt-5 gap-3 text-violet-400 font-bold justify-center '>
        <button className='cursor-pointer hover:text-violet-500'>
          <FiChevronLeft></FiChevronLeft>
        </button>
  
        <button className='cursor-pointer hover:text-violet-500'>
         <FiChevronRight></FiChevronRight>
        </button>
      </div>
  
      <div className=''>
        <button className='bg-violet-400 hover:bg-violet-600 transition-all duration-200  cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>
          Surprise me
        </button>
      </div>
      
    </div>
  )
}

export default Testimonial
