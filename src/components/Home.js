import React from 'react'
import { Link } from 'react-router-dom'
import Loader from "react-loaders";
// import profile from '../assets/images/profile.jpeg'

const Home = () => {
  return (
    <>
    <div className='container home-page'>
       <div className='text-zone'>
            {/* <img className='profile-img' src={profile} alt='profile'></img> */}
            <h1>Hi, <br /> I'm
            RhodaAramide,
            <br />
            a web developer.
            </h1>
            <h2> Frontend developer / Javascript / React  </h2>
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        </div> 
    </div>
    
    <Loader type="pacman" />
    </>
  )
}

export default Home