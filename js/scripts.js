// Initialize lightbox on link click

$('.gallery').on('click', 'a', function (e) {
    e.preventDefault();
    Lightbox.init($(this));
});
