<template>
  <div class="container py-5">
    <b-container>
      <h2 class="text-center">
        Proceso legal que llevó a la constitución de 1991
      </h2>
      <b-jumbotron
        v-for="(item, key) in procesos"
        :key="key"
        class="decreto"
        :header="item.titulo"
      >
        <b-container
          class="but"
        >
          <p class>
            {{ item.contenido }}
          </p>
        </b-container>
        <b-button
          variant="primary"
          target="_blank"
          :href="item.link"
          class="jumboCardButtons"
          size="lg"
        >
          Ver mas
        </b-button>
      </b-jumbotron>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      procesos: [
        {
          titulo: 'Decreto Legislativo 927 de 1990 “Por medio del cual se dictan medidas tendientes al restablecimiento del orden público”',
          contenido: 'En este decreto el Gobierno de Virgilio Barco ordenó a la organización electoral contabilizar los votos que se habían depositado en las elecciones presidenciales de 1990.',
          link: 'https://drive.google.com/file/d/1vMFP8C0ieQyPK_Nz--tsya7HoVy3BZMr/view?usp=sharing'
        },
        {
          titulo: 'Sentencia del 9 de mayo de 1990 por la Corte Suprema de Justicia',
          contenido: 'En esta sentencia el alto tribunal reconoce el poder constituyente del pueblo y avala la contabilización de los votos.',
          link: 'https://drive.google.com/file/d/1cuKdUOr-JO52YGpG2mi5MLNGMAfrKwUd/view?usp=sharing'
        }
      ]
    }
  }
}
</script>

<style>
.decreto{
  margin-left: 10%;
  margin-right: 10%;
}
</style>
