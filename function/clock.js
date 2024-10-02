function updateClock() {
  // Dapatkan waktu saat ini
  const now = new Date();

  // Hitung waktu WIB (UTC+7)
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const wib = new Date(utc + (7 * 60 * 60 * 1000));

  // Hari dalam Bahasa Indonesia
  const days = [
      'Minggu', 'Senin', 'Selasa', 'Rabu',
      'Kamis', 'Jumat', 'Sabtu'
  ];
  const dayName = days[wib.getDay()];

  // Format waktu
  let hours = wib.getHours().toString().padStart(2, '0');
  let minutes = wib.getMinutes().toString().padStart(2, '0');
  let seconds = wib.getSeconds().toString().padStart(2, '0');

  // Format tanggal
  let day = wib.getDate().toString().padStart(2, '0');
  const months = [
      'Januari', 'Februari', 'Maret', 'April',
      'Mei', 'Juni', 'Juli', 'Agustus',
      'September', 'Oktober', 'November', 'Desember'
  ];
  let month = months[wib.getMonth()];
  let year = wib.getFullYear();

  // Tampilkan di HTML
  document.getElementById('day').textContent = dayName;
  document.getElementById('date').textContent = `${day} ${month} ${year}`;
  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds} WIB`;
}

// Panggil fungsi saat halaman dimuat
updateClock();

// Perbarui jam setiap detik
setInterval(updateClock, 1000);