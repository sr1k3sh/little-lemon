import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { FiShoppingCart } from 'react-icons/fi'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="space-x-4">
          <Link href="/">
            <span className="text-sm">Home</span>
          </Link>
          <Link href="/about">
            <span className="text-sm">About</span>
          </Link>
          <Link href="/menu">
            <span className="text-sm">Menu</span>
          </Link>
          <Link href="/bookings">
            <span className="text-sm">Bookings</span>
          </Link>
          <Link href="/order">
            <span className="text-sm">Order</span>
          </Link>
        </div>
        <div className="space-x-4 flex flex-row items-center gap-4">
          <Link href='/cart'>
            <FiShoppingCart/>
          </Link>
          <Link href="/profile">
            <Avatar className=' bg-white overflow-hidden'>
              <AvatarImage src='/vercel.svg' alt='profile'></AvatarImage>
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </nav>
    </header>
  )
}