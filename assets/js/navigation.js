document.addEventListener("DOMContentLoaded", function() {
    // Load header
    fetch("components/header.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector("header").innerHTML = data;
            // After header is loaded, attach event listener to the theme toggle button
            const themeToggle = document.getElementById("theme-toggle");
            if (themeToggle) {
                themeToggle.addEventListener("click", () => {
                    document.body.classList.toggle("dark-mode");
                    if (document.body.classList.contains("dark-mode")) {
                        localStorage.setItem("theme", "dark");
                    } else {
                        localStorage.setItem("theme", "light");
                    }
                });
            }
        });

    // Load footer
    fetch("components/footer.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector("footer").innerHTML = data;
        });

    // Apply saved theme preference on initial load
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
});