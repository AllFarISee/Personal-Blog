export const CODE = {
  sinyal: `// Rumus dasar skala sinyal
nilai = rMin + (mA - 4) / 16 * (rMax - rMin)

// Contoh: transmitter tekanan 0-60 Pa, arus 12 mA
// nilai = 0 + (12-4)/16 * 60 = 30 Pa

// mA < 3,8  -> kabel putus / sensor fault
// mA > 20,5 -> sensor over-range`,
  esp: `float bacaTransmitter(int adcRaw, float rMin, float rMax) {
  const float VREF = 3.3, ADC_MAX = 4095.0, R = 150.0;
  float volt = (adcRaw / ADC_MAX) * VREF;
  float mA   = (volt / R) * 1000.0;   // I = V / R
  if (mA < 3.8) return NAN;           // fault
  return rMin + ((mA - 4.0) / 16.0) * (rMax - rMin);
}`,
  mqtt: `// Payload JSON per tag, dikirim tiap 5 detik
topic:   plant/utility/ahu01/pt101
payload: {
  "tag": "PT-101",
  "value": 15.2,
  "unit": "Pa",
  "status": "OK",
  "ts": "2026-11-26T08:00:00Z"
}`,
  ui: `function Tag({ tag, value, unit, status }) {
  return (
    <div className="panel p-4">
      <div className="tag">{tag}</div>
      <div className="text-3xl font-mono">{value} {unit}</div>
      <div className={status === "OK" ? "text-ok" : "text-warn"}>{status}</div>
    </div>
  );
}`,
};

export const stages = [
  {
    key: "sinyal",
    tab: "01 Signal",
    title: "Memahami sinyal 4–20 mA",
    status: "SELESAI",
    paragraphs: [
      "Hampir semua transmitter analog di tempat saya bekerja memakai sinyal arus 4 sampai 20 mA. Selama bertahun-tahun saya hanya memeriksanya dengan multimeter: ukur arus, bandingkan dengan tabel, selesai. Saya belum pernah bertanya mengapa standarnya dimulai dari 4, bukan 0.",
      "Jawabannya ada pada konsep live zero. Jika sinyal turun di bawah 4 mA, berarti ada yang salah, entah kabel putus atau sensor mati. Kalau standarnya mulai dari 0, kita tidak bisa membedakan antara “nilai minimum” dan “rusak”. Pemahaman kecil ini mengubah cara saya memandang sinyal yang sudah saya pegang bertahun-tahun.",
    ],
  },
  {
    key: "esp",
    tab: "02 Embedded System",
    title: "Mengembangkan Sistem Berbasis Mikrokontroler",
    status: "BERJALAN",
    paragraphs: [
      "Tahap ini menjadi penghubung antara pemahaman elektronika dan pengembangan perangkat lunak. Saya mulai mempelajari bagaimana mikrokontroler seperti ESP32 dapat digunakan untuk membaca input dari perangkat eksternal, mengolah informasi, serta menjalankan instruksi berdasarkan kondisi yang diterima.",
      "Dalam prosesnya, saya mempelajari konfigurasi pin, pembacaan sinyal analog, pengolahan nilai sensor, hingga penerapan logika pemrograman untuk mengenali kondisi normal dan gangguan. Pengalaman ini memberikan pemahaman bahwa sebuah perangkat elektronik tidak hanya membutuhkan rangkaian yang tepat, tetapi juga perangkat lunak yang mampu mengendalikan dan mengolah informasi di dalamnya.",
    ],
  },
  {
    key: "mqtt",
    tab: "03 Networking",
    title: "Membangun Konektivitas dan Komunikasi Data",
    status: "RENCANA",
    paragraphs: [
      "Setelah data berhasil diperoleh dari perangkat, tahap berikutnya adalah membangun konektivitas agar informasi dapat dikirimkan dan diakses melalui jaringan. Proses ini mencakup pemahaman komunikasi TCP/IP, konfigurasi jaringan, pengalamatan perangkat, serta mekanisme pertukaran data antara mikrokontroler dan server.",
      "Saya ingin memahami bagaimana perangkat di lapangan dapat terhubung dengan sistem terpusat secara stabil dan terstruktur. Konsep ini menjadi bagian penting dalam arsitektur monitoring industri, karena data yang diperoleh dari instrumen harus dapat diteruskan ke lapisan penyimpanan dan aplikasi tanpa kehilangan konteks informasinya.",
    ],
  },
  {
    key: "ui",
    tab: "04 Software",
    title: "Menampilkan data dengan React",
    status: "RENCANA",
    paragraphs: [
      "Tujuan akhirnya adalah dashboard yang menampilkan kondisi mesin dan utilitas secara langsung, dengan penanda jelas ketika nilai keluar dari batas.",
      "Dengan begitu teknisi tidak perlu berkeliling hanya untuk membaca angka, dan tren harian bisa dilihat tanpa membuka logbook lama. Di sinilah materi kuliah tentang antarmuka, basis data, dan pengembangan aplikasi akan saya pakai.",
    ],
  },
];

export const pelajaran = [
  {
    title: "Noise itu nyata",
    wide: true,
    text: "Di meja, pembacaan terlihat mulus. Begitu didekatkan ke motor atau kabel daya, angkanya melompat. Saya belajar memisahkan jalur kabel sinyal dari kabel daya, memakai shielding, dan merata-ratakan pembacaan di kode.",
  },
  {
    title: "Deteksi fault",
    wide: false,
    text: "Arus di bawah 3,8 mA berarti kabel putus, bukan nol. Kode harus siap menghadapi kegagalan.",
  },
  {
    title: "Batas tegangan",
    wide: false,
    text: "Resistor shunt harus sesuai batas ADC. Satu salah hitung bisa merusak perangkat.",
  },
  {
    title: "Data harus dapat dipercaya",
    wide: true,
    text: "Tidak semua nilai nol menunjukkan kondisi normal. Pada sistem monitoring, arus di bawah 3,8 mA dapat menjadi indikasi kabel terputus. Hal ini mengajarkan saya pentingnya deteksi fault dan penanganan kondisi abnormal dalam sebuah sistem.",
  },
];

export const rencana = [
  {
    title: "Pengembangan Akademik",
    status: "BERJALAN",
    text: "Memperkuat dasar pengetahuan di bidang Informatika, teknologi, dan pemecahan masalah melalui proses pembelajaran akademik maupun pengalaman praktis.",
  },
  {
    title: "Pengembangan Kompetensi Teknologi",
    status: "RENCANA",
    text: "Memperluas kemampuan dalam pengembangan perangkat lunak, sistem digital, integrasi teknologi, serta pemanfaatan teknologi untuk menyelesaikan permasalahan nyata.",
  },
  {
    title: "Integrasi Teknologi dan Industri",
    status: "RENCANA",
    text: "Mengembangkan pemahaman dan kemampuan dalam menghubungkan teknologi informasi dengan kebutuhan industri untuk menciptakan sistem yang lebih efektif, terintegrasi, dan berkelanjutan.",
  },
];
