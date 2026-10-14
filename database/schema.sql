create table productos (
id_productos serial primary key,
codigo varchar(20) unique not null,
nombre varchar(100) not null,
descripcion text,
categoria varchar(50) not null,
marca varchar(50) not null,
precio numeric(10,2) not null,
stock int not null,
estado bool not null,
fecha_creacion timestamp default now() not null
);
