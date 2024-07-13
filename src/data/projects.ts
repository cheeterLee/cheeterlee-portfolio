export type Project = {
	title: string
	techs: string[]
	link: string
	isComingSoon?: boolean
}

export type Experience = {
	company: string
	icon: string
	title: string
	time: string
  location: string
	techs: string[]
  link: string
}

const experiences: Experience[] = [
	{
		company: "Barclays",
		icon: "/barclays-logo.jpg",
		title: "Technology Developer Intern",
		time: "June 2024 - August 2024",
    location: "Knutsford, United Kingdom",
		techs: ["Java", "Spring Boot", "Spark", "AWS", "Docker"],
    link: "https://www.barclays.co.uk/"
	},
	{
		company: "Moka",
		icon: "/mokahr_logo.jpeg",
		title: "Frontend Software Engineer Intern",
		time: "May 2023 - August 2023",
    location: "Beijing, China",
		techs: ["TypeScript / JavaScript", "React", "Redux", "Node.js"],
    link: "https://mokahr.com/"
	},
]

const projects: Project[] = [
	{
		title: "RPC Framework",
		techs: ["Java", "Spring Boot", "ZooKeeper"],
		link: "https://puppetfactory.app/",
	},
	{
		title: "Track25",
		techs: ["NextJS", "React", "JavaScript", "TypeScript", "PostgreSQL"],
		link: "https://github.com/MaeWolff/create-nextjs-app-bash-script",
	},
	{
		title: "Jack Compiler",
		techs: ["C"],
		link: "https://github.com/MaeWolff/dictionary-app",
	},
]

export default experiences
