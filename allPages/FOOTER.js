async function LINKS() {
    try {
        const response = await fetch("../allPages/LINKS.html");
        if (!response.ok) throw new Error("Não foi possível carregar");
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const links = doc.querySelectorAll("#AllLinks a");
        const listaF = document.getElementById("PROJETOS");


        links.forEach(link => {
            const li = document.createElement("li");
            const a = document.createElement("a");

            a.href = link.href;
            a.textContent = link.textContent;
            li.appendChild(a);
            listaF.appendChild(li);

        });
    } catch (err) {
        console.error(err);
    }
}
document.addEventListener("DOMContentLoaded", LINKS)