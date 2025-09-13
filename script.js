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
.countdown-box {
  background: #333;
  color: #fff;
  font-size: 2rem;
  padding: 20px 40px;
  border-radius: 12px;
  display: inline-block;
  margin: 0 5px;
}

.images-under-countdown img {
  max-width: 300px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.20);
}
