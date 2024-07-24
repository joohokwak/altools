import { getProduct } from './products.js';

$(function() {
  const seqNo = localStorage.getItem('seqNo');
  const product = getProduct(seqNo)[0];

  if (product) {
    $('.icon_box').attr('src', `images/${product.imgs.icon}`);
    $('.tit_wrap > h2').text(product.name).append(`<span>${product.ver}</span>`);
    $('.feature1').attr('src', `images/${product.imgs.feature1}`);
    $('.feature2').attr('src', `images/${product.imgs.feature2}`);
    $('.feature3').attr('src', `images/${product.imgs.feature3}`);
    $('.content').eq(0).css('background-color', product.bg.feature1);
    $('.content').eq(1).css('background-color', product.bg.feature2);
    $('.content').eq(2).css('background-color', product.bg.feature3);

    if (seqNo === 'al-07') {
      $('.content:lt(2) .tit_wrap > *').css('color', '#fff;');
    } else if (seqNo === 'al-06') {
      $('.content:eq(2) .tit_wrap > *').css('color', '#fff;');
    }

    localStorage.removeItem('seqNo');
  }
});