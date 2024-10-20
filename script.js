function goBack() {
    window.history.back(); // Kembali ke halaman sebelumnya
}

window.onload = function() {
    const messageDisplay = document.getElementById("messageDisplay");
    messageDisplay.innerHTML = messages.join('<br>'); // Menampilkan semua pesan
    messageDisplay.style.opacity = 0; // Mulai dengan opacity 0

    // Memberikan efek animasi untuk menampilkan pesan
    setTimeout(() => {
        messageDisplay.style.opacity = 1; // Mengubah opacity menjadi 1 setelah beberapa detik
    }, 50); // Penundaan kecil untuk memastikan transisi

    // Memutar musik saat halaman dimuat
    const audio = document.getElementById('backgroundMusic');
    audio.loop = true; // Memastikan musik berulang
    audio.play().then(() => {
        console.log("Musik diputar"); // Menyatakan bahwa musik diputar
    }).catch(error => {
        console.log("Audio tidak dapat diputar:", error); // Menangkap kesalahan jika tidak bisa diputar
    });
};

// Menampilkan semua pesan saat halaman dimuat
window.onload = function() {
    const messageDisplay = document.getElementById("messageDisplay");
    messageDisplay.innerHTML = messages.join('<br>'); // Menampilkan semua pesan
    messageDisplay.style.opacity = 0; // Mulai dengan opacity 0

    // Memberikan efek animasi untuk menampilkan pesan
    setTimeout(() => {
        messageDisplay.style.opacity = 1; // Mengubah opacity menjadi 1 setelah beberapa detik
    }, 50); // Penundaan kecil untuk memastikan transisi

    // Menghubungkan fungsi playMusic dengan tombol
    document.getElementById('showMessages').onclick = playMusic; // Memanggil playMusic ketika tombol diklik
};