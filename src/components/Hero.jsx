import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        h-screen flex flex-col justify-center items-center text-center gap-4
        bg-gradient-to-b from-sky-50 to-white
        dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800
      "
    >
      <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
        Tadeáš Krajči
      </h1>

      <p className="text-lg text-gray-600 max-w-xl">
        Computer-science student, C/C++ & UNIX enthusiast, exploring AI.
      </p>

      {/* ikony sociálních sítí */}
      <div className="flex gap-4 mt-2">
        <a
          href="https://github.com/tadkra"
          target="_blank"
          rel="noreferrer"
          className="text-gray-800 hover:text-sky-600 dark:text-gray-300 dark:hover:text-sky-400 transition"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://linkedin.com/in/tadkra"
          target="_blank"
          rel="noreferrer"
          className="text-gray-800 hover:text-sky-600 dark:text-gray-300 dark:hover:text-sky-400 transition"
        >
          <Linkedin className="w-6 h-6" />
        </a>
      </div>

      {/* odkaz na sekci About */}
      <a
        href="#about"
        className="mt-8 text-sky-600 dark:text-sky-400 hover:underline"
      >
        Learn&nbsp;more&nbsp;↓
      </a>
    </motion.section>
  );
}

