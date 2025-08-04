import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SlShareAlt } from "react-icons/sl"


const ProjectSection = () => {
	const sectionRef = useRef(null);
	const titleLineRef = useRef(null);
	const titleRef = useRef(null);
	const triggerRef = useRef(null);
	const horizontalRef = useRef(null);
	const handleShare = async ( project ) => {
		
		const shareData = {
			title: project.title,
			text:  `Check out this project: ${ project.title }`,
			url:   project.projectUrl,
		};
		
		// Check if the browser supports the Web Share API
		if ( navigator.share ) {
			try {
				await navigator.share( shareData );
				console.log( 'Project shared successfully' );
			}
			catch ( err ) {
				console.error( 'Error sharing:', err );
			}
		} else {
			// Fallback for browsers that don't support it (e.g., desktop Firefox)
			// We'll copy the link to the clipboard
			try {
				await navigator.clipboard.writeText( project.projectUrl );
				alert( 'Link copied to clipboard!' ); // Simple feedback
			}
			catch ( err ) {
				alert( 'Could not copy link.' );
				console.error( 'Failed to copy: ', err );
			}
		}
	};
	
	
	const projectImages = [
		{
			id: 1,
			title: 'Movie App',
			imageSource: '/images/project-1.png',
			projectUrl: 'https://github.com/NeeradNandan/movie-app'
		},
		{
			id: 2,
			title: 'Habit Tracker App',
			imageSource: '/images/project-2.png',
			projectUrl: 'https://github.com/NeeradNandan/habit-tracker-app'
			
		},
		{
			id: 3,
			title: 'Chatbot App',
			imageSource: '/images/project-3.png',
			projectUrl: 'https://github.com/NeeradNandan/chatbot-project'
		},
		{
			id: 4,
			title: 'NSE Options App',
			imageSource: '/images/project-4.png',
			projectUrl: 'https://github.com/NeeradNandan/nse-option-app'
		}
	]
	
	useEffect( () => {
		gsap.registerPlugin(ScrollTrigger);
		
		gsap.fromTo(titleRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' }})
		
		gsap.fromTo(titleLineRef.current, { width: '0%', opacity: 0 }, { width: '100%', opacity: 1, duration: 1.5, ease: 'power3.inOut', delay: 0.3, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' }})
		
		gsap.fromTo(triggerRef.current, { y: 100, rotationX: 20, opacity: 0 }, { y: 0, rotationX: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.2, scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', toggleActions: 'play none none reverse' }})
		
		gsap.fromTo(sectionRef.current, { backgroundPosition: '50% 0%' }, { backgroundPosition: '50% 100%', ease: 'none', scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: true,  } })
		
		const horizontalScroll = gsap.to('.panel', { xPercent: -100 * (projectImages.length - 1), ease: 'none', scrollTrigger: { trigger: triggerRef.current, start: 'top top', end: () => `+=${horizontalRef.current.offsetWidth}`, pin: true, scrub: 1, snap: { snapTo: 1 / (projectImages.length - 1),  duration: {main: 0.2, max: 0.3}, delay: 0.1 }, invalidateOnRefresh: true, }});
		
		const panels = gsap.utils.toArray('.panel');
		panels.forEach((panel, index) => {
			const image = panel.querySelector('.project-image');
			const imageTitle = panel.querySelector('.project-title');
			
			const tl = gsap.timeline({ scrollTrigger: { trigger: panel, containerAnimation: horizontalScroll, start: 'left right', end: 'right left', scrub: true} })
			
			tl.fromTo( image, { scale: 0.4, rotate: -20 }, { scale: 1, rotate: 1, duration: 0.8 })
			/*tl.fromTo(
				image,
				{ scale: 0.2, rotate: -20 }, // Starting state
				{ scale: 0.5, rotate: 0, ease: 'power1.in' } // Peak state
			).to(
				image,
				{ scale: 0.2, rotate: 5, ease: 'power1.out' } // Ending state
			);*/
			if(imageTitle) {
			tl.fromTo( imageTitle, { y: 30 }, { y: -100, duration: 0.3 }, 0.2 )
			}
		})
	}, [projectImages.length]);
	
	
	return (
		<section
			ref={sectionRef}
			id='horizantal-section'
			className='relative py-12 md:py-20 bg-[#f6f6f6] overflow-hidden '
		>
			<div
				className='container mx-auto px-4 mb-8 md:mb-16 relative z-10 '
			>
				<h2
					ref={titleRef}
					className='text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-4 opacity-0'
				>
					Featured Projects
				</h2>
				<div
					ref={titleLineRef}
					className='w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto opacity-0'
				></div>
			</div>
			
			<div
				className='overflow-hidden opacity-0 h-[70vh] md:h-screen'
				ref={triggerRef}
			>
				<div
					ref={horizontalRef}
					className='flex horizontal-section md:w-[400%] w-[420%] md:mt-20'
				>
					{
						projectImages.map((project) => (
							<div
								key={project.id}
							    className='panel relative flex items-center justify-center h-full'
							>
								<div className='relative w-full h-full flex flex-col items-center justify-center sm:p-8 md:p-12'>
									<img
										src={project.imageSource}
										alt='Project-img'
										className='project-image max-w-full rounded-2xl md:max-h-[85%] max-h-full object-contain'
									/>
									<div
										className='project-title flex items-center gap-3 md:text-3xl text-2xl md:text-bold text-black mt-24 md:mt-20 z-50 text-nowrap cursor-pointer'>
										<a
											target="_blank"
											rel="noopener noreferrer"
											className="hover:text-gray-400 transition-colors duration-300"
											href={ project.projectUrl }>
											{ project.title }
										</a>
										<button onClick={ ( e ) => handleShare( project ) } className="hover:text-purple-600 transition-colors duration-300" aria-label={ `Share ${ project.title }` }>
											<SlShareAlt />
										</button>
									</div>
								</div>
							</div>
						))
					}
				</div>
			</div>
		</section>
	);
};
export default ProjectSection;
