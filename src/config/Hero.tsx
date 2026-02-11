import { GithubIcon } from "@/components/svgs/GitHub";
import { TwitterIcon } from "@/components/svgs/Twitter";
import { LinkedinIcon } from "@/components/svgs/Linkdedin";
import { AtSignIcon } from "@/components/svgs/Mail";

export const HeroConfig = {
    badge: '/assets/india-badge.png',
    socialsData: [
        {
            icon: <GithubIcon />,
            url: 'https://github.com/SapanaDashoni15',
            name: 'GitHub',
            previewImage: '/Socials/GitHub.webp',
        },
        {
            icon: <TwitterIcon />,
            url: 'https://github.com/SapanaDashoni15',
            name: 'Twitter',
            previewImage: '/Socials/X.webp',
        },
        {
            icon: <LinkedinIcon />,
            url: 'https://www.linkedin.com/in/sapanadashoni/',
            name: 'Linkedin',
            previewImage: '/Socials/Linkedin.webp',
        },
        {
            icon: <AtSignIcon />,
            url: 'mailto:sapanadashoni@gmail.com',
            name: 'Email',
            emailDisplay: 'sapanadashoni@gmail.com',
        },
    ],
};