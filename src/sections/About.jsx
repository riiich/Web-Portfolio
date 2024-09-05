import { ABOUT_ME_CONTENT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
	return (
		<div className="border-b border-slate-600 pb-4 mt-16 lg:mt-28" id="about">
			<h2 className="text-center text-4xl font-light m-10">About Me</h2>

			<div className="flex flex-wrap">
				<motion.div
					initial={{ x: -100, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.5 }}
					viewport={{ once: true }}
					className="w-full lg:w-1/2 lg:p-8"
				>
					<div className="flex justify-center items-center">
						<img src="/src/assets/images/sexy.png" alt="logo" className="rounded-3xl" />
					</div>
				</motion.div>

				<motion.div
					initial={{ x: 100, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.5 }}
					viewport={{ once: true }}
					className="w-full lg:w-1/2"
				>
					<div className="flex justify-center lg:justify-start">
						<p className="my-2 py-8 max-w-xl">{ABOUT_ME_CONTENT}</p>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default About;
