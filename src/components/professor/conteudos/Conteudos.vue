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
                                <strong><label style="display: block;">Descrição</label></strong>
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
                                    <el-button type="danger" plain style="float: right;" @click="remove(props.row)"><i class="el-icon-delete"></i></el-button>
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
/* Services */
import ConteudoService from "../../../domain/service/ConteudoService";

export default {
    data(){
        return {
            conteudos: []
        }
    },
    created(){
        this.service = new ConteudoService(this.$resource);
        this.service.findAll().then(response => {
            console.log(response)
            if(response.status == 200){
                this.conteudos = response.body.conteudos
            }
        }).catch( erro => {
            console.log(erro)
        })
    },
    methods:{   
        remove(conteudo){
            console.log(conteudo)
            this.$confirm('Isso fará com que o conteudo seja deletado permanentemente. Continuar?', 'Atenção', {
                confirmButtonText: 'Deletar',
                cancelButtonText: 'Cancelar',
                type: 'warning'
            }).then(() => {
                this.delete(conteudo)
            })
        },
        delete(conteudo){
            this.service = new ConteudoService(this.$resource);
            this.service.delete({}, conteudo).then(response => {
                if(response.status == 200){
                    this.$root.success(response.body.message)
                    var index = this.conteudos.indexOf(this.conteudos.filter(d => d.id == conteudo.id));
                    this.conteudos.splice(index, 1)
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
