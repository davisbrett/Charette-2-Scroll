window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var scaleFactorBig = 1 + (scrollPosition / 1000);
    var scaleFactorSmall = 1 - (scrollPosition / 1000);

    var bigItems = document.querySelectorAll('.big');
    bigItems.forEach(function (item) {
        item.style.transform = 'scale(' + scaleFactorBig + ')';
    });

    var smallItems = document.querySelectorAll('.small');
    smallItems.forEach(function (item) {
        item.style.transform = 'scale(' + scaleFactorSmall + ')';
    });
});
