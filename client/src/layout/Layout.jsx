import './Layout.css'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'

function Layout(props) {
  return (
    <div>
      <Nav/>
      <div className='children'>
        {props.children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
