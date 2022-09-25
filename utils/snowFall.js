const snowContainer = document.getElementById("snow-container");

function fall() {
    const dropI = document.createElement("i");
    const drop = snowContainer.appendChild(dropI);

    drop.classList.add("drop");
    drop.style.left = Math.random() * window.innerWidth + "px";
    drop.style.animationDuration = Math.random() * 8 + "s";
    drop.style.opacity = Math.random() + 0.4;
    drop.style.transform = "scale(" + Math.random() * 0.5 + ")";

    document.getElementById("snow-container").appendChild(drop);

    setTimeout(() => {
        drop.style.opacity = "0";
        setTimeout(() => {
            drop.remove();
        }, 1000);
    }, 6000);
}
