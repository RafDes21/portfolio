import { ReactNode } from "react";

export interface StudiesProps {
  children: ReactNode;
}
export interface CardProps {
  id?: number;
  title: string;
  img: string;
  description: string;
  period: string;
  state?: boolean;
}
