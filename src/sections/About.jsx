import { ABOUT_ME_CONTENT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
	return (
		<div className="border-b border-slate-600 pb-4 mt-16 lg:mt-28" id="about">
			<motion.h2
				initial={{ y: -100, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.4, duration: 0.4 }}
				viewport={{ once: true }}
				className="text-center text-4xl font-light m-10"
			>
				About Me
			</motion.h2>

			<div className="flex justify-center">
				<motion.div
					initial={{ x: 100, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.6 }}
					viewport={{ once: true }}
					className="w-full lg:w-1/2"
				>
					<div className="relative flex justify-center">
						<div className="absolute inset-0 bg-slate-600/20 backdrop-blur-0 rounded-lg"></div>
						<div className="relative z-10 text-white p-0">
							<div className="absolute inset-0 bg-cover bg-center filter blur-md"></div>
							<p className="z-20 my-2 py-8 max-w-xl text-xl font-light">{ABOUT_ME_CONTENT}</p>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default About;
