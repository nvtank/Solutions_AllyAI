import { useCallback, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { TOTAL_CARDS, CARD_WIDTH, ANIMATION_DURATION } from './solutionsData';

// Preload GSAP plugins and register immediately
gsap.registerPlugin(ScrollTrigger);

interface AnimationRefs {
  titleRef: React.RefObject<HTMLDivElement>;
  horizontalRef: React.RefObject<HTMLDivElement>;
  cardsRef: React.RefObject<HTMLDivElement>;
  progressRef: React.RefObject<HTMLDivElement>;
}

export function useAnimations({ titleRef, horizontalRef, cardsRef, progressRef }: AnimationRefs) {
  const setupAnimations = useCallback(() => {
    const ctx = gsap.context(() => {
      // Immediate rendering - set initial states to visible
      gsap.set("*", { willChange: 'auto' });
      
      // Title animation - simplified for faster load
      if (titleRef.current) {
        gsap.set(titleRef.current, { opacity: 1, y: 0 }); // Pre-rendered visible
        gsap.fromTo(titleRef.current,
          { opacity: 0.8, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: ANIMATION_DURATION,
            ease: "power2.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Horizontal scroll - optimized for immediate rendering
      if (cardsRef.current) {
        const totalWidth = TOTAL_CARDS * CARD_WIDTH;
        
        // Pre-render cards in visible state
        const cards = Array.from(cardsRef.current.children);
        cards.forEach(card => {
          gsap.set(card, { opacity: 1, x: 0, force3D: true });
        });
        
        // Optimized horizontal scroll
        const horizontalTween = gsap.to(cardsRef.current, {
          x: () => -(totalWidth - CARD_WIDTH) + "vw",
          ease: "none",
          force3D: true,
          scrollTrigger: {
            trigger: horizontalRef.current,
            start: "top top",
            end: () => "+=" + (totalWidth * 6),
            scrub: 0.3,
            pin: true,
            anticipatePin: 1,
            onUpdate: (self) => {
              // Throttled progress update
              if (progressRef.current) {
                const progress = Math.round(self.progress * 100);
                gsap.set(progressRef.current, { width: `${progress}%` });
              }
            }
          }
        });

        // Immediate card content visibility
        cards.forEach((card, index) => {
          const elements = {
            content: card.querySelector('.card-content'),
            features: card.querySelectorAll('.feature-item')
          };
          
          // Set all elements to visible immediately
          if (elements.content) {
            gsap.set(elements.content, { opacity: 1, x: 0, force3D: true });
          }
          
          if (elements.features.length > 0) {
            gsap.set(elements.features, { opacity: 1, y: 0, force3D: true });
          }
          
          // Minimal entrance animations
          if (elements.content) {
            gsap.fromTo(elements.content,
              { opacity: 0.9, x: -20 },
              {
                opacity: 1,
                x: 0,
                duration: ANIMATION_DURATION,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: card,
                  start: "left 85%",
                  horizontal: true,
                  toggleActions: "play none none reverse"
                }
              }
            );
          }
        });
      }

      // Floating particles - simple animation
      requestAnimationFrame(() => {
        const particles = document.querySelectorAll('.floating-particle');
        particles.forEach((particle, i) => {
          gsap.to(particle, {
            y: "random(-30, 30)",
            x: "random(-15, 15)",
            duration: "random(8, 12)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.2,
            force3D: true
          });
        });
      });
    });

    return ctx;
  }, [titleRef, horizontalRef, cardsRef, progressRef]);

  useEffect(() => {
    const ctx = setupAnimations();
    return () => ctx.revert();
  }, [setupAnimations]);

  return { setupAnimations };
}
