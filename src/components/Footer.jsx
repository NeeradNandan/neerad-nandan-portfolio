import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";


const Footer = () => {
	return (
		<footer
			className='bg-black text-white py-16 px-6 mt-40'
		>
			<div
				className='max-w-6xl mx-auto'
			>
				<div
					className='flex justify-between items-center'
				>
					<h2
						className='text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent'
					>
						Neerad Nandan
					</h2>
					
					<div>
						<h3
							className='text-xl font-semibold mb-4 text-purple-200'
						>
							Connect
						</h3>
						<div
							className='flex space-x-4'
						>
							<a
								href='#'
								className='text-gray-700 hover:text-violet-400 transition-colors'
							>
								<FiGithub
									className='w-5 h-5'
								/>
								
							</a>
							<a
								href='#'
								className='text-gray-700 hover:text-violet-400 transition-colors'
							>
								<FiLinkedin
									className='w-5 h-5'
								/>
							
							</a>
							<a
								href='#'
								className='text-gray-700 hover:text-violet-400 transition-colors'
							>
								<FiTwitter
									className='w-5 h-5'
								/>
							
							</a>
						</div>
					</div>
				</div>
				
				<div
					className='border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center'
				>
					<p
						className='text-gray-500 text-sm '
					>
						&#169; Neerad Nandan. All Rights Reserved.
					</p>
					
					<div
						className='flex space-x-6 mt-4 md:mt-0 '
					>
						<a
							href='#'
							className='text-gray-500 hover:text-white text-sm transition-colors '
						>
							Privacy Policy
						</a>
						<a
							href='#'
							className='text-gray-500 hover:text-white text-sm transition-colors '
						>
							Terms of Service
						</a>
						<a
							href='#'
							className='text-gray-500 hover:text-white text-sm transition-colors '
						>
							Cookie Policy
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
