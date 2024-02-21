window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var hueRotation = scrollPosition / 1.5;

    var gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(function (item) {
        item.style.filter = 'hue-rotate(' + hueRotation + 'deg)';
    });

    var navbar = document.querySelector('.navbar');
    navbar.style.filter = 'hue-rotate(' + hueRotation + 'deg)';
});
