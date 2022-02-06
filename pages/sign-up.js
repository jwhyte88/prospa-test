import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import SignUpForm from '../components/forms/sign-up-form'

export default function Index( props ) {

  return (
    <>
      <Layout {...props}>
        <Sidebar {...props.sidebar} />
        <section>
          <SignUpForm {...props.signup} />
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
