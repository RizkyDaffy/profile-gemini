
import React from 'react';
import { ProfileData } from './types';

export const PROFILE: ProfileData = {
  name: "RIZKY DAFFY",
  username: "rizky.daffy",
  role: "Founder & CEO",
  company: "KlyroByte",
  tagline: "I’m Dave A Fullstack Developer and experienced leader with a strong commitment to delivering innovative, high-quality solutions. My expertise includes front-end and back-end web development, UI/UX design, networking, and cybersecurity. I have a proven track record in leading and developing projects, and I always strive to achieve higher levels of success on KlyroSoft and other projects. ",
  // Using a higher resolution cinematic portrait
  imageUrl: "https://github.com/RizkyDaffy/rizkydaffy.github.io/blob/main/cdn/gweh.jpg?raw=true",
  socials: {
    email: "achraf@example.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    discord: "https://discord.com"
  }
};

export const BENEFITS = [
  {
    title: "Cinematic Product Vision",
    description: "I don't just build interfaces; I create digital experiences with the precision and storytelling of editorial design.",
    icon: (props: any) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m2 12 10-9 10 9-10 9-10-9Z"/><path d="m12 3 1.5 6h5l-4 3.5 1.5 6-4-3.5-4 3.5 1.5-6-4-3.5h5L12 3z"/></svg>
  },
  {
    title: "Engineering Excellence",
    description: "Deep expertise in modern frameworks ensures that the high-end visuals are matched by robust, scalable code.",
    icon: (props: any) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>
  },
  {
    title: "Strategic Growth",
    description: "As a founder, I understand the intersection of technology and business, ensuring every pixel serves a purpose.",
    icon: (props: any) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
  },
  {
    title: "Rapid Execution",
    description: "I prioritize speed without sacrificing quality, moving from concept to high-fidelity prototype in record time.",
    icon: (props: any) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m13 2-2 10h8l-2 10"/><path d="m13 2-9 10h8l-2 10"/></svg>
  }
];

export const LIFE_IMAGES = [
  { url: "https://rizkydaffy.github.io/cdn/tentang.jpg", alt: "European architecture" },
  { url: "https://rizkydaffy.github.io/cdn/2025-11-30-08-46-13-008.jpg?raw=true", alt: "Coding setup" },
  { url: "https://rizkydaffy.github.io/cdn/2025-11-30-07-11-03-431.jpg?raw=true", alt: "City street at night" },
  { url: "https://github.com/RizkyDaffy/rizkydaffy.github.io/blob/main/cdn/IMG-20240821-WA0082.jpg?raw=true", alt: "Breakfast in Barcelona" },
  { url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop", alt: "Modern building detail" },
  { url: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?q=80&w=1000&auto=format&fit=crop", alt: "Classic urban facade" },
];

export const TOOLS = [
  { name: 'Android', icon: 'https://cdn.simpleicons.org/android/A4C639' },
  { name: 'AWS', icon: 'https://cdn.simpleicons.org/amazonaws/232F3E' },
  { name: 'Azure', icon: 'https://cdn.simpleicons.org/microsoftazure/0078D4' },
  { name: 'Bootstrap', icon: 'https://cdn.simpleicons.org/bootstrap/7952B3' },
  { name: 'CSS3', icon: 'https://cdn.simpleicons.org/css3/1572B6' },
  { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
  { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/F24E1E' },
  { name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase/FFCA28' },
  { name: 'Flutter', icon: 'https://cdn.simpleicons.org/flutter/02569B' },
  { name: 'Google Cloud', icon: 'https://cdn.simpleicons.org/googlecloud/4285F4' },
  { name: 'Ionic', icon: 'https://cdn.simpleicons.org/ionic/3880FF' },
  { name: 'Java', icon: 'https://cdn.simpleicons.org/openjdk/FF0000' },
  { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  { name: 'Kotlin', icon: 'https://cdn.simpleicons.org/kotlin/7F52FF' },
  { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
  { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/000000' },
  { name: 'Nginx', icon: 'https://cdn.simpleicons.org/nginx/009639' },
  { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
  { name: 'Oracle', icon: 'https://cdn.simpleicons.org/oracle/F80000' },
  { name: 'PHP', icon: 'https://cdn.simpleicons.org/php/777BB4' },
  { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
  { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
];

export const WORKS = [
  {
    title: "SyntaxHunt",
    subtitle: "#1 code bounty on south east asia",
    description: "#1 code bounty on south east asia",
    imageUrl: "https://user-images.githubusercontent.com/35271042/118224532-3842c400-b438-11eb-923d-a5f66fa6785a.png",
    cta: "see projects"
  },
  {
    title: "School Managament System",
    subtitle: "Manage your school administration data on second",
    description: "Detailed breakdown of the digital illustration process.",
    imageUrl: "https://github.com/RizkyDaffy/rizkydaffy.github.io/blob/main/cdn/crud.jpg?raw=true",
    cta: "see projects"
  },
  {
    title: "Better Youtube Music",
    subtitle: "Youtube Music but on Apple Music style",
    description: "Refining the foundations of character design through ink.",
    imageUrl: "https://github.com/RizkyDaffy/rizkydaffy.github.io/blob/main/cdn/yt.jpg?raw=true",
    cta: "see projects"
  }
];

export const Icons = {
  Email: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  Instagram: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  ),
  X: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  ),
  LinkedIn: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  Discord: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 127.14 96.36" fill="currentColor" {...props}>
      <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.71,32.65-1.82,56.6.4,80.21a105.73,105.73,0,0,0,32.17,16.15,77.7,77.7,0,0,0,6.89-11.11,64.62,64.62,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a64.59,64.59,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1,105.25,105.25,0,0,0,32.19-16.14c2.72-27.34-4.57-51.05-19.34-72.14ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
    </svg>
  ),
  Verified: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22.5 12.5c0-1.58-.88-2.95-2.18-3.66.54-1.22.4-2.66-.41-3.74s-2.12-1.48-3.39-1.23c-.91-1.46-2.58-2.31-4.27-2.12-1.69.2-3.08 1.4-3.55 3.03-1.61-.15-3.14.73-3.88 2.21-1.37.59-2.32 1.93-2.32 3.51s.95 2.92 2.32 3.51c.74 1.48 2.27 2.36 3.88 2.21.47 1.63 1.86 2.83 3.55 3.03 1.69.2 3.36-.65 4.27-2.12 1.27.25 2.58-.15 3.39-1.23s.95-2.52.41-3.74c1.3-.71 2.18-2.08 2.18-3.66zm-11.83 3.82l-3.36-3.36 1.18-1.18 2.18 2.18 4.62-4.62 1.18 1.18-5.8 5.8z" />
    </svg>
  )
};
