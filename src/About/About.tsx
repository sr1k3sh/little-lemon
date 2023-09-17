import Image from 'next/image'
import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <section className='w-full py-16 md:py-32'>
      <div className='container-full px-8 md:container mx-auto'>
        <div className='flex flex-col md:flex-row items-center gap-8'>
          <div className='flex flex-col w-full md:w-1/2 md:pr-8'>
            <h2 className='text-4xl md:text-6xl text-yellow font-bold font-serif mb-1 text-primary'>Little lemon</h2>
            <h3 className='text-lg md:text-2xl mb-4'>Chicago</h3>
            <p className='text-sm md:text-lg max-w-lg mb-4'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
          </div>
          <div className='relative w-full aspect-square md:w-1/2 md:aspect-[9/16] md:max-h-[calc(100vh_-_8rem)] '>
            <div className='absolute w-2/3 h-2/3 right-0 rounded-xl overflow-hidden'>
              <Image fill className='object-cover' src='/restaurant.jpg' alt='focused on traditional recipes served with a modern twis'></Image>
            </div>
            <div className='absolute w-2/3 h-2/3 bottom-0 rounded-xl overflow-hidden'>
              <Image fill className='object-cover' src='/chef1.jpg' alt='focused on traditional recipes served with a modern twis'></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}