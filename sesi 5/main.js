// 1. DATA PUSAT (Gudang Data)
let produk = [
    {
        nama: "Iphone 15",
        harga: 12749000,
        deskripsi: "hadir dengan desain modern dan performa cepat...",
        gambar: "iphne15.jpg",
        kategori: "iphone"
    },
    {
        nama: "samsung S25FE",
        harga: 10999000,
        deskripsi: "Samsung Galaxy S25 FE hadir dengan desain elegan...",
        gambar: "s25fe.jpg",
        kategori: "samsung"
    },
    {
        nama: "Xiaomi Redmi Note 15 Pro",
        harga: 5999000,
        deskripsi: "Xiaomi Redmi Note 15 Pro hadir dengan desain yang menarik...",
        gambar: "redmi.jpg",
        kategori: "xiaomi"
    }
];

// 2. FUNGSI PENCETAK (Hanya ada SATU tempat untuk membuat kartu)
function tampilkanProduk(data) {
    let produkContainer = document.getElementById("container-produk");
    
    // Pastikan container ditemukan sebelum dikosongkan
    if (produkContainer) {
        produkContainer.innerHTML = "";

        data.forEach(function(item) {
            let produkCard = document.createElement("div");
            produkCard.className = "bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col";

            produkCard.innerHTML = `
                <div class="p-6 flex justify-center bg-gray-50">
                    <img src="${item.gambar}" alt="${item.nama}" class="h-48 object-contain">
                </div>
                <div class="p-6 flex flex-col flex-grow">
                    <span class="text-xs font-bold uppercase text-blue-600 mb-1">${item.kategori}</span>
                    <h2 class="text-xl font-bold uppercase text-gray-800 mb-2">${item.nama}</h2>
                    <h3 class="text-lg font-bold text-green-600 mb-4">Rp ${item.harga.toLocaleString('id-ID')}</h3>
                    <p class="text-gray-600 text-sm line-clamp-3 flex-grow">${item.deskripsi}</p>
                </div>
            `;
            produkContainer.appendChild(produkCard);
        });
    }
}

// 3. FUNGSI FILTER (Hanya bertugas menyaring data, lalu memanggil si Pencetak)
function filterProducts(kategori) {
    let dataDisaring = [];
    
    if (kategori === "semua") {
        dataDisaring = produk;
    } else {
        dataDisaring = produk.filter(function(item) {
            return item.kategori === kategori;
        });
    }

    // Panggil fungsi pencetak dengan data yang sudah disaring
    tampilkanProduk(dataDisaring);
}

// 4. JALANKAN PERTAMA KALI (Buka Toko)
tampilkanProduk(produk);