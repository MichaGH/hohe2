'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import { useMediaQuery } from 'react-responsive';
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

export default function EliteSection() {
    const { sectionRef } = useRef()
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });

    useGSAP(() => {
        if (!isTablet) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#elite-section',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    pin: true,
                }
            });

            timeline
                .to('.mask img', {
                    transform: 'scale(1.1)'
                }).to('.content', { opacity: 1, y: 0, ease: 'power1.in' });
        }
    },  {scope: sectionRef}, [isTablet])


    return (
        <section id="elite-section" ref={sectionRef}>
            <div className="media">
                <video src="/videos/standing.mp4" loop muted autoPlay playsInline />
                <div className="mask">
                    <img src="/elite-mask.svg" />
                </div>
            </div>

            
            <div className="content">
                <div className="wrapper flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left">
                    {/* Left: Intro Text */}
                    <div className="max-w-xl">
                        <h2 className="uppercase tracking-tight font-extrabold text-4xl lg:text-6xl mb-4 bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
                            Book Your Tennis Lessons
                        </h2>
                        <p className="text-neutral-300 text-lg leading-relaxed">
                            Advanced technique. Tailored performance. Precision training for every player.
                        </p>
                        <div className="mt-6 h-[1px] w-3/4 bg-gradient-to-r from-transparent via-sky-400/60 to-transparent"></div>
                    </div>

                    {/* Right: Pricing Grid */}
                    <div className="grid md:grid-cols-2 gap-10 mt-16 lg:mt-0">
                        {/* Individual */}
                        <div className="group relative border border-neutral-700 bg-black/70 backdrop-blur-sm p-10 text-center transition-all duration-500 hover:border-sky-400/70 hover:bg-black/80">
                            <h3 className="text-sky-400 text-2xl lg:text-4xl font-semibold uppercase mb-6">
                                Individual
                            </h3>
                            <ul className="space-y-6">
                                <li>
                                    <p className="text-5xl font-bold text-white">72€</p>
                                    <p className="text-neutral-400 text-base mt-1">1 Hour Private Training</p>
                                </li>
                                <li>
                                    <p className="text-5xl font-bold text-white">120€</p>
                                    <p className="text-neutral-400 text-base mt-1">1.5 Hour Private Training</p>
                                </li>
                                <li>
                                    <p className="text-neutral-500 text-sm italic mt-2">
                                        Private court of your choice
                                    </p>
                                </li>
                            </ul>
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.15),transparent_70%)] pointer-events-none" />
                        </div>

                        {/* Group */}
                        <div className="group relative border border-neutral-700 bg-black/70 backdrop-blur-sm p-10 text-center transition-all duration-500 hover:border-sky-400/70 hover:bg-black/80">
                            <h3 className="text-sky-400 text-2xl lg:text-4xl font-semibold uppercase mb-6">
                                Group
                            </h3>
                            <ul className="space-y-6">
                                <li>
                                    <p className="text-5xl font-bold text-white">
                                        40€ <span className="text-lg font-normal text-neutral-400">/ Person</span>
                                    </p>
                                    <p className="text-neutral-400 text-base mt-1">1 Hour Group (2 Players)</p>
                                </li>
                                <li>
                                    <p className="text-5xl font-bold text-white">
                                        30€ <span className="text-lg font-normal text-neutral-400">/ Person</span>
                                    </p>
                                    <p className="text-neutral-400 text-base mt-1">1 Hour Group (3–4 Players)</p>
                                </li>
                            </ul>
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.15),transparent_70%)] pointer-events-none" />
                        </div>
                    </div>
                </div>
                </div>
        </section>
    )
}
