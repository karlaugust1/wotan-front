const options = {
    insert: {method: 'POST', url: 'conteudos'},
    update: {method: 'PUT', url: 'conteudos'},
    findById: {method: 'GET', url: 'conteudos{/id}'},
    findAll: {method: 'GET', url: 'conteudos'},
    delete: {method: 'DELETE', url: 'conteudos'},
}

export default class ConteudoService{
    
    constructor( resource ){
        return this._resource = resource('', {}, options);
    }

}