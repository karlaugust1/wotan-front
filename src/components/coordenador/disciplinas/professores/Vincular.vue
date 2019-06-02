<template>
    <el-row class="padding-15 main-container">
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item>Início</el-breadcrumb-item>
                        <el-breadcrumb-item>Coordenador</el-breadcrumb-item>
                        <el-breadcrumb-item>Disciplinas</el-breadcrumb-item>
                        <el-breadcrumb-item>Professores</el-breadcrumb-item>
                        <el-breadcrumb-item>Vincular/Desvincular</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <div class="content-container">
                <el-row class="content-header">
                    <h1>Vincular professores</h1>
                </el-row>
                <el-row class="content-main">
                    <h3>Vincule aqui os professores às disciplinas</h3>
                    <el-transfer id="transfer-vincular"
                        :titles="['Não vinculados', 'Vinculados']"
                        :button-texts="['Desvincular', 'Vincular']"
                        filterable
                        :filter-method="filtro"
                        filter-placeholder="Nome"
                        v-model="professoresVinculados"
                        :data="professoresNaoVinculados">
                    </el-transfer>
                    <el-row>
                        <router-link :to="{ name: 'ProfessoresDisciplina'}">
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
import ProfessorService from "../../../../domain/service/ProfessorService";
import DisciplinaService from "../../../../domain/service/DisciplinaService";

export default {
    data() {
        return {
            professoresVinculados: [],
            professoresNaoVinculados: [],
            moment: moment,
            filtro(query, item) {
                return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
            }
        }
    },
    created(){
        if(this.$route.params.id){
            this.findTeachersWithNoLink()
        }
    },
    methods:{
        findTeachersWithLink(id, startIndex){
            this.service = new ProfessorService(this.$resource);
            this.service.findTeachersWithLink({id: id}).then(response => {
                if(response.status == 200){
                    response.body.professores.forEach((professor, index) => {
                        this.professoresNaoVinculados.push({
                            label: professor.nome + ' | ' + professor.matricula,
                            key: startIndex + index,
                            professor: professor
                        });
                        this.professoresVinculados.push(startIndex + index)
                    });
                }
            }).catch( erro => {
                console.log(erro)
            })
        },
        findTeachersWithNoLink(){
            this.service = new ProfessorService(this.$resource);
            this.service.findTeachersWithNoLink().then(response => {
                if(response.status == 200){
                    response.body.professores.forEach((professor, index) => {
                        this.professoresNaoVinculados.push({
                            label: professor.nome + ' | ' + professor.matricula,
                            key: index,
                            professor: professor
                        });
                    });
                    this.findTeachersWithLink(this.$route.params.id, this.professoresNaoVinculados.length)
                }
            }).catch( erro => {
                console.log(erro)
            })
        },
        save(){
            var professores = []
            this.professoresVinculados.forEach( index => {
                var professorCopy = Object.assign({}, this.professoresNaoVinculados.filter( ev => ev.key == index)[0].professor)
                professorCopy.dataNascimento = new Date(moment(professorCopy.dataNascimento, "DD/MM/YYYY HH:ss").format("MM-DD-YYYY HH:ss"))
                professores.push(professorCopy)
            })
            console.log(professores)
            var id = this.$route.params.id
            this.service = new DisciplinaService(this.$resource);
            this.service.vincularProfessores({id: id}, professores).then(response => {
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
