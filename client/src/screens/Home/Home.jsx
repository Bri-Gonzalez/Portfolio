import './Home.css'

function Home() {
  return (
    <div className='home-container'>
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
          <button>check out my work!</button>
        </div>
      </div>
    </div>
  )
}

export default Home
