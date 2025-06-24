import React from "react";

function App() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>Tadeáš Krajči</h1>
      <p>Computer Science student | AI & Embedded Systems Enthusiast</p>
      <h2>About Me</h2>
      <p>
        I enjoy working on C/C++, embedded systems and solving algorithmic problems.
        I’m currently expanding into web development and machine learning.
      </p>
      <h2>Projects</h2>
      <ul>
        <li>
          <strong>AVR Stopwatch:</strong> Stopwatch in AVR assembler for ATmega328P
        </li>
        <li>
          <strong>C++ Linker:</strong> Simple ELF-like linker in C++
        </li>
      </ul>
      <h2>Contact</h2>
      <p>
        <a href="mailto:tadeas@example.com">tadeas@example.com</a>
      </p>
    </main>
  );
}

export default App;

