import Head from 'next/head'
import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{`${title} - Mango Yu`}</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
