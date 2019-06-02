<template>
    <el-row class="padding-15 main-container">
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item>Início</el-breadcrumb-item>
                        <el-breadcrumb-item>Coordenador</el-breadcrumb-item>
                        <el-breadcrumb-item>Disciplinas</el-breadcrumb-item>
                        <el-breadcrumb-item>Disciplinas</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <div class="content-container">
                <el-row class="content-header">
                    <h1>Disciplinas</h1>
                </el-row>
                <el-row class="content-main">
                    <h3>Visualize aqui as disciplinas cadastrados no sistema
                        <router-link :to="{ name: 'DisciplinasCadastro'}"><el-button style="float: right;">Cadastrar disciplina</el-button></router-link>
                    </h3>
                    <el-table
                        :data="disciplinas"
                        empty-text="Sem disciplinas :'("
                        style="width: 100%">
                        <el-table-column label="Nome" prop="descricao"></el-table-column>
                        <el-table-column label="Curso" prop="curso"></el-table-column>
                        <el-table-column width="68px">
                            <template slot-scope="props" >
                                <router-link :to="{ name: 'DisciplinasEdicao', params:{ id: props.row.id }}">
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
import DisciplinaService from "../../../../domain/service/DisciplinaService";

export default {
    data(){
        return {
            disciplinas: []
        }
    },
    created(){
        this.service = new DisciplinaService(this.$resource);
        this.service.findAll().then(response => {
            console.log(response)
            if(response.status == 200){
                this.disciplinas = response.body.disciplinas
            }
        }).catch( erro => {
            console.log(erro)
        })
    },
    methods:{   
        remove(disciplina){
            console.log(disciplina)
            this.$confirm('Isso fará com que a disciplina seja deletada permanentemente. Continuar?', 'Atenção', {
                confirmButtonText: 'Deletar',
                cancelButtonText: 'Cancelar',
                type: 'warning'
            }).then(() => {
                this.delete(disciplina)
            })
        },
        delete(disciplina){
            this.service = new DisciplinaService(this.$resource);
            this.service.delete({}, disciplina).then(response => {
                if(response.status == 200){
                    this.$root.success(response.body.message)
                    var index = this.disciplinas.indexOf(this.disciplinas.filter(d => d.id == disciplina.id));
                    this.disciplinas.splice(index, 1)
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
