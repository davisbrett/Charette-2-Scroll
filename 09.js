window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;

    if (scrollPosition > 200) {
        document.querySelector('.go1').style.display = 'inline';
    }
    else {
        document.querySelector('.go1').style.display = 'none';
    }

    if (scrollPosition > 400) {
        document.querySelector('.go2').style.display = 'inline';
    }
    else {
        document.querySelector('.go2').style.display = 'none';
    }

    if (scrollPosition > 600) {
        document.querySelector('.go3').style.display = 'inline';
    }
    else {
        document.querySelector('.go3').style.display = 'none';
    }

    if (scrollPosition > 800) {
        document.querySelector('.go4').style.display = 'inline';
    }
    else {
        document.querySelector('.go4').style.display = 'none';
    }

    if (scrollPosition > 1000) {
        document.querySelector('.go5').style.display = 'inline';
    }
    else {
        document.querySelector('.go5').style.display = 'none';
    }

    if (scrollPosition > 1200) {
        document.querySelector('.go6').style.display = 'inline';
    }
    else {
        document.querySelector('.go6').style.display = 'none';
    }

    if (scrollPosition > 1400) {
        document.querySelector('.go7').style.display = 'inline';
    }
    else {
        document.querySelector('.go7').style.display = 'none';
    }

    if (scrollPosition > 1600) {
        document.querySelector('.go8').style.display = 'inline';
    }
    else {
        document.querySelector('.go8').style.display = 'none';
    }

    if (scrollPosition > 1800) {
        document.querySelector('.go9').style.display = 'inline';
    }
    else {
        document.querySelector('.go9').style.display = 'none';
    }

});