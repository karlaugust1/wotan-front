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
                            <el-select v-model="conteudo.disciplina" placeholder="Disciplina">
                                <el-option value="Rede de computadores">Rede de computadores</el-option>
                                <el-option value="Sistemas operacionais">Sistemas operacionais</el-option>
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
            conteudo:{
                titulo: '',
                descricao: '',
                disciplina: '',
                bimestre: 1,
            },
        }
    },
}
</script>

<style>

</style>
