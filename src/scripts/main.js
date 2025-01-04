// Sidebar Toogle
let openSidebar = document.getElementById("open-sidebar");
let sidebar = document.getElementById("sidebar");
let closeSidebar = document.getElementById("close-sidebar");

openSidebar.addEventListener("click", () => {
  sidebar.classList.replace("hidden", "absolute");
});

closeSidebar.addEventListener("click", () => {
  sidebar.classList.replace("absolute", "hidden");
});

// Hover Icon
const iconContainers = document.querySelectorAll(".icon-container");

iconContainers.forEach((container) => {
  const image = container.querySelector("img");
  const originalSrc = container.getAttribute("data-original");
  const hoverSrc = container.getAttribute("data-hover");

  container.addEventListener("mouseover", () => {
    image.src = hoverSrc;
  });

  container.addEventListener("mouseout", () => {
    image.src = container.classList.value.includes("active")
      ? hoverSrc
      : originalSrc;
  });
});
