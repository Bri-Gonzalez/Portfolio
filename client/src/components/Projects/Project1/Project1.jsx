import './Project1.css'
import LaunchIcon from '@mui/icons-material/Launch'
import GitHubIcon from '@mui/icons-material/GitHub'

function Project1() {
  return (
    <section>
      <div className='project-left'>
        <p className='left-title-small-screen'>SERVER</p>
        <div className='left-img'>
          <img
            src='https://res.cloudinary.com/dfryxohde/image/upload/v1636576220/Portfolio/screen-shot-2021-11-09-at-11-2_ni8jtf.png'
            alt='Server'
          />
        </div>
        <div className='left-details'>
          <p className='left-title'>SERVER</p>
          <div className='left-description-container'>
            <div className='left-description'>
              <p>
                Full stack full CRUD application with user authentication and
                authorization. Server is a collection of forums where gamers can
                converse, share, and collaborate together.
              </p>
            </div>
          </div>
          <div className='left-tech'>
            <p>PostgreSQL, Ruby on Rails, React, bcrypt, JWT, CSS</p>
          </div>
        </div>
      </div>
      <div className='left-links'>
        <a
          href='https://find-your-server.netlify.app/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <LaunchIcon />
        </a>
        <a
          href='https://github.com/Bri-Gonzalez/SERVER'
          target='_blank'
          rel='noopener noreferrer'
        >
          <GitHubIcon />
        </a>
      </div>
    </section>
  )
}

export default Project1
