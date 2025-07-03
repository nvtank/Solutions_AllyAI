import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimationRefs {
  titleRef: React.RefObject<HTMLDivElement>;
  horizontalRef: React.RefObject<HTMLDivElement>;
  cardsRef: React.RefObject<HTMLDivElement>;
  progressRef: React.RefObject<HTMLDivElement>;
}

export function useAnimations({ titleRef, horizontalRef, cardsRef, progressRef }: AnimationRefs) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Common animation for the title on all screen sizes
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Create responsive animations using matchMedia
      ScrollTrigger.matchMedia({
 
        "(min-width: 1024px)": () => {
          if (horizontalRef.current && cardsRef.current && progressRef.current) {
           
            gsap.set(progressRef.current.parentElement, { display: 'block' });

            const totalWidth = cardsRef.current.scrollWidth - window.innerWidth;

            gsap.to(cardsRef.current, {
              x: () => -totalWidth,
              ease: "none",
              scrollTrigger: {
                trigger: horizontalRef.current,
                start: "top top",
                end: () => `+=${totalWidth}`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                onUpdate: (self) => {
                  if (progressRef.current) {
                    gsap.set(progressRef.current, { width: `${self.progress * 100}%` });
                  }
                },
              },
            });
          }
        },

        // MOBILE/TABLET ANIMATIONS---
        "(max-width: 1023px)": () => {

          if (progressRef.current) {
            gsap.set(progressRef.current.parentElement, { display: 'none' });
          }

          if (cardsRef.current) {
            const cards = Array.from(cardsRef.current.children);
            cards.forEach((card) => {
              gsap.from(card, {
                opacity: 0,
                y: 60,
                duration: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: card,
                  start: "top 90%", 
                  toggleActions: "play none none reverse",
                },
              });
            });
          }
        },
      });
    });

    // Cleanup function to revert all animations
    return () => ctx.revert();
  }, [titleRef, horizontalRef, cardsRef, progressRef]);
}
