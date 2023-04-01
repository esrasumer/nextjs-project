import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>ESRA SUMER</title>
        <link rel="icon" href="/eslogo.jpg" />
      </Head>

      <Navbar />
    </div>
  )
}
