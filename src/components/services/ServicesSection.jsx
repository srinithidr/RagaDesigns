import "./ServicesSection.css"
import highlightImage from "@/assets/services/services-highlight.png"

const serviceCards = [
  {
    id: "01",
    icon: "❖",
    title: "Growth & Expansion Consulting",
    description: "Support business scaling, market entry strategies, and expansion planning.",
  },
  {
    id: "02",
    icon: "◔",
    title: "Digital Transformation Consulting",
    description: "Leverage modern technologies to modernize workflows and improve customer experiences.",
  },
  {
    id: "03",
    icon: "✣",
    title: "Risk Management & Compliance",
    description: "Identify potential risks, ensure regulatory compliance, and protect your business.",
  },
  {
    id: "04",
    icon: "✦",
    title: "Growth & Expansion Consulting",
    description: "Support business scaling, market entry strategies, and expansion planning.",
  },
]

function ServicesSection() {
  return (
    <section className="services-section">
      <div className="services-container">
        <span className="services-tag">What We Offer</span>
        <h2 className="services-title">Innovates Services That Elevate Your Business</h2>

        <div className="services-grid">
          {serviceCards.map((service) => (
            <article className="service-card" key={service.id}>
              <span className="service-icon">{service.icon}</span>
              <span className="service-id">{service.id}.</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button type="button" className="service-button">
                <span>Get Started</span>
                <span>↗</span>
              </button>
            </article>
          ))}

          <article className="service-card service-card-highlight">
            <div className="service-highlight-overlay"></div>
            <img src={highlightImage} alt="Consultants discussing strategy" className="service-highlight-image" />
            <div className="service-highlight-content">
              <span className="service-icon">◔</span>
              <h3>Growth & Expansion Consulting</h3>
              <p>Support business scaling, market entry strategies, and expansion planning.</p>
              <button type="button" className="service-button service-button-highlight">
                <span>Get Started</span>
                <span>↗</span>
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
