import './style.css';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Initialize Lenis smooth scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

// Integrate Lenis with GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// Make lenis globally available if needed
window.lenis = lenis;

// Navigation fade effects
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      navLinks.forEach(other => {
        if (other !== link) {
          gsap.to(other, { opacity: 0.5, duration: 0.3 });
        }
      });
    });
    link.addEventListener('mouseleave', () => {
      navLinks.forEach(other => {
        gsap.to(other, { opacity: 1, duration: 0.3 });
      });
    });
  });

  // Sidebar Menu Logic
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const closeSidebarBtn = document.getElementById('close-sidebar');
  const sidebarMenu = document.getElementById('sidebar-menu');
  const sidebarLinks = sidebarMenu ? sidebarMenu.querySelectorAll('a') : [];

  if (hamburgerBtn && closeSidebarBtn && sidebarMenu) {
    hamburgerBtn.addEventListener('click', () => {
      sidebarMenu.classList.remove('translate-x-full');
      gsap.fromTo(sidebarLinks, 
        { x: 50, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.7)', delay: 0.2 }
      );
    });

    closeSidebarBtn.addEventListener('click', () => {
      sidebarMenu.classList.add('translate-x-full');
    });
  }

  // Global Page Load Animation
  gsap.from('main', { opacity: 0, y: 20, duration: 1, ease: 'power3.out', delay: 0.2 });


  // Like Button Logic
  const likeBtns = document.querySelectorAll('.like-btn');
  likeBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const isLiked = this.getAttribute('data-liked') === 'true';
      if (isLiked) {
        this.setAttribute('data-liked', 'false');
        this.classList.remove('fill', 'text-red-500');
        this.style.fontVariationSettings = "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24";
        gsap.fromTo(this, { scale: 1.5 }, { scale: 1, duration: 0.3, ease: 'back.out(2)' });
      } else {
        this.setAttribute('data-liked', 'true');
        this.classList.add('fill', 'text-red-500');
        this.style.fontVariationSettings = "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24";
        gsap.fromTo(this, { scale: 1 }, { scale: 1.5, duration: 0.3, ease: 'back.out(2)', yoyo: true, repeat: 1 });
      }
    });
  });

  // Share Button Logic
  const shareBtns = document.querySelectorAll('.share-btn');
  shareBtns.forEach(btn => {
    btn.addEventListener('click', async () => {
      // Create a visual click effect
      gsap.fromTo(btn, { scale: 0.8 }, { scale: 1, duration: 0.3, ease: 'back.out(2)' });
      
      const shareData = {
        title: 'RIVO Community',
        text: 'Check out this amazing post from the RIVO Community!',
        url: window.location.href
      };

      try {
        if (navigator.share) {
          await navigator.share(shareData);
        } else {
          // Fallback to opening Instagram app or web
          window.open('instagram://', '_self');
          setTimeout(() => {
            window.open('https://instagram.com/', '_blank');
          }, 500);
        }
      } catch (err) {
        console.log('Sharing canceled or failed:', err);
      }
    });
  });

  // Scroll Reveal Animations
  const revealElements = document.querySelectorAll('.gs-reveal');
  revealElements.forEach((el) => {
    gsap.fromTo(el, 
      { autoAlpha: 0, y: 40 }, 
      { 
        duration: 1, 
        autoAlpha: 1, 
        y: 0, 
        ease: 'power3.out', 
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  });
});
