import * as React from 'react';
import { cn } from '@/lib/utils';

const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap';

const variants = {
    primary: 'bg-[var(--brand-600)] text-white hover:bg-[var(--brand-700)] shadow-lg shadow-[var(--brand-600)]/20 hover:shadow-xl hover:shadow-[var(--brand-600)]/30 hover:-translate-y-0.5',
    secondary: 'bg-white text-[var(--brand-700)] border border-[var(--brand-200)] hover:border-[var(--brand-400)] hover:bg-[var(--brand-50)]',
    ghost: 'text-[var(--text-primary)] hover:bg-[var(--surface-2)]',
    outline: 'bg-transparent text-white border border-white/30 hover:border-white/60 hover:bg-white/10',
};

const sizes = {
    sm: 'h-9 px-4',
    md: 'h-11 px-6',
    lg: 'h-13 px-8 text-base',
};

export function Button({ variant = 'primary', size = 'md', className, children, ...props }) {
    return (
        <button className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
            {children}
        </button>
    );
}
