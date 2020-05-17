import react from 'react'
import Head from "next/dist/next-server/lib/head";

export default function About() {
  return (
    <div>
      <Head>
        <title>Home | {process.env.SITE_NAME}</title>
      </Head>
      <main>
        <h1>Contact Us</h1>
        <span>Welcome to Contact Us...</span>
      </main>
    </div>

  )
}
