export interface Project {
    id: number;
    image: string;
    title: string;
    tag: string;
    description: string;
    technologies: string[];
    links: {
        github: string;
        live: string;
    },
    photos: string[];

}