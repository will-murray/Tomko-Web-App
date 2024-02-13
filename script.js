// Select all elements with class "node"
const nodes = document.querySelectorAll('.node');

// Loop through each node and change its background color
nodes.forEach(node => {
    node.style.backgroundColor = getRandomColor();
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
