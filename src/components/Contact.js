import React  from 'react'
import Loader from "react-loaders";


const Contact = () => {
   
  return (
    <>
    <div className='container contact-page'>
       <div className='text-zone'>
           <h1>
                Contact me
            </h1>   
            <p>
                I am interested in great opportunities - especially
                ambitious and large projects. However, if you have
                other requests or questions, don't hestitate to contact
                me using the form below.
            </p>
            <div className='contact-form'>
                <form>
                    <ul>
                       <li className='half'>
                            <input 
                            type='text' 
                            name='name'
                            placeholder='Name'
                            required
                            />
                        </li> 
                        <li className='half'>
                            <input 
                            type='email' 
                            name='email'
                            placeholder='Email'
                            required
                            />
                        </li> 
                        <li>
                            <input 
                            type='text' 
                            name='subject'
                            placeholder='Subject'
                            required
                            />
                        </li> 
                        <li>
                            <textarea
                                name='message'
                                placeholder='Message'
                                required
                            ></textarea> 
                        </li> 
                        <li>
                            <input 
                            type="submit" 
                            className='submit-button'
                            value='SEND'  
                            />
                        </li>
                    </ul>
                </form>
                

            </div>
        </div> 
    </div>

    <Loader type="pacman" />
    </>
  )
}

export default Contact