import './Layout.css'
import Nav from '../components/Nav/Nav/Nav'
import MobileNav from '../components/Nav/MobileNav/MobileNav'
import Footer from '../components/Footer/Footer'

function Layout(props) {
  return (
    <div className='layout-container'>
      <Nav />
      <MobileNav />
      <div className='empty-div'></div>
      <div className='children'>
        {props.children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
