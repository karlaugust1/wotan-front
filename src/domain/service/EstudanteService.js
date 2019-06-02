const options = {
    insert: {method: 'POST', url: 'estudantes'},
    update: {method: 'PUT', url: 'estudantes'},
    findById: {method: 'GET', url: 'estudantes{/id}'},
    findAll: {method: 'GET', url: 'estudantes'},
    delete: {method: 'DELETE', url: 'estudantes'},
    findStudentsWithNoLink: {method: 'GET', url: 'estudantes-sem-vinculo'},
    findStudentsWithLink: {method: 'GET', url: 'estudantes/disciplina{/id}'},
}

export default class EstudanteService{
    
    constructor( resource ){
        return this._resource = resource('', {}, options);
    }

}