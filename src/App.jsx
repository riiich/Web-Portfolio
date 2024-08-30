import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Technologies from "./sections/Technologies";

function App() {
	return (
		<div className="text-white selection:bg-slate-800 selection:text-green-400">
			<div
				className="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 
							bg-[radial-gradient(ellipse_80%_100%_at_50%_-0%,rgba(56,209,69,0.3),rgba(255,255,255,0))]"
			>
				<div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#808080_0.01px,transparent_1px)] [background-size:14px_16px]"></div>
			</div>

			<div className="container mx-auto px-8">
				<Navbar />
				<Hero />
				<About />
				<Technologies />
			</div>
		</div>
	);
}

export default App;
