const tela = document.querySelectorAll(".wf");
let index = 0;
let isScrolling = false;

function wf(newindex) {
    if (isScrolling || newindex === index) return;

    isScrolling = true;
    index = newindex;
    tela[index].scrollIntoView({behavior: "smooth", block: "start"});

    setTimeout(() => {
        isScrolling = false;
    }, 800);
}


window.addEventListener("wheel", (e) => {
    e.preventDefault();
    if (isScrolling) return;
    if (e.deltaY > 0) {
        wf(Math.min(index + 1, tela.length - 1));
    } else {
        wf(Math.max(index - 1, 0));
    }

}, {passive: false});


window.addEventListener("keydown", (e) => {
    if (isScrolling || e.repeat) return;

    if (["ArrowDown", "PageDown"].includes(e.key)) {
        e.preventDefault();
        wf(Math.min(index + 1, tela.length -1));
    } else if (["ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        wf(Math.max(index - 1, 0));
    }
});