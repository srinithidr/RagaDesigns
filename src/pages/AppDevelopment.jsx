function AppDevelopment() {
  return (
    <div className="min-h-screen">
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">App Development</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Creating powerful mobile applications for iOS and Android
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">iOS Development</h3>
              <p className="text-muted-foreground">
                Native iOS apps built with Swift for optimal performance on Apple devices.
              </p>
            </div>
            <div className="p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">Android Development</h3>
              <p className="text-muted-foreground">
                Native Android apps built with Kotlin for the best Android experience.
              </p>
            </div>
            <div className="p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">Cross-platform</h3>
              <p className="text-muted-foreground">
                React Native apps that work seamlessly on both iOS and Android.
              </p>
            </div>
            <div className="p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">App Maintenance</h3>
              <p className="text-muted-foreground">
                Ongoing support and updates to keep your app running smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to Build Your App?</h2>
          <a href="/contact" className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
            Get a Quote
          </a>
        </div>
      </section>
    </div>
  )
}

export default AppDevelopment