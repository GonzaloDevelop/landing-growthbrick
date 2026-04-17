import { cn } from '@/lib/utils';

export function Logo({ className, withWordmark = true }) {
    return (
        <div className={cn('flex items-center gap-2.5', className)}>
            <svg
                width="36"
                height="36"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="flex-shrink-0"
            >
                <defs>
                    <linearGradient id="lg-brick-grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#34d399" />
                        <stop offset="100%" stopColor="#047857" />
                    </linearGradient>
                    <linearGradient id="lg-brick-dark" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#064e3b" />
                    </linearGradient>
                    <linearGradient id="lg-arrow-grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#6ee7b7" />
                        <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                </defs>
                <rect x="6"  y="46" width="16" height="12" rx="2" fill="url(#lg-brick-dark)" />
                <rect x="24" y="46" width="16" height="12" rx="2" fill="url(#lg-brick-grad)" />
                <rect x="42" y="46" width="16" height="12" rx="2" fill="url(#lg-brick-dark)" />
                <rect x="15" y="32" width="16" height="12" rx="2" fill="url(#lg-brick-grad)" />
                <rect x="33" y="32" width="16" height="12" rx="2" fill="url(#lg-brick-dark)" />
                <rect x="24" y="18" width="16" height="12" rx="2" fill="url(#lg-brick-grad)" />
                <path d="M32 2 L24 12 L29 12 L29 18 L35 18 L35 12 L40 12 Z" fill="url(#lg-arrow-grad)" />
            </svg>
            {withWordmark && (
                <span className="font-[var(--font-display)] text-[17px] font-bold tracking-tight text-[var(--text-primary)]">
                    GrowthBrick
                </span>
            )}
        </div>
    );
}
