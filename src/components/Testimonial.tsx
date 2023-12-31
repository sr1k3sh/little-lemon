import React from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai'
type Props = {}

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    review: "The food at Little Lemon is outstanding! I especially love their hummus and pita.",
    image: "https://images.unsplash.com/photo-1568585105565-e372998a195d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80",
  },
  {
    id: 2,
    name: "Alice Smith",
    rating: 4,
    review: "I had a great experience dining at Little Lemon. The ambiance was lovely, and the staff was friendly.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80",
  },
  {
    id: 3,
    name: "David Wilson",
    rating: 5,
    review: "The falafel platter at Little Lemon is the best I've ever had. It's always a treat to visit this restaurant.",
    image: "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80",
  },
  {
    id: 4,
    name: "Sarah Brown",
    rating: 4,
    review: "Little Lemon's desserts are to die for! I can't resist their lemon tart.",
    image: "https://plus.unsplash.com/premium_photo-1669951867704-a78fd21fbbd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3164&q=80",
  },
  // {
  //   id: 5,
  //   name: "Michael Johnson",
  //   rating: 5,
  //   review: "I recently celebrated my birthday at Little Lemon, and it was a fantastic experience. The staff even brought out a special dessert for me!",
  //   image: "https://example.com/image5.jpg",
  // },
]

export default function Testimonial({}: Props) {
  return (
    <section className='w-full bg-secondary-foreground py-16 md:py-32'>
      <div className='container m-auto'>
        <h2 className='text-center font-bold font-serif text-3xl mb-6'>Testimonial</h2>
        <div className='flex flex-col sm:flex-row sm:flex-wrap justify-between gap-2'>
          {
            testimonials.map((testimonial, index) => (
              <Card key={`testi-${index}`} className='w-full sm:w-[calc(100%/2__-__1rem)] md:w-[calc(100%/4__-__0.5rem)]'>
                <CardHeader className='p-4 pb-0 overflow-hidden'>
                  <span className='flex flex-row gap-1 mb-2'>
                    {
                      testimonial.rating && Array.from(Array(testimonial.rating)).map((_, index) => (
                        <AiFillStar key={`star-${index}`} className=' text-yellow-300'/>
                      ))
                    }
                  </span>
                  <div className='flex flex-row items-center'>
                    <div className='relative aspect-square w-1/3 overflow-hidden '>
                      <Image src={testimonial.image} className='object-cover rounded-xl' fill alt={testimonial.review}></Image>
                    </div>
                    <h3 className='text-base font-medium mb-1 text-primary-foreground w-2/3 ms-2'>{testimonial.name}</h3>
                  </div>
                </CardHeader>
                <CardContent className='pt-0 p-4'>
                  <p className='text-sm text-secondary'>{testimonial.review}</p>
                </CardContent>
              </Card>
            ))
          }
        </div>
      </div>
    </section>
  )
}