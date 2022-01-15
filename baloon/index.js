
document.addEventListener('keydown', keyHandler);

function keyHandler(e) {
    let baloon = document.querySelector('#baloon');
    let fontSize = parseFloat(window.getComputedStyle(baloon).getPropertyValue('font-size'));
    
    e.stopPropagation();

    
    if (e.key == 'ArrowDown') {
        baloon.style.fontSize = (fontSize * 0.9) + 'px';
    } else if (e.key == 'ArrowUp') {
        baloon.style.fontSize = (fontSize * 1.1) + 'px';
    }

    fontSize = parseFloat(window.getComputedStyle(baloon).getPropertyValue('font-size'));
    if (fontSize > 300) {
        baloon.textContent = '💥';
        document.removeEventListener('keydown', keyHandler);
        return;
    }
}
