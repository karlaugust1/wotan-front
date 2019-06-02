<template>
     <el-row class="padding-15 main-container">
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item>Início</el-breadcrumb-item>
                        <el-breadcrumb-item>Estudante</el-breadcrumb-item>
                        <el-breadcrumb-item>Estudantes</el-breadcrumb-item>
                        <el-breadcrumb-item>Cadastro/Edição</el-breadcrumb-item>
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
                    <el-row>
                        <h3>Cadastre aqui um estudante no sistema</h3>
                    </el-row>
                    <el-row span="24">
                        <label>Nome</label>
                        <el-input placeholder="Digite aqui o nome do estudante"  v-model="estudante.nome"></el-input>
                    </el-row>
                    <el-row type="flex" class="row-bg" :gutter="20">
                        <el-col :span="4">
                            <label style="display: block;">RG</label>
                            <el-input type="number" placeholder="Digite aqui o RG do estudante"  v-model="estudante.rg"></el-input>
                        </el-col>   
                        <el-col :span="4">
                            <label style="display: block;">CPF</label>
                            <el-input type="number" placeholder="Digite aqui o CPF do estudante"  v-model="estudante.cpf"></el-input>
                        </el-col>
                        <el-col :span="4">
                            <label style="display: block;">Data de nascimento</label>
                            <el-date-picker v-model="estudante.dataNascimento" type="date" placeholder="Escolha uma data" format="dd/MM/yyyy" >
                            </el-date-picker>
                        </el-col>
                        <el-col :span="4">
                            <label style="display: block;">Matrícula</label>
                            <el-input placeholder="Digite aqui a matrícula do estudante"  v-model="estudante.matricula   "></el-input>
                        </el-col>
                        <el-col :span="4">
                            <label style="display: block;">Data de matrícula</label>
                            <el-date-picker v-model="estudante.dataMatricula" type="date" placeholder="Escolha uma data" format="dd/MM/yyyy" >
                            </el-date-picker>
                        </el-col>
                    </el-row> 
                    <el-row>
                        <router-link :to="{ name: 'Estudantes'}">
                            <el-button type="info" plain>Cancelar</el-button>
                        </router-link>
                        <el-button type="success" plain @click="save(estudante)">Salvar</el-button>
                    </el-row>   
                </el-row>
            </div>
        </el-row>
    </el-row>
</template>

<script>
/* Services */
import EstudanteService from "../../../domain/service/EstudanteService";
/* Models */
import Estudante from "../../../domain/model/Estudante";

export default {
    data(){
        return{
            estudante: new Estudante(),
        }
    },
    created() {
        if(this.$route.params.id){
            this.findById(this.$route.params.id)
        }
    },
    methods:{
        save(estudante){
            console.log(estudante)
            this.service = new EstudanteService(this.$resource);
            if( estudante.id ){
                this.service.update({}, estudante).then(response => {
                    if(response.status == 200){
                        this.$root.success(response.body.message)
                        this.estudante = new Estudante()
                    } else {
                        this.$root.error(response.body.message)
                    }
                }).catch( erro => {
                    this.$root.error()
                    console.log(erro)
                })
            }else{
                console.log('top')
                this.service.insert({}, estudante).then(response => {
                    if(response.status == 200){
                        this.$root.success(response.body.message)
                        this.estudante = new Estudante()
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
            this.service = new EstudanteService(this.$resource);
            this.service.findById({id: id}).then(response => {
                console.log(response)
                if(response.status == 200){
                    this.estudante = response.body.estudante
                } else {
                    this.$root.error(response.body.message)
                }
            }).catch( erro => {
                this.$root.error()
                console.log(erro)
            })
        },
    }
}
</script>

<style>

</style>
