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
                        <el-breadcrumb-item>Cadastro/Edição</el-breadcrumb-item>
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
                    <el-row>
                        <h3>Cadastre aqui uma disciplinas que será vinculada à um curso</h3>
                    </el-row>
                    <el-row span="24">
                        <label>Nome</label>
                        <el-input placeholder="Digite aqui o nome do curso"  v-model="disciplina.descricao"></el-input>
                    </el-row>
                    <el-row class="row-bg">
                        <label style="display: block;">Curso</label>
                        <el-select v-model="disciplina.idCurso" placeholder="Curso">
                            <el-option v-for="curso in cursos" :key="curso.id" :value="curso.id" :label="curso.nome">{{curso.nome}}</el-option>
                        </el-select>
                    </el-row>
                    <el-row>
                        <router-link :to="{ name: 'Disciplinas'}">
                            <el-button type="info" plain>Cancelar</el-button>
                        </router-link>
                        <el-button type="success" plain @click="save(disciplina)">Salvar</el-button>
                    </el-row> 
                </el-row>
            </div>
        </el-row>
    </el-row>
</template>

<script>
/* Services */
import DisciplinaService from "../../../../domain/service/DisciplinaService";
import CursoService from "../../../../domain/service/CursoService";
/* Models */
import Disciplina from "../../../../domain/model/Disciplina";

export default {
    data(){
        return{
            disciplina: new Disciplina(),
            cursos: []
        }
    },
    created() {
        this.findCourses()
        if(this.$route.params.id){
            this.findById(this.$route.params.id)
        }
    },
    methods:{
        save(disciplina){
            this.service = new DisciplinaService(this.$resource);
            if( disciplina.id ){
                this.service.update({}, disciplina).then(response => {
                    if(response.status == 200){
                        this.$root.success(response.body.message)
                        this.disciplina = new Disciplina()
                    } else {
                        this.$root.error(response.body.message)
                    }
                }).catch( erro => {
                    this.$root.error()
                    console.log(erro)
                })
            }else{
                this.service.insert({}, disciplina).then(response => {
                    if(response.status == 200){
                        this.$root.success(response.body.message)
                        this.disciplina = new Disciplina()
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
            this.service = new DisciplinaService(this.$resource);
            this.service.findById({id: id}).then(response => {
                console.log(response)
                if(response.status == 200){
                    this.disciplina = response.body.disciplina
                } else {
                    this.$root.error(response.body.message)
                }
            }).catch( erro => {
                this.$root.error()
                console.log(erro)
            })
        },
        findCourses(){
            this.service = new CursoService(this.$resource);
            this.service.findAll().then(response => {
                if(response.status == 200){
                    this.cursos = response.body.cursos
                }
            }).catch( erro => {
                console.log(erro)
            })   
        }
    }
}
</script>

<style>

</style>
