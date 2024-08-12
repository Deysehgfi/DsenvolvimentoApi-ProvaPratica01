import conn from "../config/conn.js"

const tableEventos = `
    CREATE TABLE IF NOT EXISTS eventos (
        id_eventos varchar(60) primary key not null,
        nome varchar(255) not null,
        local varchar(255) not null,
        dia datetime not null,
        palestrante_id varchar(60) not null,
        foreign key (palestrante_id) references palestrantes(id_palestrante)
    );
`
conn.query(tableEventos, (err) => {
    if (err) {
        console.error("error ao criar a tabela eventos")
        return;
    }
    console.log("Tabela [ eventos ] criada com sucesso")
})