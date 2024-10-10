import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const container = (x) => ({
	hidden: {
		x: x,
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.6,
			delay: 0.6,
		},
	},
});

const Experience = () => {
	return (
		<div
			className="border-b border-slate-600 pb-4 mt-16 lg:mt-28"
			id="experience"
		>
			<motion.h2
				initial={{ y: -100, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.4, delay: 0.4 }}
				viewport={{ once: true }}
				className="text-4xl text-center font-light m-10"
			>
				Experience
			</motion.h2>

			<>
				{EXPERIENCES.map((experience) => (
					<div
						className="flex flex-wrap mb-8 lg:justify-center"
						key={experience.id}
					>
						<motion.div
							variants={container(-100)}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							className="w-full lg:w-1/4"
						>
							<p className="mb-2 text-sm ">
								{experience.dateEmployed}
							</p>
						</motion.div>

						<motion.div
							variants={container(100)}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							className="w-full max-w-2xl lg:w-3/4"
						>
							<h4 className="mb-2 text-xl font-semibold">
								{experience.placeOfEmployment} -{" "}
								<span className="text-lime-200">
									{experience.position}
								</span>
							</h4>
							<ol>
								{experience.description.map((desc, i) => (
									<li
										className="font-light text-slate-200"
										key={i}
									>
										{desc}
									</li>
								))}
							</ol>
						</motion.div>
					</div>
				))}
			</>
		</div>
	);
};

export default Experience;
