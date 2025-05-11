// Function to play the corresponding click sound based on the button clicked
function playClickSound(event) {
  // Prevent the default anchor behavior
  event.preventDefault();

  // Get the audio ID from the data attribute
  const audioId = event.target.getAttribute('data-audio');
  const audio = document.getElementById(audioId);

  // Reset audio to start and play it
  audio.currentTime = 0; // Reset audio to start
  audio.play(); // Play the audio

  // Get the target URL for navigation
  const targetUrl = event.target.getAttribute('href');

  // Navigate to the new page after the audio has finished playing
  audio.onended = function() {
    window.location.href = targetUrl; // Navigate to the new page
  };
}

// Add event listeners to navbar links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', playClickSound);
});






const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}