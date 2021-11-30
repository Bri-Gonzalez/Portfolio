import './Project4.css'
import LaunchIcon from '@mui/icons-material/Launch'
import GitHubIcon from '@mui/icons-material/GitHub'

function Project4() {
  return (
    <section>
      <div className='project-right'>
        <p className='right-title-small-screen'>PokéBinder</p>
        <div className='right-details'>
          <p className='right-title'>PokéBinder</p>
          <div className='right-description-container'>
            <div className='right-description'>
              <p>
                Front end full CRUD application utilizing Airtable that was
                created as an extension to PokéApps. PokéBinder allows the user
                to upload their favorite Pokémon cards to a virtual binder.
              </p>
            </div>
          </div>
          <div className='right-tech'>
            <p>React, CSS</p>
          </div>
        </div>
        <div className='right-img'>
          <a
            href='https://pokebinder.netlify.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src='https://res.cloudinary.com/dfryxohde/image/upload/v1636575404/Portfolio/Screen_Shot_2021-11-09_at_11.22.48_PM_m6slmo.png'
              alt='PokeBinder'
            />
          </a>
        </div>
      </div>
      <div className='right-links-pokebinder'>
        <a
          href='https://pokebinder.netlify.app/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <LaunchIcon />
        </a>
        <a
          href='https://github.com/Bri-Gonzalez/PokeBinder'
          target='_blank'
          rel='noopener noreferrer'
        >
          <GitHubIcon />
        </a>
      </div>
    </section>
  )
}

export default Project4
