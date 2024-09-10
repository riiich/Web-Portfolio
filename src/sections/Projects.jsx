import { PROJECTS } from "../constants";
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

const Projects = () => {
	return (
		<div className="border-b border-slate-600 pb-4 mt-16 lg:mt-28" id="projects">
			<motion.h2
				initial={{ y: -100, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.4, delay: 0.4 }}
				viewport={{ once: true }}
				className="text-center text-4xl font-light m-10"
			>
				Projects
			</motion.h2>

			{PROJECTS.map((project) => (
				<div className="flex flex-wrap mb-16 lg:justify-center" key={project.id}>
					<div className="w-full mb-10 lg:w-2/5" key={project.id}>
						<motion.div
							variants={container(-100)}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							className="flex justify-center items-center"
						>
							<img
								src={`${project.image}`}
								alt={`project_${project.id}`}
								width={250}
								height={400}
								className="rounded-lg min-h-60 min-w-72"
							/>
						</motion.div>
					</div>

					<motion.div
						variants={container(100)}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="w-full max-w-2xl lg:w-3/5"
					>
						<h4 className="mb-2 text-2xl font-semibold">
							{project.title} &nbsp;&nbsp;{" "}
							{project.githubLink && (
								<span className="text-xl text-purple-500 duration-300 hover:text-purple-400">
									<a href={project.githubLink} target="_blank">
										Link
									</a>
								</span>
							)}
						</h4>

						<p className="text-slate-200 font-light">{project.description}</p>

						<div className="flex flex-wrap gap-2 my-3 items-center">
							<span className="text-slate-200">Tech Stack:</span>
							{project.technologies.map((tech, i) => (
								<p className="bg-slate-900 p-1.5 rounded-lg text-cyan-400" key={i}>
									{tech}
								</p>
							))}
						</div>
					</motion.div>
				</div>
			))}
		</div>
	);
};

export default Projects;
