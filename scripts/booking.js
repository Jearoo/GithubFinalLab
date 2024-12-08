const days = document.querySelectorAll('.day-selector li');
const halfButton = document.getElementById('half');
const fullButton = document.getElementById('full');
const clearButton = document.getElementById('clear-button');
const calculatedCost = document.getElementById('calculated-cost');

let selectedDays = new Set();
let dailyRate = 35;

days.forEach(function(day) {
    day.addEventListener('click', function() {
        if (!day.classList.contains('clicked')) {
            day.classList.add('clicked');
            selectedDays.add(day.id);
        } else {
            day.classList.remove('clicked');
            selectedDays.delete(day.id);
        }
        calculateCost();
    });
});

halfButton.addEventListener('click', function() {
    dailyRate = 20;
    halfButton.classList.add('clicked');
    fullButton.classList.remove('clicked');
    calculateCost();
});

fullButton.addEventListener('click', function() {
    dailyRate = 35;
    fullButton.classList.add('clicked');
    halfButton.classList.remove('clicked');
    calculateCost();
});

clearButton.addEventListener('click', function() {
    selectedDays.clear();
    days.forEach(function(day) {
        day.classList.remove('clicked');
    });
    calculatedCost.textContent = 0;
});

function calculateCost() {
    calculatedCost.textContent = selectedDays.size * dailyRate;
}
