let currentThemeSetting = localStorage.getItem("theme") || "light";
document.querySelector("html").setAttribute("data-theme", currentThemeSetting);

const button = document.querySelector("[data-theme-o-matic]");
const svg = `<svg class="inline-graphic rgt-arrow" viewBox="0 0 25 20" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill:var(--primary-color);fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M41.763 122.261h5.124v.072l-1.968 2.064 1.08.276 3.252-2.916v-.036l-3.252-2.916-1.08.264 1.968 2.052v.072h-5.124v1.068Z" style="fill-rule:nonzero" transform="translate(-139.432 -396.65) scale(3.33868)"/></svg>`;

// Correctly initialize the button with the appropriate text and SVG
button.innerHTML = `${currentThemeSetting === "light" ? "Dark" : "Light"} ${svg}`;
button.setAttribute("aria-label", `Change to ${currentThemeSetting === "light" ? "dark" : "light"} theme`);

button.addEventListener("click", () => {
    const newTheme = currentThemeSetting === "light" ? "dark" : "light";
    const newLabel = newTheme === "light" ? "Dark" : "Light";

    // Update button text and aria-label
    button.innerHTML = `${newLabel} ${svg}`;
    button.setAttribute("aria-label", `Change to ${newTheme} theme`);

    // Update the theme and save it to localStorage
    document.querySelector("html").setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    currentThemeSetting = newTheme;
});
