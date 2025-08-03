import { useEffect, useRef } from "react";
import { gsap } from "gsap";


const CustomCursor = () => {
	const cursorRef = useRef(null);
	const cursorBorderRef = useRef(null);
	
	useEffect( () => {
		const cursor = cursorRef.current;
		const cursorBorder = cursorBorderRef.current;
		
		if ( !cursor || !cursorBorder ) {
			return;
		}
		
		gsap.set([cursor, cursorBorder], {
			xPercent: -50,
			yPercent: -50,
		});
		
		const xTo = gsap.quickTo(cursor, 'x', { duration: 0.2, ease: 'power3.out' });
		
		const yTo = gsap.quickTo( cursor, 'y', { duration: 0.2, ease: 'power3.out' });
		
		const xToBorder = gsap.quickTo(cursorBorder, 'x', { duration: 0.5, ease: 'power.out' });
		
		const yToBorder = gsap.quickTo( cursorBorder, 'y', { duration: 0.5, ease: 'power3.out' });
		
		const mouseMoveHandler = (event) => {
			xTo(event.clientX);
			yTo(event.clientY);
			xToBorder(event.clientX);
			yToBorder(event.clientY);
		}
		
		document.addEventListener("mousemove", mouseMoveHandler);
		
		document.addEventListener("mousedown", () => {
			gsap.to([cursor, cursorBorder], { scale: 0.6, duration: 0.2 });
		});
		
		document.addEventListener( "mouseup", () => {
			gsap.to( [ cursor, cursorBorder ], { scale: 1, duration: 0.2 } );
		} );
		
	}, [] );
	
	const isMobile = typeof window !== "undefined" && window.matchMedia( "(max-width: 768px)").matches;
	
	if ( isMobile ) {
		return null;
	}
	
	return (
		<>
			{/*Main Cursor*/}
			<div
				ref={cursorRef}
				className='fixed top-0 left-0 w-[20px] h-[20px] bg-white rounded-full pointer-events-none z-[999] mix-blend-difference'
			/>
			{/*Cursor Border*/}
			<div
				ref={cursorBorderRef}
				className='fixed top-0 left-0 w-[40px] h-[40px] border rounded-full border-white pointer-events-none z-[999] mix-blend-difference opacity-50'
			/>
		</>
	);
};
export default CustomCursor;
