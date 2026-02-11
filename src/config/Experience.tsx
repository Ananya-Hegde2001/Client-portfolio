import Apex from "@/components/technologies/Apex";
import LWC from "@/components/technologies/LWC";
import SOQL from "@/components/technologies/SOQL";
import Visualforce from "@/components/technologies/Visualforce";
import JavaScript from "@/components/technologies/JavaScript";
import SalesforceApis from "@/components/technologies/SalesforceApis";
export interface Technology {
    name: string;
    href: string;
    icon: React.ReactNode;
}

export interface Experience {
    company: string;
    position: string;
    location: string;
    image: string;
    description: string[];
    startDate: string;
    endDate: string;
    website: string;
    x?: string;
    linkedin?: string;
    github?: string;
    technologies: Technology[];
    isCurrent: boolean;
    isBlur?: boolean;
}

export const experiences: Experience[] = [
    {
        isCurrent: true,
        isBlur: false,
        company: 'I Dont Know Yet',
        position: 'Salesforce Developer',
        location: 'Dehradun, India',
        image: '/assets/alter-dimension.webp',
        description: [
            'Architected custom Salesforce solutions using Apex, triggers, and Lightning Web Components to automate business processes across Sales Cloud and Service Cloud.',
            'Led code optimization initiative by refactoring legacy Apex, implementing governor limit best practices, and establishing reusable component libraries.',
            'Designed and implemented integrations with third-party systems using REST/SOAP APIs and middleware platforms for reliable data synchronization.',
            'Enhanced platform efficiency through intuitive Lightning interfaces, automated workflows, and optimized page layouts while maintaining security and data integrity.',
        ],
        startDate: 'January 2026',
        endDate: 'Present',
        technologies: [
            {
                name: 'Apex',
                href: 'https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/',
                icon: <Apex />,
            },
            {
                name: 'Lightning Web Components (LWC)',
                href: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc',
                icon: <LWC />,
            },
            {
                name: 'SOQL',
                href: 'https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/',
                icon: <SOQL />,
            },
            {
                name: 'Visualforce',
                href: 'https://developer.salesforce.com/docs/atlas.en-us.pages.meta/pages/',
                icon: <Visualforce />,
            },
            {
                name: 'JavaScript',
                href: 'https://developer.mozilla.org/docs/Web/JavaScript',
                icon: <JavaScript />,
            },
            {
                name: 'Salesforce APIs',
                href: 'https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/',
                icon: <SalesforceApis />,
            },
        ],
        website: '#',
        github: '#',
        x: '#'
    },
]