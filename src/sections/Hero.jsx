import { HERO_CONTENT } from "../constants";
import profilePicture from "../assets/myPicture.jpg";

const Hero = () => {
	return (
		<div className="border-b border-slate-600 pb-4 lg:mb-28">
			<div className="flex flex-wrap">
				<div className="w-full lg:w-1/2">
					<div className="flex flex-col items-center pl-5 lg:items-start">
						<h1 className="pb-16 text-6xl font-light tracking-tight lg:mt-16 lg:text-8xl">
							Rich Ho
						</h1>

						<span className="bg-gradient-to-r from-blue-400 via-slate-400 to-red-400 bg-clip-text text-4xl tracking-tight text-transparent">
							Developer
						</span>

						<p className="my-2 py-6 max-w-xl font-light">{HERO_CONTENT}</p>
					</div>
				</div>

				<div className="w-full lg:w-1/2 lg:p-8">
					<div className="flex justify-center">
						<img src={profilePicture} alt="profile_pic" width={400} height={400} className="rounded-3xl" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
