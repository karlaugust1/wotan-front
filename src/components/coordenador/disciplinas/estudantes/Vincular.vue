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
                        <el-breadcrumb-item>Vincular/Desvincular</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <div class="content-container">
                <el-row class="content-header">
                    <h1>Vincular estudantes</h1>
                </el-row>
                <el-row class="content-main">
                    <h3>Vincule aqui os estudates às disciplinas</h3>
                    <el-transfer id="transfer-vincular"
                        :titles="['Não vinculados', 'Vinculados']"
                        :button-texts="['Desvincular', 'Vincular']"
                        filterable
                        :filter-method="filtro"
                        filter-placeholder="Nome"
                        v-model="estudantesVinculados"
                        :data="estudantesNaoVinculados">
                    </el-transfer>
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
    data() {
        /* Apagar */
        const generateData = _ => {
            const estudantesNaoVinculados = [];
            const estudantes = ['Karl', 'Alisson'];
            estudantes.forEach((estudante, index) => {
                estudantesNaoVinculados.push({
                    label: estudante,
                    key: index,
                });
            });
            return estudantesNaoVinculados;
        };
        return {
            estudantesNaoVinculados: generateData(),
            estudantesVinculados: [],
            filtro(query, item) {
                return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
            }
        };
    }
}
</script>

<style>

</style>
