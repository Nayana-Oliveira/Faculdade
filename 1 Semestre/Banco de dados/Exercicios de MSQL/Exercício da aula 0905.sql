select * from customers;
select * from orders;
select * from `order details`;
select * from products;

select * from shippers;
delete from shippers where shipperid = 5;

-- inserindo registro na tabela de shippers --
insert into shippers (companyName, phone) values ("Correios","114002-8922"),
("Banco Caixa TEM","11376589556"),
("Mercado Livre","3497249725");

select * from suppliers;

select * from categories;

-- Inserindo registro na tabela de products --
insert into products (ProductName, SupplierId, CategoryId, QuantityPerUnit, unitprice, unitsinstock, unitsOnOrder, reorderLevel, Discontinued)
values ("Guarana Antartica", 2, 3, "duzia", 25.99, 100, 10, 0, true);

update products set productName = 'Guarana Dolly' where productid = 78;
update products set unitprice = '19.90' where productid = 78;

select customerid, companyName, Address from customers
-- Altera o nome em ingles para portugues --
select customerid as CodigoCliente, companyName as 'Nome  de Empresa', address as Endereço from customers

select productid, productname, unitprice, unitsinstock, categoryId from products where unitprice > 10 and unitsinStock >20 and categoryid = 2

select productid, productName, unitprice, unitsinstock from products
order by unitprice desc;

-- Mostra maior e menor e soma--
select min(unitprice) as menorpreco,
 max(unitprice) as maiorvalor,
 sum(unitprice) as somatoria,
 avg(unitprice) as mediavalor,
 count(productid) as QTDProdutos -- Quantidade de linha de produto (QTD)--
 from products;
 
 select productid, productname, unitprice from products where unitprice = (select min(unitprice) from products);
 
 select categoryId as CodigoCategoria,
 count(productId) as QTDProds
 from products
 group by categoryId;
 
 select customerid as codigoCliente, count(orderId) as qtdpedidos
 from orders
 group by customerid;

select employeeid, count(orderid) as qtdPedidos
from orders
group by employeeid
order by qtdPedidos asc;

select * from customers;

select *
from customers
where contactName like "Ana %";
