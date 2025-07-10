import Spline from "@splinetool/react-spline";
import { motion } from "motion/react";

const Hero = () => {
	return (
		<section className='h-screen bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden'>
			{/*Text Section*/}
			<div
				className='z-40 xl:mb-0 mb-[20%]'
			>
				<motion.h1
					initial={{ opacity: 0, y: 80 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ type: 'spring', stiffness: 40, damping: 25, delay: 1.3, duration: 1.5 }}
					className='text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6'
				>
					Your Vision <br /> Engineered with <span className='xl:block'>Care</span>
				</motion.h1>
				<motion.p
					initial={ { opacity: 0, y: 80 } }
					animate={ { opacity: 1, y: 0 } }
					transition={ { type: 'spring', stiffness: 40, damping: 25, delay: 1.8, duration: 1.5 } }
					className='text-xl md:text-1xl lg:text-2xl text-purple-200 max-w-2xl'
				>
					I build web applications that make businesses money. From e-commerce platforms to trading tools and AI solutions, I turn ideas into profitable digital products that users love. Ready to scale your business online?
				</motion.p>
			</div>
			{/*Animation Logo*/}
			<Spline
				className='absolute xl:right-[-28%] right-0 top-[-28%] lg:top-0'
				scene="https://prod.spline.design/8XpIKlHbpkcfS4f0/scene.splinecode"/>
		</section>
	);
};
export default Hero;
