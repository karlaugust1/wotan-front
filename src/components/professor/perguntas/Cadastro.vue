<template>
    <el-row class="padding-15 main-container">
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item>Início</el-breadcrumb-item>
                        <el-breadcrumb-item>Professor</el-breadcrumb-item>
                        <el-breadcrumb-item>Perguntas</el-breadcrumb-item>
                        <el-breadcrumb-item>Cadastro/Edição</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <div class="content-container">
                <el-row class="content-header">
                    <h1>Perguntas</h1>
                </el-row>
                <el-row class="content-main">
                    <el-row>
                        <h3>Cadastre aqui as perguntas que aparecerão para seus alunos</h3>
                    </el-row>
                    <el-row span="24">
                        <label>Pergunta</label>
                        <el-input type="textarea" :rows="5" placeholder="Digite aqui a pergunta"  v-model="pergunta.descricao"></el-input>
                    </el-row>
                    <el-row type="flex" class="row-bg" :gutter="20">
                        <el-col :span="6">
                            <label style="display: block;">Conteúdo</label>
                            <el-select v-model="pergunta.idConteudo" placeholder="Conteúdo">
                                <el-option v-for="conteudo in conteudos" :key="conteudo.id" :label="conteudo.titulo" :value="conteudo.id">
                                </el-option>
                            </el-select>
                        </el-col>
                        <el-col :span="6">
                            <label style="display: block;">Data limite</label>
                            <el-date-picker v-model="pergunta.dataLimite" type="date" placeholder="Escolha uma data" format="dd/MM/yyyy">
                            </el-date-picker>
                        </el-col>
                        <el-col :span="6">
                            <label style="display: block;">Valor</label>
                            <el-input placeholder="Digite o valor" type="number" v-model="pergunta.valor"></el-input>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-switch v-model="objetivas" active-text="Objetivas" inactive-text="Dissertativa"></el-switch>
                    </el-row>   
                    <el-row v-if="objetivas">
                        <div v-for="(alternativa, index) in pergunta.alternativas" :key="index" class="alternativas">
                            <el-input placeholder="Digite a alternativa aqui" v-model="alternativa.descricao" style=""></el-input>
                            <el-checkbox v-model="alternativa.correta" />
                            <el-button type="danger" icon="el-icon-delete" @click="removeAlternative(index)" plain></el-button>
                        </div>
                        <el-button plain @click="pergunta.alternativas.length < 4? addAlternative() : ''" v-if="pergunta.alternativas.length < 4">Nova alternativa</el-button>
                    </el-row>   
                    <el-row>
                        <router-link :to="{ name: 'Perguntas'}">
                            <el-button type="info" plain>Cancelar</el-button>
                        </router-link>
                        <el-button type="success" plain @click="save(pergunta)" :disabled="saveDisabled">Salvar</el-button>
                    </el-row>   
                </el-row>
            </div>
        </el-row>
    </el-row>
</template>

<script>
var moment = require('moment')

/* Services */
import PerguntaService from "../../../domain/service/PerguntaService";
import ConteudoService from "../../../domain/service/ConteudoService";
/* Models */
import Pergunta from "../../../domain/model/Pergunta";
import Alternativa from "../../../domain/model/Alternativa";

export default {
    data(){
        return{
            pergunta: new Pergunta(),
            objetivas: true,
            conteudos: [],
            moment: moment
        }
    },
    computed: {
        saveDisabled() {
            var save = true
            if(this.objetivas && this.pergunta.alternativas.length <= 1)
                save = false
            else if(this.pergunta.descricao == '')
                save = false
            else if(this.pergunta.dataLimite == '')
                save = false
            else if(this.pergunta.valor == '')
                save = false
            else if(this.pergunta.idConteudo == '')
                save = false

                console.log(save)
            return !save
        }
    },
    created() {
        this.findContents()
        if(this.$route.params.id){
            this.findById(this.$route.params.id)
        }
    },
    methods:{
        addAlternative(){
            this.pergunta.alternativas.push(new Alternativa())
        },
        removeAlternative(index){
            this.pergunta.alternativas.splice(index, 1)
        },
        save(pergunta){
            this.pergunta.dataCriacao = new Date()
            this.service = new PerguntaService(this.$resource);
            if( pergunta.id ){
                var perguntaCopy = Object.assign({}, pergunta)
                perguntaCopy.dataCriacao = new Date(moment(perguntaCopy.dataCriacao, "DD/MM/YYYY HH:ss").format("MM-DD-YYYY HH:ss"))
                perguntaCopy.dataLimite = new Date(moment(perguntaCopy.dataLimite, "DD/MM/YYYY HH:ss").format("MM-DD-YYYY HH:ss"))
                this.service.update({}, perguntaCopy).then(response => {
                    if(response.status == 200){
                        this.$root.success(response.body.message)
                    } else {
                        this.$root.error(response.body.message)
                    }
                }).catch( erro => {
                    this.$root.error(erro.body.message)
                    console.log(erro)
                })
            }else{
                this.service.insert({}, pergunta).then(response => {
                    if(response.status == 200){
                        this.$root.success(response.body.message)
                        this.pergunta = new Pergunta()
                    } else {
                        this.$root.error(response.body.message)
                    }
                }).catch( erro => {
                    this.$root.error(erro.body.message)
                    console.log(erro)
                })
            }
        },
        findById(id){
            this.service = new PerguntaService(this.$resource);
            this.service.findById({id: id}).then(response => {
                console.log(response)
                if(response.status == 200){
                    this.pergunta = response.body.pergunta
                } else {
                    this.$root.error(response.body.message)
                }
            }).catch( erro => {
                this.$root.error()
                console.log(erro)
            })
        },
        findContents(){
            this.service = new ConteudoService(this.$resource);
            this.service.findAll().then(response => {
                if(response.status == 200){
                    this.conteudos = response.body.conteudos
                }
            }).catch( erro => {
                console.log(erro)
            })   
        },
        moment: function () {
            return moment();
        }
    }
}
</script>

<style>

</style>
