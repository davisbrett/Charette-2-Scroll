window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var grayscaleIntensity = scrollPosition / 500;

    var navbar = document.querySelector('.navbar');
    navbar.style.filter = 'grayscale(' + grayscaleIntensity + ')';

    var gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(function (item) {
        item.style.filter = 'grayscale(' + grayscaleIntensity + ')';
    });

    var grid16 = document.querySelector('.grid16');
    grid16.style.filter = 'grayscale(' + grayscaleIntensity + ')';

    document.body.style.backgroundColor = 'rgba(240, 240, 240, ' + (1 - grayscaleIntensity) + ')';
});
