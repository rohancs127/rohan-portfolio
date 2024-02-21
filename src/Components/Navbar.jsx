import React from 'react'

const navbarComponentStyle = 'transtion-all duration-300 font-medium border-b-2 border-purple-950 hover:border-b-2 hover:border-neutral-300';

const Navbar = ()=> {
  return (
    <div className='flex justify-end items-center gap-20 bg-purple-950 py-4 w-full px-10 mt-0 h-min'>
      <ul className={navbarComponentStyle}>Home</ul>
      <ul className={navbarComponentStyle}>About Me</ul>
      <ul className={navbarComponentStyle}>My Projects</ul>
      <ul className={navbarComponentStyle}>Contact Me</ul>
    </div>
  )
}

export default Navbar