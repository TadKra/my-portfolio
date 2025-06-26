import { motion } from "framer-motion";
import { Github, Download } from "lucide-react";

export default function Hero() {
  return (
    <motion.section
      /* animation */
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      /* layout + background */
      className="
        h-screen flex justify-center items-center
        bg-gradient-to-b from-sky-50 to-white
        dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800
      "
    >
      {/* centered content */}
      <div className="flex flex-col items-center gap-4 px-6 max-w-3xl text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
          Tadeáš Krajči
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
          Computer-science student, C/C++ & UNIX enthusiast, exploring AI.
        </p>

        {/* CV download */}
        <a
          href="CV_Tadeas_Krajci.pdf"
          download
          className="
            mt-6 inline-flex items-center gap-2
            px-5 py-2.5 rounded-full font-medium
            bg-sky-600 text-white hover:bg-sky-700
            dark:bg-sky-500 dark:hover:bg-sky-600
            transition
          "
        >
          <Download className="w-4 h-4" />
          Download CV
        </a>

        {/* scroll to About */}
        <a
          href="#about"
          className="mt-8 text-sky-600 dark:text-sky-400 hover:underline"
        >
          Learn more ↓
        </a>
      </div>
    </motion.section>
  );
}

