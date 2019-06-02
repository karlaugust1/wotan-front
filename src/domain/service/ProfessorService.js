const options = {
    insert: {method: 'POST', url: 'professores'},
    update: {method: 'PUT', url: 'professores'},
    findById: {method: 'GET', url: 'professores{/id}'},
    findAll: {method: 'GET', url: 'professores'},
    delete: {method: 'DELETE', url: 'professores'},
    findTeachersWithNoLink: {method: 'GET', url: 'professores-sem-vinculo'},
    findTeachersWithLink: {method: 'GET', url: 'professores/disciplina{/id}'},
}

export default class CursoService{
    
    constructor( resource ){
        return this._resource = resource('', {}, options);
    }

}