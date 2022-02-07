import Layout from '../components/layout/layout'
import Navigation from '../components/layout/navigation'
import DashboardContainer from '../components/dashboard/dashboard-container'

export default function Index( props ) {

  return (
    <>
      <Layout {...props}>
        <Navigation {...props.dashboard.navigation}/>
        <section className="dashboard">
          <DashboardContainer {...props.dashboard.dashboardContainer}/>
        </section>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: { 
      title: "Dashboard",
      dashboard: require("../locales/dashboard.json")
    },
  }
}
