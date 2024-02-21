window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var borderThickness = scrollPosition / 100;

    var top20Items = document.querySelectorAll('.top20');
    top20Items.forEach(function (top20Item) {
        top20Item.style.borderTop = borderThickness + 'px solid #31408C';
    });

    var left20Items = document.querySelectorAll('.left20');
    left20Items.forEach(function (left20Item) {
        left20Item.style.borderLeft = borderThickness + 'px solid #31408C';
    });

    var right20Items = document.querySelectorAll('.right20');
    right20Items.forEach(function (right20Item) {
        right20Item.style.borderRight = borderThickness + 'px solid #31408C';
    });

    var bottom20Items = document.querySelectorAll('.bottom20');
    bottom20Items.forEach(function (bottom20Item) {
        bottom20Item.style.borderBottom = borderThickness + 'px solid #31408C';
    });
});

window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var opacity = 1 - (scrollPosition / 1000);

    var gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(function (item) {
        var currentColor = getComputedStyle(item).backgroundColor;
        var matches = currentColor.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/);
        if (matches) {
            var newColor = 'rgba(' + matches[1] + ', ' + matches[2] + ', ' + matches[3] + ', ' + opacity + ')';
            item.style.backgroundColor = newColor;
        }
    });
});

