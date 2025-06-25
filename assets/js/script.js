const sidebar = document.querySelector('.sidebar');
const hamburger = document.querySelector('.hamburger-menu');
const body = document.body;

hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar-closed');
  body.classList.toggle('sidebar-hidden');
});
