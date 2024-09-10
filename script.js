// Theme Toggle Functionality
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check if the user has a preferred theme saved
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme); // Apply saved theme
    toggleButton.textContent = currentTheme === 'dark-theme' ? '☀️ Light Mode' : '🌙 Dark Mode';
}

// Toggle theme on button click
toggleButton.addEventListener('click', function () {
    body.classList.toggle('dark-theme');
    
    // Update button text based on theme
    if (body.classList.contains('dark-theme')) {
        toggleButton.textContent = '☀️ Light Mode';
        localStorage.setItem('theme', 'dark-theme'); // Save the theme in localStorage
    } else {
        toggleButton.textContent = '🌙 Dark Mode';
        localStorage.setItem('theme', ''); // Clear saved theme
    }
});

// FAQ Toggle Functionality
function toggleAnswer(questionElement) {
    const answerElement = questionElement.nextElementSibling;
    const toggleElement = questionElement.querySelector('.faq-toggle');
    
    if (answerElement.style.display === 'block') {
        answerElement.style.display = 'none';
        toggleElement.textContent = '+';
    } else {
        answerElement.style.display = 'block';
        toggleElement.textContent = '-';
    }
}

// Existing JavaScript...

// Toggle mobile menu
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
});
