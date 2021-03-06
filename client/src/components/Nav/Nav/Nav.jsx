import './Nav.css'
import { NavHashLink } from 'react-router-hash-link'

function Nav() {
  return (
    <div className='nav'>
      <div className='nav-links'>
        <NavHashLink className='nav-link' smooth to='#about'>
          about.
        </NavHashLink>
        <NavHashLink className='nav-link' smooth to='#projects'>
          projects.
        </NavHashLink>
        <NavHashLink className='nav-link' smooth to='#contact'>
          contact.
        </NavHashLink>
        <div className='resume'>
          <a
            href='https://drive.google.com/file/d/1jbXPPnICNPiQEYrzkNq5dFCjOa6xap5M/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
          >
            resume.
          </a>
        </div>
      </div>
    </div>
  )
}

export default Nav
