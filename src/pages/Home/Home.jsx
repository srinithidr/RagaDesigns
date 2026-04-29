import HeroCarousel from "@/components/hero/HeroCarousel"
import About from "../About"

function Home() {
  return (
    <div className="min-h-screen">
      <HeroCarousel />
      <About />
    </div>
  )
}

export default Home