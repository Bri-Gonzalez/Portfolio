import Project1 from '../../components/Projects/Project1/Project1'
import Project2 from '../../components/Projects/Project2/Project2'
import Project3 from '../../components/Projects/Project3/Project3'
import Project4 from '../../components/Projects/Project4/Project4'
import './Projects.css'

function Projects() {
  return (
    <section id='projects' className='projects'>
      <h2>projects.</h2>
      <Project1 />
      <Project2 />
      <Project3 />
      <Project4 />
    </section>
  )
}

export default Projects
