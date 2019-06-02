<template>
    <el-row class="padding-15 main-container">
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item>Início</el-breadcrumb-item>
                        <el-breadcrumb-item>Coordenador</el-breadcrumb-item>
                        <el-breadcrumb-item>Cursos</el-breadcrumb-item>
                        <el-breadcrumb-item>Cadastro/Edição</el-breadcrumb-item>
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
                    <el-row>
                        <h3>Cadastre aqui um curso que será ministrado por professores</h3>
                    </el-row>
                    <el-row span="24">
                        <label>Nome</label>
                        <el-input placeholder="Digite aqui o nome do curso"  v-model="curso.nome"></el-input>
                    </el-row>
                    <el-row>
                        <router-link :to="{ name: 'Cursos'}">
                            <el-button type="info" plain>Cancelar</el-button>
                        </router-link>
                        <el-button type="success" plain @click="save(curso)">Salvar</el-button>
                    </el-row> 
                </el-row>
            </div>
        </el-row>
    </el-row>
</template>

<script>
/* Services */
import CursoService from "../../../domain/service/CursoService";
/* Models */
import Curso from "../../../domain/model/Curso";

export default {
    data(){
        return{
            curso: new Curso()
        }
    },
    created() {
        if(this.$route.params.id){
            this.findById(this.$route.params.id)
        }
    },
    methods:{
        save(curso){
            this.service = new CursoService(this.$resource);
            if( curso.id ){
                this.service.update({}, curso).then(response => {
                    if(response.status == 200){
                        this.$root.success(response.body.message)
                        this.curso = new Curso()
                    } else {
                        this.$root.error(response.body.message)
                    }
                }).catch( erro => {
                    this.$root.error()
                    console.log(erro)
                })
            }else{
                this.service.insert({}, curso).then(response => {
                    if(response.status == 200){
                        this.$root.success(response.body.message)
                        this.curso = new Curso()
                    } else {
                        this.$root.error(response.body.message)
                    }
                }).catch( erro => {
                    this.$root.error()
                    console.log(erro)
                })
            }
        },
        findById(id){
            this.service = new CursoService(this.$resource);
            this.service.findById({id: id}).then(response => {
                console.log(response)
                if(response.status == 200){
                    this.curso = response.body.curso
                } else {
                    this.$root.error(response.body.message)
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
