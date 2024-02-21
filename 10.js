window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var gridContainer = document.querySelector('.grid10 .grid-container');
    var newHeight = 220 + scrollPosition * 1;

    if (newHeight < 220) {
        newHeight = 220;
    }

    gridContainer.style.minHeight = '220px';
    gridContainer.style.height = newHeight + 'px';
});
