(function () {
  'use strict';

  // Mobile nav toggle
  var toggle = document.getElementById('menu-toggle');
  var nav = document.getElementById('main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Footer year, always current
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Contact form submission via Formspree
  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');

  if (form && status) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      status.textContent = 'Sending...';
      status.className = 'form-status form-status-pending';

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      })
        .then(function (response) {
          if (response.ok) {
            status.textContent = "Thanks! Your message has been sent — we'll get back to you soon.";
            status.className = 'form-status form-status-success';
            form.reset();
          } else {
            status.textContent = 'Something went wrong. Please call us at (702) 645-9934 instead.';
            status.className = 'form-status form-status-error';
          }
        })
        .catch(function () {
          status.textContent = 'Something went wrong. Please call us at (702) 645-9934 instead.';
          status.className = 'form-status form-status-error';
        })
        .finally(function () {
          submitBtn.disabled = false;
        });
    });
  }
})();
