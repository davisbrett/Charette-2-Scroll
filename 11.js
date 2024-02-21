window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var gridContainer = document.querySelector('.grid11 .grid-container');

    var newWidth = 700 - scrollPosition * 1;

    if (newWidth < 100) {
        newWidth = 100;
    }

    gridContainer.style.width = newWidth + 'px';
});