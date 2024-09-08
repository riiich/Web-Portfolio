import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import FloatingNavbarContent from "./FloatingNavbarContent";

const Navbar = () => {
	return (
			<nav className="flex justify-between items-center w-screen p-8  border-b-slate-50" id="/">
				<a href="/" className="font-mono font-extrabold text-4xl text-white m-auto">
					RH
				</a>

				<div className="text-lg gap-2 mx-auto hidden md:block">
					<FloatingNavbarContent />
				</div>

				<div className="flex text-2xl text-slate-300 gap-10 md:hidden">
					<a
						href="https://www.linkedin.com/in/horiich/"
						target="_blank"
						className="duration-150 hover:scale-125"
					>
						<FaLinkedin />
					</a>
					<a
						href="https://github.com/riiich"
						target="_blank"
						className="duration-300 hover:scale-125"
					>
						<FaGithub />
					</a>
					<a
						href="https://x.com/riiichdev"
						target="_blank"
						className="duration-150 hover:scale-125"
					>
						<FaTwitter />
					</a>
				</div>
			</nav>
	);
};

export default Navbar;
