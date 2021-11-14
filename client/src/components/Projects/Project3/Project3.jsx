import LaunchIcon from '@mui/icons-material/Launch'
import GitHubIcon from '@mui/icons-material/GitHub'

function Project3() {
  return (
    <section>
      <div className='project-left'>
        <p className='left-title-small-screen'>PokéApps</p>
        <div className='left-img'>
          <img
            src='https://res.cloudinary.com/dfryxohde/image/upload/v1636826134/Portfolio/screen-shot-2021-11-13-at-11-5_b4uliy.png'
            alt='PokeApps'
          />
        </div>
        <div className='left-details'>
          <p className='left-title'>PokéApps</p>
          <div className='left-description-container'>
            <div className='left-description'>
              <p>
                Front end application composed of multiple Pokémon related apps
                using PokeAPI. I Choose You allows users to get a starter
                Pokémon and PokéSearch allows users to search and view all
                existing Pokémon and their data.
              </p>
            </div>
          </div>
          <div className='left-tech'>
            <p>JavaScript, HTML, CSS</p>
          </div>
        </div>
      </div>
      <div className='left-links'>
        <a
          href='https://bri-gonzalez.github.io/PokeApps/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <LaunchIcon />
        </a>
        <a
          href='https://github.com/Bri-Gonzalez/PokeApps'
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
