import { GithubIcon } from "@/components/svgs/GitHub";
import { LinkedinIcon } from "@/components/svgs/Linkdedin";
import { AtSignIcon } from "@/components/svgs/Mail";
import LeetCodeIcon from "@/components/svgs/LeetCode";

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
            icon: <LeetCodeIcon />,
            url: 'https://leetcode.com/u/learnersapana100/',
            name: 'LeetCode',
            previewImage: '/Socials/leetcode.png',
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