import React from "react";
//import Home from './components/Home';
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Education from "./components/Education";
import Hero from "./components/Hero";
import StickyScrollReveal from "./components/StickyScrollReveal";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="pt-16">
      <Hero />
        <StickyScrollReveal>
          <About />
        </StickyScrollReveal>
        <StickyScrollReveal>
          <Skills />
        </StickyScrollReveal>
        <StickyScrollReveal>
          <Education />
        </StickyScrollReveal>
        <StickyScrollReveal>
          <Experience />
        </StickyScrollReveal>
        <StickyScrollReveal>
          <Projects />
        </StickyScrollReveal>
      </main>
      <Footer />
    </div>
  );
}

export default App;
