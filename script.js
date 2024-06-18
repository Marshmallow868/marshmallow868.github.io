// Header Expansion for Mobile

const headerToggle = document.getElementById("burger");
const header = document.getElementById("header");

headerToggle.addEventListener("click", () => {
    header.classList.toggle("expanded");
});

// DarkMode PC

const themeTogglePC = document.getElementById("theme-toggle-pc");

if (localStorage.getItem("darkMode") === "true") {
    document.querySelectorAll("*").forEach(elememt => {
        elememt.classList.add("dark");
    });

    themeTogglePC.classList.add("active");
    themeTogglePC.src = "images/normal/moon.png";
} else {
    themeTogglePC.classList.remove("active");
    themeTogglePC.src = "images/normal/sun.png";
}

themeTogglePC.addEventListener("click", () => {
    document.querySelectorAll("*").forEach(elememt => {
        elememt.classList.toggle("dark");
    });

    if (document.querySelectorAll("section .dark").length > 0) {
        localStorage.setItem("darkMode", "true");
    } else {
        localStorage.setItem("darkMode", "false");
    }

    themeTogglePC.classList.toggle("active");

    if (localStorage.getItem("darkMode") === "true") {
        themeTogglePC.src = "images/normal/moon.png";
    } else {
        themeTogglePC.src = "images/normal/sun.png";
    }
});

// DarkMode Mobile

const themeToggleMobile = document.getElementById("theme-toggle-mobile");

if (localStorage.getItem("darkMode") === "true") {
    document.querySelectorAll("*").forEach(elememt => {
        elememt.classList.add("dark");
    });

    themeToggleMobile.classList.add("active");
    themeToggleMobile.src = "images/normal/moon.png";
} else {
    themeToggleMobile.classList.remove("active");
    themeToggleMobile.src = "images/normal/sun.png";
}

themeToggleMobile.addEventListener("click", () => {
    document.querySelectorAll("*").forEach(elememt => {
        elememt.classList.toggle("dark");
    });

    if (document.querySelectorAll("section .dark").length > 0) {
        localStorage.setItem("darkMode", "true");
    } else {
        localStorage.setItem("darkMode", "false");
    }

    themeToggleMobile.classList.toggle("active");

    if (localStorage.getItem("darkMode") === "true") {
        themeToggleMobile.src = "images/normal/moon.png";
    } else {
        themeToggleMobile.src = "images/normal/sun.png";
    }
});