import { ReactNode } from "react";

export interface CaseStudy {
    id: number
    title: string
    backgroundImage: string;
    subtitle: ReactNode;
    heading: ReactNode;
    description: ReactNode;
}