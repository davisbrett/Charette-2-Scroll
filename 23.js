window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    console.log('Scroll Position:', scrollPosition);
    var gridItems = document.querySelectorAll('.grid-item');

    if (scrollPosition % 1 === 0) {
        gridItems.forEach(function (item) {
            var randomRotate = Math.random() * 360;
            var randomScale = 0.5 + Math.random();

            item.style.transform = `rotate(${randomRotate}deg) scale(${randomScale})`;
        });

        var indexHidden = document.querySelector('.index-hidden');
        indexHidden.style.opacity = '1';
    }
});
