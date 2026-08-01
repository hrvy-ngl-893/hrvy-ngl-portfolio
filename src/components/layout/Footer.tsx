"use client";

import Image from "next/image";

export function Footer() {
    return (
        <footer className="w-full">

            <div className="relative h-75 sm:h-75 md:h-150 w-full overflow-hidden">
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
                            Dito na lang ako
                        </h1>
                        <p className="mt-4 text-md md:text-xl max-w-2xl">
                            Reach out baby. I'm just waiting.
                        </p>
                    </div>
                </div>
            </div>


            <div className="mx-auto w-full max-w-6xl px-[clamp(1rem,3vw,2rem)] py-12">
                <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-col gap-1 max-w-md md:max-w-xl">
                        <p className="font-medium text-foreground">Harvy Angelo D. Tan</p>
                        <p className="mt-1">
                            <a href="" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-foreground transition not-italic">
                                Manila, Metro Manila 1016 Philippines
                            </a>
                        </p>
                        <p className="mt-1">
                            <a href="mailto:harvyangelo.tan@gmail.com" className="text-text-muted hover:text-foreground transition">
                                harvyangelo.tan@gmail.com
                            </a>
                        </p>
                        <p>
                            <a href="tel:+(02) 8981 8500 loc. 4152" className="text-text-muted hover:text-foreground transition">
                                (02) 8981 8500 loc. 4152
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