import './App.css'

// Import your sections
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import CarouselSection from './components/CarouselSection'
import Gallery from './components/Gallery'
import FindUs from './components/FindUs'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <CarouselSection />
        <Gallery />
        <FindUs />
      </main>
      <Footer />
    </>
  )
}

export default App
