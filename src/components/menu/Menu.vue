<template>
    <el-menu :default-openeds="['1', '2', '2-1', '3']">
        <el-submenu index="1">
            <template slot="title"><i class="el-icon-menu"></i>Professor</template>
            <router-link :to="{ name: 'Perguntas'}"><el-menu-item index="1-1"> Perguntas</el-menu-item></router-link>
            <el-menu-item index="1-2">Presenças</el-menu-item>
            <router-link :to="{ name: 'Conteudos'}"><el-menu-item index="1-3">Conteúdos</el-menu-item></router-link>
        </el-submenu>
        <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>Coordenador</template>
            <el-submenu index="2-1">
                <template slot="title">Disciplinas</template>
                <router-link :to="{ name: 'Disciplinas'}"><el-menu-item index="2-1-1">Disciplinas</el-menu-item></router-link>
                <router-link :to="{ name: 'EstudantesDisciplina'}"><el-menu-item index="2-1-2">Estudantes</el-menu-item></router-link>
                <router-link :to="{ name: 'ProfessoresDisciplina'}"><el-menu-item index="2-1-3">Professores</el-menu-item></router-link>
            </el-submenu>
            <router-link :to="{ name: 'Professores'}"><el-menu-item index="2-2">Professores</el-menu-item></router-link>
            <router-link :to="{ name: 'Cursos'}"><el-menu-item index="2-3">Cursos</el-menu-item></router-link>
        </el-submenu>
        <el-submenu index="3">
            <template slot="title"><i class="el-icon-menu"></i>Estudante</template>
            <router-link :to="{ name: 'Estudantes'}"><el-menu-item index="3-1">Estudantes</el-menu-item></router-link>
        </el-submenu>
    </el-menu>
</template>

<script>
export default {

}
</script>

<style>
</style>
