// script.js

// Add hover effect to navigation links
const navLinks = document.querySelectorAll('header nav menu li a');
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#e5ae24';
    });

    link.addEventListener('mouseout', () => {
        link.style.color = 'white';
    });
});

// Add hover effect to chocolate images
const chocolateImages = document.querySelectorAll('.chocolate');
chocolateImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)';
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
    });
});

// Add hover effect to recipe images
const recipes = document.querySelectorAll('.recipes');
recipes.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)';
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
    });
});

// Add hover effect to gift images
const gift = document.querySelectorAll('.gift');
gift.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)';
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
    });
});


// Add hover effect to buttons
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#e5ae24';
        button.style.color = '#31026c';
    });

    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = 'gold';
        button.style.color = '#31026c';
    });
});
