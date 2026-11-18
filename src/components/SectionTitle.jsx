function SectionTitle({ title, subtitle }) {
  return (
    <div className="section-title">
      <p className="eyebrow">რას ვაკეთებ</p>
      <h2>{title}</h2>
      <p className="section-subtitle">{subtitle}</p>
    </div>
  )
}

export default SectionTitle
