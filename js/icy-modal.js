function icyModal() {

  var modal = $('.im-modal');
  var modalLinks = $('[data-im-show]');
  var closeModalElements = $('.im-modal, .im-close');

  function stopVideo() {

    // reloads embed
    $('.im-modal.im-active iframe').attr("src",  $('.im-modal.im-active iframe').attr("src"));

  }


  closeModalElements.click(function() {

    stopVideo();
    modal.removeClass('im-active');
    
  }).children().click(function() {

    // stop child triggering parent click event
    return false;
  });


  modalLinks.click(function(event) {

    // prevent jumping to the top of the page
    event.preventDefault();

    stopVideo();

    // In case some modal is already opened (linking from one modal to another)
    modal.removeClass('im-active');

    $('#' + $(this).data('imShow')).addClass('im-active');
  });
}

$(document).ready(function() {
  icyModal();
});
