const panels = document.querySelectorAll('.panels');

const toggleOpen(event) => {
    event.currentTarget.classList.toggle('open');
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    
