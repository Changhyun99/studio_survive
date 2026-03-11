/* ========================================
   SCROLL ANIMATIONS & HEADER STATE
   ======================================== */

(function () {
    'use strict';

    // Header scroll state
    const header = document.getElementById('header');
    let lastScrollY = 0;

    function handleHeaderScroll() {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 50) {
            header.classList.add('is-scrolled');
        } else {
            header.classList.remove('is-scrolled');
        }

        lastScrollY = currentScrollY;
    }

    // Intersection Observer for scroll animations
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('[data-animate]');

        if (!animatedElements.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15,
                rootMargin: '0px 0px -50px 0px',
            }
        );

        animatedElements.forEach((el) => observer.observe(el));
    }

    // Smooth scroll for anchor links
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth',
                    });

                    // Close mobile nav if open
                    const nav = document.querySelector('.header__nav');
                    const menuBtn = document.querySelector('.header__menu-btn');
                    nav.classList.remove('is-open');
                    menuBtn.classList.remove('is-active');
                }
            });
        });
    }

    // Init
    window.addEventListener('scroll', handleHeaderScroll, { passive: true });

    document.addEventListener('DOMContentLoaded', function () {
        initScrollAnimations();
        initSmoothScroll();
    });
})();
