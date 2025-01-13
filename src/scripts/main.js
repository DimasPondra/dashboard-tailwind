// Sidebar Toogle
let openSidebar = document.getElementById("open-sidebar");
let sidebar = document.getElementById("sidebar");
let closeSidebar = document.getElementById("close-sidebar");

openSidebar.addEventListener("click", () => {
    sidebar.classList.remove("hidden");
});

closeSidebar.addEventListener("click", () => {
    sidebar.classList.add("hidden");
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

// Alert
const alertBlue = document.getElementById("alert-blue");
const alertGreen = document.getElementById("alert-green");

let closeAlerts = () => {
    alertBlue.classList.replace("flex", "hidden");
    alertGreen.classList.replace("flex", "hidden");
};

let openAlert = (event) => {
    const classList = event.classList;

    closeAlerts();

    if (classList.contains("btn-alert-blue")) {
        alertBlue.classList.replace("hidden", "flex");
        durationAlert(alertBlue);
    } else if (classList.contains("btn-alert-green")) {
        alertGreen.classList.replace("hidden", "flex");
        durationAlert(alertGreen);
    } else {
        console.log(classList);
    }
};

let closeAlert = (event) => {
    const classList = event.parentElement.classList;

    if (classList.contains("alert-blue")) {
        alertBlue.classList.replace("flex", "hidden");
    } else if (classList.contains("alert-green")) {
        alertGreen.classList.replace("flex", "hidden");
    } else {
        console.log(classList);
    }
};

let durationAlert = (alert) => {
    setTimeout(() => {
        alert.classList.replace("flex", "hidden");
    }, 5000);
};
