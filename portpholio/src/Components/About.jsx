import React from 'react'

export default function About () {
  return (
    <div>
      <div className='About'>
        <div className='photo'>
          <img src=' about-removebg-preview.png' />
        </div>
        <div className='text'>
          <h1>About Me</h1>
          <p>
            That's great! As a MERN stack developer, you're skilled in working
            with MongoDB, <br />
            Express.js, React, and Node.js to build full-stack applications. Let
            me know if you’d <br />
            like help with backend optimizations, React components, API
            integration, or anything <br />
            else in the MERN stack!{' '}
          </p>
          <p className='details'>
            <span>Name:</span>           <span id='pd'>Kaushik Pipaliya</span> <br />
            <span> Date of birth:</span> <span id='db'> 09-09-2004</span> <br />
            <span> Address:</span>    <span id='ad'> Rajkot</span>   <br />
              <span>Email:</span>     <span id='em'>pipaliyakaushik@gmail.com</span>    <br />
            <span>Phone:</span>        <span id='ph'>93138 50547</span>  
          </p>
        </div>
      </div>
    </div>
  )
}
