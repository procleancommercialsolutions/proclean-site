// Simple testimonial carousel: cycle through testimonial items
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-item');
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
  testimonials.forEach((item, i) => {
    item.classList.toggle('active', i === index);
  });
}

// Initial display
if (testimonials.length > 0) {
  testimonials[0].classList.add('active');
}

// Rotate testimonials every 5 seconds
setInterval(() => {
  currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
  showTestimonial(currentTestimonial);
}, 5000);
