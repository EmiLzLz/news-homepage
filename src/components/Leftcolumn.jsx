import React from 'react'
import '../public/components.css'
import image from '../assets/images/main-img.jpg'

function Leftcolumn() {
  return (
    <div className='left-container col-md-6 col-sm-12 px-2 py-5'>
      <div className="image w-100">
        <img src={image} alt="main" />
      </div>
      <div className="info col-12 w-100 d-flex justify-content-between">
        <div className="title w-50">
          <h1>MAIN TITLE OF THE NEWS HOME PAGE</h1>
        </div>
        <div className="text p-2 w-50">
          <p className='fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium incidunt assumenda optio, sint ipsum laborum voluptatem veritatis itaque exercitationem totam, laboriosam.</p>
          <button className='button'>READ MORE</button>
        </div>
      </div>
    </div>
  )
}

export default Leftcolumn
