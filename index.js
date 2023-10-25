const fileNameText = document.getElementById("file-name-text");
const browseButton = document.getElementById("browse-button");

fileNameText.addEventListener("change", function () {
    if (fileNameText.files.length > 0) {
        fileNameText.textContent = browseButton.files[0].name;
    } else {
        fileNameText.textContent = "No Files Selected x";
    }
});
