// Select all elements with class "node"
const nodes = document.querySelectorAll('.node');

// Loop through each node and add event listeners for hover
nodes.forEach(node => {
    node.addEventListener('mouseenter', () => {
        node.style.backgroundColor = getRandomColor();
    });

    node.addEventListener('mouseleave', () => {
        node.style.backgroundColor = ''; // Reset to default background color
    });
});

// Function to generate random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
