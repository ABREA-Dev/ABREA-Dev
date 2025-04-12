function updateJackpot() {
    let jackpot = 0; // Starting amount
    setInterval(() => {
        jackpot += Math.floor(Math.random() * 15); // Increment randomly
        let jackpotElement = document.getElementById("jackpotAmount");

        // Apply pop effect
        jackpotElement.classList.add("pop-effect");

        // Update jackpot number
        jackpotElement.textContent = `$${jackpot.toLocaleString()}`;

        // Remove pop effect after animation completes
        setTimeout(() => {
            jackpotElement.classList.remove("pop-effect");
        }, 300); // Match the duration in CSS
    }, 5000); // Update every 5 seconds
}

// Start the function when the page loads
document.addEventListener("DOMContentLoaded", updateJackpot);


//winning 2
// Set initial countdown values for daily, weekly, and monthly draws
let dailyHours = 23, dailyMinutes = 59, dailySeconds = 59;
let weeklyHours = 6, weeklyMinutes = 23, weeklySeconds = 59;
let monthlyHours = 30, monthlyMinutes = 23, monthlySeconds = 59;

// Function to update the countdown
function updateCountdown() {
    // Daily countdown
    if (dailySeconds <= 0) {
        if (dailyMinutes <= 0) {
            if (dailyHours <= 0) {
                dailyHours = 23;
                dailyMinutes = 59;
                dailySeconds = 59;
            } else {
                dailyHours--;
                dailyMinutes = 59;
                dailySeconds = 59;
            }
        } else {
            dailyMinutes--;
            dailySeconds = 59;
        }
    } else {
        dailySeconds--;
    }

    // Weekly countdown
    if (weeklySeconds <= 0) {
        if (weeklyMinutes <= 0) {
            if (weeklyHours <= 0) {
                weeklyHours = 6;
                weeklyMinutes = 23;
                weeklySeconds = 59;
            } else {
                weeklyHours--;
                weeklyMinutes = 59;
                weeklySeconds = 59;
            }
        } else {
            weeklyMinutes--;
            weeklySeconds = 59;
        }
    } else {
        weeklySeconds--;
    }

    // Monthly countdown
    if (monthlySeconds <= 0) {
        if (monthlyMinutes <= 0) {
            if (monthlyHours <= 0) {
                monthlyHours = 30;
                monthlyMinutes = 23;
                monthlySeconds = 59;
            } else {
                monthlyHours--;
                monthlyMinutes = 59;
                monthlySeconds = 59;
            }
        } else {
            monthlyMinutes--;
            monthlySeconds = 59;
        }
    } else {
        monthlySeconds--;
    }

    // Update the HTML elements for each countdown
    document.getElementById('daily-hours').innerText = dailyHours < 10 ? '0' + dailyHours : dailyHours;
    document.getElementById('daily-minutes').innerText = dailyMinutes < 10 ? '0' + dailyMinutes : dailyMinutes;
    document.getElementById('daily-seconds').innerText = dailySeconds < 10 ? '0' + dailySeconds : dailySeconds;

    document.getElementById('weekly-hours').innerText = weeklyHours < 10 ? '0' + weeklyHours : weeklyHours;
    document.getElementById('weekly-minutes').innerText = weeklyMinutes < 10 ? '0' + weeklyMinutes : weeklyMinutes;
    document.getElementById('weekly-seconds').innerText = weeklySeconds < 10 ? '0' + weeklySeconds : weeklySeconds;

    document.getElementById('monthly-hours').innerText = monthlyHours < 10 ? '0' + monthlyHours : monthlyHours;
    document.getElementById('monthly-minutes').innerText = monthlyMinutes < 10 ? '0' + monthlyMinutes : monthlyMinutes;
    document.getElementById('monthly-seconds').innerText = monthlySeconds < 10 ? '0' + monthlySeconds : monthlySeconds;
}

// Update countdown every second
setInterval(updateCountdown, 1000);

//FAQ
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const isActive = button.classList.contains("active");

        // Close all other answers
        document.querySelectorAll('.faq-answer').forEach(item => item.style.display = "none");
        document.querySelectorAll('.faq-question').forEach(q => q.classList.remove("active"));

        // Toggle the selected answer
        if (!isActive) {
            answer.style.display = "block";
            button.classList.add("active");
        }
    });
});





