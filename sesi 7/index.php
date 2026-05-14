<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Tambah Produk</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-blue-100 p-10">

    <?php 
    // Menangkap data dari URL
    $errorFields = isset($_GET['fields']) ? explode(',', $_GET['fields']) : [];
    $oldName = $_GET['old_name'] ?? '';
    $oldPrice = $_GET['old_price'] ?? '';
    $oldDesc = $_GET['old_desc'] ?? '';
    ?>

    <div class="max-w-md mx-auto bg-white rounded-lg p-6 shadow-md"> 
        <h1 class="text-2xl font-bold mb-6 text-center text-gray-800">Form Tambah Produk</h1>

        <!-- Notifikasi Sukses -->
        <?php if (isset($_GET['status']) && $_GET['status'] === 'success'): ?>
            <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded mb-4 text-sm">
                <?php echo htmlspecialchars($_GET['msg']); ?>
            </div>
        <?php endif; ?>

        <form id="productForm" action="proses.php" method="POST">
            <!-- Input Nama -->
            <div class="mb-4">
                <?php $isNameErr = in_array('name', $errorFields); ?>
                <label for="name" class="block font-bold mb-2 <?php echo $isNameErr ? 'text-red-600' : 'text-gray-700'; ?>">Name:</label>
                <input type="text" id="name" name="name" value="<?php echo htmlspecialchars($oldName); ?>"
                    class="shadow border rounded w-full py-2 px-3 focus:outline-none <?php echo $isNameErr ? 'border-red-500 bg-red-50' : 'border-gray-300'; ?>">
                <?php if ($isNameErr): ?>
                    <p class="text-red-500 text-xs italic mt-1">* Nama wajib diisi</p>
                <?php endif; ?>
            </div>

            <!-- Input Harga -->
            <div class="mb-4">
                <?php $isPriceErr = in_array('price', $errorFields); ?>
                <label for="price" class="block font-bold mb-2 <?php echo $isPriceErr ? 'text-red-600' : 'text-gray-700'; ?>">Price:</label>
                <input type="number" id="price" name="price" step="0.01" value="<?php echo htmlspecialchars($oldPrice); ?>"
                    class="shadow border rounded w-full py-2 px-3 focus:outline-none <?php echo $isPriceErr ? 'border-red-500 bg-red-50' : 'border-gray-300'; ?>">
                <?php if ($isPriceErr): ?>
                    <p class="text-red-500 text-xs italic mt-1">* Harga wajib diisi</p>
                <?php endif; ?>
            </div>

            <!-- Input Deskripsi -->
            <div class="mb-6">
                <?php $isDescErr = in_array('description', $errorFields); ?>
                <label for="description" class="block font-bold mb-2 <?php echo $isDescErr ? 'text-red-600' : 'text-gray-700'; ?>">Description:</label>
                <textarea id="description" name="description" 
                    class="shadow border rounded w-full py-2 px-3 focus:outline-none <?php echo $isDescErr ? 'border-red-500 bg-red-50' : 'border-gray-300'; ?>"><?php echo htmlspecialchars($oldDesc); ?></textarea>
                <?php if ($isDescErr): ?>
                    <p class="text-red-500 text-xs italic mt-1">* Deskripsi wajib diisi</p>
                <?php endif; ?>
            </div>

            <button type="submit" id="submitBtn" 
                class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400 disabled:cursor-not-allowed transition duration-200">
                Submit Produk
            </button>
        </form>
    </div>

    <script>
        // Logika JavaScript agar tombol tidak bisa ditekan jika ada kolom kosong
        const form = document.getElementById('productForm');
        const btn = document.getElementById('submitBtn');
        const inputs = form.querySelectorAll('input, textarea');

        function checkInputs() {
            let allFilled = true;
            inputs.forEach(input => {
                if (input.value.trim() === "") {
                    allFilled = false;
                }
            });
            btn.disabled = !allFilled;
        }

        // Cek saat pertama kali halaman dimuat (untuk old values)
        checkInputs();

        // Cek setiap kali ada perubahan input
        inputs.forEach(input => {
            input.addEventListener('input', checkInputs);
        });
    </script>

</body>
</html>