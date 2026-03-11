/* ========================================
   EMAILJS CONTACT FORM
   ======================================== */

(function () {
    'use strict';

    // ★ 여기에 본인 키를 넣으세요
    var PUBLIC_KEY  = '0iQbNZd1KaHxvBQm2';
    var SERVICE_ID  = 'service_zckm4cy';
    var TEMPLATE_ID = 'template_jv2acna';

    emailjs.init(PUBLIC_KEY);

    document.addEventListener('DOMContentLoaded', function () {
        var form = document.getElementById('contact-form');
        if (!form) return;

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            var submitBtn = form.querySelector('.contact__submit');
            var originalText = submitBtn.textContent;

            submitBtn.textContent = '보내는 중...';
            submitBtn.disabled = true;

            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form)
                .then(function () {
                    submitBtn.textContent = '문의가 전송되었습니다!';
                    form.reset();
                    setTimeout(function () {
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                    }, 3000);
                })
                .catch(function () {
                    submitBtn.textContent = '전송 실패 — 이메일로 문의해주세요';
                    setTimeout(function () {
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                    }, 3000);
                });
        });
    });
})();
