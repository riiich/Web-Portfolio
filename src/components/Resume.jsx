import resume from "../assets/resume/RichHo_Resume.pdf";

const Resume = () => {
	return (
		<button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
			<a href={resume} download="RichHo_Resume">
				Download Resume
			</a>
		</button>
	);
};

export default Resume;
