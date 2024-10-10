import aboutImg from "../assets/images/aboutPlaceholder.png";
import moontrekImg from "../assets/images/project-images/moontrek2.jpg";
import mymusicwrapImg from "../assets/images/project-images/mymusicwrap.png";
import eventTracerImg from "../assets/images/project-images/eventTracer.png";

export const HERO_CONTENT = {
	firstSentence:
		"I have a strong passion for learning by building applications that I find interesting and fun.",
	frontEnd: "React.js, TailwindCSS, and other UI component libraries.",
	backEnd: "Node.js/Express.js or Spring Boot, MySQL",
};

export const ABOUT_ME_CONTENT =
	"Hi, my name is Rich, and I graduated with a Bachelor's of Science in Computer Science " +
	"from California State University, Los Angeles (CSULA). I started my programming journey from my " +
	"first ever CS course, and I've been loving it ever since. Till this day, I'm still fascinated with " +
	"what can be done with the technologies that are widely available to us today. I love it because " +
	"it's like solving a puzzle, except there are a million different ways to solve it. Personally, " +
	"I love building projects that I'm passionate about and will continue doing so in the foreseeable future " +
	"to hopefully share with you all here.";

export const TECHNOLOGIES = [
	"JavaScript",
	"React.js",
	"Next.js",
	"Node.js/Express.js",
	"Java",
	"Spring Boot",
	"Python",
	"MySQL",
	"PostgreSQL",
	"MongoDB",
	"Git",
];

export const PROJECTS = [
	{
		id: 1,
		title: "Event Tracer",
		description:
			"A platform for people to create and host events. Browse and purchase tickets to " +
			"publicly hosted events. ",
		timeFrame: "June 2024 - August 2024",
		technologies: [
			"Next.js",
			"MongoDB",
			"TailwindCSS",
			"Clerk",
			"Stripe",
			"shadcn",
			"uploadthing",
		],
		image: eventTracerImg,
		link: "https://event-tracer.vercel.app/",
		githubLink: "https://github.com/riiich/EventTracer",
	},
	{
		id: 2,
		title: "Reddit Clone",
		description:
			"A Reddit clone that offers the same functionality as the actual Reddit website. Users are able to create " +
			"a subreddit, create posts, comment on posts, and like posts. Users are also able to view the posts " +
			"that they commented on and liked.",
		timeFrame: "Dec 2023 - February 2024",
		technologies: ["React.js", "Spring Boot", "MySQL", "TailwindCSS"],
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
			"View your personalized Spotify data. Displays your top artists, tracks, and recommended songs based on " +
			`your chosen time frame (past month, past 6 months, past couple of years). Add recommended songs based ` +
			"on your top tracks during a time frame in your existing playlists. ",
		timeFrame: "November 2023 - February 2024",
		technologies: ["React.js", "Express.js", "MongoDB"],
		image: mymusicwrapImg,
		link: "https://my-music-wrap.vercel.app/",
		githubLink: "https://github.com/riiich/MyMusicWrap",
	},
	{
		id: 4,
		title: "MoonTrek NASA JPL (Senior Capstone)",
		description:
			"Worked with a 10 student team on a web application in collaboration with 2 NASA JPL employees. The web app " +
			"receives an image that the user uploads from their own device and returns their image with information such " +
			"details of craters, space missions, and lunar marias overlaid over their image. " +
			"Presented our project discoveries and work completed to an audience of other students and professionals.",
		timeFrame: "August 2022 - May 2023",
		technologies: ["Vue.js", "Python", "Express.js", "MySQL"],
		image: moontrekImg,
		link: null,
		githubLink: null,
	},
];

export const EXPERIENCES = [
	{
		id: 1,
		placeOfEmployment: "Intercare Holdings Insurance",
		position: "Admin Support Clerk",
		dateEmployed: "09/2024 - Present",
		description: [
			"Digitized and organized physical copies of historical files, ensuring accurate categorization and integration into the claims database.",
			"Tracked the progress of scanned files using Excel, maintaining the latest records for efficient claims processing by adjusters."],
	},
	{
		id: 2,
		placeOfEmployment: "Hooshik Cafe",
		position: "Barista/Manager",
		dateEmployed: "02/2019 - 03/2020",
		description: [
			"Made and served Bingsu (Korean shaved-ice) to customers.",
			"Trained and managed 3 new team members to make Bingsu and how to navigate and use the cashier.",
			"",
		],
	},
];
