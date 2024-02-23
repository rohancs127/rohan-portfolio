import React from 'react'

function Home() {
  return (
    <div className='flex w-full mt-20 p-20 justify-center gap-52'>
        <div>
           <img src='images/Rohan.jpg' width={300} className='rounded-full'/> 
        </div>
        <div className='flex-2 pt-10'>
            <h1>Hi</h1>
            <h2>I am Rohan</h2>
            <h3>I'm a Computer Science Engineer..</h3>
        </div>
    </div>
  )
}

export default Home