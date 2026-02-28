"use client";

import React from "react";
import { HeroConfig } from "@/config/Hero";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { motion } from "motion/react";

import Container from "@/components/common/Container";
import CV from "../svgs/CV";
import SendIcon from "../svgs/SendIcon";
import { Button } from "../ui/button";

const roles = ["Engineer", "Developer", "Builder", "Open Source Contributor"];

export default function Hero() {
    const { badge, socialsData } = HeroConfig;
    const [roleIndex, setRoleIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <Container className="relative z-10 rounded-2xl border p-6 sm:p-8 pt-14 sm:pt-12 bg-white/60 border-black/8 dark:bg-white/2 dark:border-white/8 mx-auto max-w-3xl overflow-hidden">
            {/* Subtle radial glow */}
            <div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full bg-green-400/10 blur-3xl dark:bg-green-500/8" />

            <div className="mb-4">
                <div className="flex items-center gap-2 flex-wrap">
                    <h1 className="font-space-grotesk text-xl sm:text-2xl font-bold text-foreground">
                        Sapana Dashoni
                    </h1>
                    <Image
                        src={badge}
                        alt="badge"
                        width={24}
                        height={24}
                        className="h-6 w-6"
                    />
                </div>
                <div className="flex items-center gap-1.5 mt-1 h-6 overflow-hidden">
                    <span className="text-muted-foreground text-sm">21</span>
                    <span className="text-muted-foreground text-sm">•</span>
                    <motion.span
                        key={roleIndex}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.35 }}
                        className="text-sm font-medium text-green-600 dark:text-green-400"
                    >
                        {roles[roleIndex]}
                    </motion.span>
                </div>
            </div>

            <p className="text-sm sm:text-base text-foreground/70 leading-relaxed mb-5 sm:mb-6">
                I love starting from a blank slate and turning it into a finished product. From frontend and backend to deployment, I build software that&apos;s practical, usable, and reliable.{" "}
                <span className="font-medium text-foreground/90">Amazon MLSS&apos;25 Scholar</span> |{" "}
                <span className="font-medium text-foreground/90">Grace Hopper Celebration&apos;24 Scholar</span> | Open Source Contributor.
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3 mb-5 sm:mb-6">
                <Button
                    asChild
                    variant={'outline'}
                    className="px-4 sm:px-5 py-3 sm:py-2.5 text-xs sm:text-sm font-medium transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md"
                >
                    <Link href={`/resume`}>
                        <CV />
                        Resume / CV
                    </Link>
                </Button>

                <Button
                    asChild
                    variant={'default'}
                    className="px-4 sm:px-5 py-3 sm:py-2.5 text-xs sm:text-sm font-medium main-button transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 dark:text-white"
                >
                    <a href="mailto:sapanadashoni@gmail.com">
                        <SendIcon />
                        Let&apos;s talk
                    </a>
                </Button>
            </div>

            <div className="mb-1">
                <p className="text-xs sm:text-sm mb-2 sm:mb-3 text-muted-foreground">
                    Find me on the <strong className="text-foreground">Internet</strong>
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {socialsData.map((social) => (
                        <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer">
                            <Button
                                variant={"outline"}
                                className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl text-xs sm:text-sm flex items-center gap-1.5 transition-all duration-300 ease-in-out hover:shadow-md hover:scale-105"
                            >
                                {social.icon}
                                {social.name}
                            </Button>
                        </a>
                    ))}
                </div>
            </div>
        </Container>
    );
}