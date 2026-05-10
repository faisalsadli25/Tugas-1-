
CREATE DATABASE IF NOT EXISTS ecommerce_db;
USE ecommerce_db;

--1.a.table products
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    harga INT NOT NULL,
    deskripsi TEXT,
    stok INT DEFAULT 0
);

--1b.table users
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL ,
    password VARCHAR(255) NOT NULL
);

--1c.table orders
CREATE TABLE orders (
   order_id INT AUTO_INCREMENT PRIMARY KEY,
   user_id INT,
   product_id INT,
   quantity INT,
   total INT,
   FOREIGN KEY (user_id) REFERENCES users(id),
   FOREIGN KEY (product_id) REFERENCES products(id)
);