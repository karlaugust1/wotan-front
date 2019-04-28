<template>
    <el-row class="padding-15 main-container">
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item>Início</el-breadcrumb-item>
                        <el-breadcrumb-item>Coordenador</el-breadcrumb-item>
                        <el-breadcrumb-item>Cursos</el-breadcrumb-item>
                        <el-breadcrumb-item>Cadastro/Edição</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <div class="content-container">
                <el-row class="content-header">
                    <h1>Cursos</h1>
                </el-row>
                <el-row class="content-main">
                    <el-row>
                        <h3>Cadastre aqui um curso que será ministrado por professores</h3>
                    </el-row>
                    <el-row span="24">
                        <label>Nome</label>
                        <el-input placeholder="Digite aqui o nome do curso"  v-model="curso.descricao"></el-input>
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
            curso:{
                descricao: '',
            },
        }
    }
}
</script>

<style>

</style>
