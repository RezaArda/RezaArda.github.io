// Toggle

const navbar = document.querySelector(".navbar");
// ketika menu diklik
document.querySelector("#menu").onclick = () => {
  navbar.classList.toggle("active");
};

// klik diluar sidebar untuk hilang

const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});

function flipCard() {
  let flipCard = event.currentTarget;
  flipCard.classList.toggle("flipped");
}

const starContainer = document.querySelector(".stars");

for (let i = 0; i < 100; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.top = Math.random() * 100 + "%";
  star.style.left = Math.random() * 100 + "%";
  starContainer.appendChild(star);
}
