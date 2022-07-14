import React, { useEffect, useRef } from 'react'
import { images } from '../../constants';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './ScrollToTop.scss';

function ScrollToTop() {

    const ref = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    const scrollUp = () => {
        const element = document.getElementById("home");
        element.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest",
        });
    };

    useEffect(() => {
        const element = ref.current;
        gsap.to(element, {
            display: "block",
            scrollTrigger: {
                trigger: element,
                start: "top top",
                scrub: true,
            },
        });
    }, []);


  return (
        <div onClick = { scrollUp }>
      < img ref = { ref } src = { images.arrowUp } alt = "to top" />
    </div>
  )
}

export default ScrollToTop