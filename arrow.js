document.addEventListener('keydown', function (event) {
    if (event.keyCode === 37) {
        var currentUrl = window.location.href;
        if (currentUrl.endsWith('index.html')) {
            window.location.href = '25.html';
        } else if (currentUrl.endsWith('01.html')) {
            window.location.href = 'index.html';
        } else {
            navigateToPreviousPage();
        }
    } else if (event.keyCode === 39) {
        var currentUrl = window.location.href;
        if (currentUrl.endsWith('25.html')) {
            window.location.href = 'index.html';
        } else {
            navigateToNextPage();
        }
    }
});

function navigateToPreviousPage() {
    var currentUrl = window.location.href;
    var currentPage = getPageNumber(currentUrl);
    var previousPage = currentPage > 1 ? (currentPage - 1) : 1;
    var previousPageUrl = getPageUrl(previousPage);
    window.location.href = previousPageUrl;
}

function navigateToNextPage() {
    var currentUrl = window.location.href;
    var currentPage = getPageNumber(currentUrl);
    var nextPage = currentPage + 1;
    var nextPageUrl = getPageUrl(nextPage);
    window.location.href = nextPageUrl;
}

function getPageNumber(url) {
    var pageNumber = url.match(/(\d+)\.html/);
    return pageNumber ? parseInt(pageNumber[1]) : 0;
}

function getPageUrl(pageNumber) {
    return 'https://davisbrett.github.io/Charette-2-Scroll/' + (pageNumber < 10 ? '0' + pageNumber : pageNumber) + '.html';
}
