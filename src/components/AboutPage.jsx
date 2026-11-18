import Skills from './Skills.jsx'

function AboutPage() {
  return (
    <section className="section-wrap">
      <div className="page-container">
        <div className="page-heading">
          <p className="eyebrow">ჩემ შესახებ</p>
          <h1>იდეიდან კარგ გამოცდილებამდე.</h1>
          <p className="section-subtitle">
            ვარ ფრონტენდ დეველოპერი საქართველოდან. მიყვარს მარტივი, სწრაფი და
            ხელმისაწვდომი ინტერფეისების შექმნა, სადაც დიზაინი და ფუნქციონალი
            ერთმანეთს ბუნებრივად ერწყმის.
          </p>
        </div>
        <div className="about-layout">
          <article className="about-note">
            <p className="eyebrow">ჩემი პრინციპი</p>
            <h2>ჯერ ადამიანი, შემდეგ ინტერფეისი.</h2>
            <p>
              ყველა პროექტში ყურადღებას ვაქცევ დეტალებს, მობილურ მოწყობილობებზე
              მუშაობას და ისეთ კოდს, რომლის განვითარებაც მარტივია.
            </p>
          </article>
          <Skills />
        </div>
      </div>
    </section>
  )
}

export default AboutPage
