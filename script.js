
function handleResize() {
    const isDesktop = window.innerWidth >= 1025; // Adjust width as needed
    document.querySelector('.newlogocircle').style.display = isDesktop ? 'block' : 'none';
    document.querySelector('.newlogo').style.display = isDesktop ? 'block' : 'none';
}

window.addEventListener('resize', handleResize);
// Initial check
handleResize();
