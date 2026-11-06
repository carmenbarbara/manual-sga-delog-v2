document.addEventListener('DOMContentLoaded', function () {

    const lightboxHTML = `
    <div id="lightbox-overlay">
        <span id="lightbox-close">&times;</span>
        <img id="lightbox-image" src="" alt="Imagem ampliada">
    </div>
    `;

    document.body.insertAdjacentHTML('beforeend', lightboxHTML);

    const overlay = document.getElementById('lightbox-overlay');
    const lightboxImg = document.getElementById('lightbox-image');
    const closeBtn = document.getElementById('lightbox-close');

    const images = document.querySelectorAll('.rst-content img, .md-content img');

    images.forEach(image => {

        image.addEventListener('click', function () {

            lightboxImg.src = this.src;

            overlay.classList.add('active');

            document.body.style.overflow = 'hidden';
        });

    });

    function closeLightbox() {

        overlay.classList.remove('active');

        lightboxImg.src = '';

        document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeLightbox);

    overlay.addEventListener('click', function (e) {

        if (e.target === overlay) {

            closeLightbox();
        }
    });

    document.addEventListener('keydown', function (e) {

        if (e.key === 'Escape') {

            closeLightbox();
        }
    });

});
