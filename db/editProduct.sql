update products
set name = $1, price = $2, image_url = $3
where id = $4 returning *;