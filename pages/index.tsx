'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Special from '@/components/Special'
import Testimonial from '@/components/Testimonial'
import Banner from '@/Banner/Banner'
import About from '@/About/About'

export default function Home() {
  return (
    <>
      <Header></Header>
      <main className="flex min-h-screen flex-col">
        <Banner></Banner>
        <Special></Special>
        <Testimonial></Testimonial>
        <About></About>
      </main>
      <Footer></Footer>
    </>
  )
}
