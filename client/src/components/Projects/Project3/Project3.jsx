import LaunchIcon from '@mui/icons-material/Launch'
import GitHubIcon from '@mui/icons-material/GitHub'

function Project3() {
  return (
    <section>
      <div className='project-left'>
        <div className='left-img'>
          <img
            src='https://res.cloudinary.com/dfryxohde/image/upload/v1636575404/Portfolio/Screen_Shot_2021-11-09_at_11.22.48_PM_m6slmo.png'
            alt='PokeBinder'
          />
        </div>
        <div className='left-details'>
          <p className='left-title'>PokéBinder</p>
          <div className='left-description-container'>
            <div className='left-description'>
              <p>
                Front end full CRUD application utilizing Airtable that was
                created as an extension to PokéApps. PokéBinder allows the user
                to upload their favorite Pokémon cards to a virtual binder.
              </p>
            </div>
          </div>
          <div className='left-tech'>
            <p>React, CSS</p>
          </div>
        </div>
      </div>
      <div className='left-links'>
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

export default Project3
