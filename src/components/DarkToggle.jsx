import { Sun, Moon } from "lucide-react";
import useDarkMode from "../hooks/useDarkMode";

export default function DarkToggle() {
  const [dark, setDark] = useDarkMode();

  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label="Přepnout téma"
      className="
        fixed           /* <--  pevna pozice vuci viewportu  */
        top-4 right-4   /* <--  horni pravy roh    */
        sm:top-6 sm:right-6
        z-50            /* <--  nad vsim ostatnim           */
        rounded-full p-3
        bg-gray-200 dark:bg-gray-700
        text-gray-800 dark:text-gray-100
        shadow-lg hover:shadow-xl
        transition
      "
    >
      {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}

