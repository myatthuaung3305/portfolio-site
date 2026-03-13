import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolioData';
import './App.css';

function App() {
  return (
    <>
      <Navbar name={portfolioData.name} githubUrl={portfolioData.githubUrl} />
      <main>
        <Hero data={portfolioData} />
        <About data={portfolioData} />
        <Projects projects={portfolioData.projects} />
        <Skills skillGroups={portfolioData.skillGroups} />
        <Contact data={portfolioData} />
      </main>
      <Footer
        name={portfolioData.name}
        githubUrl={portfolioData.githubUrl}
        footerNote={portfolioData.footerNote}
      />
    </>
  );
}

export default App;
