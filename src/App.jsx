import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import { FiX } from "react-icons/fi";
import AboutSection from "./components/AboutSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ProgressBar from "./components/ProgressBar.jsx";
import ProjectSection from "./components/ProjectSection.jsx";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useState } from "react";
import axios from 'axios';


const App = () => {
	const [ contactFormOpen, setContactFormOpen ] = useState( false );
	const openContactForm = () => setContactFormOpen( true );
	const closeContactForm = () => setContactFormOpen( false );
	
	const [ formData, setFormData ] = useState( {
		                                            name:    '',
		                                            email:   '',
		                                            message: '',
	                                            } );
	const [ status, setStatus ] = useState( '' );
	const handleChange = ( e ) => {
		const { id, value } = e.target;
		setFormData( ( prevState ) => (
			{
				...prevState,
				[ id ]: value,
			}
		) );
	};
	
	const handleSubmit = ( e ) => {
		e.preventDefault(); // Prevent the default form refresh
		setStatus( 'Sending...' );
		
		axios.post( 'https://formspree.io/f/manbdvrn', formData, { // <-- IMPORTANT: Replace with your Formspree URL
			     headers: { 'Accept': 'application/json' }
		     } )
		     .then( response => {
			     setStatus( 'Message sent successfully!' );
			     setFormData( { name: '', email: '', message: '' } ); // Clear the form
			     setTimeout( () => {
				     closeContactForm(); // Close the modal after 2 seconds
				     setStatus( '' ); // Reset status
			     }, 2000 );
		     } )
		     .catch( error => {
			     setStatus( 'Oops! There was a problem. Please try again.' );
		     } );
	};
	
	
	useEffect( () => {
		gsap.registerPlugin( ScrollTrigger )
		
		ScrollTrigger.refresh();
		
		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill() )
		}
	},  []);
	
	return (
		<div>
			<Header
				openContactForm={ openContactForm }
			/>
			
			<AnimatePresence>
				{ contactFormOpen && (
					<motion.div
						initial={ { opacity: 0 } }
						animate={ { opacity: 1 } }
						exit={ { opacity: 0 } }
						transition={ { duration: 0.5 } }
						className='fixed inset-0 bg-black/50 background-blur-sm z-50 flex items-center justify-center p-4'
					>
						<motion.div
							initial={ { scale: 0.8, opacity: 0, y: 30 } }
							animate={ { scale: 1, opacity: 1, y: 0 } }
							exit={ { scale: 0.8, opacity: 0, y: 30 } }
							transition={ { type: 'spring', stiffness: 200, damping: 30, duration: 0.8 } }
							className='bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6'
						>
							<div className='flex justify-between items-center mb-4'>
								<h1 className='text-2xl font-bold text-gray-300'>
									Get In Touch
								</h1>
								<button
									onClick={ closeContactForm }
								>
									<FiX className='w-5 h-5 text-gray-300 font-extrabold'/>
								</button>
							</div>
							{/*Input Form*/ }
							<form className='space-y-4' onSubmit={ handleSubmit }>
								<div>
									<label htmlFor='name'
									       className='block text-sm font-weight font-medium text-gray-300 mb-1 '>
										Name
									</label>
									<input
										type='text'
										id='name'
										placeholder='Your Name'
										className='w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700 '
										value={ formData.name }
										onChange={ handleChange }
										required
									/>
								</div>
								<div>
									<label htmlFor='email'
									       className='block text-sm font-weight font-medium text-gray-300 mb-1 '>
										Email
									</label>
									<input
										type='email'
										id='email'
										placeholder='Your Email'
										className='w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700 '
										value={ formData.email }
										onChange={ handleChange }
										required
									/>
								</div>
								<div>
									<label htmlFor='message'
									       className='block text-sm font-weight font-medium text-gray-300 mb-1 '>
										Message
									</label>
									<textarea
										rows='4'
										id='message'
										placeholder='How can we help you?'
										className='w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700 '
										value={ formData.message }
										onChange={ handleChange }
										required
									/>
								</div>
								
								{ status && <p className="text-center text-gray-300">{ status }</p> }
								<motion.button
									type='submit'
									whileHover={ { scale: 1.03 } }
									whileTap={ { scale: 0.97 } }
									className='w-full px-4 py-2 bg-gradient-to-r from-violet-600 to-violet-400 font-bold hover:from-violet-700 hover:to-purple-700 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg hover:shadow-violet-600/50'
									disabled={ status === 'Sending...' }
								>
									{ status === 'Sending...' ?
									  'Sending...' :
									  'Send Message' }
								</motion.button>
							</form>
						</motion.div>
					</motion.div>
				) }
			</AnimatePresence>
			
			<CustomCursor/>
			<main className='pt-16 md:pt-20'>
				<Hero />
				<AboutSection />
				<ProjectSection />
				<ContactSection openContactForm={ openContactForm } />
			</main>
			<Footer />
			<ProgressBar />
		</div>
	);
};
export default App;
