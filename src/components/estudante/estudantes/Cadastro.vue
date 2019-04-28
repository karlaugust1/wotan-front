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
                        <el-col :span="6">
                            <label style="display: block;">RG</label>
                            <el-input type="number" placeholder="Digite aqui o RG do estudante"  v-model="estudante.rg"></el-input>
                        </el-col>
                        <el-col :span="6">
                            <label style="display: block;">CPF</label>
                            <el-input type="number" placeholder="Digite aqui o CPF do estudante"  v-model="estudante.cpf"></el-input>
                        </el-col>
                        <el-col :span="6">
                            <label style="display: block;">Data de nascimento</label>
                            <el-date-picker v-model="estudante.dataNascimento" type="date" placeholder="Escolha uma data">
                            </el-date-picker>
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
            estudante:{
                nome: '',
                cpf: '',
                rg: '',
                dataNascimento: '',
            },
        }
    },
}
</script>

<style>

</style>
