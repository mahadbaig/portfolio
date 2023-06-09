import Head from 'next/head'
import {
  Hero,
  Skills,
  Projects,
  About
} from '../components/index'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <main className='px-9'>
      <Hero />
      <Skills />
      <Projects />
      <About />
     </main>
    </>
  )
}
