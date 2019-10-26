$(function() {
  // ページを開いたときにカルーセルの文字を表示
  setTimeout(function() {
    $('#lorde-fadein').fadeIn(1500);
  },500);
  $('.hamburger').click(function() {
    $(this).hide(300);
    $('.menu').show(600);
    $('.close-btn').show(600);
  });
  $('.close-btn').click(function() {
    $(this).hide(300);
    $('.menu').hide(600);
    $('.hamburger').show(600);
  });
});