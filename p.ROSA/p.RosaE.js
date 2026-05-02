const sens = 5;
let Iy = 0;

function scroll(d) {
    const scrollT = window.innerHeight * 0.3;
    window.scrollBy({
        top: d === 'down' ? scrollT : -scrollT, behavior: 'smooth'
    });
}


window.addEventListener('wheel', (e) => {
    if (e.deltaY > 0) {
        scroll('down');
    } else {
        scroll('up');
    }
}, { passive: true});



window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === '') {
        e.preventDefault();
        scroll('down');
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        scroll('up');
    }
});

window.addEventListener('touchstart', (e) => {
    mobileIy = e.touches[0].clientY;
}, { passive: true });

window.addEventListener('touchend', (e) => {
    const mobileFy = e.changedTouches[0].clientY;
    const dif = mobileIy - mobileFy;

    if (Math.abs(dif) > sens) {
        if (dif > 0) {
            scroll('down');
        } else {
            scroll('up');
        }
    }
}, { passive: true });