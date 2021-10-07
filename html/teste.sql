create Table usuarios(
    id int not null auto_increment,
    nome varchar(50),
    cpf varchar(15) default null,
    email varchar(100) default null,
    senha varchar(100) default null,
    PRIMARY KEY (id)
);

create table cursos (
    id int not null auto_increment,
    titulo varchar(70) default null,
    descricao varchar(200) default null,
    PRIMARY KEY (id)
    
);

create table logon (
    id int not null auto_increment,
    usuario varchar(100) default null,
    senha varchar(100) default null, 
    primary key (id)
    
);