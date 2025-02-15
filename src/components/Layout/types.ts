import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
  gradientColor?: string | string[];
  backgroundColor?: string;
  isGradient: boolean;
}

export interface IMainLayoutContainer {
  color?: string;
  isGradient: boolean;
}
