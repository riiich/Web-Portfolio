import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Technologies from "./sections/Technologies";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import { FloatingNav } from "../@/components/ui/floating-navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { ShootingStars } from "../@/components/ui/shooting-stars";
import { StarsBackground } from "../@/components/ui/stars-background";
import { useEffect, useState } from "react";
// import { formatDateTime } from "./utils/utils";

function App() {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		setInterval(() => setTime(new Date()), 1000);
	}, []);

	return (
		<div className="text-white  selection:bg-slate-800 selection:text-green-400 overflow-x-hidden">
			<div
				className="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 
							bg-[radial-gradient(ellipse_80%_100%_at_50%_-0%,rgba(56,209,69,0.3),rgba(255,255,255,0))]"
			>
				{/* <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#808080_0.01px,transparent_1px)] [background-size:14px_16px]"></div> */}
				<ShootingStars
					starWidth={5}
					starHeight={5}
					maxDelay={10000}
					starColor="#47bffd"
					trailColor="#ff4500"
				/>
				<StarsBackground starDensity={0.0005} twinkleProbability={0.9} minTwinkleSpeed={0.7} />
			</div>

			<Router>
				{/* <div> */}
				<div className="flex justify-center">
					<FloatingNav
						navItems={[
							{ name: "Home |", link: "#/" },
							{ name: "About |", link: "#about" },
							{ name: "Technologies |", link: "#tech" },
							{ name: "Projects |", link: "#projects" },
							{ name: "Experience |", link: "#experience" },
							{ name: "Contact", link: "#contact" },
						]}
						className={"z-10 bg-white text-black m-8 px-4 py-2 gap-2 max-sm:hidden"}
					/>
					<Navbar time={time.toLocaleTimeString()} />
				</div>

				<div className="m-auto px-8 md:px-24">
					<Hero time={time.toLocaleTimeString()} />
					<About />
					<Technologies />
					<Projects />
					<Experience />
					<Contact />
				</div>
				{/* </div> */}
			</Router>
		</div>
	);
}

export default App;
