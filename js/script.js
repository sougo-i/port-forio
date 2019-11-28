$(function() {
  // ページを開いたときにカルーセルの文字を表示
  setTimeout(function() {
    $('#lorde-fadein').fadeIn(1500);
  },500);
  // ハンバーガーメニュー
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
  // ナビゲーション
  $('.wide-menu a,.menu-list a').click(function() {
    let href=$(this).attr('href');
    let scroll=$(href).offset().top;
    $('html,body').animate({'scrollTop':scroll},500);
  })
  // もっと見るボタン押した時に追加表示
  $('#more').click(function() {
    $('.moreWorks').slideToggle()
    $(this).hide();
    $('#more-2').show();
  });
  $('#more-2').click(function() {
    $('.moreWorks').slideToggle()
    $(this).hide();
    $('#more').show();
  })
});