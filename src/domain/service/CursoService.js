const options = {
    insert: {method: 'POST', url: 'cursos'},
    update: {method: 'PUT', url: 'cursos'},
    findById: {method: 'GET', url: 'cursos{/id}'},
    findAll: {method: 'GET', url: 'cursos'},
    delete: {method: 'DELETE', url: 'cursos'},
}

export default class CursoService{
    
    constructor( resource ){
        return this._resource = resource('', {}, options);
    }

}