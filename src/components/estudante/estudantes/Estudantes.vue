<template>
    <el-row class="padding-15 main-container">
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item>Início</el-breadcrumb-item>
                        <el-breadcrumb-item>Estudante</el-breadcrumb-item>
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
                    <h3>Visualize aqui os estudantes cadastrados no sistema
                        <router-link :to="{ name: 'EstudantesCadastro'}"><el-button style="float: right;">Cadastrar estudante</el-button></router-link>
                    </h3>
                     <el-table
                        :data="estudantes"
                        empty-text="Sem estudantes :'("
                        style="width: 100%">
                        <el-table-column type="expand">
                            <template slot-scope="props">
                                <p><strong>Disciplinas vinculadas</strong></p>
                                <p v-for="disciplina in props.row.disciplinas" :key="disciplina">Disciplina: {{ disciplina.descricao }}</p>
                            </template>
                        </el-table-column>
                        <el-table-column label="Matricula" prop="matricula"></el-table-column>
                        <el-table-column label="Nome" prop="nome"></el-table-column>
                        <el-table-column label="Data matricula" prop="dataMatricula"></el-table-column>
                        <el-table-column width="68px">
                            <template slot-scope="props" >
                                <router-link :to="{ name: 'EstudantesEdicao', params:{ id: props.row.id }}">
                                    <el-tooltip class="item" effect="dark" content="Editar" placement="top">
                                            <el-button style="float: right;"><i class="el-icon-edit"></i></el-button>
                                    </el-tooltip>
                                </router-link>
                            </template>
                        </el-table-column>
                        <el-table-column width="68px">
                            <template slot-scope="props" >
                                <el-tooltip class="item" effect="dark" content="Excluir" placement="top">
                                    <el-button type="danger" plain style="float: right;" @click="removerEstudante(props.row.id)"><i class="el-icon-delete"></i></el-button>
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
            estudantes: [{
                id: 1,
                nome: 'Vinicius Hein Pessoal',
                matricula: 2017000450,
                dataMatricula: '2019-04-20',
                disciplinas: [{
                    descricao: 'Suicídio em coletivo',
                },{
                    descricao: 'Matemática financeira'
                }

                ]
            }]
        }
    },
    methods:{
        removerEstudante(id){
            var index = this.estudantes.indexOf(this.estudantes.filter(e => e.id == id));
            this.estudantes.splice(index, 1)
        }
    }

}
</script>

<style>

</style>
