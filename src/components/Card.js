import React from 'react'
import{FaQuoteRight, FaQuoteLeft} from 'react-icons/fa'




const Card = (props) => {
    let review =props.review;
  return (
    <div>
      <div>
        <img src={review.image}></img>
      </div>
      <div>
        <p>{review.name}</p>
      </div>
      <div>
        <p>
            {review.job}
        </p>
      </div>

      <div>
        <FaQuoteLeft></FaQuoteLeft>

      </div>
    <div>
      {review.text}
    </div>

    <div>
      <FaQuoteRight></FaQuoteRight>
    </div>


    <div>
      <button>
        +
      </button>

      <button>
        *
      </button>
    </div>

    <div>
      <button>
        surprise me
      </button>
    </div>

    </div>
  )
}

export default Card
