import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'

type Props = {}

const menuItems = [
  {
    name: 'Greek Salad',
    price: 12.99,
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ',
    imageSrc: '/greeksalad.jpg',
  },
  {
    name: 'Lemon Dessert',
    price: 4.99,
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ',
    imageSrc: '/bruchetta.svg',
  },
  {
    name: 'Spicy Tofu fry',
    price: 11.99,
    description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    imageSrc: '/lemondessert.jpg',
  },
];

export default function Special({}: Props) {
  return (
    <section className='relative py-16 md:py-32 w-full'>
      <div className='container m-auto'>
        <div className='flex flex-col sm:flex-row justify-between items-start gap-2 sm:items-center'>
          <h2 className='font-bold text-3xl font-serif'>This Weeks specials!</h2>
          <Button>Order Menu</Button>
        </div>
        <div>
          <div className='flex flex-wrap justify-between lg:flex-row gap-4 mt-4'>
            {
              menuItems.map((menu,index) => (
                <Card key={`menu-${index}`} className='w-full md:w-[calc(100%/3_-_1rem)] rounded-b-none bg-secondary-foreground'>
                  <CardHeader className='relative overflow-hidden aspect-square'>
                    <Image className='object-cover rounded-t-lg' src={menu.imageSrc} fill alt="Little Lemon Chicago"></Image>
                  </CardHeader>
                  <CardContent className='p-4'>
                    <div className='flex flex-row justify-between items-center'>
                      <h3 className='text-lg font-semibold font-serif'>{menu.name}</h3>
                      <span className='text-accent'>$ {menu.price}</span>
                    </div>
                    <p className='text-sm mt-2'>{menu.description}</p>
                    <Link href={'/'}>
                      <span className='flex flex-row items-center text-sm mt-4 font-semibold hover:text-accent'>
                        Order a delivery
                        <div className='ms-2'>
                          <Image src="/scooter.svg" width={16} height={16} alt="order for delivery"></Image>
                        </div>
                      </span>
                    </Link>
                  </CardContent>
                </Card>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}