// Example script for basic interaction
document.addEventListener('DOMContentLoaded', function() {
    const button = document.createElement('button');
    button.textContent = 'Click me';
    button.onclick = function() {
        alert('Button clicked!');
    };
    document.body.appendChild(button);
});
