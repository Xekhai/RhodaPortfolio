import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact, faSass } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Loader from "react-loaders";

const About = () => {
  return (
    <>
    <div className='container about-page'>
        <div className='text-zone'>
            <h1>About me</h1>
            <p>
            I’m Abolarin Olabisi Rhoda. </p>
            <p>
            A software engineer developer living in Nigeria. 
            I build solutions to business problems by creating delightful frontend experiences 
            and high-performance applications that meet the needs of end-users.
            </p>
            {/* <p>
            My personal values are growth, honesty & transparency, and kindness & empathy.

            In terms of technical skills, I am proficient in a range of programming languages, 
            JavaScript and Typescript, including HTML(markup language) and Tailwind CSS (CSS framework).

            I have experience working with popular frameworks such as React, 
            and I am comfortable working with a variety of tools such as Git, and Docker.
            </p>
            <p>
            I approach every project with an open mind and a willingness to learn from others,
            and I strive to build strong, positive relationships with my colleagues and clients.
           
            </p>
            <p>
                I'm a very ambitious front-end developer
                looking for a role in an IT company with the
                opportunity to work with the latest technologies
                on challenging and diverse projects.
            </p> */}
            <p>
                I'm quite confident, naturally curious, and
                perpetually working on improving my skills one
                design problem at a time.
            </p>
            <p>
                If I need to define myself in one sentence that 
                would be an enthusiastic and goal driven person who 
                also loves football, music and good food.
                In my free time, I enjoy exploring new places, trying new foods, and staying
                active through exercise and playing games.
                <p>
                Thank you for taking the time to learn more about me. 
                I am excited to connect with you and explore how we can work together to create meaningful solutions to business problems.
                </p>
            </p>
        </div>

        <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                    <FontAwesomeIcon icon={faReact} color='#5ED4F4' />                    
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon={faHtml5} color='#F06529' />                    
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faCss3} color='#28A4D9' />                    
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faJsSquare} color='#EFs81D' />                    
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faGitAlt} color='#EC4' />                    
                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon={faSass} color='#28A4D9' />                    
                </div>

            </div>
        </div>
    </div>

    <Loader type="pacman" />
    </>
  )
}

export default About