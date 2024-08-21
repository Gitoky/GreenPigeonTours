document.addEventListener("DOMContentLoaded", function () {
     const links = document.querySelectorAll(".quick-nav a");

     for (const link of links) {
          link.addEventListener("click", function (event) {
               event.preventDefault();
               const targetId = this.getAttribute("href").substring(1);
               const targetElement = document.getElementById(targetId);

               targetElement.scrollIntoView({
                    behavior: "smooth",
               });
          });
     }
});
// Function to open image in fullscreen
function openFullscreen(src) {
     document.getElementById("fullscreenImage").src = src;
     document.getElementById("fullscreenImageContainer").style.display = "flex";
}

// Function to close fullscreen image
function closeFullscreen() {
     document.getElementById("fullscreenImageContainer").style.display = "none";
}

// Add click event to all images with ID 'clickableImage'
document.querySelectorAll("#clickableImage").forEach(function (img) {
     img.addEventListener("click", function () {
          openFullscreen(this.src);
     });
});

