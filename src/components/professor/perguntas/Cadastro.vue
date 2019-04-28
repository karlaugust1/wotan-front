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
                            <label style="display: block;">Disciplina</label>
                            <el-select v-model="value" placeholder="Disciplina">
                                <!-- <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                </el-option> -->
                                <el-option>teste
                                </el-option>
                            </el-select>
                        </el-col>
                        <el-col :span="6">
                            <label style="display: block;">Data limite</label>
                            <el-date-picker v-model="value1" type="date" placeholder="Escolha uma data">
                            </el-date-picker>
                        </el-col>
                        <el-col :span="6">
                            <label style="display: block;">Valor</label>
                            <el-input placeholder="Digite o valor" type="number" v-model="input"></el-input>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-switch v-model="objetivas" active-text="Objetivas" inactive-text="Dissertativa"></el-switch>
                    </el-row>   
                    <el-row v-if="objetivas">
                        <div v-for="(alternativa, index) in alternativas" :key="index" class="alternativas">
                            <el-input placeholder="Digite a alternativa aqui" v-model="alternativa.descricao" style=""></el-input>
                            <el-button type="danger" icon="el-icon-delete" @click="removerAlternativa(index)" plain></el-button>
                        </div>
                        <el-button plain @click="qtdAlternativas < 4? adicionarAlternativa() : ''" v-if="qtdAlternativas < 4">Nova alternativa</el-button>
                    </el-row>   
                    <el-row>
                        <el-button type="info" plain>Cancelar</el-button>
                        <el-button type="success" plain>Salvar</el-button>
                    </el-row>   
                </el-row>
            </div>
        </el-row>
    </el-row>
</template>

<script>
export default {
    data(){
        return{
            pergunta:{
                descricao: '',
                conteudo: ''
            },
            objetivas: true,
            qtdAlternativas: 0,
            alternativas:[]
        }
    },
    methods:{
        adicionarAlternativa(){
            this.qtdAlternativas++;
            this.alternativas.push({ descricao:''})
        },
        removerAlternativa(index){
            this.alternativas.splice(index, 1)
        }
    }
}
</script>

<style>

</style>
