function WebDevelopment() {
  return (
    <div className="min-h-screen">
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Web Development</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building modern, responsive, and高性能 websites
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">Custom Websites</h3>
              <p className="text-muted-foreground">
                Tailored to your specific business needs with unique designs and functionality.
              </p>
            </div>
            <div className="p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">E-commerce Solutions</h3>
              <p className="text-muted-foreground">
                Full-featured online stores with secure payment processing and inventory management.
              </p>
            </div>
            <div className="p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">Web Applications</h3>
              <p className="text-muted-foreground">
                Complex web apps with advanced functionality and seamless user experience.
              </p>
            </div>
            <div className="p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">CMS Development</h3>
              <p className="text-muted-foreground">
                Content management systems that make it easy to update your website.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to Build Your Website?</h2>
          <a href="/contact" className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
            Get a Quote
          </a>
        </div>
      </section>
    </div>
  )
}

export default WebDevelopment