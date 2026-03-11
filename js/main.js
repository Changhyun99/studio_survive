/* ========================================
   MAIN — MOBILE NAV & GENERAL
   ======================================== */

(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        // Mobile navigation toggle
        const menuBtn = document.querySelector('.header__menu-btn');
        const nav = document.querySelector('.header__nav');

        if (menuBtn && nav) {
            menuBtn.addEventListener('click', function () {
                this.classList.toggle('is-active');
                nav.classList.toggle('is-open');
            });
        }

        // Current year in footer (optional)
        const yearEl = document.querySelector('[data-year]');
        if (yearEl) {
            yearEl.textContent = new Date().getFullYear();
        }
    });
})();
