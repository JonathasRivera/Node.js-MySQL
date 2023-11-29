INSERT INTO categories (category_name) VALUES
    ('Eletrônicos'),
    ('Roupas'),
    ('Livros'),
    ('Móveis'),
    ('Alimentos');

INSERT INTO products (product_title, product_price, product_description, product_image, product_rate, product_count, category_id) VALUES
    ('Smartphone X1', 599.99, 'Um smartphone avançado com ótima câmera.', 'smartphone_x1.jpg', 4.5, 100, 1),
    ('Camiseta Casual', 29.99, 'Uma camiseta confortável para uso diário.', 'camiseta_casual.jpg', 4.0, 200, 2),
    ('Livro Aventuras Fantásticas', 19.99, 'Um livro emocionante de aventuras.', 'livro_aventuras.jpg', 4.8, 50, 3),
    ('Sofá de Couro', 799.99, 'Um sofá de couro elegante para a sala de estar.', 'sofa_couro.jpg', 4.2, 10, 4),
    ('Arroz Integral', 3.99, 'Pacote de 1kg de arroz integral.', 'arroz_integral.jpg', 4.7, 500, 5);

INSERT INTO users (user_email, user_username, user_password, user_name, user_phone, user_city, user_street, user_number, user_cep) VALUES
    ('usuario1@email.com', 'user1', 'senha123', 'João Silva', '123-456-7890', 'São Paulo', 'Rua A', 123, '12345678'),
    ('usuario2@email.com', 'user2', 'senha456', 'Maria Souza', '987-654-3210', 'Rio de Janeiro', 'Avenida B', 456, '54321876');

INSERT INTO carts (user_id, cart_date, cart_status) VALUES
    (1, NOW(), 1),
    (2, NOW(), 1);

INSERT INTO cart_products (cart_products_quantity, cart_id, product_id) VALUES
    (2, 1, 1),
    (3, 1, 2),
    (1, 2, 3);

INSERT INTO products (product_title, product_price, product_description, product_image, product_rate, product_count, category_id) VALUES
    ('Produto 1', 49.99, 'Descrição do Produto 1', 'produto1.jpg', 3.5, 30, 1),
    ('Produto 2', 79.99, 'Descrição do Produto 2', 'produto2.jpg', 4.0, 25, 2),
    ('Produto 3', 39.99, 'Descrição do Produto 3', 'produto3.jpg', 4.5, 40, 3),
    ('Produto 4', 89.99, 'Descrição do Produto 4', 'produto4.jpg', 4.2, 22, 4),
    ('Produto 5', 19.99, 'Descrição do Produto 5', 'produto5.jpg', 3.8, 35, 5),
    ('Produto 6', 129.99, 'Descrição do Produto 6', 'produto6.jpg', 4.7, 18, 1),
    ('Produto 7', 59.99, 'Descrição do Produto 7', 'produto7.jpg', 4.1, 27, 2),
    ('Produto 8', 34.99, 'Descrição do Produto 8', 'produto8.jpg', 4.6, 33, 3),
    ('Produto 9', 69.99, 'Descrição do Produto 9', 'produto9.jpg', 4.3, 29, 4),
    ('Produto 10', 24.99, 'Descrição do Produto 10', 'produto10.jpg', 4.9, 24, 5),
    ('Produto 11', 79.99, 'Descrição do Produto 11', 'produto11.jpg', 4.2, 21, 1),
    ('Produto 12', 44.99, 'Descrição do Produto 12', 'produto12.jpg', 3.9, 38, 2),
    ('Produto 13', 54.99, 'Descrição do Produto 13', 'produto13.jpg', 4.5, 32, 3),
    ('Produto 14', 99.99, 'Descrição do Produto 14', 'produto14.jpg', 4.8, 15, 4),
    ('Produto 15', 29.99, 'Descrição do Produto 15', 'produto15.jpg', 4.0, 26, 5),
    ('Produto 16', 119.99, 'Descrição do Produto 16', 'produto16.jpg', 4.4, 23, 1),
    ('Produto 17', 64.99, 'Descrição do Produto 17', 'produto17.jpg', 4.7, 19, 2),
    ('Produto 18', 49.99, 'Descrição do Produto 18', 'produto18.jpg', 4.1, 28, 3),
    ('Produto 19', 84.99, 'Descrição do Produto 19', 'produto19.jpg', 4.6, 34, 4),
    ('Produto 20', 39.99, 'Descrição do Produto 20', 'produto20.jpg', 4.3, 31, 5),
    ('Produto 21', 74.99, 'Descrição do Produto 21', 'produto21.jpg', 4.9, 16, 1),
    ('Produto 22', 59.99, 'Descrição do Produto 22', 'produto22.jpg', 4.2, 20, 2),
    ('Produto 23', 29.99, 'Descrição do Produto 23', 'produto23.jpg', 4.8, 17, 3),
    ('Produto 24', 109.99, 'Descrição do Produto 24', 'produto24.jpg', 4.5, 37, 4),
    ('Produto 25', 44.99, 'Descrição do Produto 25', 'produto25.jpg', 4.0, 36, 5),
    ('Produto 26', 94.99, 'Descrição do Produto 26', 'produto26.jpg', 4.7, 14, 1),
    ('Produto 27', 34.99, 'Descrição do Produto 27', 'produto27.jpg', 4.4, 30, 2),
    ('Produto 28', 54.99, 'Descrição do Produto 28', 'produto28.jpg', 4.1, 25, 3),
    ('Produto 29', 79.99, 'Descrição do Produto 29', 'produto29.jpg', 4.6, 22, 4),
    ('Produto 30', 24.99, 'Descrição do Produto 30', 'produto30.jpg', 4.3, 26, 5),
    ('Produto 31', 64.99, 'Descrição do Produto 31', 'produto31.jpg', 4.8, 18, 1),
    ('Produto 32', 89.99, 'Descrição do Produto 32', 'produto32.jpg', 4.2, 23, 2),
    ('Produto 33', 39.99, 'Descrição do Produto 33', 'produto33.jpg', 3.9, 33, 3),
    ('Produto 34', 109.99, 'Descrição do Produto 34', 'produto34.jpg', 4.5, 19, 4),
    ('Produto 35', 49.99, 'Descrição do Produto 35', 'produto35.jpg', 4.0, 28, 5),
    ('Produto 36', 74.99, 'Descrição do Produto 36', 'produto36.jpg', 4.6, 21, 1),
    ('Produto 37', 29.99, 'Descrição do Produto 37', 'produto37.jpg', 4.3, 27, 2),
    ('Produto 38', 84.99, 'Descrição do Produto 38', 'produto38.jpg', 4.7, 24, 3),
    ('Produto 39', 59.99, 'Descrição do Produto 39', 'produto39.jpg', 4.2, 29, 4),
    ('Produto 40', 99.99, 'Descrição do Produto 40', 'produto40.jpg', 4.9, 16, 5),
    ('Produto 41', 44.99, 'Descrição do Produto 41', 'produto41.jpg', 4.4, 35, 1),
    ('Produto 42', 54.99, 'Descrição do Produto 42', 'produto42.jpg', 4.1, 30, 2),
    ('Produto 43', 79.99, 'Descrição do Produto 43', 'produto43.jpg', 4.8, 25, 3),
    ('Produto 44', 99.99, 'Descrição do Produto 44', 'produto44.jpg', 4.5, 20, 4),
    ('Produto 45', 34.99, 'Descrição do Produto 45', 'produto45.jpg', 4.0, 31, 5),
    ('Produto 46', 119.99, 'Descrição do Produto 46', 'produto46.jpg', 4.6, 26, 1),
    ('Produto 47', 69.99, 'Descrição do Produto 47', 'produto47.jpg', 4.2, 22, 2),
    ('Produto 48', 49.99, 'Descrição do Produto 48', 'produto48.jpg', 4.7, 18, 3),
    ('Produto 49', 84.99, 'Descrição do Produto 49', 'produto49.jpg', 4.3, 33, 4),
    ('Produto 50', 29.99, 'Descrição do Produto 50', 'produto50.jpg', 4.9, 15, 5),
    ('Produto 51', 109.99, 'Descrição do Produto 51', 'produto51.jpg', 4.5, 32, 1),
    ('Produto 52', 44.99, 'Descrição do Produto 52', 'produto52.jpg', 4.1, 29, 2),
    ('Produto 53', 59.99, 'Descrição do Produto 53', 'produto53.jpg', 4.6, 24, 3),
    ('Produto 54', 79.99, 'Descrição do Produto 54', 'produto54.jpg', 4.2, 27, 4),
    ('Produto 55', 24.99, 'Descrição do Produto 55', 'produto55.jpg', 4.7, 23, 5),
    ('Produto 56', 94.99, 'Descrição do Produto 56', 'produto56.jpg', 4.3, 19, 1),
    ('Produto 57', 34.99, 'Descrição do Produto 57', 'produto57.jpg', 4.8, 28, 2),
    ('Produto 58', 54.99, 'Descrição do Produto 58', 'produto58.jpg', 4.4, 25, 3),
    ('Produto 59', 69.99, 'Descrição do Produto 59', 'produto59.jpg', 4.0, 30, 4),
    ('Produto 60', 119.99, 'Descrição do Produto 60', 'produto60.jpg', 4.5, 26, 5);