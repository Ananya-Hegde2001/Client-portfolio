import React from "react";

import Container from "@/components/common/Container";

export default function Footer() {
    return (
        <Container className="mt-4 relative z-10 rounded-2xl p-4 sm:p-6 bg-transparent mx-auto max-w-3xl flex justify-center">
            <div className="flex flex-col items-center justify-center gap-1 text-xs text-muted-foreground">
                <div className="flex gap-1 items-center">
                    <span>Designed and developed by</span>
                    <span className="font-medium text-foreground underline underline-offset-2">Sapana Dashoni</span>
                </div>
                <div className="flex gap-1 justify-center">
                    <span>&copy; {new Date().getFullYear()} All Rights Reserved</span>
                </div>
            </div>
        </Container>
    );
}