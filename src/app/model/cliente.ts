

export class Cliente {

    id!: number;
    nome!: string;
    rg!: string;
    orgEmissor!: string;
    dtEmissao!: Date;
    cpfcnpj!: string;
    //corrigir
    dtNasc!: Date;
    telefone!: string;
    celular!: String;
    email!: string;
    //tratar senha posteriormente
    senha!: string;

    //Dados de endereço
    CEP!: String;
    logradouro!: string;
    numero!: string;
    complemento!: string;
    bairro!: string;
    cidade!: string;
    UF!: string;
    
    //Adicionar posterior: relação de classes

    
}