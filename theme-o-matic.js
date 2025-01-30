let currentThemeSetting = localStorage.getItem("theme") || "light";
document.querySelector("html").setAttribute("data-theme", currentThemeSetting);

const button = document.querySelector("[data-theme-o-matic]");
const svgElement = button.querySelector("svg"); //

const sunSVG = `<svg class="inline-graphic toggle-thingy" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><path fill="none" stroke="var(--primary-color)" stroke-linecap="round" stroke-linejoin="round" stroke-width="22" d="M128 40V16"/><circle cx="128" cy="128" r="56" fill="none" stroke="var(--primary-color)" stroke-linecap="round" stroke-linejoin="round" stroke-width="22"/><path fill="none" stroke="var(--primary-color)" stroke-linecap="round" stroke-linejoin="round" stroke-width="22" d="M64 64 48 48M64 192l-16 16M192 64l16-16M192 192l16 16M40 128H16M128 216v24M216 128h24"/></svg>`;

const moonSVG = `<svg class="inline-graphic toggle-thingy" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><path d="M108.1 28.1A96 96 0 0 0 228 148 96 96 0 1 1 108 28" fill="none" stroke="var(--primary-color)" stroke-linecap="round" stroke-linejoin="round" stroke-width="22"/></svg>`;

svgElement.outerHTML = currentThemeSetting === "light" ? moonSVG : sunSVG;
button.setAttribute("aria-label", `Change to ${currentThemeSetting === "light" ? "dark" : "light"} theme`);

button.addEventListener("click", () => {
    const newTheme = currentThemeSetting === "light" ? "dark" : "light";
    const newSVG = newTheme === "light" ? moonSVG : sunSVG;

    // Replace only the SVG
    button.querySelector("svg").outerHTML = newSVG;
    button.setAttribute("aria-label", `Change to ${newTheme} theme`);

    // Update the theme and save it
    document.querySelector("html").setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    currentThemeSetting = newTheme;
});