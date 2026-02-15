import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'adhinarayana.official@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Adinarayana, I am reaching out to you because...',

    oldPortfolio: 'https://www.legacy.me.toinfinite.dev',
    upworkProfile: 'https://www.upwork.com/freelancers/adinarayana',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Adhinarayanakunchala' },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/adinarayana-kunchala/',
    },
    { name: 'instagram', url: 'https://www.instagram.com/its.adhidarling/' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'Sass',
            icon: '/logo/sass.png',
        },
        {
            name: 'Firebase',
            icon: '/logo/firebase.svg',
        },
    ],
    // backend: [
    //     {
    //         name: 'Node.js',
    //         icon: '/logo/node.png',
    //     },
    //     {
    //         name: 'NestJS',
    //         icon: '/logo/nest.svg',
    //     },
    //     {
    //         name: 'Express.js',
    //         icon: '/logo/express.png',
    //     },
    // ],
    // database: [
    //     {
    //         name: 'MySQL',
    //         icon: '/logo/mysql.svg',
    //     },
    //     {
    //         name: 'PostgreSQL',
    //         icon: '/logo/postgreSQL.png',
    //     },
    //     {
    //         name: 'MongoDB',
    //         icon: '/logo/mongodb.svg',
    //     },
    //     {
    //         name: 'Prisma',
    //         icon: '/logo/prisma.png',
    //     },
    // ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Postman',
            icon: '/logo/postman.svg',
        },
        {
            name: 'Bitbucket',
            icon: '/logo/bitbucket.svg',
        },
        {
            name: 'VS Code',
            icon: '/logo/vs-code-svgrepo-com.svg',
        },
        {
            name: 'npm',
            icon: '/logo/npm-svgrepo-com.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Dr. Pick',
        slug: 'dr-pick',
        liveUrl: 'https://drpick.in/',
        year: 2025,
        description: `
          Medical Appointment & Management Platform. <br/> <br/>
          A comprehensive healthcare platform streamlining doctor appointments and patient management.
          Features include real-time availability checking, secure patient records, and automated appointment reminders.
          Designed to improve the efficiency of clinics and enhance the patient experience with a user-friendly interface.
        `,
        role: `
          Frontend Developer <br/>
          • Developed the patient-facing booking interface with intuitive navigation and calendar integration.<br/>
          • Implemented secure authentication and dashboard for doctors to manage schedules and patient history.<br/>
          • Optimized the application for speed and accessibility, ensuring a seamless experience across devices.
        `,
        techStack: ['Next.js', 'React', 'Tailwind CSS', 'REST APIs'],
        thumbnail:
            '/projects/images/screencapture-drpick-in-2026-02-15-11_59_25.png',
        longThumbnail:
            '/projects/images/screencapture-drpick-in-2026-02-15-11_59_25.png',
        images: [
            '/projects/images/screencapture-drpick-in-2026-02-15-11_59_25.png',
        ],
    },
    {
        title: 'RoboScorp',
        slug: 'roboscorp',
        liveUrl: 'https://roboscorp.com/',
        year: 2025,
        description: `
          Robotics & Automation Solutions. <br/> <br/>
          A corporate platform showcasing innovative robotics and automation solutions for various industries.
          Highlights include interactive product showcases, detailed case studies, and corporate service information.
          Built to demonstrate technical expertise and modern engineering solutions.
        `,
        role: `
          Frontend Developer <br/>
          • Built a high-performance landing page with interactive elements to showcase robotic products.<br/>
          • Integrated 3D models or dynamic visuals (if applicable) to demonstrate automation capabilities.<br/>
          • Ensured SEO optimization and fast load times for better market reach and user retention.
        `,
        techStack: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
        thumbnail:
            '/projects/images/screencapture-roboscorp-2026-02-15-12_02_10.png',
        longThumbnail:
            '/projects/images/screencapture-roboscorp-2026-02-15-12_02_10.png',
        images: [
            '/projects/images/screencapture-roboscorp-2026-02-15-12_02_10.png',
        ],
    },
    {
        title: 'City Rents',
        slug: 'city-rents',
        liveUrl: 'https://dev.cityrents.in/',
        year: 2025,
        description: `
          Property Rental & Management Platform. <br/> <br/>
          Built and owned the frontend implementation for City Rents, a live property rental and management platform.
          Implemented server-rendered pages using Next.js (SSR/SSG) to improve SEO, page load performance, and discoverability of property listings.
          Developed dynamic search, filtering, and categorized property browsing for residential, commercial, and industrial properties.
        `,
        role: `
          Frontend Developer <br/>
          • Integrated React Query with REST APIs to manage real-time property data, caching strategies, and background synchronization.<br/>
          • Implemented end-to-end payment flows for booking and rental transactions, including advance payments and agreement-related charges across the platform.<br/>
          • Built UI workflows to handle rental agreements, payment confirmation states, and transaction validation as part of the booking lifecycle.<br/>
          • Optimized UI performance and responsiveness to ensure a consistent experience across mobile and desktop devices.
        `,
        techStack: [
            'Next.js',
            'TypeScript',
            'Redux',
            'React Query',
            'Tailwind CSS',
        ],
        thumbnail:
            '/projects/images/screencapture-dev-cityrents-in-2026-02-15-12_02_40.png',
        longThumbnail:
            '/projects/images/screencapture-dev-cityrents-in-2026-02-15-12_02_40.png',
        images: [
            '/projects/images/screencapture-dev-cityrents-in-2026-02-15-12_02_40.png',
        ],
    },
    {
        title: 'Cenzo',
        slug: 'cenzo',
        liveUrl: 'https://cenzo.in',
        year: 2025,
        description: `
          E-commerce Marketplace Platform. <br/> <br/>
          Developed the frontend for Cenzo, an e-commerce platform offering groceries, daily essentials, and lifestyle products with fast delivery and dynamic browsing.
          Built responsive product listing and detail pages to support dynamic filtering, search, and category browsing on the public marketplace.
        `,
        role: `
          Frontend Developer <br/>
          • Implemented state management using Redux for cart state, user sessions, and synchronized product inventory UI updates.<br/>
          • Created an admin dashboard interface to manage products, orders, and vendors, enabling real-time updates and operational control.<br/>
          • Integrated REST APIs for product data, user authentication, order processing, and inventory synchronization with backend services.<br/>
          • Ensured cross-browser compatibility and performance optimisation for both public and admin views across devices.
        `,
        techStack: ['Next.js', 'React', 'Redux', 'Tailwind CSS', 'REST APIs'],
        thumbnail:
            '/projects/images/screencapture-cenzo-in-2026-02-15-11_59_55.png',
        longThumbnail:
            '/projects/images/screencapture-cenzo-in-2026-02-15-11_59_55.png',
        images: [
            '/projects/images/screencapture-cenzo-in-2026-02-15-11_59_55.png',
        ],
    },
    {
        title: 'Fluencyo',
        slug: 'fluencyo',
        liveUrl: 'https://www.fluencyo.com',
        year: 2025,
        description: `
          Language Learning Platform. <br/> <br/>
          Built and maintained the frontend for a language learning platform focused on real-time speaking and interactive lesson experiences.
          Developed responsive user-facing interfaces for learners to access language content, practice sessions, and engagement flows.
        `,
        role: `
          Frontend Developer <br/>
          • Designed and implemented admin dashboard interfaces with role-based access to manage users, learning data, and platform operations.<br/>
          • Used Redux for predictable state management across learner and admin modules, supporting real-time UI updates.<br/>
          • Designed reusable UI components with Tailwind CSS and Framer Motion to ensure consistency, performance, and smooth user interactions.<br/>
          • Optimized application performance, accessibility, and cross-browser compatibility for both public and admin platforms.
        `,
        techStack: ['React.js', 'Redux', 'Tailwind CSS', 'Framer Motion'],
        thumbnail:
            '/projects/images/screencapture-fluencyo-2026-02-15-12_01_12.png',
        longThumbnail:
            '/projects/images/screencapture-fluencyo-2026-02-15-12_01_12.png',
        images: [
            '/projects/images/screencapture-fluencyo-2026-02-15-12_01_12.png',
        ],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Frontend Developer',
        company: 'M Touch Labs Private Limited',
        duration: 'Aug 2023 - Present',
        description: `
          • Owned frontend architecture and feature development for multiple production React and Next.js applications used by real users.<br/>
          • Designed and implemented real-time frontend features using WebSockets for live data synchronization.<br/>
          • Integrated secure payment gateways (Razorpay, Stripe) with validation, error handling, and edge-case coverage.<br/>
          • Managed complex application state using Redux Toolkit and Zustand for predictable data flow.<br/>
          • Worked closely with backend and design teams to translate product requirements into scalable, maintainable frontend solutions.
        `,
    },
];
