window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var skewIntensity = scrollPosition / 50;
    var gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(function (item) {
        item.style.transform = 'skew(' + skewIntensity + 'deg, ' + (skewIntensity) + 'deg)';
    });
});
