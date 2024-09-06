import { HERO_CONTENT } from "../constants";
import profilePicture from "../assets/images/myPicture.jpg";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

// can use the same animations for multiple containers now
const container = (delay) => ({
	hidden: {
		x: -100,
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			delay: delay,
			type: "spring",
			stiffness: 75,
		},
	},
});

const Hero = () => {
	return (
		<div className="border-b border-slate-600 pb-4 mt-16 lg:mb-28">
			<div className="flex flex-wrap">
				<div className="w-full lg:w-1/2">
					<div className="flex flex-col items-center pl-5 lg:items-start">
						<motion.h1
							variants={container(0.5)}
							initial="hidden"
							animate="visible"
							viewport={{ once: true }}
							className="pb-16 text-6xl font-light tracking-tight lg:mt-16 lg:text-8xl"
						>
							Rich Ho
						</motion.h1>

						<motion.span
							variants={container(1)}
							initial="hidden"
							animate="visible"
							viewport={{ once: true }}
							className="bg-gradient-to-r from-blue-400 via-slate-400 to-red-400 bg-clip-text text-4xl tracking-tight text-transparent"
						>
							Developer
						</motion.span>

						<motion.p
							variants={container(1.5)}
							initial="hidden"
							animate="visible"
							viewport={{ once: true }}
							className="my-2 py-6 max-w-xl text-lg font-light"
						>
							{HERO_CONTENT}
						</motion.p>

						<motion.div
							variants={container(2)}
							initial="hidden"
							animate="visible"
							viewport={{ once: true }}
							className="flex justify-center items-center my-2 text-2xl text-slate-300 gap-10 invisible md:visible md:my-10"
						>
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
						</motion.div>
					</div>
				</div>

				<div className="w-full lg:w-1/2 lg:p-8 mb-8">
					<div className="flex justify-center">
						<motion.img
							initial={{ x: 100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 1, delay: 1.8 }}
							viewport={{ once: true }}
							src={profilePicture}
							alt="profile_pic"
							width={400}
							height={400}
							className="rounded-3xl"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
