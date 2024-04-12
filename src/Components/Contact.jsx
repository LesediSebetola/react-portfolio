import React from 'react'
import { CONTACT } from '../Constants'

const Contact = () => {
  return (
    <div className='border-b border-neutral-900'>
        <h1 className='my-10 text-center text-4xl'>Get In Touch</h1>
        <div className='text-center tracling-tighter'>
          <p className='my-4'>{CONTACT.address}</p>
          <p className='my-4'>{CONTACT.phoneNo}</p>
          <a href="#" className='border-b border-'>{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Contact
