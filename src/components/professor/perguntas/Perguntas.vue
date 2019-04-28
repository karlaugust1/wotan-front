<template>
    <el-row class="padding-15 main-container">
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item>Início</el-breadcrumb-item>
                        <el-breadcrumb-item>Professor</el-breadcrumb-item>
                        <el-breadcrumb-item>Perguntas</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <div class="content-container">
                <el-row class="content-header">
                    <h1>Perguntas</h1>
                </el-row>
                <el-row class="content-main">
                    <h3>Visualize aqui as perguntas que estão disponíveis para seus alunos
                        <router-link :to="{ name: 'PerguntasCadastro'}"><el-button style="float: right;">Cadastrar pergunta</el-button></router-link>
                    </h3>
                     <el-table
                        :data="perguntas"
                        empty-text="Sem perguntas"
                        style="width: 100%">
                        <el-table-column type="expand">
                            <template slot-scope="props">
                                <p>Alternativa 1: {{ props.row.alternativa1 }}</p>
                                <p>Alternativa 2: {{ props.row.alternativa2 }}</p>
                                <p>Alternativa 3: {{ props.row.alternativa3 }}</p>
                                <p>Alternativa 4: {{ props.row.alternativa4 }}</p>
                            </template>
                        </el-table-column>
                        <el-table-column label="Pergunta" prop="pergunta"></el-table-column>
                        <el-table-column label="Data" prop="data" width="150px"></el-table-column>
                        <el-table-column width="68px">
                            <template slot-scope="props" >
                                <router-link :to="{ name: 'PerguntasEdicao', params:{ id: props.row.id }}">
                                    <el-tooltip class="item" effect="dark" content="Editar" placement="top">
                                            <el-button style="float: right;"><i class="el-icon-edit"></i></el-button>
                                    </el-tooltip>
                                </router-link>
                            </template>
                        </el-table-column>
                        <el-table-column width="68px">
                            <template slot-scope="props" >
                                <el-tooltip class="item" effect="dark" content="Excluir" placement="top">
                                    <el-button type="danger" plain style="float: right;" @click="removerPergunta(props.row.id)"><i class="el-icon-delete"></i></el-button>
                                </el-tooltip>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-row>
            </div>
        </el-row>
    </el-row>
</template>

<script>
export default {
    data() {
      return {
        perguntas: [{
          id: 1,
          pergunta: 'Como faz para utilizar um cabo de rede para invocar o capeta?',
          data: '2016-05-03',
          alternativa1: 'Procure no Google',
          alternativa2: 'Procure no Reddit',
          alternativa3: 'Procure no Bing',
          alternativa4: 'Chama o Gouvea',
        }, {
          id: 2,
          pergunta: 'Se eu cortar meu pau, cresce outro no mesmo lugar?',
          data: '2016-05-03',
          alternativa1: 'Sim',
          alternativa2: 'Não',
          alternativa3: 'Talvez',
          alternativa4: 'Todas as alternativas',
        }]
      }
    },
    methods:{
        removerPergunta(id){
            var index = this.perguntas.indexOf(this.perguntas.filter(p => p.id == id));
            this.perguntas.splice(index, 1)
        }
    }
}
</script>

<style>

</style>
