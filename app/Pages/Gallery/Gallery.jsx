import React from 'react'

const Gallery = () => {
  return (
    <div className='Gallery grid justify-center items-center h-screen' id='gallery'>
      <h1>Gallery</h1>
      <div className="gallery-container bg-gray-600 grid grid-cols-3 gap-4 p-5">
        <div className="box bg-teal-600">A</div>
        <div className="box">B</div>
        <div className="box">C</div>
        <div className="box">C</div>
        <div className="box">C</div>
      </div>
    </div>
  )
}

export default Gallery;