function setup() {
    // Create a canvas with a fixed size for the pattern
    // The size is suitable for an envelope-like shape
    const canvasWidth = 600;
    const canvasHeight = 400;
    createCanvas(canvasWidth, canvasHeight);

    // Set the background color to white
    background(255);
    noLoop(); // We only need to draw once
}

function draw() {
    // Define the colors for the pattern
    const redColor = color(220, 20, 60); // Crimson Red
    const blueColor = color(0, 0, 139);   // Dark Blue

    // Stripe spacing and thickness
    const stripeSpacing = 20; // Distance between stripes
    const stripeThickness = 5; // Thickness of the stripes
    const borderWidth = 25; // New variable to control the width of the border

    // Set the stroke thickness
    strokeWeight(stripeThickness);

    // Draw the diagonal stripes across the whole canvas
    for (let i = -width; i < width + height; i += stripeSpacing) {
        // Determine the color based on the stripe's index
        if ((i / stripeSpacing) % 2 === 0) {
            stroke(redColor);
        } else {
            stroke(blueColor);
        }

        // Draw a diagonal line
        line(i, 0, i + height, height);
    }

    // Now, draw a white rectangle to hide the middle, creating a border effect
    noStroke(); // No border for this rectangle
    fill(255); // Set the fill color to white
    rect(borderWidth, borderWidth, width - borderWidth * 2, height - borderWidth * 2);

    // You can optionally add a final border around the canvas for a cleaner look
    noFill();
    strokeWeight(2);
    stroke(100);
    rect(0, 0, width, height);
}