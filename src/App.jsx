import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import ResearchExperience from './components/ResearchExperience';
import Projects from './components/Projects';
import Internships from './components/Internships';
import Skills from './components/Skills';
import Education from './components/Education';
import CommunityService from './components/CommunityService';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <ResearchExperience />
        <Projects />
        <Skills />
        <CommunityService />
        <Internships />
      </main>
      <Footer />
    </>
  );
}

export default App;
