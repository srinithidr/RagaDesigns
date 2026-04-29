import HeroCarousel from "@/components/hero/HeroCarousel"
import { motion } from "framer-motion"
import AboutSection from "@/components/about/AboutSection"
import ServicesSection from "@/components/services/ServicesSection"
import StatsCounterSection from "@/components/stats/StatsCounterSection"
import TestimonialsSection from "@/components/testimonials/TestimonialsSection"
import ContactSection from "@/components/contact/ContactSection"
import { fadeUp, smoothTransition } from "@/lib/animations"

function Home() {
  return (
    <div className="min-h-screen">
      <HeroCarousel />
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={smoothTransition}
      >
        <AboutSection />
      </motion.div>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={smoothTransition}
      >
        <ServicesSection />
      </motion.div>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={smoothTransition}
      >
        <StatsCounterSection />
      </motion.div>
      <TestimonialsSection />
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={smoothTransition}
      >
        <ContactSection />
      </motion.div>
    </div>
  )
}

export default Home