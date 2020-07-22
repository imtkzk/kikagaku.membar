/*  picturefill.js
-------------------------------------------------------*/
$(function () {
  document.createElement( 'picture' );
});


/*  toggle menu
-------------------------------------------------------*/
$(function(){
  $('#toggle').click(function() {
    $('.header__navi').toggleClass('is-open');
    $('#toggle').toggleClass('is-active');
  });
  $('.header__navi a').click( function () {
    $('#toggle').removeClass('is-active');
    $('.header__navi').removeClass('is-open');
  });
});


/*  acordion menu
-------------------------------------------------------*/

$(function(){
  $('.navi > div p').click(function(){
    $(this).next('.submenu-bg').slideToggle();
    $(this).toggleClass('is-open');
    $('.navi > div p').not($(this)).next('.submenu').slideUp();
  });
});


/* smooth scroll
------------------------------------- */

$(function() {
  var headerHight = $('#header').height();
  $('a[href^="#"]').click(function() {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "body" : href);
    var position = target.offset().top - headerHight;
    var speed = 500;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});


/*  scroll animation
-------------------------------------------------------*/

// inview
$(function() {
  $('.anim--scroll').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).addClass('is-show');
    } else {
      //$(this).removeClass('is-show');
    }
  });
});


/*  swiper
-------------------------------------------------------*/

$(function(){
  var swiper1 = new Swiper('#interv01', {
    loop: false,
    slidesPerView: 1,
    speed: 1000,
    autoHeight: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: '.interv-slide-btn-next',
      prevEl: '.interv-slide-btn-prev',
    },
    pagination: {
      el: '.interv-slide-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
  });
});

$(function(){
  var swiper2 = new Swiper('#interv02', {
    loop: false,
    slidesPerView: 1,
    speed: 1000,
    autoHeight: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: '.interv-slide-btn-next',
      prevEl: '.interv-slide-btn-prev',
    },
    pagination: {
      el: '.interv-slide-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
  });
});

$(function(){
  var swiper3 = new Swiper('#interv03', {
    loop: false,
    slidesPerView: 1,
    speed: 1000,
    autoHeight: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: '.interv-slide-btn-next',
      prevEl: '.interv-slide-btn-prev',
    },
    pagination: {
      el: '.interv-slide-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
  });
});

$(function(){
  var swiper4 = new Swiper('#interv04', {
    loop: false,
    slidesPerView: 1,
    speed: 1000,
    autoHeight: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: '.interv-slide-btn-next',
      prevEl: '.interv-slide-btn-prev',
    },
    pagination: {
      el: '.interv-slide-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
  });
});

$(function(){
  var swiper5 = new Swiper('#interv05', {
    loop: false,
    slidesPerView: 1,
    speed: 1000,
    autoHeight: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: '.interv-slide-btn-next',
      prevEl: '.interv-slide-btn-prev',
    },
    pagination: {
      el: '.interv-slide-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
  });
});


/*  image slide
-------------------------------------------------------*/
$(function() {
  $('.square-box').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).addClass('is-move');
    } else {
      $(this).removeClass('is-move');
    }
  });
});
