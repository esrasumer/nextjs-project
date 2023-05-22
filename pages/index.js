import Head from 'next/head';
import Navbar from '../components/Navbar';
import '../styles/globals.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ESRA SUMER</title>
        <link rel="icon" href="/eslogo.jpg" />
      </Head>
      <div className="text-5xl font-bold underline">
        Hello world!
      </div>
      <Navbar />
    </div>
  )
}
