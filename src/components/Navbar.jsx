import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import FloatingNavbarContent from "./FloatingNavbarContent";

const Navbar = () => {
	return (
		<nav className="sticky top-0 z-10 flex justify-between items-center border-b-2 bg-green-950 w-screen py-8 border-b-slate-50" id="/">
			<div className="font-mono font-extrabold text-4xl text-white m-auto">
				<a href="/">RH</a>
			</div>

			<div className="text-lg gap-2 mx-auto invisible lg:visible">
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
				<a href="https://github.com/riiich" target="_blank" className="duration-300 hover:scale-125">
					<FaGithub />
				</a>
				<a href="https://x.com/riiichdev" target="_blank" className="duration-150 hover:scale-125">
					<FaTwitter />
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
