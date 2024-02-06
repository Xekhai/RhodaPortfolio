import React from 'react'
import { Link } from 'react-router-dom'
import Loader from "react-loaders";

const Projects = () => {
  return (
    <>
    <div className='container projects-page'>
        <div className='text-zone'>
        <h1>Projects</h1>
        <div className=''>
            <p>
            This is a mini finance dashboard that comes up after a
            login page with different sections like products,customer
            and team and a logout tab.
            </p>
            <Link to='https://group10-capstone2.netlify.app/' className='button'>
                Finance Dashbard
            </Link>
        </div>
        <div className=''>
            <p>
            A food recipe app is a digital platform designed to help users 
            discover, plan, and prepare a wide variety of dishes and meals. 
            This app caters to individuals with diverse culinary interests and 
            skill levels.
            {/* Technologies used:
            ReactJS
            SASS
            Firebase */}
            </p>
            <Link to='https://github.com/rhodaaramide/food-recipe-app' className='button'>
                Food Recipe App
            </Link>
        </div>
        {/* <div className=''>
        <p>
        MSI-STORE is a web application designed to help manage a 
        gadget store to manage their sales and help users to explore, 
        pick and purchase different gadgets.
        Technologies used:
        ReactJS
        SASS
        Firebase
        </p>
            <Link to='https://msi-store-six.vercel.app' className='flat-button'>
                Gadget Store
            </Link>
        </div> */}
        <div className=''>
            <p>Designed a dark-themed landing page for Fylo that stores
        all your most important files in one secure location and you
        can access them wherever you need, share and collaborate
        with friends, family and coworkers. Concept from figma.
        </p>
            <Link to='https://olokoburnfire.github.io/fylo-dark-theme-landing-page/' className='button'>
                Fylo dark theme landing page
            </Link>
        </div>
        
        </div>
    </div>

    <Loader type="pacman" />
    </>

  )
}

export default Projects