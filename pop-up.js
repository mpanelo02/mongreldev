// const openBtn = document.getElementById('openModal');

// const modal = document.getElementById('modal');

// openBtn.addEventListener('click', () => {
//     modal.classList.add('open');
// });

// modal.addEventListener('click', (e) => {
//     if (e.target === modal) {
//         modal.classList.remove('open');
//     }
// });

const openBtn = document.getElementById('openModal');
const modal = document.getElementById('modal');
const modalInner = modal.querySelector('.modal-inner');

openBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent immediate close
    modal.classList.add('open');
});

// Prevent clicks inside modal from closing it
modalInner.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Close modal when clicking anywhere else
document.addEventListener('click', () => {
    modal.classList.remove('open');
});
