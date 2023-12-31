import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useReservation } from '@/context/ReservationContext'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

export default function Thankyou({}: Props) {
  const { reservations } = useReservation()
  const router = useRouter()

  return <>
    <Head>
        <title>Little Lemon - Chicago</title>
        <meta name="description" content="We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist." />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@your_twitter_handle" />
        <meta name="twitter:title" content="Little Lemon - Chicago" />
        <meta name="twitter:description" content="We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist." />
        <meta name="twitter:image" content="/twitter-card-image.jpg" /> {/* Image for Twitter Card */}

        {/* Open Graph (Facebook) */}
        <meta property="og:title" content="Little Lemon - Chicago" />
        <meta property="og:description" content="We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist." />
        <meta property="og:image" content="/open-graph-image.jpg" /> {/* Image for Open Graph */}
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:type" content="website" />
      </Head>
    <Header></Header>
    <main className="flex min-h-screen flex-col justify-center">
      <section>
        <div className='container m-auto'>
          <div className='text-center flex justify-center flex-col items-center'>
            <h1 className='uppercase text-3xl font-bold'>Thank You!</h1>
            <div className='relative aspect-square w-16 h-16'>
              <Image src='/thankyou.svg' alt="thank you" width={300} height={300} />
            </div>
            <p className='mb-8'>Thank you, Reservation is completed. Please check you email or find in the list below</p>
          </div>
          <div className='mt-8'>
            <p className='font-bold mb-4'>Your Reservations:</p>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Table Preference</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              {
                reservations.map((reservation, index) => (
                  <TableBody key={index}>
                    <TableRow>
                      <TableCell className="font-medium">{reservation.name}</TableCell>
                      <TableCell>{reservation.email}</TableCell>
                      <TableCell>{reservation.phone}</TableCell>
                      <TableCell>{reservation.table}</TableCell>
                      <TableCell>{reservation.date}</TableCell>
                    </TableRow>
                  </TableBody>
                ))
              }
            </Table>
            <div className='text-center mt-4'>
              <Button variant={'secondary'} onClick={() => { router.push('/') }}>Back to home</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer></Footer>
  </>
}