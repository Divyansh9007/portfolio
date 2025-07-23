import { useState } from 'react';
import Layout from './components/layout/Layout';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <ThemeProvider>
      <Layout activeSection={activeSection} setActiveSection={setActiveSection}>
        <Home id="home" setActiveSection={setActiveSection} />
        <About id="about" />
        <Projects id="projects" />
        <Experience id="experience" />
        <Certifications id="certifications" />
        <Contact id="contact" />
      </Layout>
    </ThemeProvider>
  );
}

export default App;