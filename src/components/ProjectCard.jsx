import { motion } from "framer-motion";

export default function ProjectCard({ title, description, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-gray-700
    text-gray-900 dark:text-gray-100
    rounded-2xl shadow-lg p-6 flex flex-col
    transition-colors duration-300"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 flex-grow">{description}</p>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-sky-600 font-medium mt-4"
        >
          View on GitHub →
        </a>
      )}
    </motion.div>
  );
}

