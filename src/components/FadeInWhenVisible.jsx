import { motion } from "framer-motion";

export default function FadeInWhenVisible({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 1, delay }}
    >
      {children}
    </motion.div>
  );
}

