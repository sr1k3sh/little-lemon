import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import Image from 'next/image'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import Link from 'next/link'

type Props = {}

const menuItems = [
  {
    name: 'Greek Salad',
    price: 12.99,
    description: 'The famous Greek salad of crispy lettuce, peppers, olives, and Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    imageSrc: 'https://images.unsplash.com/photo-1572357176061-7c96fd2af22f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3135&q=80',
  },
  {
    name: 'Lemon Dessert',
    price: 4.99,
    description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    imageSrc: 'https://images.unsplash.com/photo-1560180474-e8563fd75bab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
  },
  {
    name: 'Spicy Tofu fry',
    price: 11.99,
    description: 'Our signature spicy tofu stir-fry is a delightful blend of marinated tofu, fresh vegetables, and a spicy sauce that will leave your taste buds tingling.',
    imageSrc: 'https://images.unsplash.com/photo-1680991554256-da64cc827619?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3131&q=80',
  },
];

export default function Special({}: Props) {
  return (
    <section className='relative py-8 w-full'>
      <div className='container m-auto'>
        <div className='flex flex-row justify-between items-center'>
          <h2 className='font-bold text-2xl font-serif'>Special</h2>
          <Button variant={'outline'}>order now</Button>
        </div>
        <div>
          <div className='flex flex-wrap justify-between lg:flex-row gap-4 mt-4'>
            {
              menuItems.map((menu,index) => (
                <Card key={`menu-${index}`} className='w-full md:w-[calc(100%/3_-_1rem)]'>
                  <CardHeader>
                    <div className='relative aspect-square rounded-lg overflow-hidden'>
                      <Image className='object-cover' src={menu.imageSrc} fill alt="Little Lemon Chicago"></Image>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className='flex flex-row justify-between items-center'>
                      <h3 className='text-xl font-semibold'>{menu.name}</h3>
                      <Badge variant={'secondary'}>
                        <span>$ {menu.price}</span>
                      </Badge>
                    </div>
                    <p className='text-sm mt-2'>{menu.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant={'outline'}>Order now</Button>
                  </CardFooter>
                </Card>
              ))
            }
          </div>
        </div>
        <div className='text-center mt-4'>
          <Link href={'/menus'}>
            <span className='font-semibold font-sans text-base text-primary'>Checkout menus</span>
          </Link>
        </div>
      </div>
    </section>
  )
}