<template>
    <el-row class="padding-15 main-container">
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item>Início</el-breadcrumb-item>
                        <el-breadcrumb-item>Estudante</el-breadcrumb-item>
                        <el-breadcrumb-item>Estudantes</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <div class="content-container">
                <el-row class="content-header">
                    <h1>Estudantes</h1>
                </el-row>
                <el-row class="content-main">
                    <h3>Visualize aqui os estudantes cadastrados no sistema
                        <router-link :to="{ name: 'EstudantesCadastro'}"><el-button style="float: right;">Cadastrar estudante</el-button></router-link>
                    </h3>
                     <el-table
                        :data="estudantes"
                        empty-text="Sem estudantes :'("
                        style="width: 100%">
                        <el-table-column type="expand">
                            <template slot-scope="props">
                                <p><strong>Disciplinas vinculadas</strong></p>
                                <p v-for="disciplina in props.row.disciplinas" :key="disciplina">Disciplina: {{ disciplina.descricao }}</p>
                            </template>
                        </el-table-column>
                        <el-table-column label="Matricula" prop="matricula"></el-table-column>
                        <el-table-column label="Nome" prop="nome"></el-table-column>
                        <el-table-column label="Data matricula" prop="dataMatricula"></el-table-column>
                        <el-table-column width="68px">
                            <template slot-scope="props" >
                                <router-link :to="{ name: 'EstudantesEdicao', params:{ id: props.row.id }}">
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
import EstudanteService from '../../../domain/service/EstudanteService';

export default {
    data(){
        return {
            estudantes: []
        }
    },
    created(){
        this.service = new EstudanteService(this.$resource);
        this.service.findAll().then(response => {
            console.log(response)
            if(response.status == 200){
                this.estudantes = response.body.estudantes
            }
        }).catch( erro => {
            console.log(erro)
        })  
    },
    methods:{   
        remove(estudante){
            estudante.dataMatricula = new Date()
            estudante.dataNascimento = new Date()
            this.$confirm('Isso fará com que o estudante seja deletado permanentemente. Continuar?', 'Atenção', {
                confirmButtonText: 'Deletar',
                cancelButtonText: 'Cancelar',
                type: 'warning'
            }).then(() => {
                this.delete(estudante)
            })
        },
        delete(estudante){
            this.service = new EstudanteService(this.$resource);
            this.service.delete({}, estudante).then(response => {
                if(response.status == 200){
                    this.$root.success(response.body.message)
                    var index = this.estudantes.indexOf(this.estudantes.filter(e => e.id == estudante.id));
                    this.estudantes.splice(index, 1)
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
