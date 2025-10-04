// Select the button and text elements
const button = document.querySelector('.electric-button');
const buttonText = document.querySelector('.button-text');

// Hover effect: intensify glow
button.addEventListener('mouseenter', () => {
    button.classList.add('hover-glow');
    buttonText.classList.add('text-glow');
});

// Remove hover effect
button.addEventListener('mouseleave', () => {
    button.classList.remove('hover-glow');
    buttonText.classList.remove('text-glow');
});

// Click effect: simulate electric pulse
button.addEventListener('click', () => {
    button.classList.add('click-pulse');
    setTimeout(() => {
        button.classList.remove('click-pulse');
    }, 500); // pulse duration in ms
});

// Optional: continuously pulse text for attention
setInterval(() => {
    buttonText.classList.toggle('text-pulse');
}, 1000); // pulse every 1 second
