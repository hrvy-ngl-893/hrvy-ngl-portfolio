import Image from "next/image";
import { NavItem } from "../components/layout/Header";

import { ArrowUpRight, Compass, Shield, Sparkles, Zap } from "lucide-react";

const navItems: NavItem[] = [
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/blog", label: "Blog" },
    { href: "/resources", label: "Resources" },
];

export default function Home() {
    return (
        <>
            <div className="relative h-100 sm:h-100 md:h-220 w-full transition-all duration-75 ease-in-out overflow-hidden">
                <Image
                    src="/images/kakehashi.JPEG"
                    alt="Home background"
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
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 mx-auto w-full max-w-7xl transition-all ease-in-out duration-200">
                {navItems.map((item) => (
                    <div className="group 
                        relative 
                        flex 
                        flex-col 
                        justify-between 
                        overflow-hidden 
                        rounded-xl 
                        min-h-400px
                        p-4 
                        text-foreground 
                        shadow-md 
                        transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                        cursor-pointer"
                        key={item.label}
                    >
                        <Image
                            src="/valor-house.jpeg"
                            alt="Footer background landscape"
                            fill
                            priority
                            className="object-center object-cover absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="
                            absolute 
                            inset-0 
                            bg-linear-to-b 
                            from-transparent
                            via-background/80
                            to-background/98
                            group-hover:to-accent-blue/95 
                            transition-colors 
                            duration-300" 
                        />
                        <div className="relative z-10 flex justify-between items-center">
                            <div className="ml-auto flex items-center justify-center w-8 h-8 rounded-full bg-background/10 backdrop-blur-xs text-foreground opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                                <ArrowUpRight className="w-4 h-4" />
                            </div>
                        </div>

                        <div className="relative z-10 mt-auto pt-12 flex flex-col items-start">

                            {/* <div className="mb-4 inline-flex items-center justify-center p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-inner group-hover:bg-accent-blue/80 group-hover:border-accent-blue transition-all duration-300">
                                {item.icon || <Sparkles className="w-6 h-6" />}
                            </div> */}

                            <h3 className="text-xl font-bold tracking-tight text-foreground mb-1 group-hover:text-text-muted transition-colors duration-200">
                                {item.label}
                            </h3>
                            <p className="text-sm leading-none text-slate-300 line-clamp-3 font-normal">
                                {"Discover seamless workflows, actionable analytics, and integrated system tools."}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex h-600">
                <h3>Home</h3>
            </div>
        </>
    );
}

/*

function TileGrid({ navItems: NavItem[] }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 mx-auto w-full max-w-7xl transition-all ease-in-out duration-200">
            {navItems.map((item) => (
                <div
                    key={item.label}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-2xl min-h-[320px] p-6 text-white border border-white/10 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
                >
                    
                    <img
                        src={item.image || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"}
                        alt={item.label}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />


                    <div className="relative z-10 flex justify-between items-center">
                        {item.tag && (
                            <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/90">
                                {item.tag}
                            </span>
                        )}
                        <div className="ml-auto flex items-center justify-center w-8 h-8 rounded-full bg-white/10 backdrop-blur-md text-white/80 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                            <ArrowUpRight className="w-4 h-4" />
                        </div>
                    </div>

                    <div className="relative z-10 mt-auto pt-12 flex flex-col items-start">
   
                        <div className="mb-4 inline-flex items-center justify-center p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-inner group-hover:bg-accent-blue/80 group-hover:border-accent-blue transition-all duration-300">
                            {item.icon || <Sparkles className="w-6 h-6" />}
                        </div>

                        <h3 className="text-xl font-bold tracking-tight text-white mb-2 group-hover:text-sky-200 transition-colors duration-200">
                            {item.label}
                        </h3>
                        <p className="text-sm text-slate-300 line-clamp-2 leading-relaxed font-normal">
                            {item.description || "Discover seamless workflows, actionable analytics, and integrated system tools."}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

*/