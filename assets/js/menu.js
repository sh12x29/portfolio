(function ($) {
})(jQuery);
  function toggleNav() {
  var body = document.body;
  var hamburger = document.getElementById('nav_btn');
  var blackBg = document.getElementById('nav_bg');
 
  hamburger.addEventListener('click', function() {
    body.classList.toggle('nav_open'); //���j���[�N���b�N��nav-open�Ƃ����N���X��body�ɕt�^
  });
  blackBg.addEventListener('click', function() {
    body.classList.remove('nav_open'); //������x�N���b�N�ŉ���
  });
}
toggleNav();