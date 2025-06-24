import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import DarkToggle from "./components/DarkToggle";
import About from "./components/About";

function App() {
  return (
    <>
      <DarkToggle />
      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;

