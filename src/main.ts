document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.getElementById("check") as HTMLInputElement | null;

  if (!checkbox) return;

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark").matches;
  const savedDarkMode = localStorage.getItem("darkMode");

  if (savedDarkMode === "true" || (prefersDark && savedDarkMode === null)) {
    document.documentElement.classList.add("dark");
    checkbox.checked = true;
  }

  checkbox.addEventListener("change", () => {
    const isDarkMode = checkbox.checked;
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode.toString());
  });
});
