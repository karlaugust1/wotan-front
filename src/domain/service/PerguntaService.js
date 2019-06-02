const options = {
    insert: {method: 'POST', url: 'perguntas'},
    update: {method: 'PUT', url: 'perguntas'},
    findById: {method: 'GET', url: 'perguntas{/id}'},
    findAll: {method: 'GET', url: 'perguntas'},
    delete: {method: 'DELETE', url: 'perguntas'},
    findByTeacher: {method: 'GET', url: 'perguntas/professor{/id}'},
}

export default class PerguntaService{
    
    constructor( resource ){
        return this._resource = resource('', {}, options);
    }

}