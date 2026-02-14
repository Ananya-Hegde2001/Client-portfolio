import JavaScript from "@/components/technologies/JavaScript";
import ReactIcon from "@/components/technologies/ReactIcon";
import TailwindCss from "@/components/technologies/TailwindCss";
import NodeJs from "@/components/technologies/NodeJs";
import Vercel from "@/components/technologies/Vercel";

export interface Technology {
    name: string;
    icon: React.ReactNode;
}

export interface Projects {
    name: string;
    description: string;
    image: string;
    gitHub?: string;
    liveLink?: string;
    technologies: Technology[];
    isCompleted: boolean;
}

export const projects: Projects[] = [
    {
        name: "Sonix",
        description: "A voice-activated browser assistant that opens websites and searches Google using the Web Speech API.",
        image: '/projects/project2.webp',
        isCompleted: false,
        gitHub: 'https://github.com/SapanaDashoni15/Sonix---A-virtual-Assistant',
        liveLink: 'https://sapanadashoni15.github.io/Sonix---A-virtual-Assistant',
        technologies: [
            {
                name: "JavaScript",
                icon: <JavaScript />,
            },
            {
                name: "React",
                icon: <ReactIcon />,
            },
            {
                name: "Tailwind CSS",
                icon: <TailwindCss />,
            },
            {
                name: "Vercel",
                icon: <Vercel />,
            },
        ]
    },
    {
        name: "Strength Space",
        description: "A responsive fitness web app with BMI calculator and automated email contact form, built using React, Node.js, Express, and Nodemailer.",
        image: '/projects/project1.webp',
        isCompleted: true,
        gitHub: 'https://github.com/SapanaDashoni15/StrengthSpace',
        liveLink: 'https://strength-space-frontend.vercel.app',
        technologies: [
            {
                name: "JavaScript",
                icon: <JavaScript />,
            },
            {
                name: "React",
                icon: <ReactIcon />,
            },
            {
                name: "Tailwind CSS",
                icon: <TailwindCss />,
            },
            {
                name: "NodeJs",
                icon: <NodeJs />,
            },
            {
                name: "Vercel",
                icon: <Vercel />,
            },
        ]
    },
]