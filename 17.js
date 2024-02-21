window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var gridContainer = document.querySelector('.grid17 .grid-container');
    var newWidth = 460 + scrollPosition * 1.25;

    if (newWidth < 100) {
        newWidth = 100;
    }

    gridContainer.style.width = newWidth + 'px';
});