// Countdown Timer
document.addEventListener('DOMContentLoaded', () => {
    const weddingDate = new Date('November 02, 2024 12:00:00').getTime();

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown-timer').innerText = "The Wedding Has Begun!";
        }
    };

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
});

// RSVP Form Submission
document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your RSVP!');
    this.reset();
});
