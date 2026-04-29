function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to RagaDesign
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            We create stunning digital experiences that help businesses grow. 
            From web development to UI/UX design, we bring your vision to life.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/contact" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
              Get Started
            </a>
            <a href="/about" className="px-6 py-3 border border-input rounded-lg font-medium hover:bg-muted transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border bg-card text-card-foreground">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-muted-foreground">
                Custom websites and web applications built with modern technologies for optimal performance.
              </p>
              <a href="/services/web-development" className="text-primary hover:underline mt-4 inline-block">
                Learn more →
              </a>
            </div>
            <div className="p-6 rounded-lg border bg-card text-card-foreground">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">App Development</h3>
              <p className="text-muted-foreground">
                Native and cross-platform mobile applications for iOS and Android with seamless user experience.
              </p>
              <a href="/services/app-development" className="text-primary hover:underline mt-4 inline-block">
                Learn more →
              </a>
            </div>
            <div className="p-6 rounded-lg border bg-card text-card-foreground">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p className="text-muted-foreground">
                Beautiful and intuitive user interfaces that delight users and drive engagement.
              </p>
              <a href="/services/ui-ux-design" className="text-primary hover:underline mt-4 inline-block">
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start?</h2>
          <p className="text-muted-foreground mb-8">
            Let's create something amazing together. Contact us today!
          </p>
          <a href="/contact" className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home