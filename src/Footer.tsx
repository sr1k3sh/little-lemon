import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <section className='bg-primary py-8'>
      <div className='container m-auto'>
        <div className='flex flex-col md:flex-row justify-center mb-4 gap-8'>
          <nav className='flex flex-col md:flex-row gap-4 lg:gap-8 text-primary-foreground justify-center'>
            <Link href='/'>Home</Link>
            <Link href='/book-table'>Book Table</Link>
            <Link href='/menu'>Menu</Link>
            <Link href='/about'>About</Link>
          </nav>
        </div>
        <div className='text-center'>
          <Link href='/'><span className='text-sm text-secondary'>copyright Little Lemon 2023</span></Link>
        </div>
      </div>
    </section>
  )
}