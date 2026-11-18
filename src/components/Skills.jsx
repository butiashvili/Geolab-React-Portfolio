import { skillsData } from '../data/portfolioData.js'
import SectionTitle from './SectionTitle.jsx'
import SkillBadge from './SkillBadge.jsx'

function Skills() {
  return (
    <section className="skills-section section-wrap" id="skills">
      <div className="page-container">
        <SectionTitle
          title="ჩემი ხელსაწყოები"
          subtitle="ტექნოლოგიები და უნარები, რომლებსაც იდეების რეალობად ქცევისთვის ვიყენებ."
        />
        <div className="skills-grid">
          {skillsData.map((skill) => (
            <SkillBadge key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
