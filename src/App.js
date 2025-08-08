import React from "react";
import Home from './components/sections/Home';
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Education from "./components/sections/Education";
import Hero from "./components/sections/Hero";
import StickyScrollReveal from "./components/util/StickyScrollReveal";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="pt-15">
      <Home />
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
