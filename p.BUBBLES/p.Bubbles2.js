const MV = document.querySelector("#m3D model-viewer");

function pos3d(){
    const largura = window.innerWidth;

    if (largura <= 680) {
        MV.setAttribute("camera-target", "0m -10m 0m");
        MV.setAttribute("camera-orbit", "145deg 60deg 0m");
        MV.setAttribute("field-of-view", "35deg");
    }

    else {
        MV.setAttribute("camera-target", "55m 0m 0m");
        MV.setAttribute("camera-orbit", "145deg 60deg 200m");
        MV.setAttribute("field-of-view", "30deg");
    }
}


window.addEventListener("load", pos3d);
window.addEventListener("resize", pos3d);