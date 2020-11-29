jQuery(document).ready(function() {
  $('.link').on('click', function() {
    if (!$('#' + $(this).attr('id') + 'Content').is(':visible')) {
      if($(this).hasClass('level1')) {
        $('.submenu').hide();
        $('.level1').parent().removeClass('open');
      } else if($(this).hasClass('level2')) {
        $('.submenu2').hide();
        $('.level2').parent().removeClass('open');
        $('.fa-chevron-up').addClass('fa-chevron-down');
        $(this).children('i').removeClass('fa-chevron-down');
        $(this).children('i').addClass('fa-chevron-up');
      }
    } else {
      $(this).children('i').removeClass('fa-chevron-up');
      $(this).children('i').addClass('fa-chevron-down');
    }
    $('#' + $(this).attr('id')).parent().toggleClass('open');
    $('#' + $(this).attr('id') + 'Content').toggle('show');
  });
});
