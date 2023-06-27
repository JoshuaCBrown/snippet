const navBtn = document.querySelector('.drop-down');
navBtn.addEventListener('click', () => {
    const dropContent = document.querySelector('.dropdown-content');
    if (dropContent.classList.contains('show-content')) {
        dropContent.classList.remove('show-content');
    } else {
        dropContent.classList.add('show-content');
    };
});