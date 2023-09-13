import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

type Props = {}

export default function Banner({}: Props) {
  const router = useRouter()

  const onPressReserveTable = () => {
    router.push('/book-table')
  }

  return (
    <section className='w-full bg-secondary py-8'>
      <div className='container mx-auto'>
        <div className='flex md:flex-row items-center gap-8'>
          <div className='flex flex-col md:w-1/2 justify-start items-start'>
            <h2 className='text-6xl text-yellow font-bold font-serif mb-1'>Little lemon</h2>
            <h3 className='text-2xl mb-4'>Chicago</h3>
            <p className='text-lg max-w-lg mb-4'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <Button variant={'default'} onClick={onPressReserveTable}>Reserve Table</Button>
          </div>
          <div className='aspect aspect-square md:w-1/2 relative rounded-2xl overflow-hidden'>
           <Image className='aspect-square object-cover' src="https://images.unsplash.com/photo-1532980400857-e8d9d275d858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80" fill alt="Little Lemon Chicago"></Image>
          </div>
        </div>
      </div>
    </section>
  )
}