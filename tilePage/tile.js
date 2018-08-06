function selectImage(images) {
  // Get the expanded image
  var expandImage = document.getElementById("expanded-image");
  // Get the image text
  var imageText = document.getElementById("image-text");
  // Get the image caption
  var imageCaption = document.getElementById("image-caption")
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImage.src = images.src;
  // Use the value of the alt attribute of the clickable image as TEXT INside the expanded image
  imageCaption.innerHTML = "Image Caption";
  imageText.innerHTML = images.alt;

  // Show the container element (hidden with CSS)
  expandImage.parentElement.style.display = "block";
} 
