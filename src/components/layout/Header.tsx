"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, type CSSProperties } from "react";
import { Moon, Sun, User, SquareArrowRightExit, X } from "lucide-react";

type NavItem = {
    href: string;
    label: string;
};

const navItems: NavItem[] = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/blog", label: "Blog" },
    { href: "/resources", label: "Resources" },
];

export function Header() {
    const pathname = usePathname();
    const [isDark, setIsDark] = useState(true);

    // On load, read from localStorage or system settings
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "light") {
            setIsDark(false);
            document.documentElement.classList.add("light");
        } else {
            // Default to dark mode
            setIsDark(true);
            document.documentElement.classList.remove("light");
        }
    }, []);
    const toggleTheme = () => {
        const nextState = !isDark;
        setIsDark(nextState);

        if (nextState) {
            // Switching to Dark Mode
            document.documentElement.classList.remove("light");
            localStorage.setItem("theme", "dark");
        } else {
            // Switching to Light Mode
            document.documentElement.classList.add("light");
            localStorage.setItem("theme", "light");
        }
    };
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const getActivePageLabel = () => {
        const standardItem = navItems.find((item) => item.href === pathname);
        if (standardItem) return standardItem.label;
        return "Menu";
    };

    return (
        <>
            <header className="sticky top-0 z-50 text-foreground bg-background/10 backdrop-blur-xl">
                <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-[clamp(1rem,3vw,2rem)] py-3">
                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            className="flex origin-left items-center gap-1 px-3 py-1 text-sm font-bold text-accent-gold transition-all duration-200 ease-out hover:scale-110 md:hidden"
                            onClick={() => setIsMenuOpen((current) => !current)}
                        >
                            {isMenuOpen ? (
                                <X className="h-4 w-4" strokeWidth={2} />
                            ) : (
                                getActivePageLabel()
                            )}
                        </button>

                        <nav className="hidden items-center gap-16 md:flex">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`inline-block origin-left transition-all duration-200 ease-out hover:scale-110 hover:text-accent-gold ${isActive ? "text-accent-gold font-bold" : "text-text-muted"
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}
                    
                        </nav>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            className="border border-foreground/20 rounded-sm p-2 hover:border-accent-gold hover:scale-110 transition-all ease-in-out"
                        >
                            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                        </button>
                    </div>
                </div>

                {isMenuOpen ? (
                    <div className="px-6 py-4 md:hidden">
                        <nav className="flex flex-col gap-3">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`inline-block origin-left text-sm transition-all duration-200 ease-out hover:scale-110 hover:text-accent-gold ${pathname === item.href ? "text-accent-gold font-bold" : "text-text-muted"
                                        }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                ) : null}
            </header>
        </>
    );
}
