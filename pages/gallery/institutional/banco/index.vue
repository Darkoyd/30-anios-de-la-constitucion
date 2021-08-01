<template>
  <div class="container py-5">
    <h2 class="text-center">
      Banco de la República
    </h2>
    <h3>
      Gerentes del Banco después de la constitución
    </h3>
    <b-card-group deck class="py-3">
      <b-card
        v-for="(item, key) in gerentes"
        :key="key"
        :title="item.nombre"
        :img-src="item.link"
        :img-alt="item.nombre"
        img-top
        tag="article"
        class="mb-2"
      >
        <template #footer>
          <h5>{{ item.titulo_vid }}</h5>
          <b-embed
            type="iframe"
            aspect="16by9"
            :src="item.video"
            allowfullscreen
          />
        </template>
      </b-card>
    </b-card-group>
    <h3>
      Acerca del Banco
    </h3>
    <b-row class="py-3">
      <b-col
        v-for="(item, key) in videos"
        :key="key"
        cols="4"
      >
        <div>
          <h5>{{ item.nombre }}</h5>
        </div>
      </b-col>
      <b-col cols="4">
        <div>
          <h5>Independencia Banco de la República en 1991</h5>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        v-for="(item, key) in videos"
        :key="key"
        cols="4"
      >
        <div>
          <b-embed
            type="iframe"
            aspect="16by9"
            :src="item.link"
            allowfullscreen
          />
        </div>
      </b-col>
      <b-col cols="4">
        <div>
          <b-link href="https://www.facebook.com/BancoRepublica/videos/420731628592894">
            En este link puedes ver un video acerca de Independencia Banco de la República en 1991
          </b-link>
        </div>
      </b-col>
    </b-row>
    <b-container class="py-3">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="0"
        controls
        indicators
        background="#ababab"
        img-width="512"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
      >
        <b-carousel-slide
          v-for="(item, key) in edificios"
          :key="key"
          :img-src="item.link"
        />
      </b-carousel>
    </b-container>
    <b-card
      title="Autoridades Históricas del Banco de la República"
      img-src="/Mutimedia/Institucional/Banco de la República/Fotos Gerentes/AutoridadesHistoricas.jpg"
      img-alt="Autoridades Históricas del Banco de la República"
      img-top
      class="mb-2"
      border-variant="primary"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      gerentes: [
        {
          nombre: 'Miguel Urrutia 1993-2005',
          link: '/Mutimedia/Institucional/Banco de la República/Fotos Gerentes/Miguel Urrutia.jpeg',
          titulo_vid: 'Intervención en Foro',
          video: 'https://www.youtube.com/embed/1J_WXxBHCKY'

        },
        {
          nombre: 'José Darío Uribe 2005-2017',
          link: '/Mutimedia/Institucional/Banco de la República/Fotos Gerentes/Jose Dario Uribe.jpeg',
          titulo_vid: 'Entrevista',
          video: 'https://www.youtube.com/embed/eINRyHXNJCk'

        },
        {
          nombre: 'Juan José Echavarría 2017-2021',
          link: '/Mutimedia/Institucional/Banco de la República/Fotos Gerentes/Juan Jose Echavarria.jpeg',
          titulo_vid: 'Entrevista',
          video: 'https://www.youtube.com/embed/9dwyRvtl-l0'

        },
        {
          nombre: 'Leonardo Villar 2021-Actualidad',
          link: '/Mutimedia/Institucional/Banco de la República/Fotos Gerentes/Leonardo Villar.jpeg',
          titulo_vid: 'Entrevista',
          video: 'https://www.youtube.com/embed/0t1VBgdIsPk'

        }
      ],
      videos: [
        {
          nombre: 'Historia del Banco de la República',
          link: 'https://www.youtube.com/embed/RoJ0BwYl8I4'
        },
        {
          nombre: 'Funciones del Banco de la República',
          link: 'https://www.youtube.com/embed/nb5WmpMciHc'
        }
      ],
      edificios: [
        {
          link: '/Mutimedia/Institucional/Banco de la República/Edificios Banco de la República/edificio-de-la-agencia-cultural-del-banco-de-la-repblica-en-popayn_34831211475_o.jpg'
        },
        {
          link: '/Mutimedia/Institucional/Banco de la República/Edificios Banco de la República/edificio-de-la-casa-de-moneda-del-banco-de-la-repblica-en-ibagu_34848561635_o.jpg'
        },
        {
          link: '/Mutimedia/Institucional/Banco de la República/Edificios Banco de la República/edificio-de-la-central-de-efectivo-del-banco-de-la-repblica-en-bogot_34021326183_o.jpg'
        },
        {
          link: '/Mutimedia/Institucional/Banco de la República/Edificios Banco de la República/edificio-del-banco-de-la-repblica-en-barranquilla_34829506626_o.jpg'
        },
        {
          link: '/Mutimedia/Institucional/Banco de la República/Edificios Banco de la República/edificio-del-banco-de-la-repblica-en-bogot_34698709541_o.jpg'
        },
        {
          link: '/Mutimedia/Institucional/Banco de la República/Edificios Banco de la República/edificio-del-banco-de-la-repblica-en-bogot_34790922106_o.jpg'
        },
        {
          link: '/Mutimedia/Institucional/Banco de la República/Edificios Banco de la República/edificio-del-banco-de-la-repblica-en-cali_34058772343_o.jpg'
        },
        {
          link: '/Mutimedia/Institucional/Banco de la República/Edificios Banco de la República/edificio-del-banco-de-la-repblica-en-cartagena_34698752751_o.jpg'
        },
        {
          link: '/Mutimedia/Institucional/Banco de la República/Edificios Banco de la República/edificio-del-banco-de-la-repblica-en-ibagu_34022678694_o.jpg'
        },
        {
          link: '/Mutimedia/Institucional/Banco de la República/Edificios Banco de la República/edificio-del-banco-de-la-repblica-en-medelln_34058773343_o.jpg'
        },
        {
          link: '/Mutimedia/Institucional/Banco de la República/Edificios Banco de la República/edificio-del-banco-de-la-repblica-en-pasto_34791213596_o.jpg'
        },
        {
          link: '/Mutimedia/Institucional/Banco de la República/Edificios Banco de la República/edificio-del-centro-cultural-del-banco-de-la-repblica-en-buenaventura_38612492465_o.jpg'
        },
        {
          link: '/Mutimedia/Institucional/Banco de la República/Edificios Banco de la República/edificio-del-centro-cultural-del-banco-de-la-repblica-en-buenaventura_39508212481_o.jpg'
        },
        {
          link: '/Mutimedia/Institucional/Banco de la República/Edificios Banco de la República/edificio-del-centro-cultural-del-banco-de-la-repblica-en-manizales_24475526327_o.jpg'
        },
        {
          link: '/Mutimedia/Institucional/Banco de la República/Edificios Banco de la República/edificio-del-centro-cultural-del-banco-de-la-repblica-en-san-andrs_34869240975_o.jpg'
        },
        {
          link: '/Mutimedia/Institucional/Banco de la República/Edificios Banco de la República/museo-del-oro-tairona---casa-de-la-aduana-en-santa-marta_34483186550_o.jpg'
        },
        {
          link: '/Mutimedia/Institucional/Banco de la República/Edificios Banco de la República/sede-del-rea-cultural-de-la-sucursal-de-leticia_34667798532_o.jpg'
        }
      ]
    }
  }
}
</script>

<style>
</style>
