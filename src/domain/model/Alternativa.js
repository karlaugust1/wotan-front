export default class Alternativa{

    constructor( id = '', descricao = '', correta = false, idPergunta = '' ){
        this.id = id;
        this.descricao = descricao;
        this.correta = correta;
        this.idPergunta = idPergunta;
    }

}