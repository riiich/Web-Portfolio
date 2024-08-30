import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Navbar = () => {
	return (
		<nav className="flex justify-between items-center py-8 border-b-slate-50">
			{/* <a href="/">
				<img src="/public/richLogo.png" alt="logo" width={200} height={200} />
			</a> */}
			<div className="flex items-center font-mono font-extrabold text-4xl text-white">
				<a href="/">RH</a>
			</div>

			<div className="flex justify-center items-center text-2xl text-slate-300 gap-10">
				<a href="https://www.linkedin.com/in/horiich/" target="_blank" className="duration-300 hover:scale-125">
					<FaLinkedin />
				</a>
				<a href="https://github.com/riiich" target="_blank" className="duration-300 hover:scale-125">
					<FaGithub />
				</a>
				<a href="https://x.com/riiichdev" target="_blank" className="duration-300 hover:scale-125">
					<FaTwitter />
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
