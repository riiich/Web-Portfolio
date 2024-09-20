import aboutImg from "../assets/images/aboutPlaceholder.png";
import moontrekImg from "../assets/images/project-images/moontrek2.jpg";
import mymusicwrapImg from "../assets/images/project-images/mymusicwrap.png";
import eventTracerImg from "../assets/images/project-images/eventTracer.png";

export const HERO_CONTENT = {
	firstSentence: "I have a strong passion for building applications that I find interesting and fun.",
	frontEnd:
		"Front-end: React.js, TailwindCSS, and other UI component libraries.",
	backEnd: "Node.js/Express.js or Spring Boot, MySQL",
};

export const ABOUT_ME_CONTENT =
	"Hi, my name is Rich, and I graduated with a Bachelor's of Science in Computer Science from California State University, Los Angeles (CSULA). " +
	"I started my programming journey from my first ever CS course, and I've been loving it ever since. Till this day, I'm still fascinated with " +
	"what can be done with the technologies that are widely available to us today. I love it because it's like solving a puzzle, except there are " +
	"a million different ways to solve it. Personally, I love building projects that I'm passionate about and will continue doing so in the foreseeable future.";

export const TECHNOLOGIES = [];

export const PROJECTS = [
	{
		id: 1,
		title: "Event Tracer",
		description:
			"Example 1 description... a very cool project indeed. Now it's time to yap yap yap yap yap yap yap yap yap yap yap yap yap yap " +
			"yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap " +
			"yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap " +
			"yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap " +
			"yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap " +
			"yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap " +
			"yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap " +
			"yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap",
		timeFrame: "x - y",
		technologies: ["Next.js", "MongoDB", "TailwindCSS", "Clerk", "Stripe", "shadcn", "uploadthing"],
		image: eventTracerImg,
		link: "https://event-tracer.vercel.app/",
		githubLink: "https://github.com/riiich/EventTracer",
	},
	{
		id: 2,
		title: "Reddit Clone",
		description:
			"Project 2 description... a very cool project indeed. Now it's time to yap yap yap yap yap yap yap yap yap yap yap yap yap yap " +
			"yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap " +
			"yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap " +
			"yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap",
		timeFrame: "x - y",
		technologies: ["React.js", "Spring Boot", "MySQL"],
		image: aboutImg,
		link: null,
		githubLink: {
			frontEnd: "https://github.com/riiich/reddit-clone-front-end",
			backEnd: "https://github.com/riiich/reddit-clone-spring-boot",
		},
	},
	{
		id: 3,
		title: "MyMusicWrap",
		description:
			"Project 3 description... a very cool project indeed. Now it's time to yap yap yap yap yap yap yap yap yap yap yap yap yap yap " +
			"yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap " +
			"yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap " +
			"yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap",
		timeFrame: "x - y",
		technologies: ["React.js", "Express.js", "MongoDB"],
		image: mymusicwrapImg,
		link: "https://my-music-wrap.vercel.app/",
		githubLink: "https://github.com/riiich/MyMusicWrap",
	},
	{
		id: 4,
		title: "MoonTrek NASA JPL (Senior Capstone)",
		description:
			"Project 4 description... a very cool project indeed. Now it's time to yap yap yap yap yap yap yap yap yap yap yap yap yap yap " +
			"yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap " +
			"yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap " +
			"yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap",
		timeFrame: "x - y",
		technologies: ["Vue.js", "MySQL", "tech3"],
		image: moontrekImg,
		link: null,
		githubLink: null,
	},
];

export const EXPERIENCES = [
	{
		id: 1,
		placeOfEmployment: "Hooshik Cafe",
		position: "Barista/Manager",
		dateEmployed: "02/2019 - 03/2020",
		description:
			"It was a very fun job because I was able to work with friends that I've known for a very long time. The desserts were also very tasty. " +
			"From this point on, this is just yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap " +
			"yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap.",
	},
];
