//네비게이션 , TOP

$(document).ready(function () {

  $('.sub_menu span a').toggle(function () {
    $('.sub_menu ul').slideDown('fast');
    $('.sub_menu i').removeClass('.fas fa-chevron-down');
    $('.sub_menu i').addClass('.fas fa-chevron-up');
  }, function () {
    $('.sub_menu ul').slideUp('fast');
    $('.sub_menu i').removeClass('.fas fa-chevron-up');
    $('.sub_menu i').addClass('.fas fa-chevron-down');
  });
});