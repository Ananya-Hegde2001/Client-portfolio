import { ReactNode } from "react";

import AWS from "@/components/technologies/AWS";
import Docker from "@/components/technologies/Docker";
import BootStrap from "@/components/technologies/BootStrap";
import NPM from "@/components/technologies/NPM";
import Html from "@/components/technologies/Html";
import CSS from "@/components/technologies/CSS";
import ExpressJs from "@/components/technologies/ExpressJs";
import JavaScript from "@/components/technologies/JavaScript";
import Java from "@/components/technologies/Java";
import Cpp from "@/components/technologies/Cpp";
import Python from "@/components/technologies/Python";
import MongoDB from "@/components/technologies/MongoDB";
import NodeJs from "@/components/technologies/NodeJs";
import Postman from "@/components/technologies/Postman";
import ReactIcon from "@/components/technologies/ReactIcon";
import SQL from "@/components/technologies/SQL";
import TailwindCss from "@/components/technologies/TailwindCss";
import Vercel from "@/components/technologies/Vercel";
import Shadcn from "@/components/technologies/Shadcn";

export type SkillItem = {
    name: string;
    icon: ReactNode;
};

export const skillsConfig: SkillItem[] = [
    {
        name: "HTML",
        icon: <Html />
    },
    {
        name: "CSS",
        icon: <CSS />
    },
    {
        name: "JavaScript",
        icon: <JavaScript />
    },
    {
        name: "C/C++",
        icon: <Cpp />
    },
    {
        name: "Python",
        icon: <Python />
    },
    {
        name: "Java",
        icon: <Java />
    },
    {
        name: "React",
        icon: <ReactIcon />
    },
    {
        name: "Tailwind CSS",
        icon: <TailwindCss />
    },
    {
        name: "Bootstrap",
        icon: <BootStrap />
    },
    {
        name: "AWS",
        icon: <AWS />
    },
    {
        name: "Docker",
        icon: <Docker />
    },
    {
        name: "Node.js",
        icon: <NodeJs />
    },
    {
        name: "Express.js",
        icon: <ExpressJs />
    },
    {
        name: "MongoDB",
        icon: <MongoDB />
    },
    {
        name: "SQL",
        icon: <SQL />
    },
    {
        name: "Postman",
        icon: <Postman />
    },
    {
        name: "Vercel",
        icon: <Vercel />
    },
    {
        name: "npm",
        icon: <NPM />
    },
    {
        name: "Shadcn UI",
        icon: <Shadcn />
    }
]