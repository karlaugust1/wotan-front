import Vue from 'vue'
import Router from 'vue-router'
import Perguntas from '@/components/professor/perguntas/Perguntas'
import PerguntasCadastro from '@/components/professor/perguntas/Cadastro'
import Conteudos from '@/components/professor/conteudos/Conteudos'
import ConteudosCadastro from '@/components/professor/conteudos/Cadastro'
import Disciplinas from '@/components/coordenador/disciplinas/disciplinas/Disciplinas'
import DisciplinasCadastro from '@/components/coordenador/disciplinas/disciplinas/Cadastro'
import EstudantesDisciplina from '@/components/coordenador/disciplinas/estudantes/Estudantes'
import EstudantesVincular from '@/components/coordenador/disciplinas/estudantes/Vincular'
import ProfessoresDisciplina from '@/components/coordenador/disciplinas/professores/Professores'
import ProfessoresVincular from '@/components/coordenador/disciplinas/professores/Vincular'
import Professores from '@/components/coordenador/professores/Professores'
import ProfessoresCadastro from '@/components/coordenador/professores/Cadastro'
import Cursos from '@/components/coordenador/cursos/Cursos'
import CursosCadastro from '@/components/coordenador/cursos/Cadastro'
import Estudantes from '@/components/estudante/estudantes/Estudantes'
import EstudantesCadastro from '@/components/estudante/estudantes/Cadastro'

Vue.use(Router)

export default new Router({
  routes: [
    /* Perguntas */
    { path: '/professor/perguntas', name: 'Perguntas', component: Perguntas },
    { path: '/professor/perguntas/cadastro', name: 'PerguntasCadastro', component: PerguntasCadastro },
    { path: '/professor/perguntas/cadastro/:id', name: 'PerguntasEdicao', component: PerguntasCadastro, props: true },
    /* Conteudos */
    { path: '/professor/conteudos', name: 'Conteudos', component: Conteudos },
    { path: '/professor/conteudos/cadastro', name: 'ConteudosCadastro', component: ConteudosCadastro },
    { path: '/professor/conteudos/cadastro/:id', name: 'ConteudosEdicao', component: ConteudosCadastro, props: true },
    /* Professores */
    { path: '/coordenador/professores', name: 'Professores', component: Professores },
    { path: '/coordenador/professores/cadastro', name: 'ProfessoresCadastro', component: ProfessoresCadastro },
    { path: '/coordenador/professores/cadastro/:id', name: 'ProfessoresEdicao', component: ProfessoresCadastro, props: true },
    /* Cursos */
    { path: '/coordenador/cursos', name: 'Cursos', component: Cursos },
    { path: '/coordenador/cursos/cadastro', name: 'CursosCadastro', component: CursosCadastro },
    { path: '/coordenador/cursos/cadastro/:id', name: 'CursosEdicao', component: CursosCadastro, props: true},
    /* Estudantes */
    { path: '/estudante/estudantes', name: 'Estudantes', component: Estudantes },
    { path: '/estudante/estudantes/cadastro', name: 'EstudantesCadastro', component: EstudantesCadastro },
    { path: '/estudante/estudantes/cadastro/:id', name: 'EstudantesEdicao', component: EstudantesCadastro, props: true },
    /*Disciplinas */
    { path: '/coordenador/disciplinas', name: 'Disciplinas', component: Disciplinas },
    { path: '/coordenador/disciplinas/cadastro', name: 'DisciplinasCadastro', component: DisciplinasCadastro },
    { path: '/coordenador/disciplinas/cadastro/:id', name: 'DisciplinasEdicao', component: DisciplinasCadastro, props: true},
    /* Estudantes (Disciplina) */
    { path: '/coordenador/estudantes', name: 'EstudantesDisciplina', component: EstudantesDisciplina },
    { path: '/coordenador/estudantes/vincular', name: 'EstudantesVincular', component: EstudantesVincular },
    /* Professores (Disciplina) */
    { path: '/coordenador/professores', name: 'ProfessoresDisciplina', component: ProfessoresDisciplina },
    { path: '/coordenador/professores/vincular', name: 'ProfessoresVincular', component: ProfessoresVincular },
    
  ]
})
