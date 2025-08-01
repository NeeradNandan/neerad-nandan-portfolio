import { useEffect } from "react";
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

const App = () => {
	useEffect( () => {
		gsap.registerPlugin( ScrollTrigger )
		
		ScrollTrigger.refresh();
		
		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill() )
		}
	},  []);
	
	return (
		<div>
			<Header />
			<Hero />
			<CustomCursor />
			<AboutSection />
			<ProjectSection />
			<ContactSection />
			<Footer />
			<ProgressBar />
		</div>
	);
};
export default App;
