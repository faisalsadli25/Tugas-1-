<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nama = $_POST['name'];
    $harga = $_POST['price'];
    $deskripsi = $_POST['description'];

    // Tugas Validasi: Cek field mana saja yang kosong
    $errors = [];
    if (empty($nama)) $errors[] = 'name';
    if (empty($harga)) $errors[] = 'price';
    if (empty($deskripsi)) $errors[] = 'description';

    if (!empty($errors)) {
        // Jika ada error, kirim kembali daftar field dan data input lama
        $error_fields = implode(',', $errors);
        $query = http_build_query([
            'status' => 'error',
            'fields' => $error_fields,
            'old_name' => $nama,
            'old_price' => $harga,
            'old_desc' => $deskripsi
        ]);
        header("Location: index.php?" . $query);
        exit();
    } else {
        // Jika sukses
        header("Location: index.php?status=success&msg=Produk berhasil ditambahkan");
        exit();
    }
} else {
    header("Location: index.php");
    exit();
}