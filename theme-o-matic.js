let currentThemeSetting = localStorage.getItem("theme") || "light";
document.querySelector("html").setAttribute("data-theme", currentThemeSetting);

const button = document.querySelector("[data-theme-o-matic]");

button.innerHTML = `${currentThemeSetting === "light" ? "Dark" : "Light"}`;
button.setAttribute("aria-label", `Change to ${currentThemeSetting === "light" ? "dark" : "light"} theme`);

button.addEventListener("click", () => {
    const newTheme = currentThemeSetting === "light" ? "dark" : "light";
    const newLabel = newTheme === "light" ? "Dark" : "Light";

    // Update button text and aria-label
    button.innerHTML = `${newLabel}`;
    button.setAttribute("aria-label", `Change to ${newTheme} theme`);

    // Update the theme and save it to localStorage
    document.querySelector("html").setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    currentThemeSetting = newTheme;
});