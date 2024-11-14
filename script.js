// Fungsi untuk membuka pop-up
function openSubscriptionPopup() {
    document.getElementById("subscription-popup").style.display = "flex"; // Menampilkan pop-up
}

// Fungsi untuk menutup pop-up
function closeSubscriptionPopup() {
    document.getElementById("subscription-popup").style.display = "none"; // Menyembunyikan pop-up
}

// Fungsi untuk mengarahkan ke WhatsApp
function redirectToWhatsApp() {
    const phoneNumber = "6289629616746";  // Nomor WhatsApp Anda tanpa tanda "+" dan angka 0 di awal
    const message = "Tabe' Situs Ini Akan Dirilis Pada  17 November 2024, Subscription Now Untuk Akses Lebih Awal! ";  // Pesan otomatis yang ingin dikirim
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");  // Membuka link WhatsApp di tab baru
}

