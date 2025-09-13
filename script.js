// Target date: 12th October 2025, 00:00:00
const targetDate = new Date('2025-10-12T00:00:00Z');

function updateCountdown() {
  const now = new Date();
  let diff = Math.floor((targetDate - now) / 1000);

  if (diff < 0) diff = 0;

  const days = Math.floor(diff / (3600 * 24));
  const hours = Math.floor((diff % (3600 * 24)) / 3600);
  const minutes = Math.floor((diff % 3600) / 60);
  const seconds = diff % 60;

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);
