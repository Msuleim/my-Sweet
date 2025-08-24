// Get the modal
var modal = document.getElementById("imageModal");

// Get the image and insert it inside the modal
var modalImg = document.getElementById("modalImage");

// Close button
var closeBtn = document.getElementsByClassName("close")[0];

// Get all the images in the gallery
var images = document.querySelectorAll(".image-container img");

// Add click event listener to each image
images.forEach(image => {
  image.addEventListener('click', function() {
    modal.style.display = "block";
    modalImg.src = this.src; // Set the clicked image to the modal
  });
});

// Close the modal when clicking on the "x"
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Close the modal when clicking outside of the image
modal.onclick = function(event) {
  if (event.target !== modalImg) {
    modal.style.display = "none";
  }
}

function downloadImage(url, fileName) {
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
