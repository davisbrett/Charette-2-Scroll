window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var gridItems = document.querySelectorAll('.grid12 .grid-item');

    gridItems.forEach(function (item) {
        var borderRadius = 0 + scrollPosition * 0.05;
        item.style.borderRadius = borderRadius + 'px';
    });
});