window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(function (item) {
        var heightDecrement = scrollPosition * 0.06;
        var rotateAngle = scrollPosition * 0.5;

        var newHeight = 100 - heightDecrement;
        if (newHeight < 0) {
            newHeight = 0;
        }

        item.style.height = newHeight + 'px';
        item.style.transform = `rotate(${rotateAngle}deg)`;
    });
});
