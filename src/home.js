import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  
  // Navbar bg on scroll
  const navbar = document.getElementById('navbar');
  ScrollTrigger.create({
    start: 'top -50',
    end: 99999,
    toggleClass: {className: 'bg-black/90', targets: navbar},
    onEnter: () => gsap.to(navbar, { backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255,255,255,0.1)' }),
    onLeaveBack: () => gsap.to(navbar, { backdropFilter: 'blur(0px)', borderBottom: '1px solid transparent' })
  });

  // Hero Animations
  const tlHero = gsap.timeline();
  tlHero.from('#hero-headline', { y: 100, opacity: 0, duration: 1.2, ease: 'power4.out', delay: 0.5 })
        .from('#hero-subheadline', { y: 50, opacity: 0, duration: 1, ease: 'power3.out' }, '-=0.8')
        .to('#hero-cta', { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, '-=0.5')
        .to('#scroll-indicator', { opacity: 1, duration: 1 }, '-=0.5');

  gsap.to('.scroll-line-anim', { y: '100%', duration: 1.5, repeat: -1, ease: 'power2.inOut' });

  // Floating Beans (Simple Simulation)
  const beansContainer = document.getElementById('floating-beans');
  for (let i = 0; i < 8; i++) {
    const bean = document.createElement('div');
    bean.style.width = Math.random() * 20 + 10 + 'px';
    bean.style.height = bean.style.width;
    bean.style.backgroundColor = 'rgba(255,255,255,0.05)';
    bean.style.borderRadius = '50% 30% 50% 40%';
    bean.style.position = 'absolute';
    bean.style.left = Math.random() * 100 + '%';
    bean.style.top = Math.random() * 100 + '%';
    bean.style.filter = 'blur(2px)';
    beansContainer.appendChild(bean);

    gsap.to(bean, {
      y: '-=100',
      x: 'random(-50, 50)',
      rotation: 'random(0, 360)',
      duration: 'random(10, 20)',
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }

  // Parallax Hero
  gsap.to('#hero-video', {
    yPercent: 30,
    ease: 'none',
    scrollTrigger: {
      trigger: '#hero-section',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });

  // Story Section
  gsap.to('.parallax-img', {
    yPercent: 20,
    ease: 'none',
    scrollTrigger: {
      trigger: '#story-section',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  });
  gsap.to('.parallax-img-2', {
    yPercent: -20,
    ease: 'none',
    scrollTrigger: {
      trigger: '#story-section',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  });

  gsap.utils.toArray('.reveal-text').forEach(text => {
    gsap.from(text, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: text,
        start: 'top 85%',
      }
    });
  });

  // Horizontal Collection Scroll
  const collectionTrack = document.getElementById('collection-track');
  if (collectionTrack) {
    let scrollTween = gsap.to(collectionTrack, {
      xPercent: -66.66, // Adjust based on how many cards. 30vw * 4 cards + gaps = roughly 130vw overflow.
      ease: 'none',
      scrollTrigger: {
        trigger: '#collection-section',
        pin: true,
        scrub: 1,
        end: '+=2000'
      }
    });
  }

  // Video Experience (v1.mp4)
  gsap.from('#v1-text', {
    scale: 0.5,
    opacity: 0,
    scrollTrigger: {
      trigger: '#video-experience',
      start: 'top top',
      end: 'center center',
      scrub: 1
    }
  });
  gsap.to('#v1-text', {
    scale: 2,
    opacity: 0,
    scrollTrigger: {
      trigger: '#video-experience',
      start: 'center center',
      end: 'bottom top',
      scrub: 1
    }
  });

  // Bento Reveal
  gsap.from('.bento-card', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#bento-section',
      start: 'top 70%'
    }
  });

  // 3D Tilt Effect
  const tiltCards = document.querySelectorAll('.product-3d-card');
  tiltCards.forEach(card => {
    const inner = card.querySelector('.inner-3d');
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;
      
      gsap.to(inner, { rotateX, rotateY, duration: 0.5, ease: 'power2.out' });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(inner, { rotateX: 0, rotateY: 0, duration: 0.5, ease: 'power2.out' });
    });
  });

  // Video Scrubbing (v2.mp4)
  const v2Video = document.getElementById('v2-video');
  if (v2Video) {
    // Attempt to play slightly to load frame
    v2Video.play().then(() => v2Video.pause()).catch(() => {});
    
    ScrollTrigger.create({
      trigger: '#video-story',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => {
        if(v2Video.duration) {
          v2Video.currentTime = self.progress * v2Video.duration;
        }
      }
    });

    gsap.to('#v2-text-1', {
      opacity: 1,
      y: -50,
      scrollTrigger: {
        trigger: '#video-story',
        start: 'top top',
        end: '30% top',
        scrub: 1
      }
    });
    gsap.to('#v2-text-1', {
      opacity: 0,
      y: -100,
      scrollTrigger: {
        trigger: '#video-story',
        start: '30% top',
        end: '40% top',
        scrub: 1
      }
    });

    gsap.to('#v2-text-2', {
      opacity: 1,
      scale: 1.2,
      scrollTrigger: {
        trigger: '#video-story',
        start: '60% top',
        end: '80% top',
        scrub: 1
      }
    });
  }

  // Testimonials Auto Slider
  const testCards = document.querySelectorAll('.test-card');
  if (testCards.length > 0) {
    let currentTest = 0;
    setInterval(() => {
      gsap.to(testCards[currentTest], { opacity: 0, x: -100, duration: 1 });
      currentTest = (currentTest + 1) % testCards.length;
      gsap.fromTo(testCards[currentTest], 
        { opacity: 0, x: 100 }, 
        { opacity: 1, x: 0, duration: 1 }
      );
    }, 5000);
  }

  // Stats Counters
  const counters = document.querySelectorAll('.stat-counter');
  counters.forEach(counter => {
    const target = parseFloat(counter.getAttribute('data-target'));
    const isFloat = target % 1 !== 0;
    gsap.to(counter, {
      innerHTML: target,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#stats-section',
        start: 'top 80%'
      },
      snap: { innerHTML: isFloat ? 0.1 : 1 },
      onUpdate: function() {
        if (isFloat) {
          counter.innerHTML = Number(this.targets()[0].innerHTML).toFixed(1);
        } else {
          counter.innerHTML = Math.round(this.targets()[0].innerHTML);
        }
      }
    });
  });

  // Masonry Reveal
  gsap.from('.gallery-masonry > div', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.gallery-masonry',
      start: 'top 80%'
    }
  });

});
