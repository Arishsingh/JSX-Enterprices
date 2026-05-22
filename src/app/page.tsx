import Navbar from '@/components/navbar/Navbar'
import Hero from '@/components/hero/Hero'
import ServicesOverview from '@/components/services/ServicesOverview'
import About from '@/components/about/About'
import Projects from '@/components/projects/Projects'
import Products from '@/components/products/Products'
import Process from '@/components/process/Process'
import Contact from '@/components/contact/Contact'
import Newsletter from '@/components/newsletter/Newsletter'
import Footer from '@/components/footer/Footer'

export default function JSKWebsite() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Navbar />
      <main>
        <Hero />
        <ServicesOverview />
        <About />
        <Projects />
        <Products />
        <Process />
        <Contact />
      </main>
      <Newsletter />
      <Footer />
    </div>
  )
}
