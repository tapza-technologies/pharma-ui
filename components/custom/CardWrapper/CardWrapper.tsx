import React from "react";

interface CardWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const CardWrapper: React.FC<CardWrapperProps> = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-2xl p-4 ${className}`}>
      {children}
    </div>
  );
};
