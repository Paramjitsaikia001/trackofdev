import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Logo from "./Logo";
import Development from "../../hooks/developments.hooks";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
const navigate=useNavigate()

    const heroRef = useRef(null);
    const ctaRef = useRef(null);
    const cardsRef = useRef([]);
    const blobRef = useRef(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) {
            // Respect reduced motion: simple visibility toggles
            gsap.set([heroRef.current, ctaRef.current, blobRef.current], { autoAlpha: 1 });
            cardsRef.current.forEach((c) => gsap.set(c, { autoAlpha: 1 }));
            return;
        }

        const ctx = gsap.context(() => {
            // Hero entrance
            gsap.from(heroRef.current.querySelectorAll(".animate-in"), {
                y: 20,
                opacity: 0,
                stagger: 0.12,
                duration: 0.8,
                ease: "power3.out",
            });

            // CTA pulse on hover and quick pop
            gsap.fromTo(
                ctaRef.current,
                { scale: 0.98, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.8, ease: "elastic.out(1,0.6)", delay: 0.5 }
            );

            // Blob slow floating
            gsap.to(blobRef.current, {
                y: -20,
                repeat: -1,
                yoyo: true,
                duration: 6,
                ease: "sine.inOut",
            });

            // Feature cards with ScrollTrigger
            gsap.from(cardsRef.current, {
                y: 30,
                opacity: 0,
                stagger: 0.12,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: cardsRef.current[0],
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                },
            });

            // Subtle reveal for footer
            gsap.from(".lp-footer", {
                y: 20,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".lp-footer",
                    start: "top 90%",
                },
            });
        });

        return () => ctx.revert();
    }, []);

    const setCardRef = (el, i) => {
        if (el) cardsRef.current[i] = el;
    };
  const { data: developemntID, loading, error } = Development()
 const developments = Array.isArray(developemntID)
    ? developemntID
    : Array.isArray(developemntID?.data)
      ? developemntID.data
      : Array.isArray(developemntID?.results)
        ? developemntID.results
        : [];


    return (
        <div className="min-h-screen overflow-x-hidden overflow-y-hidden   w-full bg-gradient-to-b from-slate-900 via-neutral-900 to-slate-950 text-slate-100 antialiased">
            {/* Decorative animated blob */}
            <div
                ref={blobRef}
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 flex justify-center"
            >
                <svg
                    className="w-[90rem] h-[40rem] opacity-20 transform-gpu blur-3xl"
                    viewBox="0 0 1400 600"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="g1" x1="0" x2="1">
                            <stop offset="0" stopColor="#7c3aed" />
                            <stop offset="1" stopColor="#06b6d4" />
                        </linearGradient>
                        <filter id="f1" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="60" result="blur" />
                            <feColorMatrix
                                in="blur"
                                type="matrix"
                                values="1 0 0 0 0
                        0 1 0 0 0
                        0 0 1 0 0
                        0 0 0 0.8 0"
                            />
                        </filter>
                    </defs>
                    <g filter="url(#f1)">
                        <path
                            fill="url(#g1)"
                            d="M174.2,75.4C251.2,0,360.9,-2.7,466.9,15.1c127.5,21.9,237,76.2,343.4,146.1c109.9,72.2,209.9,159.7,205.8,262.1
              c-4.2,114.1-129.4,148.8-225.6,175.9c-116.5,33.8-248.2,38.6-363.8,14.6C430,655.2,330.1,607,229.7,540.7C131.5,475.9,52.9,389.4,33.4,288.3
              C14.6,193,97.7,150.9,174.2,75.4z"
                            transform="translate(-20 -40)"
                        />
                    </g>
                </svg>
            </div>

            <header className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">

                <div className="logo z-10 bg-white w-fit px-3 rounded-md shadow-sm shadow-black">
                    <Logo />
                </div>

                <nav className="flex gap-4 items-center text-lg justify-center  text-slate-300">
                    <a
                        href={ROUTES.REGISTER}
                        className="ml-2 inline-flex items-center gap-2 rounded-full bg-white/6 px-6 py-2 text-slate-100 hover:bg-white/20 border-2 border-white/10 transition"
                    >
                        Get Started
                    </a>
                </nav>
            </header>

            <main className="max-w-7xl mx-auto  py-12">
                <section
                    ref={heroRef}
                    className=" p-12 h-[80vh] rounded-t-2xl gap-12 items-center  bg-gradient-to-b from-white to-transparent"
                    aria-labelledby="hero-heading"
                >
                    <div className="flex flex-col gap-4 items-center pt-28 justify-center">
                        <p className="uppercase tracking-wider text-sm text-primary-dark mb-3 animate-in">Choose • Follow • Build</p>
                        <h1 id="hero-heading" className="text-4xl text-cyan-800 sm:text-5xl lg:text-[5rem] font-extrabold leading-tight  animate-in text-center">
                            Choose your Roadmap
                            <br />
                            and Start Your Journey
                        </h1>

                        <div className="mt-8 flex gap-4 pt-16 items-center animate-in">
                            <a
                                 href={ROUTES.REGISTER}
                                id="get-started"
                                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-3 font-medium text-slate-900 shadow-lg hover:scale-[1.02] transform transition"
                            >
                                Try DevTrack
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                                    <path d="M5 12h14" stroke="#111827" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13 5l6 7-6 7" stroke="#111827" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>

                            <a
                                href="#features"
                                className="text-sm text-slate-300 hover:text-white transition underline-offset-4"
                            >
                                Learn more →
                            </a>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-400">
                            <span className="px-3 py-1 rounded-full bg-white/3">Save Roadmap</span>
                            <span className="px-3 py-1 rounded-full bg-white/3">Track Activity</span>
                            <span className="px-3 py-1 rounded-full bg-white/3">Learn Freely</span>
                        </div>
                    </div>

                </section>

                <section id="features" className="mt-20 h-svh flex flex-col justify-center">
                    <h2 className="text-2xl font-extralight mb-6">What you get</h2>
                    <div className="flex flex-col h-fit">
                        <h1 className="roadmp text-[20vw] md:text-[11rem] font-extrabold leading-none mb-[-1rem]">
                            Roadmap
                        </h1>
                        <p className="roadmp italic text-[10vw] md:text-3xl styleScript px-2 leading-none my-[0.5rem]">
                            with
                        </p>
                        <h1 className="bg-gradient-to-tr from-primary-blue bg-clip-text text-transparent to-white roadmp text-[20vw]  md:text-[11rem] font-extrabold leading-none mt-[-1rem]">
                            Free Resources
                        </h1>
                    </div>
                </section>

                <section id="roadmapDemo" className="mt-32 w-full">
                    <h2 className="text-2xl font-extralight mb-6 w-full">Roadmaps</h2>
                    <div className="h-[90vh] w-[100%]">


                        <div className="p-6 h-full w-full flex flex-col items-start  justify-center rounded-2xl bg-gradient-to-br from-violet-700 to-cyan-700 ring-1 ring-white/6 shadow-lg text-white">
                            {developments?.map((items) => (
                                <div key={items.id} className="pl-4 transition-all duration-200 developements hover:text-white/80 md:hover:text-[4rem] text-[5vw] hover:text-[7vw]  md:text-5xl text-white/30 font-extrabold cursor-pointer [-webkit-text-stroke:_2px_rgb(255 255 255 / 0.9)">
                                    {items.title}
                                </div>
                            ))}
                        </div>


                    </div>
                </section>

                <section id="about us" className="mt-20">
                    <div className="rounded-2xl md:p-6 py-3 px-2 bg-slate-900/40 ring-1 ring-white/4 flex flex-row md:items-center justify-between gap-4">
                        <div className="md:text-lg text-sm">
                            <h4 className=" font-semibold">Do you wanna who build this ?</h4>
                            <p className="text-slate-300 mt-1">You may heard the Name ,<a 
                            href="https://paramjitsaikia001.github.io/PRMJTS/"
                            target="_blanet"
                            className="font-semibold text-cyan-300 transition-all duration-400 cursor-pointer hover:underline hover:bg-slate-100/20 hover:px-2 hover:py-1">Paramjit Saikia</a></p>
                         
                        </div>
                        <div className="sm:flex hidden md:text-base text-sm gap-3">
                            <a href={ROUTES.REGISTER} className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-4 py-2 text-slate-900 flex items-center text-center font-medium hover:scale-[1.02] transition">
                                Register
                            </a>
                            <a href={ROUTES.LOGIN} className="rounded-full px-4 py-2 border border-white/6 flex items-center  text-center text-slate-300 hover:bg-white/4 transition">
                                Log in
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="max-w-7xl mx-auto px-6 py-8 text-sm text-slate-400">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-slate-100">D</div>
                        <div>
                            <div className="font-semibold text-slate-100">DevTrack</div>
                            <div className="text-xs text-slate-400">© {new Date().getFullYear()} DevTrack, Inc</div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <a className="hover:text-white transition" href="#privacy">Privacy</a>
                        <a className="hover:text-white transition" href="#terms">Terms</a>
                        <a className="hover:text-white transition" href="#docs">Docs</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}