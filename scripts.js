// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Toggle Sidebar
const sidebar = document.getElementById('sidebar');
const openSidebarButton = document.getElementById('open-sidebar');
const closeSidebarButton = document.getElementById('close-sidebar');
const mainContent = document.querySelector('.main-content');

openSidebarButton.addEventListener('click', () => {
  sidebar.classList.add('open');
  mainContent.classList.add('shifted');
});

closeSidebarButton.addEventListener('click', () => {
  sidebar.classList.remove('open');
  mainContent.classList.remove('shifted');
});
