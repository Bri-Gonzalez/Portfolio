import './Nav.css'
import {NavHashLink} from 'react-router-hash-link'

function Nav() {
  return (
    <div className='nav'>
      <div className='nav-links'>
        <NavHashLink className='nav-link' smooth to='#about'>about.</NavHashLink>
        <NavHashLink className='nav-link' smooth to='#projects'>projects.</NavHashLink>
        <NavHashLink className='nav-link' smooth to='#contact'>contact.</NavHashLink>
        <a href='https://drive.google.com/file/d/1CVuQphp_JaTJ-XiWMOBe_Hmr_nCUIsDB/view?usp=sharing' target='_blank' rel='noopener noreferrer'>
          resume.
        </a>
      </div>
    </div>
  )
}

export default Nav
