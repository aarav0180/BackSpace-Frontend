// Adding homepage text with dark background and gradient texts

document.body.style.backgroundColor = '#000000';

const heading = document.createElement('h1');
heading.textContent = 'AI Coding Assistant';
heading.style.fontSize = '4em';
heading.style.color = 'white';
heading.style.textAlign = 'center';
heading.style.marginTop = '2em';

// Add gradient text effect
heading.style.backgroundImage = 'linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff)';
heading.style.webkitBackgroundClip = 'text';
heading.style.webkitTextFillColor = 'transparent';

document.body.appendChild(heading);

const subheading = document.createElement('p');
subheading.textContent = 'Your AI coding assistant is here to help!';
subheading.style.fontSize = '1.5em';
subheading.style.color = '#cccccc';
subheading.style.textAlign = 'center';
document.body.appendChild(subheading);