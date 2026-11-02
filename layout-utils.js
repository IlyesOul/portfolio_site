/* Shared page lifecycle. Legacy entry-point filenames call this one initializer. */
(function () {
  'use strict';
  window.getPageWidth = function () { return document.documentElement.clientWidth; };
  window.getPageHeight = function () { return window.innerHeight; };
  var initialized = false;
  function init() {
    if (initialized || !document.body) return;
    initialized = true;
    var layer = document.getElementById('star-field');
    if (!layer) {
      layer = document.createElement('div');
      layer.id = 'star-field';
      layer.setAttribute('aria-hidden', 'true');
      document.body.prepend(layer);
    }
    // Seeded positions stay stable during resize and back/forward navigation.
    var seed = 2026;
    function random() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < 88; i++) {
      var star = document.createElement('span');
      star.className = 'portfolio-star';
      // Keep most stars on the right, clear of the reading column and navigation.
      var x = i < 70 ? 94 + random() * 5.5 : random() * 1.8;
      star.style.left = x + '%';
      star.style.top = (2 + random() * 96) + '%';
      star.style.setProperty('--size', (1.2 + random() * 2.8).toFixed(2) + 'px');
      star.style.setProperty('--duration', (3 + random() * 5).toFixed(2) + 's');
      star.style.setProperty('--delay', (-random() * 8).toFixed(2) + 's');
      fragment.appendChild(star);
    }
    layer.replaceChildren(fragment);
    document.addEventListener('visibilitychange', function () {
      layer.querySelectorAll('.portfolio-star').forEach(function (star) {
        star.style.animationPlayState = document.hidden ? 'paused' : 'running';
      });
    });
    var mobileMenu = document.querySelector('.mobile-nav');
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && mobileMenu && mobileMenu.open) {
        mobileMenu.open = false;
        mobileMenu.querySelector('summary').focus();
      }
    });
    document.addEventListener('click', function (event) {
      if (mobileMenu && mobileMenu.open && !mobileMenu.contains(event.target)) mobileMenu.open = false;
    });
    var audio = document.getElementById('myAudio');
    var play = document.getElementById('playBtn');
    var status = document.getElementById('audio-status');
    var fadeTimer, stopTimer;
    function resetAudio() {
      clearInterval(fadeTimer); clearTimeout(stopTimer);
      audio.pause(); audio.currentTime = 0; audio.volume = 1;
      play.setAttribute('aria-pressed', 'false');
      play.textContent = 'unleash the experience';
    }
    if (audio && play) {
      play.addEventListener('click', function () {
        if (!audio.paused) { resetAudio(); return; }
        audio.volume = 1;
        audio.play().then(function () {
          play.setAttribute('aria-pressed', 'true');
          play.textContent = 'pause the experience';
          if (status) status.textContent = '';
          stopTimer = setTimeout(function () {
            fadeTimer = setInterval(function () {
              // Clamp to the valid [0,1] range, including the final fade step.
              audio.volume = Math.max(0, audio.volume - 0.01);
              if (audio.volume <= 0.001) resetAudio();
            }, 50);
          }, 5000);
        }).catch(function () {
          if (status) status.textContent = 'Audio could not play. Try again to start the experience.';
          resetAudio();
        });
      });
      audio.addEventListener('ended', resetAudio);
      window.addEventListener('pagehide', resetAudio);
    }
  }
  window.Portfolio = { init: init };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
