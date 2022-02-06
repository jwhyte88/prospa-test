import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import SignUp from '../components/sign-up'

export default function Index( props ) {

  return (
    <>
      <Layout {...props}>
        <Sidebar {...props.sidebar} />
        <section>
          <SignUp {...props.sidebar} />
        </section>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: { 
      sidebar: require("../locales/sidebar.json"),
      signup: require("../locales/sign-up.json")
    },
  }
}
