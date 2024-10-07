import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-28" src="./images/Logo.png" alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/sanyamsharma98/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://github.com/DARKHACK4949" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://drive.google.com/file/d/1yo2dFUyLsZjp3xFuoGlYAlz6BxNvTeYt/view?usp=sharing"
          target="_blank"
          className="flex items-center"
        >
          <span className="rounded bg-neutral-300 px-2 py-1 text-sm font-medium text-neutral-900">
            Resume
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
