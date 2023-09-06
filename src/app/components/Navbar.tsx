import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

interface NavbarProps {}

const Navbar = ({ ...props }: NavbarProps) => {
  return (
    <nav className="sticky p-4 bg-slate-600 top-0 drop-shadow-xl z-10">
      <div className="md:px-6 prose prose-xl mx-auto flex justify-between items-center flex-col sm:flex-row">
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
          <Link
            href="/"
            className="text-white/90 no-underline hover:text-white"
          >
            Dylan Cortez-Modell
          </Link>
        </h1>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
          <Link
            className="text-white/90 hover:text-white"
            href="https://www.youtube.com/@DaveGrayTeachesCode"
          >
            <FaLinkedinIn size={24} />
          </Link>
          <Link
            className="text-white/90 hover:text-white"
            href="https://github.com/dylan-cm"
          >
            <FaGithub size={24} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
