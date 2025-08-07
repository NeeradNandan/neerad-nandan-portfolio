import { useEffect, useRef } from "react";
import { gsap } from "gsap";


const ContactSection = ( { openContactForm } ) => {
	/*const circleRef = useRef(null);
	const sectionRef = useRef(null);
	const initialTextref = useRef(null);
	const finalTextRef = useRef(null);*/
	
	const circleRef = useRef( null );
	const sectionRef = useRef( null );
	const initialTextRef = useRef( null );
	const finalTextRef = useRef( null );
	
	/*useEffect( () => {
		gsap.registerPlugin( ScrollTrigger )
		
		const cleanup = () => {
			ScrollTrigger.getAll().forEach((st) => {
				if(st.vars.trigger === sectionRef.current) {
					st.kill(true)
				}
			})
		}
		
		cleanup();
		
		
		gsap.set(circleRef.current, { scale: 1, backgroundColor: 'white' })
		gsap.set(initialTextref.current, { opacity: 1 })
		gsap.set(finalTextRef.current, { opacity: 0 })
		
		const tl = gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: '+=200%', pin: true, scrub: 0.5, anticipatePin: 1, fastScrollEnd: true, preventOverlaps: true, invalidateOnRefresh: true } });
		
		tl.to( circleRef.current, { scale: 5, backgroundColor: '#9333EA', ease: 'power1.inOut', duration: 0.5 }, 0 )
		
		tl.to( initialTextref.current, { opacity: 0, ease: 'power1.out', duration: 0.2 }, 0.1 )
		
		tl.to( circleRef.current, { scale: 17, backgroundColor: '#E9D5FF', boxShadow: '0 0 50px 20px rgba(233, 213, 255, 0.3)', ease: 'power2.inOut', duration: 0.5 }, 0.5 )
		
		tl.to(finalTextRef.current, { opacity: 1, ease: 'power2.in', duration: 0.2 }, 0.7 )
		
		return cleanup;
	}, [] );*/
	
	useEffect( () => {
		// Use GSAP's MatchMedia for responsive animations
		const mm = gsap.matchMedia();
		
		// Add animations only for screens wider than 768px (desktop)
		mm.add( "(min-width: 769px)", () => {
			
			// --- DESKTOP ANIMATION LOGIC ---
			gsap.set( circleRef.current, { scale: 1, backgroundColor: 'white' } );
			gsap.set( initialTextRef.current, { opacity: 1 } );
			gsap.set( finalTextRef.current, { opacity: 0 } );
			
			const tl = gsap.timeline( {
				                          scrollTrigger: {
					                          trigger: sectionRef.current,
					                          start: 'top top',
					                          end: '+=200%',
					                          pin: true,
					                          scrub: 0.5,
					                          anticipatePin: 1,
				                          }
			                          } );
			
			tl.to(
				circleRef.current, { scale: 5, backgroundColor: '#9333EA', ease: 'power1.inOut', duration: 0.5 }, 0 );
			tl.to( initialTextRef.current, { opacity: 0, ease: 'power1.out', duration: 0.2 }, 0.1 );
			tl.to(
				circleRef.current, { scale: 17, backgroundColor: '#E9D5FF', ease: 'power2.inOut', duration: 0.5 },
				0.5
			);
			tl.to( finalTextRef.current, { opacity: 1, ease: 'power2.in', duration: 0.2 }, 0.7 );
			
			// Return a cleanup function for this specific media query
			return () => {
				// Kill the timeline's ScrollTrigger instance
				if ( tl.scrollTrigger ) {
					tl.scrollTrigger.kill();
				}
				// Kill the timeline itself
				tl.kill();
			};
		} );
		
		// GSAP's MatchMedia handles cleanup on component unmount automatically.
		return () => mm.revert();
	}, [] );
	
	/*return (
		<section
			id='contact'
			className='min-h-[100vh] flex items-center justify-center bg-black relative'
			style={{ overscrollBehavior: 'none' }}
			ref={sectionRef}
		>
			<div
				ref={circleRef}
				className='w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-full flex items-center justify-center relative transition-shadow duration-1000 shadow-violet-300/50 shadow-lg bg-gradient-to-r from-violet-400 to-pink-100 '
			>
				<p
					ref={initialTextref}
					className='text-black font-bold text-base sm:text-lg md:text-xl absolute inset-0 flex items-center text-center'
				>
					SCROLL DOWN
				</p>
				<div
					ref={finalTextRef}
					className='text-center relative flex flex-col items-center justify-center opacity-0'
				>
					<h1
						className='text-black md:w-[10rem] w-[20rem] lg:scale-[0.4] sm:scale-[0.25] scale-[0.07] md:font-bold text-sm sm:text-base leading-none mb-5 '
					>
						Step into the Future with me
					</h1>
					<p
						className='text-black lg:w-[40rem] w-[20rem] absolute sm:mt-3 mt-1 md:scale-[0.1] scale-[0.068]'
					>
						I build high-performance, user-centric web applications with clean, maintainable code. Let's
						discuss how I can help solve your business challenges and achieve your digital goals.
					
					
					</p>
					
					<button
						className='px-10 py-2 rounded-xl bg-black hover:bg-white hover:text-black transition-all duration-500 scale-[0.1] absolute sm:mt-9 mt-7 text-nowrap '
						onClick={openContactForm}
					>
						Contact Me
					</button>
				</div>
			</div>
		</section>
	);
};
export default ContactSection;
*/
	
	return (
		<section
			id='contact'
			ref={ sectionRef } // Ref is still on the parent for the trigger
			className='py-15 xl:min-h-[100vh] flex items-center justify-center bg-black relative'
			style={ { overscrollBehavior: 'none' } }
		>
			{/* ====== STATIC MOBILE VIEW ====== */ }
			{/* This view is visible by default and hidden on medium screens and up (md:) */ }
			<div className='flex flex-col items-center justify-center text-center p-8 md:hidden'>
				<h1 className='text-3xl font-bold text-white mb-4'>
					Step into the Future
				</h1>
				<p className='text-lg text-purple-200 max-w-sm mb-8'>
					I build high-performance, user-centric web applications. Let's
					discuss how I can help solve your business challenges and achieve your digital goals.
				</p>
				<button
					className='px-8 py-3 rounded-xl text-xl bg-purple-600 text-white font-bold hover:bg-purple-500 transition-colors duration-300'
					onClick={ openContactForm }
				>
					Contact Me
				</button>
				<hr className="w-full max-w-xs mt-16 border-t border-white/20"/>
			</div>
			
			{/* ====== DESKTOP ANIMATION VIEW ====== */ }
			{/* This view is hidden by default and visible as flex on medium screens and up (md:) */ }
			<div
				ref={ circleRef }
				className='hidden md:flex w-32 h-32 rounded-full items-center justify-center relative'
			>
				<p
					ref={ initialTextRef }
					className='text-black font-bold text-xl absolute inset-0 flex items-center justify-center text-center'
				>
					SCROLL DOWN
				</p>
				<div
					ref={ finalTextRef }
					className='text-center relative flex flex-col items-center justify-center opacity-0'
				>
					{/* The content here is scaled down because the parent circle scales up massively */ }
					<h1 className='text-black md:w-[10rem] w-[20rem] lg:scale-[0.4] sm:scale-[0.25] scale-[0.07] md:font-bold text-sm sm:text-base leading-none mb-5'>
						Step into the Future with me
					</h1>
					<p className='text-black absolute w-[30rem] scale-[0.12] mt-1'>
						I build high-performance, user-centric web applications with clean, maintainable code. Let's discuss how I can help solve your business challenges and achieve your digital goals.
					</p>
					<button
						className='px-10 py-2 rounded-xl bg-black hover:bg-white hover:text-black transition-all duration-500 scale-[0.1] absolute mt-7 text-nowrap'
						onClick={ openContactForm }
					>
						Contact Me
					</button>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;