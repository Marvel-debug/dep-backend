document.getElementById('colorButton').addEventListener('click', function() {
    const colors = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bfbcf', '#a0e7e5', '#b9b3e6', '#d7aefb'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
