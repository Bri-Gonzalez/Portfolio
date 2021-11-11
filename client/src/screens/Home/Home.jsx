import './Home.css'
import { HashLink } from 'react-router-hash-link'

function Home() {
  return (
    <section id='home' className='home'>
      <h1>briana gonzalez.</h1>
      <div className='intro-container'>
        <div className='profile-img'>
          <img
            src='https://res.cloudinary.com/dfryxohde/image/upload/v1636594910/Portfolio/github_pic_iqgxua.jpg'
            alt='briana gonzalez'
          />
        </div>
        <div className='call-to-action'>
          <p>
            I’m a full stack developer that enjoys creating visually appealing
            and user-friendly applications.
          </p>
          <HashLink smooth to='#projects'>
            <button>check out my work!</button>
          </HashLink>
        </div>
      </div>
    </section>
  )
}

export default Home
