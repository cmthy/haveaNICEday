document.addEventListener('DOMContentLoaded', () => {
    const stampContainer = document.getElementById('stamp-container');

    // Array of image URLs to use as stamps.
    // These are placeholder images for demonstration.
    const stampImages = [
        "stamp1.png",
        "redstar.svg",
        "cmthypost.png",
        "flag.png",
        "ball.svg",
        "day.png",
        "bird.png",
        "bluestar.svg",
        "frame.png",
        "yellowstar.svg",
    ];

    let currentStampIndex = 0;

    // Add a click event listener to the container
    stampContainer.addEventListener('click', (e) => {
        // Get the click coordinates
        const x = e.clientX;
        const y = e.clientY;

        // Choose the stamp image from the array based on the current index
        const sequentialStampUrl = stampImages[currentStampIndex];

        // Create a new image element for the stamp
        const newStamp = document.createElement('img');
        newStamp.src = sequentialStampUrl;
        newStamp.alt = "A stamp image";
        newStamp.classList.add('stamp');

        // Position the stamp at the click location, centered on the cursor
        newStamp.style.left = `${x}px`;
        newStamp.style.top = `${y}px`;

        // Add the new stamp to the container
        stampContainer.appendChild(newStamp);

        // Increment the index for the next stamp
        // The modulo operator (%) ensures the index wraps around to the beginning
        currentStampIndex = (currentStampIndex + 1) % stampImages.length;
    });
});

document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    window.location.href = "letter.html";
  }
});