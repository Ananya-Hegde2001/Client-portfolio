import { type Blogs, blogs } from "@/config/Blog";
import { Link } from "next-view-transitions";

import Container from "@/components/common/Container";
import { BlogCard } from "../blog/BlogCard";
import { Button } from "../ui/button";
import AnimatedSection from "../common/AnimatedSection";

export default function Blog() {
    return (
        <AnimatedSection>
            <Container className="mt-7 relative z-10 rounded-2xl border p-4 sm:p-8 pt-8 sm:pt-8 bg-white/60 border-black/8 dark:bg-white/2 dark:border-white/8 mx-auto max-w-3xl">
                <h1 className="font-space-grotesk text-lg sm:text-xl font-semibold text-foreground">Blogs</h1>
                <div className="mt-4 flex flex-col sm:flex-row gap-8">
                    {blogs.slice(0, 2).map((blog: Blogs) => (
                        <BlogCard key={blog.slug} post={blog} />
                    ))}
                </div>
                <div className="mt-8 flex justify-center">
                    <Button variant="outline">
                        <Link href="/blogs">Show all Blogs</Link>
                    </Button>
                </div>
            </Container>
        </AnimatedSection>
    );
}