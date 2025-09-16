select * from customer;
select * from orders;

-- Fazendo o inner join
select customers.CustomerID, customers.ContactName, 
       orders.OrderID, orders.OrderDate
from customers inner join orders
on customers.CustomerID = orders.CustomerID;

-- Segundo inner join
select suppliers.SupplierID, suppliers.CompanyName, 
       products.ProductID, products.ProductName
from suppliers inner join products
on suppliers.SupplierID = products.SupplierID;

-- Inner join simplificado
select su.SupplierID, su.CompanyName, 
       pr.ProductID, pr.ProductName
from suppliers as su inner join products as pr
on su.SupplierID = pr.SupplierID; 

-- Relatório com 3 tabelas
select categories.CategoryID, categories.CategoryName,
       su.SupplierID, su.CompanyName, 
       pr.ProductID, pr.ProductName
from suppliers as su inner join products as pr
on su.SupplierID = pr.SupplierID
inner join categories
on categories.CategoryID = pr.CategoryID; 

-- Exercício 1 - Consulta
select employees.EmployeeID, employees.FirstName, employees.LastName,
       orders.CustomerID, orders.OrderDate, orders.ShippedDate, 
       shippers.ShipperID, shippers.CompanyName
from employees inner join orders
on employees.EmployeeID = orders.EmployeeID
inner join shippers
on  shippers.ShipperID = orders.ShipVia;

-- Exercício 1 - Consulta em ordem ascendente
select employees.EmployeeID, employees.FirstName, employees.LastName,
       orders.CustomerID, orders.OrderDate, orders.ShippedDate, 
       shippers.ShipperID, shippers.CompanyName
from employees inner join orders
on employees.EmployeeID = orders.EmployeeID
inner join shippers
on  shippers.ShipperID = orders.ShipVia
order by employees.firstname asc;

-- Exercício 2 - Consulta de clientes que fizeram pedidos
-- Exercício 2 - jeito 1 com inner join
select orders.CustomerID
from orders inner join customers
on orders.CustomerID = customers.CustomerID;

-- Exercício 2 - Jeito 2
select CustomerId, CompanyName, ContactName, Address
from customers;

-- Exercício 3 - Consulta de clientes que nunca fizeram pedidos
select CustomerId, CompanyName, ContactName, Address
from customers
where customerid not in(select CustomerId from orders);

-- Outer join (left e right) todos os clientes que fizeram ou não pedidos
select customers.CustomerID, customers.ContactName, 
       orders.OrderID, orders.OrderDate
from customers left outer join orders
on customers.CustomerID = orders.CustomerID;

-- Outer join (left e right) com filtro
select customers.CustomerID, customers.ContactName, 
       orders.OrderID, orders.OrderDate
from customers left outer join orders
on customers.CustomerID = orders.CustomerID
where OrderID is null;

-- Exercício 3 - Criando uma consulta de categorias que não tem produtos cadastrados
select categories.CategoryID, categories.CategoryName
from categories left outer join products
on categories.CategoryID = products.CategoryID
where products.CategoryID is null;

-- Exercício 3 jeito 2
select categories.CategoryID, categories.CategoryName
from categories
where categories.CategoryID not in(select CategoryID from categories);

-- Exercício 4 - Listando quais funcionários que nunca tiraram pedidos
select employees.FirstName, employees.LastName, employees.EmployeeID
from employees left outer join orders
on employees.EmployeeID = orders.EmployeeID
where employees.EmployeeID is null;

-- Exercício 4 jeito 2
select employees.FirstName, employees.LastName, employees.EmployeeID
from employees
where EmployeeID not in(select EmployeeID from employees);
