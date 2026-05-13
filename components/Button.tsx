'use client';

import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  href?: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  target,
  rel,
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 justify-center cursor-pointer';
  
  const variants = {
    primary: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/50 active:scale-95',
    secondary: 'bg-gradient-to-r from-slate-700 to-slate-800 text-white hover:from-slate-600 hover:to-slate-700',
    outline: 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:bg-opacity-10 hover:shadow-lg hover:shadow-cyan-500/30',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const buttonClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} className={buttonClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClassName}>
      {children}
    </button>
  );
}
