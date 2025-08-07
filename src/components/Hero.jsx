import Spline from "@splinetool/react-spline";
import { motion } from "motion/react";

const Hero = () => {
	return (
		<section id='hero' className='h-screen bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col items-center justify-start xl:justify-between lg:px-24 px-10 pt-40 relative overflow-hidden'>
			{/*Text Section*/}
			<div
				className='z-40 xl:mb-0 mb-0'
			>
				<motion.div
					initial={{ opacity: 0, y: 80 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ type: 'spring', stiffness: 40, damping: 25, delay: 1.3, duration: 1.5 }}
					className='text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-20'
				>
					<span className='block text-center'>Your Vision</span> <span className='block text-4xl text-center'>Engineered with</span><span className='block text-center xl:block'>Care</span>
				</motion.div>
				<motion.p
					initial={ { opacity: 0, y: 80 } }
					animate={ { opacity: 1, y: 0 } }
					transition={ { type: 'spring', stiffness: 40, damping: 25, delay: 1.8, duration: 1.5 } }
					className='text-xl md:text-1xl lg:text-2xl text-purple-200 max-w-2xl'
				>
					<span className='block xl:inline'>I build web applications that make</span> businesses money. <span>From e-commerce platforms to trading tools and AI solutions,</span> I turn ideas into profitable digital products that users love. <span className='block pt-5'>Ready to scale your business online?</span>
				</motion.p>
			</div>
			{/*Animation Logo*/}
			<Spline
				className='hidden xl:block absolute xl:right-[-28%] right-0 top-[-28%] lg:top-0'
				scene="https://prod.spline.design/8XpIKlHbpkcfS4f0/scene.splinecode"/>
		</section>
	);
};
export default Hero;
