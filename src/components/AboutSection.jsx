import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const AboutSection = () => {
	const titleRef = useRef(null);
	const sectionRef = useRef(null);
	const introRef = useRef(null);
	const starsRef = useRef([]);
	useEffect( () => {
		
		gsap.registerPlugin(ScrollTrigger)
		
		gsap.fromTo(titleRef.current, { y:100, opacity: 0 }, { y: -300, opacity: 1, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: 'top 40%', toggleActions: 'play none none reverse' } });
		
		gsap.fromTo(introRef.current, { y:100, opacity: 0, filter: 'blur(10px)' }, { y: -400, opacity: 1, filter: 'blur(0px)', duration: 1.5, scrollTrigger: { trigger: sectionRef.current, start: 'top 40%', toggleActions: 'play none none reverse' } });
		starsRef.current.forEach((star, index) => {
			const direction = index % 2 === 0 ? 1 : -1;
			const speed = 0.5 + Math.random() * 0.5
			gsap.to(star, { x: `${direction * (100 + index * 20)}`, y: `${direction * (-50 - index * 10)}`, rotation: direction * 360, ease: 'none', scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: speed } });
		})
		return () => {
			ScrollTrigger.getAll().forEach((trigger) => {
				if(trigger.vars.trigger === sectionRef.current) {
					trigger.kill();
				}
			})
		}
	}, [ starsRef.current.length]);
	
	const addToStars = (el) => {
		if(el && !starsRef.current.includes(el)) {
			starsRef.current.push(el);
		}
	}
	return (
		<section
			ref={ sectionRef }
			className='h-screen relative overflow-hidden bg-gradient-to-b from-black to-[#9a74cf50] '
		>
			
			<div
				className='absolute inset-0 overflow-hidden '
			>
				{[...Array(10)].map((_, i) => (
					<div
						ref={addToStars}
						key={`start-${i}`}
						className='absolute rounded-full'
						style={{ height: `${10 + i * 3}px`, width: `${10 + i * 3}px`, backgroundColor: 'white', opacity: 0.2 + Math.random() * 0.4, top: `${ Math.random() * 100 }%`, left: `${Math.random() * 100}%`}}
					>
					
					</div>
				))}
			</div>
			
			<div
				className='container mx-auto px-4 h-full flex flex-col items-center justify-center'
			>
				<h1
					ref={titleRef}
					className='text-4xl md:text-6xl font-bold sm:mb-16 text-center text-white opacity-0'
				>
					About Me
				</h1>
			</div>
			
			<div
				ref={introRef}
				className='absolute lg:bottom-[-20rem] md:bottom-[-10rem] bottom-[-20rem] left-0 w-full flex md:flex-row flex-col justify-between lg:px-24 px-5 items-center opacity-0'
			>
				<h3
					className='text-sm md:text-2xl font-bold text-purple-200 z-[50] lg:max-w-[45rem] max-w-[27rem] tracking-wider md:mt-20 sm:mt-[-40rem] mt-[-32rem]'
				>
					I'm Neerad Nandan, a passionate full-stack developer who transforms business ideas into digital success stories. With expertise in modern web technologies, I specialize in creating user-friendly applications that not only look great but deliver measurable results. Whether you're a startup looking to launch your first product or an established business ready to innovate, I bring the technical skills and creative problem-solving needed to bring your vision to life.
				</h3>
				{/* Image with feathered edges */ }
				<img
					src='/images/personal.jpeg'
					alt='profile-picture'
					className='lg:h-[30rem] lg:w-[30rem] object-cover md:h-[20rem] md:w-[20rem] h-[15rem] w-[15rem] mix-blend-lighten'
					style={{
						maskImage:
							`
							radial-gradient(circle at center,
							black 0%,
							black 20%,
							transparent 60%)
							`,
						WebkitMaskImage:
							`
							radial-gradient(circle at center,
							black 0%,
							black 20%,
							transparent 60%)
							`,
						filter: 'blur(0.5px)',
						transform: 'scale(1.1)' // Slightly scale up to ensure no hard edges
					}}
				/>
			</div>
		</section>
	);
};
export default AboutSection;
