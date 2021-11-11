import './Project2.css'
import LaunchIcon from '@mui/icons-material/Launch'
import GitHubIcon from '@mui/icons-material/GitHub'

function Project2() {
  return (
    <section>
      <div className='project-right'>
        <div className='right-details'>
          <p className='right-title'>Sound</p>
          <div className='right-description-container'>
            <div className='right-description'>
              <p>
                Full stack full CRUD application with user authentication and
                authorization. Sound is an online marketplace for users to sell
                and purchase audio products.
              </p>
            </div>
          </div>
          <div className='right-tech'>
            <p>React, Express, Node.js, MongoDB, bcrypt, JWT, CSS</p>
          </div>
        </div>
        <div className='right-img'>
          <img
            src='https://res.cloudinary.com/dfryxohde/image/upload/v1636575500/Portfolio/Screen_Shot_2021-11-09_at_11.20.07_PM_oo1wvj.png'
            alt='Sound'
          />
        </div>
      </div>
      <div className='right-links'>
        <a
          href='https://sound-2021.netlify.app/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <LaunchIcon />
        </a>
        <a
          href='https://github.com/Bri-Gonzalez/Sound'
          target='_blank'
          rel='noopener noreferrer'
        >
          <GitHubIcon />
        </a>
      </div>
    </section>
  )
}

export default Project2
