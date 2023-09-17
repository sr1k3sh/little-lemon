import { Facebook, Instagram, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <section className='bg-primary py-8'>
      <div className='container m-auto'>
        <div className='flex flex-col sm:flex-row items-start justify-between gap-8'>
          <div className='w-full items-center sm:items-start sm:w-1/4 h-24 relative m-auto justify-center'>
            <Image src="/Logonew.svg" className='max-w-[180px] object-contain object-center m-auto' alt="little lemon" fill></Image>
          </div>
          <div className='flex flex-col w-full items-center sm:items-start sm:w-1/4'>
            <h3 className='text-base text-primary-foreground text-bold mb-2'>Doormat Navigation</h3>
            <nav className='flex flex-col text-center sm:text-left'>
              <Link href='/'><span className='font-medium text-sm text-primary-foreground hover:font-bold'>Home</span></Link>
              <Link href='/book-table'><span className='font-medium text-sm text-primary-foreground hover:font-bold'>About</span></Link>
              <Link href='/menu'><span className='font-medium text-sm text-primary-foreground hover:font-bold'>Reservations</span></Link>
              <Link href='/about'><span className='font-medium text-sm text-primary-foreground hover:font-bold'>Order Online</span></Link>
              <Link href='/login'><span className='font-medium text-sm text-primary-foreground hover:font-bold'>Login</span></Link>
            </nav>
          </div>
          <div className='flex flex-col w-full items-center sm:items-start sm:w-1/4'>
            <h3 className='text-base text-primary-foreground text-bold mb-2'>Contact</h3>
            <ul className='text-center sm:text-left '>
              <li className='text-sm text-primary-foreground'>+1 234 567 890</li>
              <li className='text-sm text-primary-foreground'>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</li>
              <li className='text-sm text-primary-foreground'>test@test.com</li>
            </ul>
          </div>
          <div className='flex flex-col w-full items-center sm:items-start sm:w-1/4'>
            <h3 className='text-base text-primary-foreground text-bold mb-2'>Social Media Links</h3>
            <ul className='flex flex-row items-center sm:items-start gap-4'>
              <li className='text-sm text-primary-foreground'><Link href="/"><Facebook size={16}></Facebook></Link></li>
              <li className='text-sm text-primary-foreground'><Link href="/"><Instagram size={16}/></Link></li>
              <li className='text-sm text-primary-foreground'><Link href="/"><Twitter size={16}/></Link></li>
            </ul>
          </div>
        </div>
        <div className='text-center mt-8'>
          <Link href='/'><span className='text-sm text-secondary'>copyright Little Lemon 2023</span></Link>
        </div>
      </div>
    </section>
  )
}