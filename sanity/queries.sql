CREATE TABLE hackathon_cart (
id SERIAL PRIMARY KEY,
user_id VARCHAR(255) NOT NULL,
product_id VARCHAR(255) NOT NULL,
product_title VARCHAR(255) NOT NULL,
product_price INT NOT NULL,
product_quantity INT NOT NULL,
image_url TEXT NOT NULL
)

ALTER TABLE hackathon_cart 
ADD CONSTRAINT UNIQUENESS UNIQUE(
    product_title
)