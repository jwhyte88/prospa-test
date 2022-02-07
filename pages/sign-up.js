import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout/layout'
import Sidebar from '../components/layout/sidebar'
import SignUpForm from '../components/forms/sign-up-form'

export default function Index( props ) {

  return (
    <>
      <Layout {...props}>
        <Sidebar {...props.sidebar} page={"signUp"} />
        <section>

          <div className="sign-in__nav">
            <div className="signup__logo">
              <Image src="/logo/prospa--dark.svg" alt="Prospa Logo." width={109} height={24} />
            </div>

            <div className="sign-in-prompt">
              {props.signup.alreadyMember + ' '} 
              <Link href="/sign-in">
                <a>{props.signup.signIn}</a>
              </Link>
            </div>
          </div>

          <SignUpForm {...props.signup} />
        </section>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: { 
      title: "Sign Up",
      sidebar: require("../locales/sidebar.json"),
      signup: require("../locales/sign-up.json")
    },
  }
}
