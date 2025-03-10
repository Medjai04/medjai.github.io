// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    const targetId = this.getAttribute('href'); // Get the target section ID
    const targetSection = document.querySelector(targetId); // Find the target section

    if (targetSection) {
      // Smoothly scroll to the target section
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Toggle Sidebar
const sidebar = document.getElementById('sidebar');
const openSidebarButton = document.getElementById('open-sidebar');
const closeSidebarButton = document.getElementById('close-sidebar');
const mainContent = document.querySelector('.main-content');

// Open Sidebar
openSidebarButton.addEventListener('click', () => {
  sidebar.classList.add('open'); // Add 'open' class to show the sidebar
  mainContent.classList.add('shifted'); // Shift main content to the right
});

// Close Sidebar
closeSidebarButton.addEventListener('click', () => {
  sidebar.classList.remove('open'); // Remove 'open' class to hide the sidebar
  mainContent.classList.remove('shifted'); // Reset main content position
});

// Close Sidebar When Clicking Outside
document.addEventListener('click', (event) => {
  const isClickInsideSidebar = sidebar.contains(event.target);
  const isClickOnOpenButton = openSidebarButton.contains(event.target);

  // If the click is outside the sidebar and not on the open button, close the sidebar
  if (!isClickInsideSidebar && !isClickOnOpenButton && sidebar.classList.contains('open')) {
    sidebar.classList.remove('open');
    mainContent.classList.remove('shifted');
  }
});
