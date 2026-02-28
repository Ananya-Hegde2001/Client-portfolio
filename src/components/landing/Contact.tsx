import React from "react";
import Image from "next/image";
import { HeroConfig } from "@/config/Hero";

import Container from "@/components/common/Container";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import AnimatedSection from "../common/AnimatedSection";

export default function Contact() {
    const { socialsData } = HeroConfig;

    return (
        <AnimatedSection>
            <Container className="mt-7 relative z-10 rounded-2xl border p-6 sm:p-8 pt-10 sm:pt-12 bg-white/60 border-black/8 dark:bg-white/2 dark:border-white/8 mx-auto max-w-3xl overflow-hidden">
                {/* Background accent */}
                <div className="pointer-events-none absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-green-400/10 blur-3xl dark:bg-green-500/8" />

                <div className="flex flex-col items-center justify-center text-center py-8 sm:py-10 relative z-10">
                    <span className="inline-block mb-3 text-xs font-semibold uppercase tracking-widest text-green-600 dark:text-green-400">
                        Let&apos;s Connect
                    </span>
                    <p className="font-space-grotesk text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-2 leading-tight">
                        Let&apos;s build something
                        <br />
                        <span className="text-green-600 dark:text-green-400">extraordinary</span> together
                    </p>
                    <p className="text-sm text-muted-foreground mb-8 max-w-sm">
                        Have an idea or opportunity? I&apos;m always open to new conversations and collaborations.
                    </p>
                    <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                        {socialsData.map((social) => {
                            const previewImage = "previewImage" in social ? social.previewImage : null;
                            const emailDisplay = "emailDisplay" in social ? social.emailDisplay : null;

                            return (
                                <Tooltip key={social.name} delayDuration={200}>
                                    <TooltipTrigger asChild>
                                        <a href={social.url} target="_blank" rel="noopener noreferrer">
                                            <Button
                                                variant="outline"
                                                className="group px-4 sm:px-5 py-2.5 sm:py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 border-border/80 hover:border-foreground/30"
                                            >
                                                <span className="transition-transform duration-300 group-hover:scale-110">
                                                    {social.icon}
                                                </span>
                                                {social.name}
                                            </Button>
                                        </a>
                                    </TooltipTrigger>
                                    <TooltipContent
                                        side="top"
                                        sideOffset={12}
                                        hideArrow
                                        className="rounded-xl overflow-hidden border border-border/50 bg-card shadow-xl p-0 w-auto max-w-[280px] text-foreground"
                                    >
                                        {previewImage ? (
                                            <div className="relative">
                                                <Image
                                                    src={previewImage}
                                                    alt={`${social.name} preview`}
                                                    width={280}
                                                    height={160}
                                                    className="object-cover w-full h-auto rounded-xl"
                                                />
                                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2">
                                                    <span className="text-xs font-medium text-white drop-shadow-sm">
                                                        {social.name}
                                                    </span>
                                                </div>
                                            </div>
                                        ) : emailDisplay ? (
                                            <div className="px-4 py-3 flex items-center gap-2 min-w-[200px]">
                                                <span className="text-muted-foreground text-xs">Email</span>
                                                <span className="text-sm font-medium text-foreground truncate" title={emailDisplay}>
                                                    {emailDisplay}
                                                </span>
                                            </div>
                                        ) : null}
                                    </TooltipContent>
                                </Tooltip>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </AnimatedSection>
    );
}
