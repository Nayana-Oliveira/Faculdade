create database loja;
use loja;

create table clientes
(
CodigoCliente int primary key,
Nome varchar(50),
Logradouro varchar(50),
Numero varchar(8),
Bairro varchar (50),
CEP char(8),
Cidade varchar(20),
UF char(2),
CNPJ char(14),
IE varchar(20)
);

create table Produtos 
(
CodigoProduto int primary key,
Nome varchar(50),
PrecoUnitario decimal(10,4),
QuantidadeEstoque integer
);

create table Vendedores 
(
CodigoVendedor int primary key,
Nome varchar(50),
SalarioFixo decimal (10,4)
);

create table pedidos
(
CodigoPedido int primary key,
DataPedido timestamp,
DataEntrega datetime,
CodigoVendedor int,
CodigoCliente int,
constraint fk1 foreign key(CodigoVendedor) references vendedores(CodigoVendedor), 
constraint fk2 foreign key(CodigoCliente) references clientes(CodigoCliente)
);

use loja;
create table ItemPedidos
(
CodigoProduto int,
CodigoPedido int,
Quantidade int,
constraint fk3 foreign key(CodigoProduto) references produtos(CodigoProduto),
constraint fk4 foreign key(CodigoPedido) references pedidos(CodigoPedido),
constraint pk10 primary key(CodigoProduto, CodigoPedido)
);

-- adicionando colunas e o tipo de dados
alter table produtos add column statusprod bit;
alter table clientes add column datanasc datetime;

-- alterando tipo de dados
alter table clientes modify nome varchar(100);

-- altera o tipo de dados
alter table produtos modify CodigoProduto bigint;
alter table ItemPedidos modify CodigoProduto bigint;

-- apaga o relacionamento
alter table ItemPedidos drop constraint fk3;

-- religando a chave estrangeira fk3 novamente
alter table ItemPedidos add constraint fk3
foreign key(CodigoProduto) references produtos(CodigoProduto);

-- alterando o nome do cliente
alter table clientes change nome NomeCliente varchar(100);
alter table produtos change nome NomeProduto varchar(100);

-- apagando uma campo
alter table produtos drop column statusprod;

-- adicionar chave primaria fora da tabela
alter table clientes add constraint pk100 primary key(CodigoCliente);

-- criando chave primaria composta com dois atributos fora da tabela
alter table ItemPedido add constraint pk22 primary key(CodigoProduto, CodigoPedido);

-- apagar a database toda
drop database loja

-- apagar cada tabela (primeiro as que recebem a chave e depois a que tem chave)
drop table ItemPedidos;
drop table pedidos;
drop table clientes;
drop table produtos;
drop table vendedores;
