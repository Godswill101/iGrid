const open = document.querySelectorAll('.open');

open.forEach(open => {
    open.addEventListener('click', () => {
      open.classList.toggle('active');
    });
});
