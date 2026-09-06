// ============================================================
// DATA PENGALAMAN KERJA (Dari CV Faisal Fakhri)
// ============================================================

const portfolioData = [
    {
        title: "SMPK 1 BPK Penabur",
        titleLink: "",
        subtitle: "Pelatih Eskul Fotografi",
        category: "Fotografi & Mengajar",
        badge: "2025 - Sekarang",
        link: "",
        image: ""
    },
    {
        title: "Amazon Adventure Indonesia",
        titleLink: "https://www.instagram.com/amazonadventurebdg/",
        subtitle: "Dokumentasi Event (Editor Foto)",
        category: "Editor Foto",
        badge: "Juli 2026",
        link: "https://www.behance.net/gallery/254693891/PT-Buchi-Indonesia-(Event-Team-Building)",
        image: "https://mir-s3-cdn-cf.behance.net/projects/404/6b0332254693891.Y3JvcCwxMDIyLDgwMCw4OCww.jpg"
    },
    {
        title: "Amazon Adventure Indonesia",
        titleLink: "https://www.instagram.com/amazonadventurebdg/",
        subtitle: "Dokumentasi Event (Fotografer)",
        category: "Fotografer Event",
        badge: "Juli 2026",
        link: "https://www.behance.net/gallery/254687943/Swadharma-Duta-Data",
        image: "https://mir-s3-cdn-cf.behance.net/projects/404/314e81254687943.Y3JvcCw1OTAsNDYxLDEwMTUsNzIw.jpg"
    },
    {
        title: "Putri Pendidikan Jawa Barat",
        titleLink: "https://www.instagram.com/dutapendidikanjawabarat/",
        subtitle: "Dokumentasi Event",
        category: "Dokumentasi",
        badge: "Feb 2025",
        link: "https://www.behance.net/gallery/231525757/Duta-Putra-Putri-Pendidikan-Jawa-Barat-2025",
        image: "https://mir-s3-cdn-cf.behance.net/projects/404/3903ea231525757.Y3JvcCwxMDgwLDg0NCwwLDExNw.jpg"
    },
    {
        title: "Putri Pendidikan Jawa Barat",
        titleLink: "https://www.instagram.com/dutapendidikanjawabarat/",
        subtitle: "Foto Model Casual",
        category: "Sesi Foto",
        badge: "Feb 2023",
        link: "https://www.instagram.com/dutapendidikanjawabarat/",
        image: "https://mir-s3-cdn-cf.behance.net/projects/404/d28964231455425.Y3JvcCwzOTk5LDMxMjgsMCwxNDM1.jpg"
    },
    {
        title: "Akassa Wedding Organizer",
        titleLink: "https://akassawedding.com",
        subtitle: "Magang Wedding Organizer",
        category: "Magang",
        badge: "Juli - Sept 2023",
        link: "",
        image: ""
    },
    {
        title: "Seruni Photo",
        titleLink: "",
        subtitle: "Magang Studio Foto",
        category: "Magang",
        badge: "Juli - Okt 2017",
        link: "",
        image: ""
    }
];

// ============================================================
// FUNGSI RENDER PORTFOLIO
// ============================================================

function renderPortfolio(limit = null) {
    const container = document.getElementById('portofolio-list');
    if (!container) return;

    container.innerHTML = '';

    let dataToRender = portfolioData;
    if (limit !== null && limit > 0) {
        dataToRender = portfolioData.slice(0, limit);
    }

    dataToRender.forEach(item => {
        const linkWrapper = document.createElement('a');
        linkWrapper.href = item.link || '#';
        linkWrapper.target = "_blank";
        linkWrapper.style.textDecoration = 'none';
        linkWrapper.style.color = 'inherit';

        const divItem = document.createElement('div');
        divItem.className = 'more-work-item';

        const divLeft = document.createElement('div');
        divLeft.className = 'left';

        if (item.titleLink) {
            const titleLink = document.createElement('a');
            titleLink.className = 'title-link';
            titleLink.href = item.titleLink;
            titleLink.target = "_blank";
            titleLink.textContent = item.title;
            divLeft.appendChild(titleLink);
        } else {
            const divTitle = document.createElement('div');
            divTitle.className = 'title';
            divTitle.textContent = item.title;
            divLeft.appendChild(divTitle);
        }

        const subtitleText = document.createElement('div');
        subtitleText.className = 'subtitle';
        subtitleText.textContent = item.subtitle;
        divLeft.appendChild(subtitleText);

        const divRight = document.createElement('div');
        divRight.className = 'right';

        const divCategory = document.createElement('div');
        divCategory.className = 'category';
        divCategory.textContent = item.category;

        const spanBadge = document.createElement('span');
        spanBadge.className = 'badge';
        spanBadge.textContent = item.badge;

        divRight.appendChild(divCategory);
        divRight.appendChild(spanBadge);

        const spanArrow = document.createElement('span');
        spanArrow.className = 'arrow';
        spanArrow.textContent = '→';

        divItem.appendChild(divLeft);
        divItem.appendChild(divRight);
        divItem.appendChild(spanArrow);

        if (item.link && item.image) {
            const imagePreview = document.createElement('img');
            imagePreview.className = 'hover-preview';
            imagePreview.src = item.image;
            imagePreview.alt = item.title;
            divItem.appendChild(imagePreview);
        }

        linkWrapper.appendChild(divItem);
        container.appendChild(linkWrapper);
    });

    const allItems = document.querySelectorAll('.more-work-item');
    
    allItems.forEach(item => {
        const preview = item.querySelector('.hover-preview');
        if (!preview) return;

        item.addEventListener('mouseenter', () => {
            preview.style.opacity = '1';
            preview.style.transform = 'scale(1)';
        });

        item.addEventListener('mousemove', (e) => {
            let posX = e.clientX + 15;
            let posY = e.clientY - 150;

            if (posX + 320 > window.innerWidth) {
                posX = e.clientX - 320 - 15;
            }
            if (posY < 0) {
                posY = 10;
            }

            preview.style.left = posX + 'px';
            preview.style.top = posY + 'px';
        });

        item.addEventListener('mouseleave', () => {
            preview.style.opacity = '0';
            preview.style.transform = 'scale(0.8)';
        });
    });
}

// ============================================================
// TOGGLE DARK / LIGHT MODE
// ============================================================

function initToggleMode() {
    const toggleSwitch = document.getElementById('toggleSwitch');
    const toggleIcon = document.getElementById('toggleIcon');
    const toggleLabel = document.getElementById('toggleLabel');
    
    if (!toggleSwitch || !toggleIcon || !toggleLabel) {
        return;
    }
    
    let isDarkMode = localStorage.getItem('darkMode');
    
    if (isDarkMode === null) {
        isDarkMode = 'true';
    }
    
    function updateMode(isDark) {
        if (isDark) {
            // Dark mode
            document.documentElement.setAttribute('data-theme', 'dark');
            document.body.classList.remove('light-mode');
            toggleSwitch.classList.remove('active');
            toggleIcon.textContent = '🌙';
            toggleIcon.classList.remove('active');
            toggleLabel.textContent = 'Dark';
        } else {
            // Light mode
            document.documentElement.setAttribute('data-theme', 'light');
            document.body.classList.add('light-mode');
            toggleSwitch.classList.add('active');
            toggleIcon.textContent = '☀️';
            toggleIcon.classList.add('active');
            toggleLabel.textContent = 'Light';
        }
        localStorage.setItem('darkMode', isDark ? 'true' : 'false');
    }
    
    toggleSwitch.addEventListener('click', function(e) {
        e.stopPropagation();
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        updateMode(!isDark);
    });
    
    toggleLabel.addEventListener('click', function() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        updateMode(!isDark);
    });
    
    toggleIcon.addEventListener('click', function() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        updateMode(!isDark);
    });
    
    // Inisialisasi
    updateMode(isDarkMode === 'true');
}

// ============================================================
// UPDATE WAKTU LOKAL (FOOTER)
// ============================================================

function updateWaktu() {
    const elemenWaktu = document.getElementById('waktu-lokal');
    if (!elemenWaktu) return;

    const sekarang = new Date();
    const jamMenit = sekarang.toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });

    elemenWaktu.textContent = jamMenit + " GMT +7";
}

// ============================================================
// LIGHTBOX CV
// ============================================================

function initLightbox() {
    const btnCv = document.getElementById('btnCv');
    const dropdown = document.getElementById('cvDropdown');
    const lightboxOverlay = document.getElementById('lightboxOverlay');
    const lightboxClose = document.getElementById('lightboxClose');
    
    if (!btnCv || !dropdown) return;
    
    btnCv.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdown.classList.toggle('show');
    });
    
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.btn-cv-wrapper')) {
            dropdown.classList.remove('show');
        }
    });
    
    if (lightboxOverlay && lightboxClose) {
        function openLightbox() {
            lightboxOverlay.classList.add('show');
            document.body.style.overflow = 'hidden';
        }
        
        function closeLightbox() {
            lightboxOverlay.classList.remove('show');
            document.body.style.overflow = '';
        }
        
        lightboxClose.addEventListener('click', closeLightbox);
        
        lightboxOverlay.addEventListener('click', function(e) {
            if (e.target === lightboxOverlay) {
                closeLightbox();
            }
        });
        
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeLightbox();
            }
        });
        
        document.querySelectorAll('.cv-option').forEach(function(option) {
            option.addEventListener('click', function(e) {
                const target = this.dataset.target;
                
                if (target === 'cv-biasa') {
                    e.preventDefault();
                    dropdown.classList.remove('show');
                    openLightbox();
                }
            });
        });
    }
}

// ============================================================
// INITIALIZATION
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    // Render Portfolio
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'landing-page.html' || currentPage === '' || currentPage === 'index.html') {
        renderPortfolio(4);
    } else {
        renderPortfolio();
    }
    
    // Init Toggle Mode
    initToggleMode();
    
    // Init Waktu
    updateWaktu();
    setInterval(updateWaktu, 1000);
    
    // Init Lightbox (hanya di halaman tentang)
    initLightbox();
});