// Greeting
function setGreeting() {
  const h = new Date().getHours();
  let g = h < 12 ? "Good Morning! Welcome to my profile"
        : h < 18 ? "Good Afternoon! Welcome to my profile"
        : h < 21 ? "Good Evening! Welcome to my profile"
        : "Good Night! Thanks for visiting";
  document.getElementById("greetingBar").innerText = g;
}
setGreeting();

// Scroll reveal - immediately show elements already in viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

document.querySelectorAll('.reveal').forEach(el => {
  const rect = el.getBoundingClientRect();
  if (rect.top < window.innerHeight) {
    el.classList.add('visible');
  } else {
    observer.observe(el);
  }
});
