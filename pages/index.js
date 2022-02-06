import Layout from '../components/layout'
import Sidebar from '../components/sidebar'

export default function Index() {
  return (
    <section>
      <div>main</div>
    </section>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}
