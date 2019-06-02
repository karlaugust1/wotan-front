<template>
    <el-row class="padding-15 main-container">
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item>Início</el-breadcrumb-item>
                        <el-breadcrumb-item>Coordenador</el-breadcrumb-item>
                        <el-breadcrumb-item>Disciplinas</el-breadcrumb-item>
                        <el-breadcrumb-item>Estudantes</el-breadcrumb-item>
                        <el-breadcrumb-item>Vincular/Desvincular</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <div class="content-container">
                <el-row class="content-header">
                    <h1>Vincular estudantes</h1>
                </el-row>
                <el-row class="content-main">
                    <h3>Vincule aqui os estudates às disciplinas</h3>
                    <el-transfer id="transfer-vincular"
                        :titles="['Não vinculados', 'Vinculados']"
                        :button-texts="['Desvincular', 'Vincular']"
                        filterable
                        filter-placeholder="Nome"
                        v-model="estudantesVinculados"
                        :data="estudantesNaoVinculados">
                    </el-transfer>
                    <el-row>
                        <router-link :to="{ name: 'EstudantesDisciplina'}">
                            <el-button type="info" plain>Cancelar</el-button>
                        </router-link>
                        <el-button type="success" plain @click="save">Salvar</el-button>
                    </el-row>  
                </el-row>
            </div>
        </el-row>
    </el-row>
</template>

<script>
var moment = require('moment')
/* Services  */
import EstudanteService from "../../../../domain/service/EstudanteService";
import DisciplinaService from "../../../../domain/service/DisciplinaService";

export default {
    data() {
        return {
            estudantesVinculados: [],
            estudantesNaoVinculados: [],
            moment: moment
        }
    },
    created(){
        if(this.$route.params.id){
            this.findStudentsWithNoLink()
        }
    },
    methods:{
        findStudentsWithLink(id, startIndex){
            this.service = new EstudanteService(this.$resource);
            this.service.findStudentsWithLink({id: id}).then(response => {
                if(response.status == 200){
                    response.body.estudantes.forEach((estudante, index) => {
                        this.estudantesNaoVinculados.push({
                            label: estudante.nome + ' | ' + estudante.matricula,
                            key: startIndex + index,
                            estudante: estudante
                        });
                        this.estudantesVinculados.push(startIndex + index)
                    });
                }
            }).catch( erro => {
                console.log(erro)
            })
        },
        findStudentsWithNoLink(){
            this.service = new EstudanteService(this.$resource);
            this.service.findStudentsWithNoLink().then(response => {
                if(response.status == 200){
                    response.body.estudantes.forEach((estudante, index) => {
                        this.estudantesNaoVinculados.push({
                            label: estudante.nome + ' | ' + estudante.matricula,
                            key: index,
                            estudante: estudante
                        });
                    });
                    this.findStudentsWithLink(this.$route.params.id, this.estudantesNaoVinculados.length)
                }
            }).catch( erro => {
                console.log(erro)
            })
        },
        save(){
            var estudantes = []
            this.estudantesVinculados.forEach( index => {
                var estudanteCopy = Object.assign({}, this.estudantesNaoVinculados.filter( ev => ev.key == index)[0].estudante)
                estudanteCopy.dataMatricula = new Date(moment(estudanteCopy.dataMatricula, "DD/MM/YYYY HH:ss").format("MM-DD-YYYY HH:ss"))
                estudanteCopy.dataNascimento = new Date(moment(estudanteCopy.dataNascimento, "DD/MM/YYYY HH:ss").format("MM-DD-YYYY HH:ss"))
                estudantes.push(estudanteCopy)
            })
            console.log(estudantes)
            var id = this.$route.params.id
            this.service = new DisciplinaService(this.$resource);
            this.service.vincularEstudantes({id: id}, estudantes).then(response => {
                console.log(response)
                if(response.status == 200){
                    this.$root.success(response.body.message)
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
