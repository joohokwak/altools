$(function () {
  const user = localStorage.getItem('id');

  if (user) {
    $('#header .login_btn').text('관리자 님').parent().addClass('on');
  } else {
    $('#header .login_btn').text('로그인');
  }

  // AOS 초기화
  AOS.init();

  // 스크롤시 Header 아래부분 border 생기도록
  $(window).on('scroll', function() {
    if ($(this).scrollTop()) {
      $('#header').addClass('fixed');
    } else {
      $('#header').removeClass('fixed');
    }
  }).trigger('scroll');

  // 서브메뉴에서 GNB 클릭시
  $('#header .aside_wrap .gnb > li > a').on('click', function(e) {
    e.preventDefault();
    if ($(this).attr('href').startsWith('business')) {
      location.href = 'business.html';
      return;
    }
    $(this).parent().toggleClass('on');
  });

  // 서브메뉴 열기 버튼
  $('#header .sub_menu_btn').on('click', function() {
    $('#header').addClass('on');
  });
  
  // 서브메뉴 닫기 버튼
  $('#header .close_btn').on('click', function() {
    $('#header').removeClass('on');
  });

  // 로그인 페이지 이동 버튼
  $('#header .login_btn').on('click', function(e) {
    if (!user) {
      location.href = 'login.html';
    }
  });

  // 로그아웃 버튼
  $('#header .logout_btn').on('click', function(e) {
    e.preventDefault();
    localStorage.removeItem('id');
    location.href = 'index.html';
  });

  // 로그인 버튼
  $('.login_container .login_btn').on('click', function(e) {
    e.preventDefault();

    const id = $('#login_id').val().trim();
    const pw = $('#login_pw').val().trim();

    if (!id) {
      alert('아이디를 입력해주세요');
      $('#login_id').trigger('focus');
      return;
    } else if (!pw) {
      alert('비밀번호를 입력해주세요');
      $('#login_pw').trigger('focus');
      return;
    }

    localStorage.setItem('id', id);
    location.href = 'index.html';
  });

  // main swiper
  let mainSwiper = new Swiper('.main_slider .swiper', {
    loop: true,
    simulateTouch: false,
    speed: 1000,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      init: function() {
        $('.main_slider .txt_wrap').eq(0).addClass('on');
      },
      'slideChangeTransitionStart': function () {
        let idx = this.realIndex;
        $('.main_slider .txt_wrap').eq(idx).addClass('on').siblings().removeClass('on');
      },
    },
  });

  // main swiper 자동재생 컨트롤
  $('.main_slider .swiper_play_btn').on('click', function() {
    let autoplay = mainSwiper.autoplay;
    if (autoplay.running) {
      $(this).css('background-image', 'url(images/svg/start_btn.svg)');
      mainSwiper.autoplay.stop();
    } else {
      $(this).css('background-image', 'url(images/svg/pause_btn.svg)');
      mainSwiper.autoplay.start();
    }
  });

  // promotion swiper
  let promotionSwiper = new Swiper('.main_promotion .swiper', {
    loop: true,
    simulateTouch: false,
    speed: 1000,
    slidesPerView: 'auto',
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      enabled: false,
    },
    breakpoints: {
      576: {
        loop: false,
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
        navigation: {
          enabled: false,
        },
        pagination: {
          type: 'bullets',
        },
        hashNavigation: {
          watchState: true,
          replaceState: true,
        }
      },
      1201: {
        loop: true,
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        spaceBetween: 0,
        pagination: {
          type: 'fraction',
        },
        navigation: {
          enabled: true,
        },
      }
    },
  });

  // footer family 버튼
  $('#footer .select_btn').on('click', function() {
    $(this).siblings().toggle();
  });

  // 비밀번호 보이기/숨기기
  let isPasswordType = true;
  $('.login_container .toggle_pw').on('click', function() {
    if (isPasswordType) {
      $(this).siblings().attr('type', 'text');
      isPasswordType = false;
    } else {
      $(this).siblings().attr('type', 'password');
      isPasswordType = true;
    }
  });

  // 파일 선택
  $('.write_container input[type=file]').on('change', function(e) {
    const files = $(this).get(0).files;
    // 선택 후 취소했을경우 파일명이 없어서 오류가 발생하므로
    if (files.length) { 
      let filename = files[0].name;
      // 추출한 파일명 삽입
      const fileName = $(this).parent().siblings('.file_name');
      fileName.addClass('on').find('span').text(filename);
      fileName.find('.file_delete_btn').css('display', 'block');
    }
  });

  // 파일 취소 버튼
  $('.file_delete_btn').on('click', function(e) {
    e.preventDefault();
    $(this).hide().siblings('span').text('파일 첨부 용량 최대 10MB 이하');
    $(this).closest('.file_name').removeClass('on').siblings('label').find('input[type=file]').val('');
  });

  // 글쓰기 분류 선택
  $('.write_container .type_btn').on('click', function() {
    $(this).siblings('.drawer').slideToggle('fast');
  });

  // 글쓰기 분류 목록 중 선택 시
  $('.write_container .drawer a').on('click', function(e) {
    e.preventDefault();
    let txt = $(this).text();
    $(this).closest('.drawer').siblings('.type_btn').text(txt).end().slideToggle();
  });

  // 글 등록하기 버튼
  $('.write_container .submit_btn').on('click', function(e) {
    e.preventDefault();
    location.href = 'notice-list.html';
  });

  // 버전 정보
  $('.product_version ul li').on('click', function() {
    $(this).toggleClass('on').find('.description').slideToggle('fast');
  });

  // 사용환경 상세정보
  $('.product_info .info_wrap button').on('click', function() {
    $(this).toggleClass('on');
    $(this).next('ul').slideToggle('fast');
  });

  // 제품상세 페이지 이동
  $('a[href="product.html"]').on('click', function(e) {
    e.preventDefault();
    let seqNo = $(this).data('seqno');
    localStorage.setItem('seqNo', seqNo);
    location.href = 'product.html';
  });
});