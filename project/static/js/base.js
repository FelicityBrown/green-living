document.getElementById('hamburger').onclick = function() {
    document.body.classList.add('has-open-mobile-nav')
  }
  document.getElementById('close-hamburger').onclick = function() {
    document.body.classList.remove('has-open-mobile-nav')
  }
  document.getElementById('js-page-mask').onclick = function() {
    document.body.classList.remove('has-open-mobile-nav')
  }