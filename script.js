// Grab elements
const startScreen = document.getElementById('start-screen');
const timedScreen1 = document.getElementById('timed-screen-1');
const timedScreen2 = document.getElementById('timed-screen-2');
const closingScreen = document.getElementById('closing-screen');

const startButton = document.getElementById('start-button');

// Show the first timed screen
function showTimedScreen1() {
  // Hide start screen
  gsap.to(startScreen, {opacity: 0, duration: 0.5, onComplete: () => {
    startScreen.classList.add('hidden');
    timedScreen1.classList.remove('hidden');
    
    // Fade in timed screen 1
    gsap.fromTo(timedScreen1, {opacity: 0}, {opacity: 1, duration: 0.5});
    startTimer(timedScreen1, () => showTimedScreen2());
  }});
}

// Show the second timed screen
function showTimedScreen2() {
  gsap.to(timedScreen1, {opacity: 0, duration: 0.5, onComplete: () => {
    timedScreen1.classList.add('hidden');
    timedScreen2.classList.remove('hidden');
    
    // Fade in timed screen 2
    gsap.fromTo(timedScreen2, {opacity: 0}, {opacity: 1, duration: 0.5});
    startTimer(timedScreen2, () => showClosingScreen());
  }});
}

// Show the closing screen
function showClosingScreen() {
  gsap.to(timedScreen2, {opacity: 0, duration: 0.5, onComplete: () => {
    timedScreen2.classList.add('hidden');
    closingScreen.classList.remove('hidden');
    
    // Fade in closing screen
    gsap.fromTo(closingScreen, {opacity: 0}, {opacity: 1, duration: 0.5});
  }});
}

// Start button click
startButton.addEventListener('click', showTimedScreen1);

// A simple timer function using GSAP to animate the timer bar
function startTimer(screen, callback) {
  const timerBar = screen.querySelector('.timer-bar');
  // Reset timer bar width to 0
  gsap.set(timerBar, {width: '0%'});
  
  // Animate to 100% over 5 seconds (adjust duration as needed)
  gsap.to(timerBar, {
    width: '100%',
    duration: 5,
    ease: 'linear',
    onComplete: callback
  });
}
