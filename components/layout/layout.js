import Head from 'next/head'

export default function Layout({ children, ...pageProps }) {
  return (
    <>
      <Head>
        <title>Prospa</title>
      </Head>
      <main className="main">{children}</main>
    </>
  )
}
