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
                                <p v-for="(alternativa, index) in props.row.alternativas" :key="alternativa.id" :class="alternativa.correta? 'text-color-green' : ''">Alternativa {{index + 1}}: {{ alternativa.descricao }}</p>
                            </template>
                        </el-table-column>
                        <el-table-column label="Pergunta" prop="descricao"></el-table-column>
                        <el-table-column label="Data criação" prop="dataCriacao" width="150px"></el-table-column>
                        <el-table-column label="Data limite" prop="dataLimite" width="150px"></el-table-column>
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
                                    <el-button type="danger" plain style="float: right;" @click="remove(props.row)"><i class="el-icon-delete"></i></el-button>
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
/* Services */
import PerguntaService from "../../../domain/service/PerguntaService";

export default {
    data(){
        return {
            perguntas: [],
        }
    },
    created(){
        this.service = new PerguntaService(this.$resource);
        this.service.findByTeacher({id: 1}).then(response => {
            console.log(response)
            if(response.status == 200){
                this.perguntas = response.body.perguntas
            }
        }).catch( erro => {
            console.log(erro)
        })
    },
    methods:{   
        remove(pergunta){
            console.log(pergunta)
            this.$confirm('Isso fará com que a pergunta seja deletada permanentemente. Continuar?', 'Atenção', {
                confirmButtonText: 'Deletar',
                cancelButtonText: 'Cancelar',
                type: 'warning'
            }).then(() => {
                this.delete(pergunta)
            })
        },
        delete(pergunta){
            this.service = new PerguntaService(this.$resource);
            this.service.delete({}, pergunta.id).then(response => {
                if(response.status == 200){
                    this.$root.success(response.body.message)
                    var index = this.perguntas.indexOf(this.perguntas.filter(d => d.id == pergunta.id));
                    this.perguntas.splice(index, 1)
                }
            }).catch( erro => {
                this.$root.error()
                console.log(erro)
            })
        }
    }
}
</script>

<style>

</style>
