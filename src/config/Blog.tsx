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
]