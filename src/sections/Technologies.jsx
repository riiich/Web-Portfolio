import { RiReactjsLine, RiTailwindCssFill, RiJavascriptFill } from "react-icons/ri";
import { SiNodedotjs, SiMongodb, SiNextdotjs, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";
import mysqlLogo from "../assets/images/mysql.png";
import javaLogo from "../assets/images/java.png";
import pythonLogo from "../assets/images/python.png";

const iconContainer = (duration) => ({
	iconHidden: { y: -10 },
	iconVisible: {
		y: [-10, 10],
		transition: { duration: duration, ease: "linear", repeat: Infinity, repeatType: "reverse" },
	},
});

const Technologies = () => {
	return (
		<div className="border-b border-slate-600 pb-4 mt-16 lg:mt-28" id="tech">
			<motion.h2
				initial={{ y: -100, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.5, duration: 0.5 }}
				viewport={{ once: true }}
				className="text-center text-4xl font-light"
			>
				Technologies
			</motion.h2>

			<motion.div
				initial={{ x: -100, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.8, delay: 0.8 }}
				viewport={{ once: true }}
				className="flex flex-wrap justify-center items-center gap-4 mt-16 mb-10"
			>
				<motion.div
					variants={iconContainer(3.5)}
					initial="iconHidden"
					animate="iconVisible"
					className="relative h-20 w-20 overflow-hidden rounded-2xl border border-gray-800 p-[2px] backdrop-blur-3xl"
				>
					<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
					<div className="inline-flex h-full w-full items-center justify-center rounded-xl bg-gray-950 px-3 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl">
						<RiJavascriptFill className="text-5xl text-yellow-500 " />
					</div>
				</motion.div>

				<motion.div
					variants={iconContainer(1.4)}
					initial="iconHidden"
					animate="iconVisible"
					className="relative h-20 w-20 overflow-hidden rounded-2xl border border-gray-800 p-[2px] backdrop-blur-3xl"
				>
					<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
					<div className="inline-flex h-full w-full items-center justify-center rounded-xl bg-gray-950 px-3 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl">
						<SiTypescript className="text-4xl text-blue-600 " />
					</div>
				</motion.div>

				<motion.div
					variants={iconContainer(2.8)}
					initial="iconHidden"
					animate="iconVisible"
					className="relative h-20 w-20 overflow-hidden rounded-2xl border border-gray-800 p-[2px] backdrop-blur-3xl"
				>
					<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
					<div className="inline-flex h-full w-full items-center justify-center rounded-xl bg-gray-950 px-3 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl">
						<RiReactjsLine className="text-5xl text-cyan-400 " />
					</div>
				</motion.div>

				<motion.div
					variants={iconContainer(1.6)}
					initial="iconHidden"
					animate="iconVisible"
					className="relative h-20 w-20 overflow-hidden rounded-2xl border border-gray-800 p-[2px] backdrop-blur-3xl"
				>
					<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
					<div className="inline-flex h-full w-full items-center justify-center rounded-xl bg-gray-950 px-3 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl">
						<SiNodedotjs className="text-5xl text-[#689f62] " />
					</div>
				</motion.div>

				<motion.div
					variants={iconContainer(2.5)}
					initial="iconHidden"
					animate="iconVisible"
					className="relative h-20 w-20 overflow-hidden rounded-2xl border border-gray-800 p-[2px] backdrop-blur-3xl"
				>
					<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
					<div className="inline-flex h-full w-full items-center justify-center rounded-xl bg-gray-950 px-3 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl">
						<SiNextdotjs className="text-5xl" />
					</div>
				</motion.div>

				<motion.div
					variants={iconContainer(6)}
					initial="iconHidden"
					animate="iconVisible"
					className="relative h-20 w-20 overflow-hidden rounded-2xl border border-gray-800 p-[2px] backdrop-blur-3xl"
				>
					<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
					<div className="inline-flex h-full w-full items-center justify-center rounded-xl bg-gray-950 px-3 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl">
						<RiTailwindCssFill className="text-5xl text-cyan-500 " />
					</div>
				</motion.div>

				<motion.div
					variants={iconContainer(2)}
					initial="iconHidden"
					animate="iconVisible"
					className="relative h-20 w-20 overflow-hidden rounded-2xl border border-gray-800 p-[2px] backdrop-blur-3xl"
				>
					<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
					<div className="inline-flex h-full w-full items-center justify-center rounded-xl bg-gray-950 px-3 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl">
						<SiMongodb className="text-5xl text-green-500 " />
					</div>
				</motion.div>

				<motion.div
					variants={iconContainer(4)}
					initial="iconHidden"
					animate="iconVisible"
					className="relative h-20 w-20 overflow-hidden rounded-2xl border border-gray-800 p-[2px] backdrop-blur-3xl"
				>
					<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
					<div className="inline-flex h-full w-full items-center justify-center rounded-xl bg-gray-950 px-3 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl">
						<img src={mysqlLogo} alt="mysql" width={80} height={80} />
					</div>
				</motion.div>

				<motion.div
					variants={iconContainer(2)}
					initial="iconHidden"
					animate="iconVisible"
					className="relative h-20 w-20 overflow-hidden rounded-2xl border border-gray-800 p-[2px] backdrop-blur-3xl"
				>
					<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
					<div className="inline-flex h-full w-full items-center justify-center rounded-xl bg-gray-950 px-3 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl">
						<img src={javaLogo} alt="java" width={40} height={40} />
					</div>
				</motion.div>

				<motion.div
					variants={iconContainer(5.5)}
					initial="iconHidden"
					animate="iconVisible"
					className="relative h-20 w-20 overflow-hidden rounded-2xl border border-gray-800 p-[2px] backdrop-blur-3xl"
				>
					<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
					<div className="inline-flex h-full w-full items-center justify-center rounded-xl bg-gray-950 px-3 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl">
						<img src={pythonLogo} alt="python" width={40} height={40} />
					</div>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Technologies;
