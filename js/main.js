$(window).load(() => {
  $(".before-after").twentytwenty({
    before_label: 'Без скинали',
    after_label: 'Со скинали',
  });

  $(".before-slider").slick({
    draggable: false,
    dots: true,
    dotsClass: 'before-slider__dots',
    prevArrow: $('.arrow-left'),
    nextArrow: $('.arrow-right')
  });

  $('.menu-button').on('click', () => {
    $('.menu').toggleClass('menu_active');
  });

  // Настройка select
  $('.select').on('click', () => {
    $('.select__dropdown').toggleClass('select__dropdown_open');
  });

  $('.select__option').on('click', function() {
    const value = $(this).attr('data-value');
    $('#select-type').val(value);
    $('.select_checked').text(value);
  });

  // Настройка ссылок
  $("a[href^='#']").click(function() {
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top - 130 + "px"});
    return false;
  });
  $('[type="tel"]').mask("+ 7 (999) 999-99-99");
});