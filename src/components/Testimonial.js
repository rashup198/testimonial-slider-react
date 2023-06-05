import React, { useState } from 'react'
import Card from './Card'
import{FaQuoteRight, FaQuoteLeft} from 'react-icons/fa'
import{FiChevronLeft, FiChevronRight} from "react-icons/fi"


const Testimonial = (props) => {
  let reviews= props.reviews
   const [index,setIndex]= useState(0);


  function leftshiftHandler(){
    if(index-1<0){
      setIndex(reviews.length -1);
    }
    else{
      setIndex(index-1);
    }
  }

  function rightshiftHandler(){
    if(index+1>=reviews.length){
      setIndex(0)
    }
    else{
      setIndex(index+1);
    }
  }

  function surpriseHanler(){
    let randomIndex= Math.floor(Math.random()*reviews.length);
    setIndex(randomIndex);
  }


  return (
    <div>
      
        <Card review={reviews[index]}></Card>

        <div className='flex text-3xl mt-5 gap-3 text-violet-400 font-bold justify-center '>
        <button onClick={leftshiftHandler} className='cursor-pointer hover:text-violet-500'>
          <FiChevronLeft></FiChevronLeft>
        </button>
  
        <button onClick={rightshiftHandler} className='cursor-pointer hover:text-violet-500'>
         <FiChevronRight></FiChevronRight>
        </button>
      </div>
  
      <div className=''>
        <button onClick={surpriseHanler} className='bg-violet-400 hover:bg-violet-600 transition-all duration-200  cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>
          Surprise me
        </button>
      </div>
      
    </div>
  )
}

export default Testimonial
