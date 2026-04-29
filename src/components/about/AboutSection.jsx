import "@/pages/About.css"
import consultingImage from "@/assets/about/about-consulting.png"

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image-column">
          <div className="about-main-frame"></div>
          <img className="about-main-image" src={consultingImage} alt="Consulting team meeting" />
          <div className="about-circle-image-wrap">
            <img className="about-circle-image" src={consultingImage} alt="Team planning discussion" />
          </div>
        </div>

        <div className="about-content-column">
          <span className="about-tag">About Our Consulting</span>
          <h2 className="about-title">Smart Consulting for Ambitious Companies</h2>
          <p className="about-description">
            We are a results-driven business consulting firm dedicated to helping
            organizations improve performance, optimize operations, and achieve
            sustainable growth.
          </p>

          <div className="about-feature-cards">
            <article className="about-feature-card">
              <span className="about-feature-icon">✦</span>
              <div>
                <h3>Award Winning Team</h3>
              </div>
            </article>
            <article className="about-feature-card">
              <span className="about-feature-icon">◎</span>
              <div>
                <h3>Highest Success Rates</h3>
              </div>
            </article>
          </div>

          <div className="about-signature-row">
            <div className="about-signature-mark">Signature</div>
            <span className="about-signature-role">CEO Co-Founder</span>
          </div>

          <ul className="about-check-list">
            <li>Clear insights, actionable plans</li>
            <li>Industry-experienced consultants</li>
            <li>Scalable growth strategies</li>
          </ul>

          <button className="about-button" type="button">More Details ↗</button>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
