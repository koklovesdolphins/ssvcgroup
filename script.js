function openNewTab(url) {
  window.open(url, '_blank');
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function loadHeaderFooter() {
  const timestamp = new Date().getTime(); // Unique timestamp to prevent caching

  fetch(`/header.html?cache-bust=${timestamp}`)
    .then(response => response.text())
    .then(data => {
      document.querySelector('header').innerHTML = data;
    })
    .catch(error => console.error('Error loading header:', error));

  fetch(`/footer.html?cache-bust=${timestamp}`)
    .then(response => response.text())
    .then(data => {
      document.querySelector('footer').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));
}

document.addEventListener('DOMContentLoaded', () => {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'; // Disable browser's scroll restoration
  }
  window.scrollTo(0, 0); // Ensure the page starts at the top
  loadHeaderFooter();
});