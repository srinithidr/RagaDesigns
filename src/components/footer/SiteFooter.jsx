import "./SiteFooter.css"

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-container">
        <div className="site-footer-brand">
          <h3>RagaDesign</h3>
          <p>
            We help brands grow with strategic consulting, digital products, and
            high-impact design execution.
          </p>
        </div>

        <div className="site-footer-links">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="site-footer-links">
          <h4>Services</h4>
          <a href="/services/web-development">Web Development</a>
          <a href="/services/app-development">App Development</a>
          <a href="/services/ui-ux-design">UI/UX Design</a>
        </div>

        <div className="site-footer-contact">
          <h4>Contact</h4>
          <p>hello@ragadesign.com</p>
          <p>+91 98765 43210</p>
          <p>Bengaluru, India</p>
        </div>
      </div>

      <div className="site-footer-bottom">
        <p>© 2026 RagaDesign. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default SiteFooter
