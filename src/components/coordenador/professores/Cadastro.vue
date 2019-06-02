<template>
    <el-row class="padding-15 main-container">
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item>Início</el-breadcrumb-item>
                        <el-breadcrumb-item>Coordenador</el-breadcrumb-item>
                        <el-breadcrumb-item>Professores</el-breadcrumb-item>
                        <el-breadcrumb-item>Cadastro/Edição</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <div class="content-container">
                <el-row class="content-header">
                    <h1>Professores</h1>
                </el-row>
                <el-row class="content-main">
                    <el-row>
                        <h3>Cadastre aqui um professor que ministrará as aulas</h3>
                    </el-row>
                    <el-row span="24">
                        <label>Nome</label>
                        <el-input placeholder="Digite aqui o nome do professor"  v-model="professor.nome"></el-input>
                    </el-row>
                    <el-row type="flex" class="row-bg" :gutter="20">
                        <el-col :span="6">
                            <label style="display: block;">RG</label>
                            <el-input type="number" placeholder="Digite aqui o RG do professor"  v-model="professor.rg"></el-input>
                        </el-col>
                        <el-col :span="6">
                            <label style="display: block;">CPF</label>
                            <el-input type="number" placeholder="Digite aqui o CPF do professor"  v-model="professor.cpf"></el-input>
                        </el-col>
                        <el-col :span="6">
                            <label style="display: block;">Data de nascimento</label>
                            <el-date-picker v-model="professor.dataNascimento" type="date" placeholder="Escolha uma data" format="dd/MM/yyyy" >
                            </el-date-picker>
                        </el-col>
                    </el-row> 
                    <el-row>
                        <router-link :to="{ name: 'Professores'}">
                            <el-button type="info" plain>Cancelar</el-button>
                        </router-link>
                        <el-button type="success" plain @click="save(professor)">Salvar</el-button>
                    </el-row>   
                </el-row>
            </div>
        </el-row>
    </el-row>
</template>

<script>
/* Services */
import ProfessorService from "../../../domain/service/ProfessorService";
/* Models */
import Professor from "../../../domain/model/Professor";

export default {
    data(){
        return{
            professor: new Professor(),
        }
    },
    created() {
        if(this.$route.params.id){
            this.findById(this.$route.params.id)
        }
    },
    methods:{
        save(professor){
            console.log(professor)
            this.service = new ProfessorService(this.$resource);
            if( professor.id ){
                this.service.update({}, professor).then(response => {
                    if(response.status == 200){
                        this.$root.success(response.body.message)
                        this.professor = new Professor()
                    } else {
                        this.$root.error(response.body.message)
                    }
                }).catch( erro => {
                    this.$root.error()
                    console.log(erro)
                })
            }else{
                this.service.insert({}, professor).then(response => {
                    console.log(response)
                    if(response.status == 200){
                        this.$root.success(response.body.message)
                        this.professor = new Professor()
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
            this.service = new ProfessorService(this.$resource);
            this.service.findById({id: id}).then(response => {
                console.log(response)
                if(response.status == 200){
                    this.professor = response.body.professor
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
