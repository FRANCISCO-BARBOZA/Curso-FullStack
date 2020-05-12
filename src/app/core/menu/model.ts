export class Municipio {
    id: string;
    cep: string;
    cidade: string;
    estado: string;
    pais: string;
    logradouro: string;
    bairro: string;
}
  
export class Endereco {
    id: string;
    numero: string;
    complemento: string;
    municipio = new Municipio();
}
    
export class Empresa {
    id: string;
    idMatriz: string;
    tipo = 'MATRIZ';
    nome: string;
    nomeFantasia: string;
    inscricaoFederal: string;
    inscricaoEstadual: string;
    inscricaoMunicipal: string;
    sigla: string;
    tipoContribuinte = "CONTRIBUINTE";
    cnae: string;
    telefone: string;
    telefoneCelular: string;
    whatsApp: string;
    email: string;
    dataCadastramento: Date;
    observacao: string;
    logotipo: string;
    urlAnexo: string;
    endereco = new Endereco();
}
