import Head from 'next/head'


export default function About() {
  return (
    <div>
      <Head>
        <title>Home | {process.env.SITE_NAME}</title>
      </Head>

      <main>
        <h1>About Us</h1>
        <span>Welcome to About Us...</span>
      </main>
    </div>
  )

}
