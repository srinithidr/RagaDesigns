function UIUXDesign() {
  return (
    <div className="min-h-screen">
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">UI/UX Design</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Creating beautiful and intuitive user experiences
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">User Interface Design</h3>
              <p className="text-muted-foreground">
                Beautiful, modern interfaces that capture your brand essence and engage users.
              </p>
            </div>
            <div className="p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">User Experience Design</h3>
              <p className="text-muted-foreground">
                Intuitive user flows and interactions that make your product easy to use.
              </p>
            </div>
            <div className="p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">Wireframing & Prototyping</h3>
              <p className="text-muted-foreground">
                Detailed wireframes and interactive prototypes to visualize your product.
              </p>
            </div>
            <div className="p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">Design Systems</h3>
              <p className="text-muted-foreground">
                Comprehensive design systems that ensure consistency across your product.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to Design Your Product?</h2>
          <a href="/contact" className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
            Get a Quote
          </a>
        </div>
      </section>
    </div>
  )
}

export default UIUXDesign