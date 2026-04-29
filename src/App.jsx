import { Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import WebDevelopment from "./pages/WebDevelopment"
import AppDevelopment from "./pages/AppDevelopment"
import UIUXDesign from "./pages/UIUXDesign"
import "./App.css"

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/app-development" element={<AppDevelopment />} />
          <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
        </Routes>
      </main>
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2026 RagaDesign. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
