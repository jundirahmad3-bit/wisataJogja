let slideIndex = 0;
let intervalId;
let slider;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    slider = document.querySelectorAll(".slider img");
    if (slider.length > 0) {
        // Sembunyikan semua gambar kecuali yang pertama
        slider.forEach((img, index) => {
            img.style.opacity = index === 0 ? '1' : '0';
        });
        
        // Mulai slideshow otomatis
        intervalId = setInterval(nextSlide, 3000); // Ganti gambar setiap 3 detik
    }
}

function nextSlide() {
    if (slider.length === 0) return;
    
    // Sembunyikan gambar saat ini
    slider[slideIndex].style.opacity = '0';
    
    // Pindah ke gambar berikutnya
    slideIndex = (slideIndex + 1) % slider.length;
    
    // Tampilkan gambar berikutnya
    slider[slideIndex].style.opacity = '1';
}

function prevSlide() {
    if (slider.length === 0) return;
    
    // Sembunyikan gambar saat ini
    slider[slideIndex].style.opacity = '0';
    
    // Pindah ke gambar sebelumnya
    slideIndex = (slideIndex - 1 + slider.length) % slider.length;
    
    // Tampilkan gambar sebelumnya
    slider[slideIndex].style.opacity = '1';
}