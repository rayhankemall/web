// Efek klik pada tombol WhatsApp
document.getElementById('whatsapp-button').addEventListener('click', function() {
    this.style.transform = 'scale(1.2)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 300);
});

// Daftar gambar yang akan ditampilkan
const images = [
   'images/kemenkes.jpeg',
    'images/kemenkes tv.jpeg',
    'images/screen solo.jpeg',
    'images/kmnkestv.jpeg',
    'images/tv solo.jpeg',
    'images/videotron.jpeg',
    'images/tvsingle.jpeg',
    'images/ceo.jpeg',
    'images/singletv.jpeg',
    'images/dualscreen.jpeg',
    'images/riset.jpeg',
    'images/tv and ac.jpeg',
    'images/kemenkess.jpeg',
    'images/pengayoman.jpeg',
    'images/solotvv.jpeg',
    'images/pejabat.jpeg',
    'images/konserscreen.jpeg',
    'images/peringatandarurat.jpeg',
    'images/proyektor.png',
    'images/singletvvv.jpeg',
    'images/rental.jpeg'
];

let currentIndex = 0;

// Fungsi untuk menampilkan gambar berdasarkan index
function showImage(index) {
    if (index >= images.length) {
        currentIndex = 0; // Kembali ke awal jika melebihi jumlah gambar
    } else if (index < 0) {
        currentIndex = images.length - 1; // Kembali ke gambar terakhir jika index negatif
    } else {
        currentIndex = index;
    }
    document.getElementById('gallery-image').src = images[currentIndex];
}

// Event listener untuk mengubah gambar saat gambar diklik
document.getElementById('gallery-image').addEventListener('click', function() {
    showImage(currentIndex + 1); // Tampilkan gambar berikutnya
});

// Menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.querySelector('.menu-icon');
    var menuContainer = document.querySelector('.menu-container');

    menuIcon.addEventListener('click', function(event) {
        event.preventDefault();
        menuContainer.classList.toggle('active');
        var dropdownContent = menuContainer.querySelector('.dropdown-content');
        dropdownContent.classList.toggle('show');
    });

    // Tutup dropdown jika pengguna mengklik di luar elemen
    window.onclick = function(event) {
        if (!event.target.matches('.menu-icon')) {
            var dropdowns = document.querySelectorAll('.dropdown-content');
            dropdowns.forEach(function(drop) {
                if (drop.classList.contains('show')) {
                    drop.classList.remove('show');
                }
            });
            menuContainer.classList.remove('active');
        }
    };
});
