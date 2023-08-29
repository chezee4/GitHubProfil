import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode,
}

export const Container = ({ children }: ContainerProps) => (
  <div className=" md:w-full md:py-6  max-w-[730px] m-auto">
    {children}
  </div>
);
