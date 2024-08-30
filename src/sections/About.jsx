import { ABOUT_ME_CONTENT } from "../constants";

const About = () => {
	return (
		<div className="border-b border-slate-600 pb-4 lg:mb-28">
			<h2 className="text-center text-4xl font-light">About Me</h2>

			<div className="flex flex-wrap">
				<div className="w-full lg:w-1/2 lg:p-8">
					<div className="flex justify-center items-center">
						{/* <img src="../../public/richLogo.png" alt="logo" /> */}
						<img src="../../public/sexy.png" alt="logo" className="rounded-3xl" />
					</div>
				</div>

				<div className="w-full lg:w-1/2">
					<div className="flex justify-center lg:justify-start">
						<p className="my-2 py-8 max-w-xl">{ABOUT_ME_CONTENT}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
