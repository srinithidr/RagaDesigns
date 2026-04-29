function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are a team of passionate designers and developers
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                At RagaDesign, we believe in the power of exceptional digital experiences. 
                Our mission is to help businesses transform their digital presence through 
                innovative design and cutting-edge technology.
              </p>
              <p className="text-muted-foreground">
                We combine creativity with technical expertise to deliver solutions that 
                not only look beautiful but also drive real business results.
              </p>
            </div>
            <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground">Mission Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border bg-card text-card-foreground">
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card text-card-foreground">
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-muted-foreground">
                We never compromise on quality. Every project receives our full attention and expertise.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card text-card-foreground">
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-muted-foreground">
                We work closely with our clients as partners, ensuring their vision comes to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Our Team</h2>
          <p className="text-muted-foreground mb-8">
            Our talented team of designers, developers, and strategists work together 
            to deliver exceptional results for every client.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-4 text-center">
              <div className="h-24 bg-muted rounded-lg mb-4 mx-auto w-24"></div>
              <h3 className="font-semibold">John Doe</h3>
              <p className="text-sm text-muted-foreground">CEO & Founder</p>
            </div>
            <div className="p-4 text-center">
              <div className="h-24 bg-muted rounded-lg mb-4 mx-auto w-24"></div>
              <h3 className="font-semibold">Jane Smith</h3>
              <p className="text-sm text-muted-foreground">Design Lead</p>
            </div>
            <div className="p-4 text-center">
              <div className="h-24 bg-muted rounded-lg mb-4 mx-auto w-24"></div>
              <h3 className="font-semibold">Mike Johnson</h3>
              <p className="text-sm text-muted-foreground">Tech Lead</p>
            </div>
            <div className="p-4 text-center">
              <div className="h-24 bg-muted rounded-lg mb-4 mx-auto w-24"></div>
              <h3 className="font-semibold">Sarah Wilson</h3>
              <p className="text-sm text-muted-foreground">Project Manager</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About