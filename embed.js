// Embed Script (embed.js)
document.addEventListener("DOMContentLoaded", function () {
  const targetDiv = document.getElementById("embeddedContent");

  // Fetch the content from the source website
  fetch("https://violet-tallulah-83.tiiny.site/")
    .then((response) => response.text())
    .then((html) => {
      const parser = new DOMParser();
      const sourceDoc = parser.parseFromString(html, "text/html");
      const embeddableContent = sourceDoc.getElementById("embeddableContent");


      setTimeout(() => {
      console.log("###" , html ,embeddableContent )
        
      }, 5000);



      // Append the extracted content to the targetDiv
      targetDiv.appendChild(embeddableContent);
    });
});
