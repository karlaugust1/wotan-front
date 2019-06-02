export default class Curso{

    constructor( id = '', descricao = '', dataCriacao = '', dataLimite = '', valor = '', ativa = '', visivel = '', idConteudo = '', titulo = '', alternativas = [], historicoPerguntas = [] ){
        this.id = id;
        this.descricao = descricao;
        this.dataCriacao = dataCriacao;
        this.dataLimite = dataLimite;
        this.valor = valor;
        this.ativa = ativa;
        this.visivel = visivel;
        this.idConteudo = idConteudo;
        this.titulo = titulo;
        this.alternativas = alternativas;
        this.historicoPerguntas = historicoPerguntas;
    }
    
}