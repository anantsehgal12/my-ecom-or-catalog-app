import React from 'react'
import Navbar from '../_components/Navbar'
import Form from '../_components/Form'
import 'flowbite'

function page() {
  return (
    <main className='px-8 py-8'>
        <Navbar/>
        <Form/>
    </main>
  )
}

export default page