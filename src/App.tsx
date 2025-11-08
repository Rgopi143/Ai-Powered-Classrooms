import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Process from './components/Process';
import Impact from './components/Impact';
import LiveAttendance from './components/LiveAttendance';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Features />
      <Process />
      <Impact />
      <LiveAttendance />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;