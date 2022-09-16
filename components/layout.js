import Head from 'next/head'
import { Container } from '@chakra-ui/react'
import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
