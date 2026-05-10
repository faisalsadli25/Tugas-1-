USE ecommerce_db;

--create(tambah data)
INSERT INTO users(nama, email, password) VALUES
('M Faisal Sadli', 'faisalsadli99@gmail.com', 'hash_password1');



--read(menampilkan data)
SELECT * FROM users;

--update(mengubah data)
UPDATE users SET nama = 'M Faisal Sadli', email = 'faisalsadli99@gmail.com', password = '123456' WHERE id = 1;

--delete(menghapus data)
DELETE FROM products WHERE id IN (6, 7, 8, 9);