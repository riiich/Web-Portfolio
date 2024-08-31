import { EXPERIENCES } from "../constants";

const Experience = () => {
	return (
		<div className="border-b border-slate-600 pb-4 mt-16 lg:mt-28">
			<h2 className="text-4xl text-center font-light m-10">Experience</h2>

			<>
				{EXPERIENCES.map((experience) => (
					<div className="flex flex-wrap mb-8 lg:justify-center" key={experience.id}>
						<div className="w-full lg:w-1/4">
							<p className="mb-2 text-sm ">{experience.dateEmployed}</p>
						</div>

						<div className="w-full max-w-2xl lg:w-3/4">
							<h4 className="mb-2 text-xl font-semibold">
								{experience.placeOfEmployment} -{" "}
								<span className="text-lime-200">{experience.position}</span>
							</h4>
							<p className="font-light text-slate-200">{experience.description}</p>
						</div>
					</div>
				))}
			</>
		</div>
	);
};

export default Experience;
