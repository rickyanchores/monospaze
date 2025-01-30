import React from 'react'

const Banner = ({image}) => {


  return (
    <div className='Banner w-screen'>
        <img className='transform transition-transform hover:scale-105 w-screen' src={image} alt="image" />
    </div>
  )
}

export default Banner;