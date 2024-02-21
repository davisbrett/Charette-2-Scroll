window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(function (item, index) {
        var hue = (scrollPosition + index * 200) % 360;
        item.style.backgroundColor = `hsl(${hue}, 70%, 50%)`;
    });
});