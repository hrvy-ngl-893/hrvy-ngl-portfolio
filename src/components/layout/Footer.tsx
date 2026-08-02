"use client";

import Image from "next/image";

export function Footer() {
    return (
        <footer className="w-full">
            <div className="relative h-75 sm:h-75 md:h-130 w-full transition-all duration-75 ease-in-out overflow-hidden">
                <Image
                    src="/valor-house.jpeg"
                    alt="Footer background landscape"
                    fill
                    priority
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/90 to-background" />

                <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <div className="text-center px-6">
                        <h1 className="text-4xl md:text-6xl font-bold">
                            You can always reach me
                        </h1>
                        <p className="mt-4 text-md md:text-xl max-w-2xl">
                            Click my email below to send a message.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mx-auto w-full max-w-7xl px-[clamp(1rem,3vw,2rem)] py-12">
                <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-col gap-0 max-w-md md:max-w-xl">
                        <p className="font-medium text-foreground">Harvy Angelo D. Tan</p>
                        <p className="mt-1">
                            <a href="https://www.google.com/maps/place/Manila+City+Hall/data=!4m2!3m1!1s0x0:0xef880ce1e8275d72?sa=X&ved=1t:2428&ictx=111" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-foreground transition not-italic">
                                Manila, Metro Manila 1016 Philippines
                            </a>
                        </p>
                        <p className="mt-1">
                            <a href="mailto:harvyangelo.tan@gmail.com" className="text-text-muted hover:text-foreground transition">
                                harvyangelo.tan@gmail.com
                            </a>
                        </p>
                    </div>
                    <div className="flex flex-col gap-0 max-w-md md:max-w-md">
                        <p className="font-medium text-foreground"></p>
                        <p className="mt-1">
                            <a href="https://github.com/hrvy-ngl-893/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-foreground transition not-italic">
                                GitHub
                            </a>
                        </p>
                        <p className="mt-1">
                            <a href="https://www.linkedin.com/in/harvy-angelo-tan-3535aa1a9/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-foreground transition">
                                LinkedIn
                            </a>
                        </p>
                    </div>
                </div>
                <div className="mt-12 border-t pt-6 text-xs text-text-muted flex flex-col sm:flex-row justify-between gap-4">
                    <p>&copy; {new Date().getFullYear()} Harvy Angelo D. Tan. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}