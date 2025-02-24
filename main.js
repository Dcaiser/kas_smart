const toggleButton = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');
const closebutton = document.getElementById('close');

// Toggle sidebar visibility when hamburger is clicked
toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('-translate-x-full');
});

// Close sidebar if clicked outside of sidebar
document.addEventListener('click', (e) => {
    const isClickInside = sidebar.contains(e.target) || toggleButton.contains(e.target);
    if (!isClickInside) {
        sidebar.classList.add('-translate-x-full');
    }
});
closebutton.addEventListener('click', () => {
 sidebar.classList.add('-translate-x-full');

});

