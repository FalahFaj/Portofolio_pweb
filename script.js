const amati = new IntersectionObserver((masuks) => {masuks.forEach((masuk) => {
    console.log(masuk)
    if (masuk.isIntersecting) {
        masuk.target.classList.add('tampil');
    } else {
        masuk.target.classList.remove('tampil');
    }
})
}) 

const sembunyiElemen = document.querySelectorAll('.sembunyi')

sembunyiElemen.forEach((el) => amati.observe(el))

document.addEventListener("DOMContentLoaded", function() {
    const text_span = document.getElementById("ketik-teks");
    const tulisan = "Muhammad Fajrul Falah";
    const kecepatan = 150
    let index_kar = 0

    function type() {
        if (index_kar < tulisan.length) {
            text_span.textContent += tulisan.charAt(index_kar);
            index_kar++;
        } else {
            clearInterval(intervalPengetikan);
        }
    }
    const intervalPengetikan = setInterval(type, kecepatan)
})


document.addEventListener('DOMContentLoaded', () => {
    const Tombol = document.getElementById('btn-ganti-tema');
    const body = document.body;

    function ubahTema(tema) {
        if (tema == 'gelap') {
            body.classList.add('tema_gelap');
        } else {
            body.classList.remove('tema_gelap');
        }
    }

    const temaDISimpan = localStorage.getItem('tema') || 'terang';
    ubahTema(temaDISimpan);

    Tombol.addEventListener('click', () => {
        const modeGelap = body.classList.contains('tema_gelap');

        if (modeGelap) {
            ubahTema('terang');
            localStorage.setItem('tema', 'terang');
        } else {
            ubahTema('gelap');
            localStorage.setItem('tema', 'gelap');
        }
    });
});

const cards = document.querySelectorAll('.foto-about');
cards.forEach(card => {
  const img = card.querySelector('.card-img');
  const gloss = card.querySelector('.gloss');
  card.addEventListener('mousemove', (e) => {
    const r = card.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    card.style.setProperty('--mx', `${x}%`);
    card.style.setProperty('--my', `${y}%`);
    const dx = (x - 50);
    const dy = (y - 50);
    // parallax halus di dalam foto
    img.style.transform = `translate(${dx * -0.3}px, ${dy * -0.3}px) scale(1.07)`;
    gloss.style.transform = `translate(${dx * 0.2}px, ${dy * 0.2}px) scale(1.02)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.removeProperty('--mx');
    card.style.removeProperty('--my');
    img.style.transform = '';
    gloss.style.transform = '';
  });
});


(function() {
    emailjs.init('zla5s6RHCzwjS22GO')
})();

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const statusPesan = document.getElementById('status-pesan');
        const tombolSubmit = this.querySelector('button[type="submit"]');

        tombolSubmit.innerText = 'Mengirim...';
        tombolSubmit.disabled = true;
        statusPesan.innerText = '';
        statusPesan.className = '';

        emailjs.sendForm('service_coba_kirim_gmail','template_coba_kirim_gmai', this)
        .then(function() {
            statusPesan.innerText = 'Pesan Anda berhasil terkirim!';
            statusPesan.classList.add('sukses');
            tombolSubmit.innerText = 'Kirim Pesan';
            tombolSubmit.disabled = false;
            contactForm.reset();
        }, function(error) {
            statusPesan.innerText = 'Gagal mengirim pesan. Silakan coba lagi.';
            statusPesan.classList.add('gagal');
            tombolSubmit.innerText = 'Kirim Pesan';
            tombolSubmit.disabled = false;
            console.log('FAILED...', error);
        });
    });
    }
});