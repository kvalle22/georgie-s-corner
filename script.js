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
// const menuToggle = document.getElementById('menu-toggle');
// const navMenu = document.querySelector('nav ul');

// menuToggle.addEventListener('click', function() {
//     navMenu.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
// });


document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('nav ul');
    let timeout;

    function hideMenu() {
        navMenu.classList.remove('active');
    }

    function startTimeout() {
        clearTimeout(timeout);
        timeout = setTimeout(hideMenu, 4000); // Hide after 4 seconds of inactivity
    }

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        startTimeout(); // Restart timeout when menu is opened
    });

    navMenu.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            hideMenu(); // Hide menu when a link is clicked
        }
    });

    // Reset timeout when user interacts with the menu
    navMenu.addEventListener('mouseover', startTimeout);
    navMenu.addEventListener('mouseout', startTimeout);
});









// document.querySelectorAll('.benefit-list h2').forEach(item => {
//     item.addEventListener('click', () => {
//         const nextElement = item.nextElementSibling;
//         if (nextElement.style.display === 'none') {
//             nextElement.style.display = 'block';
//         } else {
//             nextElement.style.display = 'none';
//         }
//     });
// });

// function toggleImage(element) {
//     // Find the next sibling element (the <img> tag) and toggle its visibility
//     const content = element.nextElementSibling;
//     if (content.style.display === "none" || content.style.display === "") {
//         content.style.display = "block"; // Show the image
//     } else {
//         content.style.display = "none";  // Hide the image
//     }
// }


function toggleImage(element) {
    const content = element.nextElementSibling;
    const toggle = element.querySelector('.collapsible-toggle');

    if (content.style.maxHeight) {
        // Hide the content
        content.style.maxHeight = null;
        toggle.textContent = "+";
    } else {
        // Show the content
        content.style.maxHeight = content.scrollHeight + "px";
        toggle.textContent = "-";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var image = document.querySelector('.home-image');
    var sound = document.getElementById('click-sound');

    image.addEventListener('click', function() {
        sound.play();
    });
});