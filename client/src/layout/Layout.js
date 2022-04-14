import SideBar from './components/SideBar'
import TopBar from './components/TopBar'
import ScrollToTop from './components/ScrollToTop'
import LogOutModal from './components/LogOutModal'
import Footer from './components/Footer'

const Layout = ({ children }) => {
  return (
    <>
      <div id='page-top'>
        <div id='wrapper'>
          <SideBar />
          <div id='content-wrapper' className='d-flex flex-column'>
            <div id='content'>
              <TopBar />
              <div className='container-fluid'>{children}</div>
            </div>
          </div>
        </div>
      </div>
      {/* scroll to top bottom */}
      <ScrollToTop />
      {/* add log out model here */}
      <LogOutModal />
      <Footer />  
    </>
  )
}

export default Layout
