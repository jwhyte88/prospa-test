import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout/layout'
import Sidebar from '../components/layout/sidebar'
import SignInForm from '../components/forms/sign-in-form'

export default function Index( props ) {

  return (
    <>
      <Layout {...props}>
        <Sidebar {...props.sidebar} page={"signIn"}/>
        <section>

          <div className="sign-in__nav">
            <div className="signup__logo">
              <Image src="/logo/prospa--dark.svg" alt="Prospa Logo." width={109} height={24} />
            </div>

            <div className="sign-in-prompt">
              {props.signin.alreadyMember + ' '} 
              <Link href="/sign-up">
                <a>{props.signin.signIn}</a>
              </Link>
            </div>
          </div>

          <SignInForm {...props.signin} />
        </section>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: { 
      title: "Sign In",
      sidebar: require("../locales/sidebar.json"),
      signin: require("../locales/sign-in.json")
    },
  }
}
