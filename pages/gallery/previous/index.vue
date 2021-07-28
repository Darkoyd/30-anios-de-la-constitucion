<template>
  <div class="container">
    <br>
    <h2 class="text-center">
      Sucesos previos a la constituyente
    </h2>
    <br>
    <b-embed
      type="iframe"
      aspect="16by9"
      src="https://www.youtube.com/embed/nb8tl_hPFS4"
      allowfullscreen
    />
    <br>
    <h4>
      La Séptima Papeleta
    </h4>
    <p class="text_justify">
      La Séptima Papeleta fue uno de los grandes impulsores de la Asamblea Nacional Constituyente y por medio de esta el pueblo invoco la creación de una nueva constitución.
    </p>
    <br>
    <b-row>
      <b-col cols="3">
        <div>
          <h5>Personalidades hablan sobre la séptima papeleta</h5>
          <b-embed
            type="iframe"
            aspect="16by9"
            src="https://www.youtube.com/embed/XO1IhESypN8"
            allowfullscreen
          />
        </div>
      </b-col>
      <b-col cols="3">
        <div>
          <h5>¿Qué fue la séptima papeleta?</h5>
          <b-embed
            type="iframe"
            aspect="16by9"
            src="https://www.youtube.com/embed/qOzs-E71Wsk"
            allowfullscreen
          />
        </div>
      </b-col>
      <b-col cols="3">
        <div>
          <h5>Claudia López promoviendo la séptima papeleta</h5>
          <b-embed
            type="iframe"
            aspect="16by9"
            src="https://www.youtube.com/embed/znEhgpdzglw"
            allowfullscreen
          />
        </div>
      </b-col>
      <b-col cols="3">
        <div>
          <h5>Programa Contravía Séptima Papeleta</h5>
          <b-embed
            type="iframe"
            aspect="16by9"
            src="https://www.youtube.com/embed/pxpyxfQOi_Q"
            allowfullscreen
          />
        </div>
      </b-col>
    </b-row>
    <br>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <b-carousel-slide
        v-for="(item, key) in imagesRoutes"
        :key="key"
        :img-src="item.link"
      />
    </b-carousel>
    <small class="text-muted">Imagenes tomadas de: <b-link href="https://www.semana.com/nacion/articulo/los-estudiantes-septima-papeleta/114006-3/">https://www.semana.com/nacion/articulo/los-estudiantes-septima-papeleta/114006-3/</b-link></small>
    <br>
    <small class="text-muted"><b-link href="https://boyaca.extra.com.co/amp/noticias/Especiales/p/que-fue-la-septima-papeleta-movimiento-estudiantil-que-cumpl-597528">https://boyaca.extra.com.co/amp/noticias/Especiales/p/que-fue-la-septima-papeleta-movimiento-estudiantil-que-cumpl-597528</b-link></small>
    <br>
    <small class="text-muted"><b-link href="https://www.elcolombiano.com/blogs/casillerodeletras/deposite-hoy-la-septima-papeleta/17577">https://www.elcolombiano.com/blogs/casillerodeletras/deposite-hoy-la-septima-papeleta/17577</b-link></small>
    <br>
    <small class="text-muted"><b-link href="https://www.bbc.com/mundo/noticias-america-latina-51829209">https://www.bbc.com/mundo/noticias-america-latina-51829209</b-link></small>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imagesRoutes: [
        {
          link: '/Mutimedia/Previo/papeleta/1.6.png'
        },
        {
          link: '/Mutimedia/Previo/papeleta/1.7.png'
        },
        {
          link: '/Mutimedia/Previo/papeleta/1.png'
        },
        {
          link: '/Mutimedia/Previo/papeleta/2.jpeg'
        },
        {
          link: '/Mutimedia/Previo/papeleta/3.jpeg'
        },
        {
          link: '/Mutimedia/Previo/papeleta/4.png'
        },
        {
          link: '/Mutimedia/Previo/papeleta/5.jpeg'
        },
        {
          link: '/Mutimedia/Previo/papeleta/6.jpeg'
        },
        {
          link: '/Mutimedia/Previo/papeleta/7.jpeg'
        },
        {
          link: '/Mutimedia/Previo/papeleta/8.1.jpeg'
        },
        {
          link: '/Mutimedia/Previo/papeleta/8.2.jpeg'
        },
        {
          link: '/Mutimedia/Previo/papeleta/8.3.jpeg'
        },
        {
          link: '/Mutimedia/Previo/papeleta/8.jpeg'
        }
      ]
    }
  }
}
</script>

<style>
</style>
