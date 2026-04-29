import { Link } from "react-router-dom"
import "./NotFound.css"

function NotFound() {
  return (
    <section className="not-found-section">
      <div className="not-found-card">
        <p className="not-found-code">404</p>
        <h1>Page Not Found</h1>
        <p>
          The page you are looking for does not exist or has been moved to
          another location.
        </p>
        <Link to="/" className="not-found-button">
          Back to Home
        </Link>
      </div>
    </section>
  )
}

export default NotFound
