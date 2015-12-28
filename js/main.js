var currentPage = 1;

$(document).ready(function() {
  $('#fullpage').fullpage({
    navigation: true,
    afterLoad: function(anchorLink, index) {
      if (index == 1) {
        $('#fp-nav span').css('backgroundColor', 'white');
      }
      currentPage = index;
      ga('send', 'event', 'Navigation', 'afterLoad', index);
    },
    onLeave: function(index, nextIndex) {
      if (nextIndex == 1) {
        $('footer').animate({
          backgroundColor: 'transparent',
          borderTop: 'transparent'
        });
        $('#fp-nav span').animate({
          backgroundColor: 'white'
        });
      }
      if (index == 1) {
        $('footer').animate({
          backgroundColor: 'rgba(155,155,155,0.5)',
          borderTop: 'rgba(155,155,155,0.9)'
        });
        $('#fp-nav span').animate({
          backgroundColor: '#F98100'
        });
      }
    }
  });

  $('.beta').click(function() {
    $('#email-modal').fadeIn();
    ga('send', 'pageview', 'beta-form');
    ga('send', 'event', 'Beta', 'show-form', currentPage);
  });

  $('#email-modal').click(function(e) {
    e.preventDefault();
    $(this).fadeOut();
    ga('send', 'event', 'Beta', 'hide-form', currentPage);
  });

  $('.email-form').submit(function(e) {
    // Use form to submit the actual action
    var email = $('.email-form .email').val();
    ga('send', 'event', 'Beta', 'submit-form', email);
  });
  $('input').click(function(e) {
    return e.stopImmediatePropagation();
  });
  $('button').click(function(e) {
    return e.stopImmediatePropagation();
  });
});
