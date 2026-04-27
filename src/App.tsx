import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Articles from './components/Articles';
import Contact from './components/Contact';
import Footer from './components/Footer';
 
function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  
  return (
    <div className="min-h-screen bg-gradient-to-br from-clinic-green-200 via-white to-clinic-pink-300 overflow-x-hidden relative">
      <div className="relative z-10">
        <Navigation scrollToSection={scrollToSection} />
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Services />
        <Testimonials />
        <Articles />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
