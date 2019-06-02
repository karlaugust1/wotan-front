<template>
    <el-row class="padding-15 main-container">
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item>Início</el-breadcrumb-item>
                        <el-breadcrumb-item>Professor</el-breadcrumb-item>
                        <el-breadcrumb-item>Conteúdos</el-breadcrumb-item>
                        <el-breadcrumb-item>Cadastro/Edição</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <div class="content-container">
                <el-row class="content-header">
                    <h1>Conteúdos</h1>
                </el-row>
                <el-row class="content-main">
                    <el-row>
                        <h3>Cadastre aqui os conteúdos que serão ensinados em sala</h3>
                    </el-row>
                    <el-row span="24">
                        <label>Título</label>
                        <el-input placeholder="Digite aqui o título do conteúdo"  v-model="conteudo.titulo"></el-input>
                    </el-row>
                    <el-row span="24">
                        <label>Descrição</label>
                        <el-input type="textarea" :rows="5" placeholder="Digite aqui a descrição do conteúdo"  v-model="conteudo.descricao"></el-input>
                    </el-row>
                    <el-row type="flex" class="row-bg" :gutter="20">
                        <el-col :span="6">
                            <label style="display: block;">Disciplina</label>
                            <el-select v-model="conteudo.idDisciplina" placeholder="Curso">
                                <el-option v-for="disciplina in disciplinas" :key="disciplina.id" :value="disciplina.id" :label="disciplina.descricao">{{disciplina.descricao}}</el-option>
                            </el-select>
                        </el-col>
                        <el-col :span="6">
                            <label style="display: block;">Bimestre</label>
                            <el-select v-model="conteudo.bimestre" placeholder="Disciplina">
                                <el-option :value="1">1</el-option>
                                <el-option :value="2">2</el-option>
                            </el-select>
                        </el-col>
                    </el-row> 
                    <el-row>
                        <router-link :to="{ name: 'Conteudos'}">
                            <el-button type="info" plain>Cancelar</el-button>
                        </router-link>
                        <el-button type="success" plain @click="save(conteudo)">Salvar</el-button>
                    </el-row>   
                </el-row>
            </div>
        </el-row>
    </el-row>
</template>

<script>
/* Services */
import ConteudoService from "../../../domain/service/ConteudoService";
import DisciplinaService from "../../../domain/service/DisciplinaService";
/* Models */
import Conteudo from "../../../domain/model/Conteudo";

export default {
    data(){
        return{
            conteudo: new Conteudo(),
            disciplinas: [],
        }
    },
    created() {
        this.findDisciplinas()
        if(this.$route.params.id){
            this.findById(this.$route.params.id)
        }
    },
    methods:{
        save(conteudo){
            this.service = new ConteudoService(this.$resource);
            this.conteudo.idProfessor = 1 //MUDAR PARA ACEITAR O LOGIN
            if( conteudo.id ){
                this.service.update({}, conteudo).then(response => {
                    if(response.status == 200){
                        this.$root.success(response.body.message)
                        this.conteudo = new Conteudo()
                    } else {
                        this.$root.error(response.body.message)
                    }
                }).catch( erro => {
                    this.$root.error()
                    console.log(erro)
                })
            }else{
                this.service.insert({}, conteudo).then(response => {
                    if(response.status == 200){
                        this.$root.success(response.body.message)
                        this.conteudo = new Conteudo()
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
            this.service = new ConteudoService(this.$resource);
            this.service.findById({id: id}).then(response => {
                console.log(response)
                if(response.status == 200){
                    this.conteudo = response.body.conteudo
                } else {
                    this.$root.error(response.body.message)
                }
            }).catch( erro => {
                this.$root.error()
                console.log(erro)
            })
        },
        findDisciplinas(){
            this.service = new DisciplinaService(this.$resource);
            this.service.findAll().then(response => {
                if(response.status == 200){
                    this.disciplinas = response.body.disciplinas
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
