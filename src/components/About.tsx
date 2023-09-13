import Image from 'next/image'
import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <section className='w-full py-8'>
      <div className='container mx-auto'>
        <div className='flex flex-row items-center gap-8'>
          <div className='flex flex-col w-1/2'>
            <h2 className='text-6xl text-yellow font-bold font-serif mb-1'>Little lemon</h2>
            <h3 className='text-2xl mb-4'>Chicago</h3>
            <p className='text-lg max-w-lg mb-4'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          </div>
          <div className='relative w-1/2 aspect-[9/16] md:max-h-[calc(100vh_-_8rem)] '>
            <div className='absolute w-full h-full rounded-xl overflow-hidden'>
              <Image fill className='object-cover' src='https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2958&q=80' alt='focused on traditional recipes served with a modern twis'></Image>
            </div>
            {/* <div className='absolute -left-0 -top-0 w-2/3 h-2/3 rounded-xl overflow-hidden'>
              <Image fill src='https://images.unsplash.com/photo-1680405531955-8b4981bb1b0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80' alt='focused on traditional recipes served with a modern twis'></Image>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}