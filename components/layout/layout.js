import Head from 'next/head'

export default function Layout({ children, ...pageProps }) {
  return (
    <>
      <Head>
        <title>Prospa | {pageProps.title ? pageProps.title : "Business banking"}</title>
      </Head>
      <main className="main">{children}</main>
    </>
  )
}
