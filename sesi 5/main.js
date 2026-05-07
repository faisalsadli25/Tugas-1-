let produk = [
    {
    nama:"Iphone 15",
    harga:12749000,
    deskripsi:"hadir dengan desain modern dan performa cepat yang cocok untuk kebutuhan sehari-hari maupun pekerjaan. Dibekali chip terbaru dari Apple, iPhone 15 mampu menjalankan aplikasi dengan lancar, multitasking lebih responsif, serta hemat daya. Kamera utama menghasilkan foto yang jernih dan detail, bahkan dalam kondisi minim cahaya. Layar Super Retina XDR memberikan tampilan warna yang tajam dan nyaman digunakan untuk menonton maupun bermain game. Selain itu, iPhone 15 sudah menggunakan port USB-C yang lebih praktis dan kompatibel dengan banyak perangkat modern. Cocok untuk pengguna yang menginginkan smartphone premium dengan performa stabil dan kamera berkualitas.",
    gambar:"iphne15.jpg",
    kategori:"iphone"
    },

    {
    nama:"samsung S25FE",
    harga:10999000,
    deskripsi:"Samsung Galaxy S25 FE hadir dengan desain elegan dan performa tangguh yang cocok untuk kebutuhan sehari-hari maupun hiburan. Ditenagai oleh chipset terbaru, smartphone ini mampu menjalankan aplikasi dengan lancar dan responsif, serta memberikan pengalaman gaming yang memuaskan. Kamera utama menghasilkan foto yang jernih dan detail, bahkan dalam kondisi cahaya rendah, sementara kamera depan cocok untuk selfie berkualitas tinggi. Layar Dynamic AMOLED memberikan tampilan warna yang tajam dan nyaman digunakan untuk menonton maupun bermain game. Selain itu, Samsung Galaxy S25 FE dilengkapi dengan baterai tahan lama yang mendukung pengisian cepat, sehingga pengguna dapat tetap produktif sepanjang hari tanpa khawatir kehabisan daya.",
    gambar:"s25fe.jpg",
    kategori:"samsung"
    },
    {
    nama:"Xiaomi Redmi Note 15 Pro",
    harga:5999000,
    deskripsi:"Xiaomi Redmi Note 15 Pro hadir dengan desain yang menarik dan performa yang tangguh. Ditenagai oleh chipset terbaru, smartphone ini mampu menjalankan aplikasi dengan lancar dan responsif. Kamera utama menghasilkan foto yang jernih dan detail, sementara kamera depan cocok untuk selfie berkualitas tinggi. Layar AMOLED memberikan tampilan warna yang tajam dan nyaman digunakan untuk menonton maupun bermain game. Selain itu, Xiaomi Redmi Note 15 Pro dilengkapi dengan baterai tahan lama yang mendukung pengisian cepat.",
    gambar:"redmi.jpg",
    kategori:"xiaomi"
    }
];

    function tampilkanProduk(data){
    let produkContainer = document.getElementById("container-produk");
    produkContainer.innerHTML = "";

    data.forEach(function(item) {
        let produkCard = document.createElement("div");
        produkCard.className = "bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"; //menambahkan kelas CSS untuk styling

        produkCard.innerHTML = `
        <div class = "p-6 flex justify-center bg-gray-50">
            <img src="${item.gambar}" alt="${item.nama}" class="h-48 object-contain ">
            </div>

            <div class="p-6 flex flex-col flex-grow">
            <span class ="text-xs font-bold uppercase text-blue-600 mb-1">${item.kategori}</span>
            <h2 class="text-xl font-bold uppercase text-gray-800 mb-2">${item.nama}</h2>
            <h3 class="text-lg font-bold text-green-600 mb-4">Rp ${item.harga.toLocaleString('id-ID')}</h3>
            <p class="text-gray-600 text-sm line-clamp-3 flex-grow">${item.deskripsi}</p>
            </div>
        `;
        produkContainer.appendChild(produkCard); //memasukkan atau menempelkan sebuha elemen anak(child) ke dalam sebuah elemen induk(parent)
        
    });
    
}

tampilkanProduk(produk);

    function filterProducts(kategori){
        let dataDisaring =[];
        if(kategori === "semua"){
            dataDisaring = produk;
        }else{
            dataDisaring = produk.filter(function(item){
                return item.kategori === kategori;
            })
        }
        tampilkanProduk(dataDisaring);
    }

        dataDisaring.forEach(function(item) {
            let produkCard = document.createElement("div");
            produkCard.classList.add("produk-card");

            produkCard.innerHTML = `
                <img src="${item.gambar}" alt="${item.nama}" style="width: 200px; height: 200px; object-fit:contain;">
                <h2>${item.nama}</h2>
                <h3>Rp ${item.harga.toLocaleString('id-ID')}</h3>
                <p>${item.deskripsi}</p>
                <small>Kategori: ${item.kategori}</small>
            `;
            produkContainer.appendChild(produkCard);
        });
    
    
