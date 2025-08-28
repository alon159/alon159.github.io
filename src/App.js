import './i18n';
import Home from './components/sections/Home';
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="pt-15">
        <Home />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
