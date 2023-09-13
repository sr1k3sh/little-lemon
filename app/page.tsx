'use client'

import Footer from '@/Footer'
import About from '@/components/About'
import Banner from '@/components/Banner'
import Header from '@/components/Header'
import Special from '@/components/Special'
import Testimonial from '@/components/Testimonial'

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
