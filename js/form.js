/* ========================================
   CONTACT FORM HANDLING
   ======================================== */

(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        const form = document.querySelector('.contact__form');
        if (!form) return;

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const submitBtn = form.querySelector('.contact__submit');
            const originalText = submitBtn.textContent;

            // Loading state
            submitBtn.textContent = '보내는 중...';
            submitBtn.disabled = true;

            // Send via Formspree
            fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: {
                    Accept: 'application/json',
                },
            })
                .then((response) => {
                    if (response.ok) {
                        submitBtn.textContent = '문의가 전송되었습니다!';
                        form.reset();
                        setTimeout(() => {
                            submitBtn.textContent = originalText;
                            submitBtn.disabled = false;
                        }, 3000);
                    } else {
                        throw new Error('전송 실패');
                    }
                })
                .catch(() => {
                    submitBtn.textContent = '전송 실패 — 이메일로 문의해주세요';
                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                    }, 3000);
                });
        });
    });
})();
