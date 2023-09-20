// Embed Script (embed.js)
document.addEventListener("DOMContentLoaded", function () {
  const targetDiv = document.getElementById("embeddedContent");

  // Fetch the content from the source website
  fetch("https://source-website.com/page.html")
    .then((response) => response.text())
    .then((html) => {
      const parser = new DOMParser();
      const sourceDoc = parser.parseFromString(html, "text/html");
      const embeddableContent = sourceDoc.getElementById("embeddableContent");

      // Append the extracted content to the targetDiv
      targetDiv.appendChild(embeddableContent);
    });
});
