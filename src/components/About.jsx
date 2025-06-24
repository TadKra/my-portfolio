import FadeInWhenVisible from "./FadeInWhenVisible";

export default function About() {
  return (
    <FadeInWhenVisible>
      <section id="about" className="py-16">
        <div
          className="
            max-w-3xl mx-auto                      /* pevná šířka, centrování  */
            bg-white/70 dark:bg-gray-800/70        /* lehce průsvitné pozadí   */
            backdrop-blur-sm                      /* jemný „frosted“ efekt    */
            rounded-2xl shadow-xl p-8 sm:p-10
            transition-colors duration-300
          "
        >
          <h2 className="text-3xl font-bold mb-4 text-center">About&nbsp;Me</h2>

          <p className="leading-relaxed text-gray-700 dark:text-gray-200">
            I'm a <strong>Computer&nbsp;Science student at CTU in Prague</strong>,
            having successfully completed my first year. During two semesters
            I’ve built solid foundations in <strong>C and C++ programming</strong>,
            <strong> PostgreSQL</strong>, <strong>Unix system administration</strong> 
            (Debian&nbsp;&amp;&nbsp;Solaris) and <strong>computer architecture</strong>
            (Moore/Mealy machines, assembler).
          </p>

          <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-200">
            My focus is on connecting low-level understanding with high-level software
            design, aiming to build clean and sustainable solutions — whether for
            embedded systems, servers or databases.
          </p>
        </div>
      </section>
    </FadeInWhenVisible>
  );
}

