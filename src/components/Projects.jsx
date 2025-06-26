import FadeInWhenVisible from "./FadeInWhenVisible";
import ProjectCard from "./ProjectCard";

const data = [
  {
    title: "AVR Stopwatch",
    description:
      "Stopwatch written in AVR assembler for ATmega328P using an LCD Keypad Shield.",
    link: "https://github.com/TadKra/avr-stopwatch",
  },
  {
    title: "C++ Linker",
    description:
      "Simplified ELF-like linker written in modern C++ with relocation resolution.",
    link: "https://github.com/TadKra/simplified-linker",
  },
  {
    title: "Sparse Matrix",
    description:
      "Generic sparse matrix container in C++17 with logarithmic access and unit tests.",
    link: "https://github.com/TadKra/sparse-matrix",
  },
  {
    title: "Hash Table M",
    description:
      "Custom hash map with separate chaining and performance benchmarking vs STL.",
    link: "https://github.com/TadKra/hash-table",
  },
];


export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid gap-8 px-6 sm:grid-cols-2 max-w-5xl mx-auto">
        {data.map((p, i) => (
          <FadeInWhenVisible key={p.title} delay={i * 0.3}>
            <ProjectCard {...p} />
          </FadeInWhenVisible>
        ))}
      </div>
    </section>
  );
}

