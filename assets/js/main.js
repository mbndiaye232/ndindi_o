/* Ndindi'O — interactions du site */
(function () {
  'use strict';

  /* --- Menu mobile --- */
  var burger = document.querySelector('.burger');
  var links = document.querySelector('.nav__links');
  if (burger && links) {
    burger.addEventListener('click', function () {
      var open = links.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(open));
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* --- En-tête collant --- */
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-stuck', window.scrollY > 12);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* --- Révélation au scroll --- */
  var revealables = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealables.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealables.forEach(function (el) { io.observe(el); });
  } else {
    revealables.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* --- Compteurs animés --- */
  var counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window && counters.length) {
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        co.unobserve(el);
        var target = parseFloat(el.dataset.count);
        var decimals = (el.dataset.decimals | 0);
        if (reduce) { el.textContent = target.toFixed(decimals); return; }
        var start = performance.now(), dur = 1400;
        (function tick(now) {
          var p = Math.min((now - start) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = (target * eased).toFixed(decimals);
          if (p < 1) requestAnimationFrame(tick);
        })(start);
      });
    }, { threshold: 0.4 });
    counters.forEach(function (el) { co.observe(el); });
  }

  /* --- Galerie : filtres + lightbox --- */
  var gallery = document.querySelector('.gallery');
  if (gallery) {
    var figures = Array.prototype.slice.call(gallery.querySelectorAll('figure'));

    document.querySelectorAll('.filter').forEach(function (btn) {
      btn.addEventListener('click', function () {
        document.querySelectorAll('.filter').forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
        var cat = btn.dataset.filter;
        figures.forEach(function (fig) {
          fig.style.display = (cat === 'all' || fig.dataset.cat === cat) ? '' : 'none';
        });
      });
    });

    var box = document.querySelector('.lightbox');
    if (box) {
      var boxImg = box.querySelector('img');
      var boxCap = box.querySelector('.lightbox__cap');
      var open = function (src, cap) {
        boxImg.src = src;
        boxCap.textContent = cap || '';
        box.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      };
      var close = function () {
        box.classList.remove('is-open');
        document.body.style.overflow = '';
      };
      figures.forEach(function (fig) {
        fig.addEventListener('click', function () {
          var img = fig.querySelector('img');
          var cap = fig.querySelector('figcaption');
          open(img.dataset.full || img.src, cap ? cap.textContent : img.alt);
        });
      });
      box.addEventListener('click', function (e) {
        if (e.target === box || e.target.classList.contains('lightbox__close')) close();
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') close();
      });
    }
  }

  /* --- Formulaire de contact (mailto, sans backend) --- */
  var form = document.querySelector('form[data-mailto]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var d = new FormData(form);
      var get = function (k) { return (d.get(k) || '').toString().trim(); };
      var body = [
        'Nom : ' + get('nom'),
        'Organisation : ' + get('organisation'),
        'E-mail : ' + get('email'),
        'Téléphone : ' + get('tel'),
        'Sujet : ' + get('objet'),
        '',
        get('message')
      ].join('\n');
      var href = 'mailto:' + form.dataset.mailto
        + '?subject=' + encodeURIComponent('[Site Ndindi’O] ' + (get('objet') || 'Demande de contact'))
        + '&body=' + encodeURIComponent(body);
      window.location.href = href;
      var alert = form.querySelector('.form__alert');
      if (alert) alert.classList.add('is-visible');
    });
  }

  /* --- Année du copyright --- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
