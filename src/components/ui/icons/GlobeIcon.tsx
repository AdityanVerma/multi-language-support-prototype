export function GlobeIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0 0c-2.4 0-4-4-4-9s1.6-9 4-9m0 18c2.4 0 4-4 4-9s-1.6-9-4-9M3.6 9h16.8M3.6 15h16.8"
            />
        </svg>
    );
}