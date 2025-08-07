/*
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin( ScrollTrigger );

const AboutSection = () => {
	const titleRef = useRef( null );
	const sectionRef = useRef( null );
	const introRef = useRef( null );
	const starsRef = useRef( [] );
	
	const addToStars = ( el ) => {
		if ( el && !starsRef.current.includes( el ) ) {
			starsRef.current.push( el );
		}
	};
	
	useEffect( () => {
		const ctx = gsap.context( () => {
			gsap.fromTo(
				titleRef.current,
				{ y: 100, opacity: 0 },
				{
					y:             -300,
					opacity:       1,
					duration:      0.8,
					scrollTrigger: {
						trigger:       sectionRef.current,
						start:         "top 80%",
						toggleActions: "play none none reverse",
					},
				}
			);
			
			// MODIFIED: Removed the expensive `filter` animation for performance.
			gsap.fromTo(
				introRef.current,
				{ y: 100, opacity: 0 },
				{
					y:             -400,
					opacity:       1,
					duration:      1.5,
					scrollTrigger: {
						trigger:       sectionRef.current,
						start:         "top 80%",
						toggleActions: "play none none reverse",
					},
				}
			);
			
			const starTimeline = gsap.timeline( {
				                                    scrollTrigger: {
					                                    trigger: sectionRef.current,
					                                    start:   "top bottom",
					                                    end:     "bottom top",
					                                    scrub:   1.5,
				                                    },
			                                    } );
			
			starsRef.current.forEach( ( star, index ) => {
				const direction = index % 2 === 0 ?
				                  1 :
				                  -1;
				starTimeline.to(
					star,
					{
						x:        `${ direction * (
							100 + index * 20
						) }`,
						y:        `${ direction * (
							-50 - index * 10
						) }`,
						rotation: direction * 360,
						ease:     "none",
					},
					"<"
				);
			} );
		}, sectionRef );
		
		return () => ctx.revert();
	}, [] );
	
	return (
		<section
			id='about'
			ref={ sectionRef }
			className='h-screen relative overflow-hidden bg-gradient-to-b from-black to-[#9a74cf50]'
		>
			<div className='absolute inset-0 overflow-hidden'>
				{ [ ...Array( 10 ) ].map( ( _, i ) => (
					<div
						ref={ addToStars }
						key={ `start-${ i }` }
						className='absolute rounded-full'
						style={ {
							height:          `${ 10 + i * 3 }px`,
							width:           `${ 10 + i * 3 }px`,
							backgroundColor: "white",
							opacity:         0.2 + Math.random() * 0.4,
							top:             `${ Math.random() * 100 }%`,
							left:            `${ Math.random() * 100 }%`,
							// Force hardware acceleration for smoother animation
							willChange: "transform",
							transform:  "translateZ(0)",
						} }
					></div>
				) ) }
			</div>
			
			<div className='container mx-auto px-4 h-full flex flex-col items-center justify-center'>
				<h1
					ref={ titleRef }
					className='text-4xl md:text-6xl font-bold sm:mb-16 text-center text-white opacity-0'
					// Force hardware acceleration
					style={ { willChange: "transform, opacity", transform: "translateZ(0)" } }
				>
					About Me
				</h1>
			</div>
			
			<div
				ref={ introRef }
				className='absolute lg:bottom-[-20rem] md:bottom-[-10rem] bottom-[-20rem] left-0 w-full flex md:flex-row flex-col justify-between lg:px-24 px-5 items-center opacity-0'
				// Force hardware acceleration and remove initial blur
				style={ { willChange: "transform, opacity", transform: "translateZ(0)" } }
			>
				<h3 className='text-sm md:text-2xl font-bold text-purple-200 z-[50] lg:max-w-[45rem] max-w-[27rem] tracking-wider md:mt-20 sm:mt-[-40rem] mt-[-32rem]'>
					I'm Neerad Nandan, a passionate full-stack developer who transforms
					business ideas into digital success stories. With expertise in modern
					web technologies, I specialize in creating user-friendly applications
					that not only look great but deliver measurable results. Whether
					you're a startup looking to launch your first product or an
					established business ready to innovate, I bring the technical skills
					and creative problem-solving needed to bring your vision to life.
				</h3>
				<img
					src='/images/personal.png'
					alt='profile-picture'
					className='lg:h-[30rem] lg:w-[30rem] object-cover md:h-[20rem] md:w-[20rem] h-[15rem] w-[15rem] mix-blend-lighten'
					style={ {
						transform:  "scale(1.1) translateZ(0)", // Still hardware accelerated
						willChange: "transform"
					} }
				/>
			</div>
		</section>
	);
};

export default AboutSection;*/

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin( ScrollTrigger );

const AboutSection = () => {
	const sectionRef = useRef( null );
	// UNIFIED REF: We will now animate this single wrapper
	const contentWrapperRef = useRef( null );
	const starsRef = useRef( [] );
	
	const addToStars = ( el ) => {
		if ( el && !starsRef.current.includes( el ) ) {
			starsRef.current.push( el );
		}
	};
	
	useEffect( () => {
		const ctx = gsap.context( () => {
			// --- UNIFIED ANIMATION ---
			// Animate the entire content block as one unit
			gsap.fromTo(
				contentWrapperRef.current,
				{ y: 100, opacity: 0 }, // Start slightly below and invisible
				{
					y:             0, // Animate to its natural position
					opacity:       1,
					duration:      1.2,
					ease:          "power2.out",
					scrollTrigger: {
						trigger: sectionRef.current,
						// Trigger when the top of the section is 70% down the viewport
						start:         "top 70%",
						toggleActions: "play none none reverse",
					},
				}
			);
			
			// --- Star animation remains the same ---
			const starTimeline = gsap.timeline( {
				                                    scrollTrigger: {
					                                    trigger: sectionRef.current,
					                                    start:   "top bottom",
					                                    end:     "bottom top",
					                                    scrub:   1.5,
				                                    },
			                                    } );
			
			starsRef.current.forEach( ( star, index ) => {
				const direction = index % 2 === 0 ?
				                  1 :
				                  -1;
				starTimeline.to(
					star,
					{
						x:        `${ direction * (
							100 + index * 20
						) }`,
						y:        `${ direction * (
							-50 - index * 10
						) }`,
						rotation: direction * 360,
						ease:     "none",
					},
					"<"
				);
			} );
		}, sectionRef );
		
		return () => ctx.revert();
	}, [] );
	
	return (
		<section
			id='about'
			ref={ sectionRef }
			className='py-10 xl:h-screen relative overflow-hidden bg-gradient-to-b from-black to-[#9a74cf50] flex items-center justify-center' // Flex container to center content
		>
			<div className='absolute inset-0 overflow-hidden'>
				{/* Star mapping remains the same */ }
				{ [ ...Array( 10 ) ].map( ( _, i ) => (
					<div
						ref={ addToStars }
						key={ `start-${ i }` }
						className='absolute rounded-full'
						style={ {
							height:          `${ 10 + i * 3 }px`,
							width:           `${ 10 + i * 3 }px`,
							backgroundColor: "white",
							opacity:         0.2 + Math.random() * 0.4,
							top:             `${ Math.random() * 100 }%`,
							left:            `${ Math.random() * 100 }%`,
							willChange:      "transform",
							transform:       "translateZ(0)",
						} }
					></div>
				) ) }
			</div>
			
			{/* --- NEW UNIFIED CONTENT WRAPPER --- */ }
			<div
				ref={ contentWrapperRef }
				className='container mx-auto px-5 flex flex-col items-center text-center opacity-0'
				style={ { willChange: "transform, opacity" } }
			>
				<div className='text-5xl md:text-6xl font-bold text-white mb-8 md:mb-12'>
					About Me
				</div>
				
				{/* Content block with text and image */ }
				<div className='flex md:flex-row flex-col-reverse justify-between items-center gap-8'>
					<h3 className='text-sm md:text-2xl font-bold text-purple-200 z-[50] lg:max-w-[45rem] max-w-[27rem] tracking-wider text-center md:text-left'>
						I'm Neerad Nandan, a passionate full-stack developer who transforms
						business ideas into digital success stories. With expertise in modern
						web technologies, I specialize in creating user-friendly applications
						that not only look great but deliver measurable results. Whether
						you're a startup looking to launch your first product or an
						established business ready to innovate, I bring the technical skills
						and creative problem-solving needed to bring your vision to life.
					</h3>
					<img
						src='/images/personal.png'
						alt='profile-picture'
						className='lg:h-[25rem] lg:w-[25rem] object-cover md:h-[20rem] md:w-[20rem] h-[15rem] w-[15rem] mix-blend-lighten flex-shrink-0'
						style={ { willChange: "transform" } }
					/>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;