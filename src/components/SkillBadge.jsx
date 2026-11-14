function SkillBadge({ name, level }) {
  return (
    <article className="skill-badge">
      <span className="skill-indicator" aria-hidden="true" />
      <div>
        <h3>{name}</h3>
        <p>{level}</p>
      </div>
    </article>
  )
}

export default SkillBadge
