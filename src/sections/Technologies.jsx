import { RiReactjsLine } from "react-icons/ri";

const Technologies = () => {
	return (
		<div className="border-b border-slate-600 pb-4 lg:mb-28">
			<h2 className="text-center text-4xl font-light">Technologies</h2>

			<div className="flex flex-wrap justify-center items-center gap-4 m-3 backdrop-blur-3xl">
				<span className=" inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
				<div className="border-2 border-slate-500 rounded-2xl p-4 ">
					{/* <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"> */}
					<RiReactjsLine className="text-5xl text-cyan-400 " />
				</div>
			</div>
		</div>
	);
};

export default Technologies;
