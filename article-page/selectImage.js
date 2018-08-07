function selectImage(images) {
  // Get expanded image
  var expandImage = document.getElementById("expanded-image");
  // Get image text
  var imageText = document.getElementById("image-text");
  // Get image caption
  var imageCaption = document.getElementById("image-caption")
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImage.src = images.src;
  // Use the value of the alt attribute of the clickable image as TEXT for the expanded image
  imageCaption.innerHTML = "Image Caption";
  imageText.innerHTML = images.alt;

  // Show container element (hidden with CSS)
  expandImage.parentElement.style.display = "block";
}
