'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Special from '@/components/Special'
import Testimonial from '@/components/Testimonial'
import Banner from '@/Banner/Banner'
import About from '@/About/About'
import Head from 'next/head'

export default function Home() {
  return (
    <>
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
