document.getElementById('increase-btn').addEventListener('click', function() {
    changeFontSize(2);
});

document.getElementById('decrease-btn').addEventListener('click', function() {
    changeFontSize(-2);
});

function changeFontSize(changeAmount) {
    var elements = document.querySelectorAll('.name, .desig');
    elements.forEach(function(element) {
        var currentSize = parseFloat(window.getComputedStyle(element).getPropertyValue('font-size'));
        element.style.fontSize = (currentSize + changeAmount) + 'px';
    });
}
