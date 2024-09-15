const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.control');
const allSections = document.querySelector('body');

function PTrans() {
    // Button Click Active Class
    sectBtns.forEach((btn) => {
        btn.addEventListener('click', function() {
            let currentBtn = document.querySelector('.active-btn');
            if (currentBtn) {
                currentBtn.classList.remove('active-btn');
            }
            this.classList.add('active-btn');

            // Hide all sections
            sections.forEach((section) => {
                section.classList.remove('active');
            });

            // Show the clicked section
            const sectionId = this.dataset.id;
            const targetSection = document.getElementById(sectionId);
            targetSection.classList.add('active');
        });
    });
}

PTrans();
