<template>
    <el-row class="padding-15 main-container">
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item>Início</el-breadcrumb-item>
                        <el-breadcrumb-item>Coordenador</el-breadcrumb-item>
                        <el-breadcrumb-item>Cursos</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <div class="content-container">
                <el-row class="content-header">
                    <h1>Cursos</h1>
                </el-row>
                <el-row class="content-main">
                    <h3>Visualize aqui os cursos cadastrados no sistema
                        <router-link :to="{ name: 'CursosCadastro'}"><el-button style="float: right;">Cadastrar curso</el-button></router-link>
                    </h3>
                     <el-table
                        :data="cursos"
                        empty-text="Sem cursos, até o momento :'("
                        style="width: 100%">
                        <el-table-column label="Nome" prop="nome"></el-table-column>
                        <el-table-column width="68px">
                            <template slot-scope="props" >
                                <router-link :to="{ name: 'CursosEdicao', params:{ id: props.row.id }}">
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
import CursoService from "../../../domain/service/CursoService";

export default {
    data(){
        return {
            cursos: []
        }
    },
    created(){
        this.service = new CursoService(this.$resource);
        this.service.findAll().then(response => {
            console.log(response)
            if(response.status == 200){
                this.cursos = response.body.cursos
            }
        }).catch( erro => {
            console.log(erro)
        })  
    },
    methods:{   
        remove(curso){
            console.log(curso)
            this.$confirm('Isso fará com que o curso seja deletado permanentemente. Continuar?', 'Atenção', {
                confirmButtonText: 'Deletar',
                cancelButtonText: 'Cancelar',
                type: 'warning'
            }).then(() => {
                this.delete(curso)
            })
        },
        delete(curso){
            this.service = new CursoService(this.$resource);
            this.service.delete({}, curso).then(response => {
                if(response.status == 200){
                    this.$root.success(response.body.message)
                    var index = this.cursos.indexOf(this.cursos.filter(c => c.id == curso.id));
                    this.cursos.splice(index, 1)
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
