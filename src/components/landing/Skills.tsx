"use client";

import { skillsConfig, SkillItem } from "@/config/Skills";
import Skill from "../common/Skill";
import SkillNote from "../svgs/SkillNote";

import Container from "@/components/common/Container";
import AnimatedSection from "../common/AnimatedSection";

const skillCategories = [
    {
        label: "Languages",
        names: ["HTML", "CSS", "JavaScript", "TypeScript", "C/C++", "Python"],
    },
    {
        label: "Frontend",
        names: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "Framer Motion", "Shadcn UI"],
    },
    {
        label: "Backend & DB",
        names: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Prisma"],
    },
    {
        label: "DevOps & Tools",
        names: ["AWS", "Docker", "Vercel", "Netlify", "Postman", "Bun", "npm"],
    },
];

export default function Skills() {
    const skillMap = new Map(skillsConfig.map((s: SkillItem) => [s.name, s]));

    return (
        <AnimatedSection>
            <Container className="mt-7 relative z-10 rounded-2xl border p-4 sm:p-8 pt-8 sm:pt-8 bg-white/60 border-black/8 dark:bg-white/2 dark:border-white/8 mx-auto max-w-3xl">
                <div className="flex items-center justify-between mb-1">
                    <h1 className="font-space-grotesk text-lg sm:text-xl font-semibold text-foreground">My Skills &amp; Technologies</h1>
                    <div className="hidden sm:flex items-center text-xs text-muted-foreground">
                        <SkillNote />
                    </div>
                </div>

                <div className="mt-5 flex flex-col gap-5">
                    {skillCategories.map((category) => {
                        const items = category.names
                            .map((name) => skillMap.get(name))
                            .filter((item): item is SkillItem => item !== undefined);

                        return (
                            <div key={category.label}>
                                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                                    {category.label}
                                </p>
                                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                    {items.map((skill) => (
                                        <Skill key={skill.name} name={skill.name} href="#">
                                            {skill.icon}
                                        </Skill>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </AnimatedSection>
    );
}