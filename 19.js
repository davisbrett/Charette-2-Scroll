window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var opacity = 1 - (scrollPosition / 1000);
    var gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(function (item) {
        item.style.opacity = opacity;
    });
});
