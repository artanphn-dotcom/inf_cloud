document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
        searchInput.addEventListener("keyup", function(event) {
            const searchTerm = event.target.value.toLowerCase();
            const commandElements = document.querySelectorAll(".command");

            commandElements.forEach(commandElement => {
                const commandText = commandElement.textContent.toLowerCase();
                if (commandText.includes(searchTerm)) {
                    commandElement.style.display = "block";
                } else {
                    commandElement.style.display = "none";
                }
            });
        });
    }
});