import Background from "./components/Background"
import CTA from "./components/CTA"
import Dashboard from "./components/Dashboard"
import Fade from "./components/Fade"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonials"
import Trusted from "./components/Trusted"


function App() {
 

  return (
    <div className="relative bg-[#030712] min-h-screen text-white">

      <Background />
      <Navbar />
      <Hero />
      <Trusted />

      <Fade >
      <Features />
      </Fade>

      <Fade >
      <Dashboard />
      </Fade>

      <Fade >
      <Pricing />
      </Fade>

      <Fade>
      <Testimonials />
      </Fade>

      <Fade>
      <CTA />
      </Fade>
      
      <Footer />
  
    </div>
  )
}

export default App
