// ========== 1. TYPING EFFECT ==========

const typingText = document.getElementById('typing-text');

const names = [
    'Alnelka Parisha',
    'Web Developer',
    'Mahasiswa SI'
];

let nameIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentName = names[nameIndex];

    if (isDeleting) {

        typingText.textContent =
            currentName.substring(0, charIndex - 1);

        charIndex--;

    } else {

        typingText.textContent =
            currentName.substring(0, charIndex + 1);

        charIndex++;
    }

    let delay = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentName.length) {

        delay = 2000;

        isDeleting = true;

    } else if (isDeleting && charIndex === 0) {

        isDeleting = false;

        nameIndex =
            (nameIndex + 1) % names.length;

        delay = 500;
    }

    setTimeout(typeEffect, delay);
}

// Jalankan typing effect hanya jika elemennya tersedia
if (typingText) {
    typeEffect();
}


// ========== 2. GENERATE PROJECT CARDS ==========

const projects = [

    {
        title: 'Website Profil',
        desc: 'Website profil dengan HTML & CSS',
        image: 'https://via.placeholder.com/300x200/2563eb/fff?text=Profil'
    },

    {
        title: 'Kalkulator JS',
        desc: 'Kalkulator interaktif',
        image: 'https://via.placeholder.com/300x200/2563eb/fff?text=Kalkulator'
    },

    {
        title: 'Form Interaktif',
        desc: 'Form pendaftaran dengan validasi',
        image: 'https://via.placeholder.com/300x200/2563eb/fff?text=Form'
    }

];

const projectGrid =
    document.getElementById('project-grid');

if (projectGrid) {

    projects.forEach(project => {

        const card = document.createElement('div');

        card.className = 'project-card';

        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.desc}</p>
        `;

        card.addEventListener('click', () => {

            alert(
                `Anda memilih proyek: ${project.title}`
            );

        });

        projectGrid.appendChild(card);

    });

}


// ========== 3. CONTACT FORM VALIDATION ==========

const contactForm =
    document.getElementById('contact-form');

if (contactForm) {

    contactForm.addEventListener('submit', function(event) {

        event.preventDefault();

        const name =
            document.getElementById('name').value.trim();

        const email =
            document.getElementById('email').value.trim();

        const message =
            document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {

            alert('Silakan lengkapi semua data terlebih dahulu.');

            return;
        }

        alert(
            `Terima kasih ${name}! Pesan Anda berhasil dikirim.`
        );

        contactForm.reset();

    });

}
