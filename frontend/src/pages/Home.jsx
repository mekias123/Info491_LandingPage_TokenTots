import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Problem from '../components/Problem.jsx'
import Solution from '../components/Solution.jsx'
import Features from '../components/Features.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import DemoCTA from '../components/DemoCTA.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <HowItWorks />
        <DemoCTA />
      </main>
      <Footer />
    </>
  )
}
