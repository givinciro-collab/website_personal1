import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import TeachingMentorship from './components/TeachingMentorship';
import ResearchExperience from './components/ResearchExperience';
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
        <TeachingMentorship />
        <ResearchExperience />
        <Skills />
        <CommunityService />
        <Internships />
      </main>
      <Footer />
    </>
  );
}

export default App;
