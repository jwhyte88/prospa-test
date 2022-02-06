import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Prospa Test</title>
      </Head>
      <main className="main">{children}</main>
    </>
  )
}
