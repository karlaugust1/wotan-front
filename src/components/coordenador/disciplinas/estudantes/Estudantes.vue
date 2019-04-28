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
                    <h3>Visualize aqui os estudantes vinculados às disciplinas</h3>
                    <el-table
                        :data="disciplinas"
                        empty-text="Sem disciplinas :'("
                        style="width: 100%">
                        <el-table-column type="expand">
                            <template slot-scope="props">
                                <el-row>
                                    <el-col :span="18">
                                        <p><strong>Estudantes vinculados</strong></p>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-input v-model="search" size="mini" placeholder="Pesquise pelo nome"/>

                                    </el-col>
                                </el-row>
                                <el-table :data="props.row.estudantes.filter(data => !search || data.nome.toLowerCase().includes(search.toLowerCase()))" style="width: 100%">
                                    <el-table-column label="Matricula" prop="matricula"></el-table-column>
                                    <el-table-column label="Nome" prop="nome"></el-table-column>
                                    <el-table-column label="Data matricula" prop="dataMatricula"></el-table-column>
                                </el-table>
                            </template>
                        </el-table-column>
                        <el-table-column label="Nome" prop="descricao"></el-table-column>
                        <el-table-column label="Curso" prop="curso"></el-table-column>
                        <el-table-column width="200px">
                            <template slot-scope="props" >
                                <router-link :to="{ name: 'EstudantesVincular', params:{ id: props.row.id }}">
                                    <el-button style="float: right;">Vincular estudantes</el-button>
                                </router-link>
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
                curso: 'Analise de sistemas',
                estudantes: [{
                    id: 1,
                    nome: 'Vinicius Hein Pessoal',
                    matricula: 2017000451,
                    dataMatricula: '2019-04-20',
                },{
                    id: 2,
                    nome: 'Karl August Harder',
                    matricula: 2017000450,
                    dataMatricula: '2019-04-22',
                }]
            }],
            search: ''
        }
    },
}
</script>

<style>

</style>
