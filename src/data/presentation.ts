type Social = {
	label: string
	link: string
}

type Presentation = {
	mail: string
	title: string
	description: string
	socials: Social[]
	profile?: string
}

const presentation: Presentation = {
	mail: "cheeterleework@gmail.com",
	title: "Hi, I’m Ziyi Li 👋",
	profile: "/pro.JPG",
	description:
		"I'm a final-year Computer Science student at the University of Leeds. I am familiar with *web development* and working on *distributed systems*. I love fitness, photography, and jazz hiphop.",

	socials: [
		{
			label: "LinkedIn",
			link: "https://www.linkedin.com/in/ziyi-li-0196b0196/",
		},
		{
			label: "GitHub",
			link: "https://github.com/cheeterlee",
		},
	],
}

export default presentation
