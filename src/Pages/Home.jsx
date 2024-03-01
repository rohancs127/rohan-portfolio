import React from 'react';
import Skill from '../Components/Skill';

function Home() {
  return (
    <div>
        <div className='flex w-full mt-32 mr-24 p-20 justify-center gap-60'>
        <div>
           <img src='images/Rohan.jpg' width={300} className='rounded-full'/> 
        </div>
        <div className='flex-col pt-10'>
            <h1 className='mb-5 font-bold text-yellow-200 text-7xl'>Hi</h1>
            <h2 className='mb-5 font-bold text-5xl'>I am Rohan</h2>
            <h3 className='text-4xl font-mono'>I'm a Computer Science Engineer..</h3>
        </div>
      </div>
      <div className='flex flex-wrap justify-center'>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
      </div>
    </div>
  )
}

export default Home