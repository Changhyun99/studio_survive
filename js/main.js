/* ========================================
   MAIN — MOBILE NAV & WORK DETAIL TOGGLE
   ======================================== */

(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        // Mobile navigation toggle
        var menuBtn = document.querySelector('.header__menu-btn');
        var nav = document.querySelector('.header__nav');

        if (menuBtn && nav) {
            menuBtn.addEventListener('click', function () {
                this.classList.toggle('is-active');
                nav.classList.toggle('is-open');
            });
        }

        // Work detail toggle
        var toggles = document.querySelectorAll('[data-work-toggle]');

        toggles.forEach(function (toggle) {
            toggle.addEventListener('click', function () {
                var article = this.closest('.work__item');
                var detail = article.querySelector('.work__item-detail');
                var viewText = this.querySelector('.work__item-view');

                if (detail.classList.contains('is-open')) {
                    detail.classList.remove('is-open');
                    viewText.textContent = '자세히 보기';
                } else {
                    // 다른 열린 detail 닫기
                    document.querySelectorAll('.work__item-detail.is-open').forEach(function (openDetail) {
                        openDetail.classList.remove('is-open');
                        openDetail.closest('.work__item').querySelector('.work__item-view').textContent = '자세히 보기';
                    });

                    detail.classList.add('is-open');
                    viewText.textContent = '접기';
                }
            });
        });
    });
})();
