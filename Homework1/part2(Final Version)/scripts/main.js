document.addEventListener("DOMContentLoaded", function() {
    const openWebsiteButton = document.getElementById("openWebsiteButton");
    openWebsiteButton.addEventListener("click", function() {
        const websiteURL = "https://github.com/sijie-daiii"; // Change this URL to the desired website
        window.open(websiteURL, "_blank");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const openDiscordButton = document.getElementById("openDiscordButton");
    openDiscordButton.addEventListener("click", function() {
        const websiteURL = "https://discord.gg/nNM4mRRYbb"; // Change this URL to the desired website
        window.open(websiteURL, "_blank");
    });
});

