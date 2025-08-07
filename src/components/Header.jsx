import { motion } from "motion/react"
import { useState } from "react";
import { FiGithub, FiLinkedin, FiMenu, FiTwitter, FiX } from "react-icons/fi";
import { Link } from "react-scroll";
const Header = ( { openContactForm } ) => {
	const [ isOpen, setIsOpen ] = useState( false );
	/*const [ contactFormOpen, setContactFormOpen ] = useState(false);
	const openContactForm = () => setContactFormOpen(true);
	const closeContactForm = () => setContactFormOpen(false)*/
	const toggleMenu = () => setIsOpen( ! isOpen );
	
	const navLinks = [
		{ name: 'Home', to: 'hero' },
		{ name: 'About', to: 'about' },
		{ name: 'Projects', to: 'horizantal-section' },
		/*{ name: 'Experience', to: 'experience' },*/
		{ name: 'Contact', to: 'contact' },
	];
	
	
	return (
		<header className='fixed w-full z-50 transition-all duration-300 backdrop-blur-sm bg-gray-900/75'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20 '>
				{/*Logo Name*/}
				<motion.div
					initial={{ opacity: 0, x: -100 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ type: 'spring', stiffness: 100, damping: 25, delay: 0.3, duration: 1.2 }}
					className='flex items-center'>
					<div className='h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-purple-600 font-bold text-xl mr-3'>
						N
					</div>
					<span className='text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent'>
						Neerad Nandan
					</span>
				</motion.div>
				{/*Desktop Navigation*/}
				<nav className='lg:flex hidden space-x-8'>
					{navLinks.map((item, index) => (
						<motion.div
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.7 + index * 0.2 }}
							//href={item.href}
							key={index}
							>
							<Link
							to={ item.to }
							spy={ true }
							smooth={ true }
							offset={ -80 }
							duration={ 500 }
							className='px-2 py-3 -mx-2 -my-3 relative text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group'
							activeClass="text-violet-500"
							>
							{item.name}
							{/*<span className='absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300'></span>*/}
							</Link>
						</motion.div>
					))}
				</nav>
				{/*Social Icons*/}
				<div className='md:flex hidden items-center space-x-4'>
					<motion.a
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 1.3, duration: 0.8 }}
						href='https://github.com/NeeradNandan'
						target="_blank"
						rel="noopener noreferrer"
						className='text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300'
					>
						<FiGithub
							className='w-5 h-5'
						/>
					</motion.a>
					<motion.a
						initial={ { opacity: 0, scale: 0.5 } }
						animate={ { opacity: 1, scale: 1 } }
						transition={ { delay: 1.3, duration: 0.8 } }
						href='https://www.linkedin.com/in/neerad-n-156407292/'
						target="_blank"
						rel="noopener noreferrer"
						className='text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300'
					>
						<FiLinkedin
							className='w-5 h-5'
						/>
					</motion.a>
					<motion.a
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 1.3, duration: 0.8 }}
						href='https://x.com/nrdnandan'
						target="_blank"
						rel="noopener noreferrer"
						className='text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300'
					>
						<FiTwitter
							className='w-5 h-5'
						/>
					</motion.a>
				</div>
				<motion.button
					onClick={openContactForm}
					 initial={{ opacity: 0, scale: 0.8 }}
					 animate={{ opacity: 1, scale: 1 }}
					 transition={{ type: 'spring', stiffness: 100, damping: 25, delay: window.innerWidth < 768 ? 0.8 : 1.6, duration: 0.6 }}
					 className='ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-300'
				>
					Hire Me
				</motion.button>
				{/*Mobile Menu Button*/}
				<div className='md:hidden flex items-center '>
					<motion.button
						whileTap={{ scale: 0.7 }}
						onClick={toggleMenu}
						className='text-gray-300'
					>
						{isOpen ? <FiX className='h-6 w-6'/> : <FiMenu className='h-6 w-6' />}
					</motion.button>
				</div>
			</div>
			{/*Mobile Menu*/}
			<motion.div
				initial={{ opacity: 0, height: 0 }}
				animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto': 0 }}
				transition={{ duration: 0.5 }}
				className='md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-5 spacy-y-5 '>
				<nav className='flex flex-col spacy-y-3'>
					{navLinks.map((item, index) => (
						<Link
							onClick={toggleMenu}
							className='text-gray-300 font-medium py-2'
							//href='#'
							to={ item.to }
							spy={ true }
							smooth={ true }
							offset={ -80 }
							duration={ 500 }
							key={index}
						>
							{item.name}
						</Link>
					))}
				</nav>
				<div className='pt-4 border-t border-gray-200 dark:border-gray-700 '>
					<div className='flex space-x-5'>
						<a href='https://github.com/NeeradNandan' >
							<FiGithub className='h-5 w-5 text-gray-300' />
						</a>
						<a href='https://www.linkedin.com/in/neerad-n-156407292/' >
							<FiLinkedin className='h-5 w-5 text-gray-300' />
						</a>
						<a href='https://x.com/nrdnandan'>
							<FiTwitter className='h-5 w-5 text-gray-300'/>
						</a>
					</div>
					<button
						onClick={() => {
							toggleMenu();
							openContactForm();
						}}
						className='mt-4 block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 font-bold'>
						Contact Me
					</button>
				</div>
			</motion.div>
			{/*Contact Form*/}
			{/*<AnimatePresence>
				{contactFormOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity:0 }}
						transition={{ duration: 0.5 }}
						className='fixed inset-0 bg-black/50 background-blur-sm z-50 flex items-center justify-center p-4'
					>
						<motion.div
							initial={{ scale: 0.8, opacity: 0, y: 30 }}
							animate={{ scale:1, opacity: 1, y: 0 }}
							exit={{ scale: 0.8, opacity: 0, y: 30 }}
							transition={{ type: 'spring', stiffness: 200, damping: 30, duration: 0.8 }}
							className='bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6'
						>
							<div className='flex justify-between items-center mb-4'>
								<h1 className='text-2xl font-bold text-gray-300'>
									Get In Touch
								</h1>
								<button
									onClick={closeContactForm}
								>
									<FiX className='w-5 h-5 text-gray-300 font-extrabold'/>
								</button>
							</div>
							Input Form
							<form className='space-y-4'>
								<div>
									<label htmlFor='name' className='block text-sm font-weight font-medium text-gray-300 mb-1 '>
										Name
									</label>
									<input
										type='text'
										id='name'
										placeholder='Your Name'
										className='w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700 '
									/>
								</div>
								<div>
									<label htmlFor='email' className='block text-sm font-weight font-medium text-gray-300 mb-1 '>
										Email
									</label>
									<input
										type='email'
										id='email'
										placeholder='Your Email'
										className='w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700 '
									/>
								</div>
								<div>
									<label htmlFor='message' className='block text-sm font-weight font-medium text-gray-300 mb-1 '>
										Message
									</label>
									<textarea
										rows='4'
										id='message'
										placeholder='How can we help you?'
										className='w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700 '
									/>
								</div>
								<motion.button
									type='submit'
									whileHover={{ scale: 1.03 }}
									whileTap={{ scale: 0.97 }}
									className='w-full px-4 py-2 bg-gradient-to-r from-violet-600 to-violet-400 font-bold hover:from-violet-700 hover:to-purple-700 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg hover:shadow-violet-600/50'
								>
									Send Message
								</motion.button>
							</form>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>*/}
			
		</header>
	);
}
export default Header;
