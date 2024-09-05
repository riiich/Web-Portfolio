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

function App() {
	return (
		<div className="text-white selection:bg-slate-800 selection:text-green-400 overflow-x-hidden">
			<div
				className="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 
							bg-[radial-gradient(ellipse_80%_100%_at_50%_-0%,rgba(56,209,69,0.3),rgba(255,255,255,0))]"
			>
				<div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#808080_0.01px,transparent_1px)] [background-size:14px_16px]"></div>
			</div>
			<Router>
				<div>
					<Navbar />
					<FloatingNav
						navItems={[
							{ name: "Home", link: "#/", icon: "🔗" },
							{ name: "About", link: "#about", icon: "🔗" },
							{ name: "Technologies", link: "#tech", icon: "🔗" },
							{ name: "Projects", link: "#projects", icon: "🔗" },
							{ name: "Experience", link: "#experience", icon: "🔗" },
							{ name: "Contact", link: "#contact", icon: "🔗" },
						]}
						className={"bg-white text-black px-4 py-2 gap-2"}
					/>
					<div className="m-auto px-8">
						<Hero />
						<About />
						<Technologies />
						<Projects />
						<Experience />
						<Contact />
					</div>
				</div>
			</Router>
		</div>
	);
}

export default App;
