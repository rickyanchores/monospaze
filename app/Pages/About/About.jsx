import React from 'react'

const About = () => {
  return (
    <div className='About grid justify-center items-center h-screen' id='about'>
        <h1 className='text-4xl'>About</h1>
        <div className="text-section w-2/4 m-auto grid grid-cols-2 md:grid-cols-1">
            <h1 className='text-2xl mb-2'>Less is more.
                More is less.
            </h1>
            <p className='text-2xl'>Componay founded in Rome,Italy 2024-25.<br></br>
                Small group of friends who aims to provide minimalist style clothing while maintining the italian fashion identity!
            </p>
            <img className='imagebox mt-6' src="https://images.unsplash.com/photo-1693901257178-b5fcb8f036a8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
    </div>
  )
}

export default About;