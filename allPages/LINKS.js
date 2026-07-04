async function LINKS() {
    try {
        const response = await fetch("../allPages/LINKS.html");
        if (!response.ok) throw new Error("Não foi possível carregar");
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const links = doc.querySelectorAll("#AllLinks a");
        const listaD = document.getElementById("listaPROJETOSd");
        const listaM = document.getElementById("listaPROJETOSm");

        links.forEach(link => {
            const li1 = document.createElement("li");
            const a1 = document.createElement("a");

            a1.href = link.href;
            a1.textContent = link.textContent;
            li1.appendChild(a1);
            listaD.appendChild(li1);

            const li2 = li1.cloneNode(true);
            listaM.appendChild(li2);
        });
    } catch (err) {
        console.error(err);
    }
}



function listaLINKS() {
    const menuD = document.getElementById("listaPROJETOSd")
    const menuM = document.getElementById("listaPROJETOSm")

    if (menuD) menuD.classList.toggle("lst");
    if (menuM) menuM.classList.toggle("lst");

    const listapd = document.querySelectorAll("#listaPROJETOSd li");
    const listapm = document.querySelectorAll("#listaPROJETOSm li");

    listapd.forEach((li, index) => {
        if (index === -1) return;

        li.style.display = (li.style.display === "flex") ? "none" : "flex";
        li.style.boxShadow = "4px 4px 4px rgba(0, 0, 0, 0.5)";

    });

    listapm.forEach((li, index) => {
        if (index === -1) return;

        li.style.display = (li.style.display === "flex") ? "none" : "flex";
        li.style.boxShadow = "4px 4px 4px rgba(0, 0, 0, 0.5)";

    });

};