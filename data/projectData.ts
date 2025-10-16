import { Project } from "@/types/project";

export const projects: Project[] = [
    {
        id: 0,
        image: "resolve.png",
        title: "Resolve",
        tag: "Web Development",
        description: "Resolve is a secure online voting platform that helps you create your Team Lead election fast, and monitor live results for transparency.",
        technologies: ["NextJS", "Redis", "NestJS", "PostgreSQL"],
        links: {
            github: "https://github.com/",
            live: "https://resolve.vote"
        },
        photos: ["resolve.png", "resolve-1.png", "resolve-2.png", "resolve-3.png", "resolve-4.png"]
    },
    {
        id: 1,
        image: "chat-bot.png",
        title: "Chrome AI Chat Assistant",
        tag: "Web Development",
        description: "Peliah's Chrome AI Chat Assistant is a modern, AI-powered chat application built with Next.js and integrated with Chrome's AI APIs. It provides features like language detection, text summarization, and translation, all wrapped in a sleek Neo-Brutalism design.",
        technologies: ["NextJS", "TypeScript", "Tailwind CSS", "Chrome AI APIs"],
        links: {
            github: "https://github.com/peliah/ai-chrome-chatbot",
            live: "https://ai-chrome-chatbot-peliah.vercel.app/"
        },
        photos: ["chat-bot.png", "chat-bot-chat.png"]
    },
    {
        id: 3,
        image: "meet-n-greet-1.png",
        title: "Meet-N-Greet",
        tag: "Event management platform",
        description: "Browse and book events with just a few clicks. Our platform makes it easy to find and secure your spot.",
        technologies: ["NextJS", "Zod", "Clerk", "Supabase", "Prisma"],
        links: {
            github: "https://github.com/",
            live: "https://meet-n-greet-web.vercel.app/"
        },
        photos: ["meet-n-greet-1.png", "meet-n-greet-2.png", "meet-n-greet-3.png"]
    },
    {
        id: 8,
        image: "e-library-237.png",
        title: "E-Library 237",
        tag: "Web Development",
        description: "E-Library 237 is a digital library platform designed to provide users with access to a wide range of books and educational resources. The platform features a user-friendly interface, allowing users to search for books and other stationery items for all classes and ages, view details, and manage their reading lists.",
        technologies: ["WordPress", "Elementor", "PHP"],
        links: {
            github: "",
            live: "https://e-library237.com/"
        },
        photos: ["e-library-237.png", "e-library-237-1.png", "e-library-237-2.png", "e-library-237-3.png"]
    },
    {
        id: 2,
        image: "collers.png",
        title: "E-commerce Platform",
        tag: "Full Stack",
        description: "An e-commerce platform allowing users to browse products, add them to a cart, and complete purchases with integrated payment options.",
        technologies: ["Node.js", "Express", "MongoDB", "React", "Stripe"],
        links: {
            github: "https://github.com/",
            live: ""
        },
        photos: ["collers.png", "ecommerce.png"]
    },
    {
        id: 4,
        image: "sorting-algorithm.png",
        title: "Sorting Algorithm Visualizer",
        tag: "Web Development",
        description: "A web-based sorting algorithm visualizer that helps users understand how sorting algorithms work.",
        technologies: ["HTML", "JavaScript", "CSS"],
        links: {
            github: "https://github.com/",
            live: "http://sorting-visuals.surge.sh/"
        },
        photos: ["sorting-algorithm.png"]
    },
    {
        id: 5,
        image: "file-transmorpher.png",
        title: "File Transmorpher",
        tag: "Web Development",
        description: "A web-based file transmorpher that helps users transform files from one format to another.",
        technologies: ["NextJS", "TypeScript", "Tailwind CSS"],
        links: {
            github: "https://github.com/",
            live: "https://file-transmorpher.vercel.app/"
        },
        photos: ["file-transmorpher.png"]
    },
    {
        id: 6,
        image: "color-guess.png",
        title: "Color Guessing Game",
        tag: "Web developement",
        description: "A fun and interactive color guessing game designed in the Neobrutalism style. The game challenges players to match the target color from a set of options, with dynamic feedback and animations.",
        technologies: ["HTML", "JavaScript", "CSS"],
        links: {
            github: "https://github.com/peliah/color-guessing-game",
            live: "https://color-guessing-game-peliah.vercel.app/"
        },
        photos: ["color-guess.png"]
    },
    {
        id: 7,
        image: "lecture_upload.png",
        title: "Lecture Recording and Transcription",
        tag: "Web Development",
        description: "This project is a Lecture Recording and Transcription App that allows users to record or upload audio lectures, assign them to courses and classes, and generate transcriptions using the Vosk Speech Recognition engine. The app also includes a feature to read and listen to transcriptions simultaneously.",
        technologies: ["Python", "SQLite", "HTML", "Bootstrap", "Vosk Model", "FFmpeg"],
        links: {
            github: "https://github.com/Peliah/lecture_transcriber",
            live: ""
        },
        photos: ["lecture_upload.png", "lecture_manage.png", "lecture_record.png"]
    },
];
