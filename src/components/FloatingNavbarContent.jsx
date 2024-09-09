const FloatingNavbarContent = () => {
	return (
		<div className="flex justify-center gap-4">
			<a
				href="#about"
				className="border border-slate-400 rounded-full px-2 duration-150 hover:bg-slate-700 hover:scale-105 active:scale-95"
			>
				About
			</a>
			<a
				href="#tech"
				className="border border-slate-400 rounded-full px-2 duration-150 hover:bg-slate-700 hover:scale-105 active:scale-95"
			>
				Technologies
			</a>
			<a
				href="#projects"
				className="border border-slate-400 rounded-full px-2 duration-150 hover:bg-slate-700 hover:scale-105 active:scale-95"
			>
				Projects
			</a>
			<a
				href="#experience"
				className="border border-slate-400 rounded-full px-2 duration-150 hover:bg-slate-700 hover:scale-105 active:scale-95"
			>
				Experience
			</a>
			<a
				href="#contact"
				className="border border-slate-400 rounded-full px-2 duration-150 hover:bg-slate-700 hover:scale-105 active:scale-95"
			>
				Contact Me
			</a>
		</div>
	);
};

export default FloatingNavbarContent;
