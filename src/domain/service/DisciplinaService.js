const options = {
    insert: {method: 'POST', url: 'disciplinas'},
    update: {method: 'PUT', url: 'disciplinas'},
    findById: {method: 'GET', url: 'disciplinas{/id}'},
    findAll: {method: 'GET', url: 'disciplinas'},
    delete: {method: 'DELETE', url: 'disciplinas'},
    vincularEstudantes: {method: 'POST', url: 'disciplinas/{id}/vincular-estudantes'},    
    vincularProfessores: {method: 'POST', url: 'disciplinas/{id}/vincular-professores'},    
}

export default class DisciplinaService{
    
    constructor( resource ){
        return this._resource = resource('', {}, options);
    }

}