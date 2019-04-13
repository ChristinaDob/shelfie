drop table if exists products;

create table products (
  id serial primary key,
  name varchar(25),
  price integer,
  img text
);


-- testing

select * from products;

insert into products
( name, price, img )
values 
( 'shoe', 250, 'https://images-na.ssl-images-amazon.com/images/I/717fKjcQfaL._UY695_.jpg');

-- http://madheel.com/wp-content/uploads/2016/12/Black-High-Heels-For-Women-hmjuumyrjos.jpg
-- https://img.buzzfeed.com/buzzfeed-static/static/2018-08/22/15/asset/buzzfeed-prod-web-05/sub-buzz-12850-1534967801-25.png

-- https://assets.vogue.com/photos/5891130b85b395961847196e/1:1/w_640,h_640,c_limit/summer-high-heels-33.jpg


select * from products;