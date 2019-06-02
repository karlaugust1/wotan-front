var notifications = {
    methods: {
        info(message) {
          this.$message(message);
        },
        success(message) {
            this.$message({
                dangerouslyUseHTMLString: true,
                message: '<strong>Sucesso! </strong>' + message,
                type: 'success'
            });
        },
        warning(message) {
            if(typeof message == undefined){
                message = 'Aconteceu um erro interno no sistema!'
            }
            this.$message({
                dangerouslyUseHTMLString: true,
                message: '<strong>Atenção! </strong>' + message,
                type: 'warning'
            });
        },
        error(message) {
            if(typeof message == undefined){
                message = 'Aconteceu um erro interno no sistema!'
            }
            this.$message({
                dangerouslyUseHTMLString: true,
                message: '<strong>Erro! </strong>' + message,
                type: 'error'
            });
        }
    },
}

export default notifications;