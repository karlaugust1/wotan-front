<template>
    <el-row class="padding-15 main-container">
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item>Início</el-breadcrumb-item>
                        <el-breadcrumb-item>Professor</el-breadcrumb-item>
                        <el-breadcrumb-item>Conteúdos</el-breadcrumb-item>
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
                    <h3>Visualize aqui os conteúdos que serão ensinados na sala de aula
                        <router-link :to="{ name: 'ConteudosCadastro'}"><el-button style="float: right;">Cadastrar conteúdo</el-button></router-link>
                    </h3>
                     <el-table
                        :data="conteudos"
                        empty-text="Sem conteúdos"
                        style="width: 100%">
                        <el-table-column type="expand">
                            <template slot-scope="props">
                                <p>{{ props.row.descricao }}</p>
                            </template>
                        </el-table-column>
                        <el-table-column label="Título" prop="titulo"></el-table-column>
                        <el-table-column label="Disciplina" prop="disciplina"></el-table-column>
                        <el-table-column label="Bimestre" prop="bimestre" width="150px"></el-table-column>
                        <el-table-column width="68px">
                            <template slot-scope="props" >
                                <router-link :to="{ name: 'ConteudosEdicao', params:{ id: props.row.id }}">
                                    <el-tooltip class="item" effect="dark" content="Editar" placement="top">
                                            <el-button style="float: right;"><i class="el-icon-edit"></i></el-button>
                                    </el-tooltip>
                                </router-link>
                            </template>
                        </el-table-column>
                        <el-table-column width="68px">
                            <template slot-scope="props" >
                                <el-tooltip class="item" effect="dark" content="Excluir" placement="top">
                                    <el-button type="danger" plain style="float: right;" @click="removerConteudo(props.row.id)"><i class="el-icon-delete"></i></el-button>
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
    data() {
      return {
        conteudos: [{
          id: 1,
          titulo: 'Camada 7 do sistema OSI',
          descricao: 'Descrição de um conteúdo legal',
          disciplina: 'Rede de computadores',
          bimestre: 1,
        }, {
          id: 2,
          titulo: 'Camada 5 do sistema OSI',
          descricao: 'Descrição de um conteúdo legal 2',
          disciplina: 'Rede de computadores 2',
          bimestre: 2,
        }]
      }
    },
    methods:{
        removerConteudo(id){
            console.log(id)
            var index = this.conteudos.indexOf(this.conteudos.filter(c => c.id == id));
            this.conteudos.splice(index, 1)
        }
    }
}
</script>

<style>

</style>
