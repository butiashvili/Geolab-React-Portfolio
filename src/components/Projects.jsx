import { projectsData } from '../data/portfolioData.js'
import ProjectCard from './ProjectCard.jsx'
import SectionTitle from './SectionTitle.jsx'

function Projects() {
  return (
    <section className="projects-section section-wrap" id="projects">
      <div className="page-container">
        <div className="projects-heading">
          <SectionTitle
            title="შერჩეული პროექტები"
            subtitle="რამდენიმე იდეა, რომელიც ფუნქციურ და დახვეწილ ციფრულ პროდუქტად ვაქციე."
          />
          <span className="project-count">01 — 03</span>
        </div>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
