function resizeHeading() {
    const container = document.querySelector('.title'); // Parent container
    const heading = document.querySelector('#hero-name');

    if (!container || !heading) return;

    let containerWidth = container.clientWidth;
    let fontSize = containerWidth * 0.0772; // Adjust the multiplier for better scaling

    heading.style.fontSize = fontSize + "px";
}

// Run on load and on window resize
window.addEventListener("load", resizeHeading);
window.addEventListener("resize", resizeHeading);
