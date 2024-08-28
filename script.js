function playGreeting() {
    var audio = document.getElementById('birthdayAudio');
    audio.play();
}

window.onload = function() {
    var giftBox = document.getElementById('giftBox');
    var birthdayCard = document.getElementById('birthdayCard');

    // Tampilkan kado di awal
    giftBox.style.display = 'flex';

    // Tambahkan event listener untuk membuka kado
    giftBox.addEventListener('click', function() {
        giftBox.classList.add('open');
        setTimeout(function() {
            // Hapus gift box setelah animasi selesai
            giftBox.style.display = 'none';
            // Tampilkan kartu dengan animasi zoom-out
            birthdayCard.classList.add('show');
            playGreeting();
        }, 1000); // Durasi harus sama dengan animasi kado
    });
}
