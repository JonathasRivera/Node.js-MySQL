CREATE DATABASE mystore;

USE mystore;

CREATE TABLE categories (
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR(255)
);

CREATE TABLE products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_title VARCHAR(255),
    product_price DECIMAL(10,2),
    product_description TEXT,
    product_image VARCHAR(255),
    product_rate DECIMAL(3,1),
    product_count INT,
    category_id INT,
    FOREIGN KEY (category_id) 
    REFERENCES categories(category_id) 
    ON DELETE CASCADE;
);

CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    user_email VARCHAR(255),
    user_username VARCHAR(255),
    user_password VARCHAR(255),
    user_name VARCHAR(255),
    user_phone VARCHAR(13),
    user_city VARCHAR(255),
    user_street VARCHAR(255),
    user_number INT,
    user_cep VARCHAR(8)
);

CREATE TABLE carts (
    cart_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    cart_date DATETIME,
    cart_status BOOLEAN
);

CREATE TABLE cart_products (
    cart_products_id INT PRIMARY KEY AUTO_INCREMENT,
    cart_products_quatity INT,
    cart_id INT,
    product_id INT,
    FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE CASCADE
);