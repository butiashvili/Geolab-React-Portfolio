function ProjectCard({ title, description, tech, link }) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <span className="project-mark" aria-hidden="true">
          &lt;/&gt;
        </span>
        <a className="project-link" href={link} aria-label={`${title} — დეტალები`}>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
      <h3>{title}</h3>
      <p className="project-description">{description}</p>
      <ul className="tech-list" aria-label="გამოყენებული ტექნოლოგიები">
        {tech.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </article>
  )
}

export default ProjectCard
