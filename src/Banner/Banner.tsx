'use client'

import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/router'
import { Button } from '@/components/ui/button'

type Props = {}

export default function Banner({}: Props) {
  const router = useRouter()

  const onPressReserveTable = () => {
    router && router.push('/book-table')
  }

  return (
    <section className='w-full bg-secondary py-8 lg:pb-0 relative before:d-none  lg:before:content-[""] lg:before:absolute lg:before:w-full lg:before:h-20 lg:before:bg-white lg:before:bottom-0 lg:before:left-0'>
      <div className='container mx-auto'>
        <div className='flex md:flex-row items-start gap-8'>
          <div className='flex flex-col md:w-1/2 justify-start items-start'>
            <h2 className='text-4xl md:text-6xl text-primary font-medium font-serif mb-1'>Little lemon</h2>
            <h3 className='text-xl md:text-2xl mb-2 text-secondary-foreground'>Chicago</h3>
            <p className='text-sm md:text-base max-w-xs mb-4 text-secondary-foreground'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <Button variant={'default'} onClick={onPressReserveTable}>Reserve Table</Button>
          </div>
          <div className='aspect aspect-square max-h-96 md:w-1/2 relative rounded-2xl overflow-hidden'>
           <Image className='aspect-square object-cover' src="/restauranfood.jpg" fill alt="Little Lemon Chicago"></Image>
          </div>
        </div>
      </div>
    </section>
  )
}