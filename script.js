/* cards */

const cardGrid = document.querySelector(".card-grid");
const cards = document.querySelectorAll(".card");

const loadContent = async () => {
    const result = await fetch("https://picsum.photos/v2/list");
    const data = await result.json();
    createCards(data);
}
loadContent();

const createCards = data => {
    let cardList = '';
    for (let i = 0; i < cards.length; i++) {
        const newCard = `
            <div class="card">
                <img src=${data[i].download_url} class="top-img" />
                <div class="content">
                    <h3 class="card-title">Lorem ipsum dolor sit amet</h3>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <p class="card-text">Lorem ipsum dolor</p>
                </div>
            </div>
        `;

        cardList += newCard;
    }
    cardGrid.innerHTML = cardList;
}

/* navbar */

const hamburgerToggler = document.querySelector(".hamburger");
const navLinksContainer = document.querySelector(".navlinks-container");

const toggleNav = () => {
    hamburgerToggler.classList.toggle("open");

    const ariaToggle = hamburgerToggler.getAttribute("aria-expanded") === "true" ? "false" : "true";
    hamburgerToggler.setAttribute("aria-expanded", ariaToggle);

    navLinksContainer.classList.toggle("open");
}

hamburgerToggler.addEventListener("click", toggleNav);

new ResizeObserver(entries => {
    if (entries[0].contentRect.width <= 1000) {
        navLinksContainer.style.transition = "transform 0.3s ease-out";
    } else {
        navLinksContainer.style.transition = "none";
    }
}).observe(document.body);
