export interface BlogFrontmatter {
    title: string;
    description: string;
    image: string;
    date: string;
    isPublished: boolean;
}

export interface BlogPost {
    slug: string;
    frontmatter: BlogFrontmatter;
    content: string;
}

export interface Blogs {
    slug: string;
    frontmatter: BlogFrontmatter;
}

export const blogs: Blogs[] = [
    {
        slug: "https://medium.com/@sapanadashoni/react-hooks-0cb6ac34a12c",
        frontmatter: {
            title: "React Hooks — Simplifying Functional Components",
            description: "React Hooks let functional components use state and React features with simpler, cleaner code.",
            image: "/blogs/blog1.webp",
            date: "2025-12-10",
            isPublished: true
        }
    },
    {
        slug: "https://medium.com/@sapanadashoni/beginners-guide-to-start-mern-project-from-scratch-f47b13ff2044",
        frontmatter: {
            title: "Beginners guide to start MERN project from Scratch",
            description: "A beginner’s guide to understanding the MERN stack and connecting the frontend, backend, and database in a full-stack JavaScript project.",
            image: "/blogs/blog2.webp",
            date: "2026-02-12",
            isPublished: true
        }
    },
]