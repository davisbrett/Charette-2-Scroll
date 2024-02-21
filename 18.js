window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var scaleFactor = 1 - (scrollPosition / 1714);

    var gridContainer = document.querySelector('.grid-container');
    gridContainer.style.transform = 'scale(' + scaleFactor + ')';
});
