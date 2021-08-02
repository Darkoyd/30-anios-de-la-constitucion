<template>
  <div class="container py-5">
    <h2 class="text-center">
      Procuraduría
    </h2>
    <h3>
      Que es la Procuraduría General de la Nación
    </h3>
    <b-embed
      type="iframe"
      aspect="16by9"
      src="https://www.youtube.com/embed/vq7LGiKOgnc"
      allowfullscreen
    />
    <hr class="separador">
    <h3>
      Procuradores
    </h3>
    <b-card-group deck class="py-3">
      <b-card
        v-for="(item, key) in procuradores1"
        :key="key"
        :title="item.nombre"
        :img-src="item.link"
        :img-alt="item.nombre"
        img-top
        tag="article"
        class="mb-2"
      >
        <template #footer>
          <small class="text-muted">Tomado de: <b-link :href="item.fuente">{{ item.fuente }}</b-link></small>
        </template>
      </b-card>
    </b-card-group>
    <b-card-group deck class="py-3">
      <b-card
        v-for="(item, key) in procuradores2"
        :key="key"
        :title="item.nombre"
        :img-src="item.link"
        :img-alt="item.nombre"
        img-top
        tag="article"
        class="mb-2"
      >
        <template #footer>
          <small class="text-muted">Tomado de: <b-link :href="item.fuente">{{ item.fuente }}</b-link></small>
        </template>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      procuradores1: [
        {
          nombre: 'Carlos Gustavo - 1990-1994',
          link: '/Mutimedia/Institucional/Procuraduria/Procuradores/Carlos Gustavo Arrieta.jpeg',
          fuente: 'https://www.elespectador.com/judicial/los-procuradores-generales-en-los-ultimos-50-anos-article-662466/'
        },
        {
          nombre: 'Orlando Vásquez - 1994-1997',
          link: '/Mutimedia/Institucional/Procuraduria/Procuradores/Orlando Vasquez.jpeg',
          fuente: 'https://www.wradio.com.co/noticias/actualidad/despues-de-7-anos-de-reclusion-recupero-libertad-ex-procurador-orlando-vasquez/20030610/nota/379.aspx'
        },
        {
          nombre: 'Jaime Bernal - 1997-2001',
          link: '/Mutimedia/Institucional/Procuraduria/Procuradores/Jaime Bernal Cuellar.jpeg',
          fuente: 'https://www.uexternado.edu.co/departamento-de-derecho-penal-y-criminologia/docentes/jaime-bernal-cuellar/'
        }
      ],
      procuradores2: [
        {
          nombre: 'Edgardo Maya – 2001-2009',
          link: '/Mutimedia/Institucional/Procuraduria/Procuradores/Edgardo Maya.jpeg',
          fuente: 'https://www.elespectador.com/judicial/los-procuradores-generales-en-los-ultimos-50-anos-article-662466/ '
        },
        {
          nombre: 'Alejandro Ordoñez – 2009-2016',
          link: '/Mutimedia/Institucional/Procuraduria/Procuradores/Alejandro Ordoñez.jpeg',
          fuente: 'https://www.elespectador.com/judicial/los-procuradores-generales-en-los-ultimos-50-anos-article-662466/'
        },
        {
          nombre: 'Fernando Carrillo – 2016-2020',
          link: '/Mutimedia/Institucional/Procuraduria/Procuradores/Fernando Carrillo.jpeg',
          fuente: 'https://www.semana.com/nacion/articulo/el-fin-de-la-era-de-carrillo-en-la-procuraduria-aciertos-y-equivocaciones/202050/'
        },
        {
          nombre: 'Margarita Cabello – 2020-Actualidad',
          link: '/Mutimedia/Institucional/Procuraduria/Procuradores/Margarita Cabello.jpeg',
          fuente: 'https://www.eltiempo.com/justicia/servicios/perfil-de-margarita-cabello-nueva-procuradora-general-de-la-nacion-534056'
        }
      ]
    }
  }
}
</script>

<style>
.separador{
  height: 0.08rem;
  width: 20rem;
  background-color: grey;
}
</style>
