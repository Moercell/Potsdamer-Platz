(function() {

  var img1 = $('.img1');
  var img2 = $('.img2');
  var img3 = $('.img3');
  var img4 = $('.img4');
  var fa = $('.fa-caret-up');

  $('.time1').bind('click', function() {
    img1.addClass('iaktiv');
    img2.removeClass('iaktiv');
    img3.removeClass('iaktiv');
    img4.removeClass('iaktiv');
    fa.addClass('t1');
    fa.removeClass('t2');
    fa.removeClass('t3');
    fa.removeClass('t4');
    return false;
  });

  $('.time2').bind('click', function() {
    img1.removeClass('iaktiv');
    img2.addClass('iaktiv');
    img3.removeClass('iaktiv');
    img4.removeClass('iaktiv');
    fa.removeClass('t1');
    fa.addClass('t2');
    fa.removeClass('t3');
    fa.removeClass('t4');
    return false;
  });

  $('.time3').bind('click', function() {
    img1.removeClass('iaktiv');
    img2.removeClass('iaktiv');
    img3.addClass('iaktiv');
    img4.removeClass('iaktiv');
    fa.removeClass('t1');
    fa.removeClass('t2');
    fa.addClass('t3');
    fa.removeClass('t4');
    return false;
  });

  $('.time4').bind('click', function() {
    img1.removeClass('iaktiv');
    img2.removeClass('iaktiv');
    img3.removeClass('iaktiv');
    img4.addClass('iaktiv');
    fa.removeClass('t1');
    fa.removeClass('t2');
    fa.removeClass('t3');
    fa.addClass('t4');
    return false;
  });

})();
