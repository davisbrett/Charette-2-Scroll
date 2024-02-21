window.addEventListener('scroll', function () {
    var gridItems = document.querySelectorAll('.grid-item');
    var navbar = document.querySelector('.navbar');
    var scrollPosition = window.scrollY;
    var blurIntensity = scrollPosition / 50;

    gridItems.forEach(function (gridItem) {
        gridItem.style.filter = 'blur(' + blurIntensity + 'px)';
    });

    navbar.style.filter = 'blur(' + blurIntensity + 'px)';
});
