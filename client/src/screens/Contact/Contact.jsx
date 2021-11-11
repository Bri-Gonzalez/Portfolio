import './Contact.css'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

function Contact() {
  return (
    <section id='contact' className='contact'>
      <h2>get in touch.</h2>
      <div className='contact-details'>
        <div className='contact-links'>
          <a href='mailto:brianarachelgonzalez@gmail.com'>
            <EmailIcon style={{ fontSize: 40 }} />
          </a>
          <a
            href='https://www.linkedin.com/in/briana-gonzalez-000/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <LinkedInIcon style={{ fontSize: 40 }} />
          </a>
          <a
            href='https://github.com/Bri-Gonzalez'
            target='_blank'
            rel='noopener noreferrer'
          >
            <GitHubIcon style={{ fontSize: 40 }} />
          </a>
        </div>
        <div className='contact-text'>
          <p>Looking forward to speaking with you!</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
