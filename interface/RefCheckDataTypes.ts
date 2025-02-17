import { ReactNode } from "react";

export interface CaseStudy {
    id: number
    title: string
    backgroundImage: string;
    subtitle: string;
    heading: ReactNode;
    description: ReactNode;
}