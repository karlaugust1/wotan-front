<template>
    <el-row class="padding-15 main-container">
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item>Início</el-breadcrumb-item>
                        <el-breadcrumb-item>Coordenador</el-breadcrumb-item>
                        <el-breadcrumb-item>Disciplinas</el-breadcrumb-item>
                        <el-breadcrumb-item>Disciplinas</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <div class="content-container">
                <el-row class="content-header">
                    <h1>Disciplinas</h1>
                </el-row>
                <el-row class="content-main">
                    <h3>Visualize aqui as disciplinas cadastrados no sistema
                        <router-link :to="{ name: 'DisciplinasCadastro'}"><el-button style="float: right;">Cadastrar disciplina</el-button></router-link>
                    </h3>
                    <el-table
                        :data="disciplinas"
                        empty-text="Sem disciplinas :'("
                        style="width: 100%">
                        <el-table-column label="Nome" prop="descricao"></el-table-column>
                        <el-table-column label="Curso" prop="curso"></el-table-column>
                        <el-table-column width="68px">
                            <template slot-scope="props" >
                                <router-link :to="{ name: 'DisciplinasEdicao', params:{ id: props.row.id }}">
                                    <el-tooltip class="item" effect="dark" content="Editar" placement="top">
                                            <el-button style="float: right;"><i class="el-icon-edit"></i></el-button>
                                    </el-tooltip>
                                </router-link>
                            </template>
                        </el-table-column>
                        <el-table-column width="68px">
                            <template slot-scope="props" >
                                <el-tooltip class="item" effect="dark" content="Excluir" placement="top">
                                    <el-button type="danger" plain style="float: right;" @click="removerDisciplina(props.row.id)"><i class="el-icon-delete"></i></el-button>
                                </el-tooltip>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-row>
            </div>
        </el-row>
    </el-row>
</template>

<script>
export default {
    data(){
        return {
            disciplinas: [{
                id: 1,
                descricao: 'Rede de computadores',
                curso: 'Analise de sistemas'
            }]
        }
    },
    methods:{
        removerDisciplina(id){
            var index = this.disciplinas.indexOf(this.disciplinas.filter(d => d.id == id));
            this.disciplinas.splice(index, 1)
        }
    }
}
</script>

<style>

</style>
