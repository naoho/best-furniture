
$(".openbtn3").click(function () {//ボタンがクリックされたら
  $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
  $(".hamburger__menu").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$(".hamburger__menu a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn3").removeClass('active');//ボタンの activeクラスを除去し
    $(".hamburger__menu").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去
});

// 動きのきっかけの起点となるアニメーションの名前を定義
function fadeAnime(){

  // ふわっ
  $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
    if ($(window).width() > 1000) { //768px未満の時
    var elemPos = $(this).offset().top+200;//要素より、200px下の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
    }
    }
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
