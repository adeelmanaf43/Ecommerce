CREATE TABLE hackathon_cart (
id SERIAL PRIMARY KEY,
product_id varchar(255) NOT NULL,
user_id varchar(255) NOT NULL,
product_title varchar(255) NOT NULL,
product_price int NOT NULL,
product_quantity int NOT NULL,
total_price int NOT NULL,
image_url text NOT NULL
)

ALTER TABLE hackathon_cart 
ADD CONSTRAINT UNIQQE UNIQUE(
    user_id, product_title
)