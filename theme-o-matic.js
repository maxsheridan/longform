document.addEventListener("DOMContentLoaded", () => {
    // Get the current theme setting from sessionStorage, defaulting to "light"
    let currentThemeSetting = sessionStorage.getItem("theme") || "light";

    // Apply the theme to the <html> element
    document.querySelector("html").setAttribute("data-theme", currentThemeSetting);

    // Find the button
    const button = document.querySelector("[data-theme-o-matic]");

    if (button) {
        // Define the SVG markup
        const svgMarkup = `<svg class="inline-graphic rgt-arrow" viewBox="0 0 25 20" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill:var(--primary-color);fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M41.763 122.261h5.124v.072l-1.968 2.064 1.08.276 3.252-2.916v-.036l-3.252-2.916-1.08.264 1.968 2.052v.072h-5.124v1.068Z" style="fill-rule:nonzero" transform="translate(-139.432 -396.65) scale(3.33868)" /></svg>`;

        // Set the button's initial text and SVG based on the current theme
        button.innerHTML = `${currentThemeSetting === "dark" ? "Light" : "Dark"}${svgMarkup}`;

        // Add a click event listener to toggle the theme
        button.addEventListener("click", () => {
            const newTheme = currentThemeSetting === "dark" ? "light" : "dark";
            button.innerHTML = `${newTheme === "dark" ? "Light" : "Dark"}${svgMarkup}`;
            document.querySelector("html").setAttribute("data-theme", newTheme);
            sessionStorage.setItem("theme", newTheme);
            currentThemeSetting = newTheme;
        });
    } else {
        console.warn("Theme toggle button not found.");
    }
});