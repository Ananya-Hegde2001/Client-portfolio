import React from "react";

import { Button } from "../ui/button";
import Link from "next/link";
import Container from "@/components/common/Container";
import { type Projects, projects } from "@/config/Projects";
import { ProjectCard } from "../Projects/ProjectCard";
import AnimatedSection from "../common/AnimatedSection";

export default function Projects() {
    return (
        <AnimatedSection>
            <Container className="mt-7 relative z-10 rounded-2xl border p-4 sm:p-8 pt-8 sm:pt-8 bg-white/60 border-black/8 dark:bg-white/2 dark:border-white/8 mx-auto max-w-3xl">
                <h1 className="font-space-grotesk text-lg sm:text-xl font-semibold text-foreground">Things I&apos;ve built</h1>
                <div className="mt-4 flex flex-col gap-5">
                    {projects.slice(0, 2).map((project: Projects) => (
                        <ProjectCard key={project.name} project={project} />
                    ))}
                </div>
                <div className="mt-8 flex justify-center">
                    <Button variant="outline">
                        <Link href="/projects">Show all projects</Link>
                    </Button>
                </div>
            </Container>
        </AnimatedSection>
    );
}