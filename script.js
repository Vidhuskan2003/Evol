document.addEventListener('DOMContentLoaded', () => {
    for(let i = 0; i < 100; i++) {
        createSprinkle();
    }
});

function createSprinkle() {
    const sprinkle = document.createElement('div');
    sprinkle.classList.add('sprinkle');
    sprinkle.style.left = `${Math.random() * 100}vw`;
    sprinkle.style.animationDelay = `${Math.random() * 5}s`;
    document.body.appendChild(sprinkle);
}