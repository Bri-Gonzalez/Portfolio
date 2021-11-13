import './Project4.css'
import LaunchIcon from '@mui/icons-material/Launch'
import GitHubIcon from '@mui/icons-material/GitHub'

function Project4() {
  return (
    <section>
      <div className='project-right'>
      <p className='right-title-small-screen'>PokéApps</p>
        <div className='right-details'>
          <p className='right-title'>PokéApps</p>
          <div className='right-description-container'>
            <div className='right-description'>
              <p>
                Front end application
                composed of multiple Pokémon related apps using PokeAPI. I Choose You allows
                users to get a starter Pokémon and PokéSearch allows users to
                search and view all existing Pokémon and their
                data.
              </p>
            </div>
          </div>
          <div className='right-tech'>
            <p>JavaScript, HTML, CSS</p>
          </div>
        </div>
        <div className='right-img'>
          <img
            src='https://res.cloudinary.com/dfryxohde/image/upload/v1636826134/Portfolio/screen-shot-2021-11-13-at-11-5_b4uliy.png'
            alt='PokeApps'
          />
        </div>
      </div>
      <div className='right-links-pokeapps'>
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

export default Project4
