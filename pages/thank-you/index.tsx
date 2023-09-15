import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useReservation } from '@/context/ReservationContext'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

export default function Thankyou({}: Props) {
  const { reservations } = useReservation()
  const router = useRouter()

  return <>
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