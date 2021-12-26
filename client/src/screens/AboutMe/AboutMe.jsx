import './AboutMe.css'
import Arrow from '@mui/icons-material/KeyboardArrowRightOutlined'

function AboutMe() {
  return (
    <section id='about' className='about'>
      <h2>about me.</h2>
      <div className='about-details'>
        <p>Hello! My name is Briana Gonzalez, and I’m a software engineer with a background in education and online streaming. In my previous roles, I have had the opportunity to work in teams with others as well as manage multiple communities. I’m passionate about learning and creating applications on the internet and am looking forward to bringing my optimistic approach to my next role. </p>
        <p>Here is a list of technologies I have worked with: </p>
      </div>
      <div className='about-tech-container'>
        <div className='inline-tech'>
          <p><Arrow style={{ fontSize: 18 }}/>&nbsp;HTML</p>
          <p><Arrow style={{ fontSize: 18 }}/>&nbsp;CSS</p>
          <p><Arrow style={{ fontSize: 18 }}/>&nbsp;JavaScript</p>
          <p><Arrow style={{ fontSize: 18 }}/>&nbsp;React</p>
          <p><Arrow style={{ fontSize: 18 }}/>&nbsp;Node.js</p>
        </div>
        <div className='inline-tech'>
          <p><Arrow style={{ fontSize: 18 }}/>&nbsp;Express</p>
          <p><Arrow style={{ fontSize: 18 }}/>&nbsp;Ruby</p>
          <p><Arrow style={{ fontSize: 18 }}/>&nbsp;Rails</p>
          <p><Arrow style={{ fontSize: 18 }} />&nbsp;PostgreSQL</p>
          <p><Arrow style={{ fontSize: 18 }} />&nbsp;MUI</p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
