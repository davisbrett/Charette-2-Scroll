window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var gridItems = document.querySelectorAll('.grid-item');
    var baseHeight = 100;
    var increment = 50;
    var threshold = baseHeight + increment;
    var maxHeight = 300;

    gridItems.forEach(function (item, index) {
        var itemHeight = baseHeight + (scrollPosition - threshold * index) * 0.3;

        item.style.minHeight = baseHeight + 'px';

        if (itemHeight > maxHeight) {
            itemHeight = maxHeight;
        }

        if (scrollPosition >= threshold * index) {
            item.style.height = itemHeight + 'px';
        }
    });
});