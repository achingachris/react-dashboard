import Layout from './layout/Layout'
import PageHeading from './components/global/PageHeading'
import SummaryCards from './components/global/SummaryCards'

import Charts from './components/home/Charts'
import Content from './components/home/Content'

const App = () => {
  return (
    <Layout>
      <PageHeading title='Dashboard' />
      <SummaryCards />
      <Charts />
      <Content />
    </Layout>
  )
}

export default App
