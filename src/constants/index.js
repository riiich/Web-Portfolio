import aboutImg from "../assets/images/aboutPlaceholder.png";

export const HERO_CONTENT =
	"Write an about me, specifically about relevant skills and experiences. Talk about what I want to reach for my career.";

export const ABOUT_ME_CONTENT =
	"Hi, my name is Rich, and I graduated with a Bachelor's of Science in Computer Science from California State University, Los Angeles (CSULA). " +
	"I started my programming journey from my first ever CS course, and I've been loving it ever since. Till this day, I'm still fascinated with " + 
	"what can be done with the technologies that are widely available to us today. My first spark in interest was through video games. I've always " + 
	"wondered how we were able to interact with the games through the press of some keys or switches on a keyboard or controller, and I'm glad I " + 
	"was curious enough and decided to dive a little deeper by going into Computer Science. ";

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
		technologies: ["Next.js", "MongoDB", "TailwindCSS", "Clerk", "Stripe", "shadcn"],
		image: aboutImg,
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
		image: aboutImg,
		link: "https://my-music-wrap.vercel.app/",
		githubLink: "https://github.com/riiich/MyMusicWrap",
	},
	{
		id: 4,
		title: "MoonTrek NASA JPL (Senior Capstone)",
		description:
			"Project 3 description... a very cool project indeed. Now it's time to yap yap yap yap yap yap yap yap yap yap yap yap yap yap " +
			"yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap " +
			"yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap " +
			"yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap",
		timeFrame: "x - y",
		technologies: ["Vue.js", "MySQL", "tech3"],
		image: aboutImg,
		link: null,
		githubLink: "https://github.com/riiich",
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
