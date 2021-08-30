<template>
  <div class="container pb-5">
    <h2 class="text-center">
      Fiscalía General de la Nación
    </h2>
    <br>
    <br>
    <hr class="separador">
    <br>
    <br>
    <h3>
      Fiscales Generales desde 1992 hasta la actualidad
    </h3>
    <b-row class="py-3">
      <b-col
        v-for="(item, key) in fiscales1"
        :key="key"
        cols="4"
      >
        <div>
          <h5>{{ item.nombre }}</h5>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        v-for="(item, key) in fiscales1"
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
    </b-row>
    <b-row class="py-3">
      <b-col
        v-for="(item, key) in fiscales2"
        :key="key"
        cols="4"
      >
        <div>
          <h5>{{ item.nombre }}</h5>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        v-for="(item, key) in fiscales2"
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
    </b-row>
    <b-row class="py-3">
      <b-col
        v-for="(item, key) in fiscales3"
        :key="key"
        cols="4"
      >
        <div>
          <h5>{{ item.nombre }}</h5>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        v-for="(item, key) in fiscales3"
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
    </b-row>
    <hr class="separador">
    <h3>
      Revista Huellas
    </h3>
    <h5 class="py-3">
      Edición 1 /1994
    </h5>
    <b-embed
      type="iframe"
      aspect="16by9"
      src="https://drive.google.com/file/d/1SEZDCCV-CefdBd6DZXdCP3VNVd6YlJO0/preview"
      allowfullscreen
    />
    <h5 class="py-3">
      Edición 90 /2016
    </h5>
    <b-embed
      type="iframe"
      aspect="16by9"
      src="https://drive.google.com/file/d/1E1OiBZB-T8E6qO452Xgkcg9YbZ0QTRIu/preview"
      allowfullscreen
    />
    <hr class="separador">
    <h3>
      Videos
    </h3>
    <b-row class="py-3">
      <b-col
        v-for="(item, key) in videos1"
        :key="key"
        cols="6"
      >
        <div>
          <h5>{{ item.nombre }}</h5>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        v-for="(item, key) in videos1"
        :key="key"
        cols="6"
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
    </b-row>
    <b-row class="py-3">
      <b-col
        v-for="(item, key) in videos2"
        :key="key"
        cols="4"
      >
        <div>
          <h5>{{ item.nombre }}</h5>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        v-for="(item, key) in videos2"
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
    </b-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fiscales1: [
        {
          nombre: 'Gustavo José Joaquín de Greiff - 1992/1994',
          link: 'https://www.youtube.com/embed/U2j4K7WeepM'
        },
        {
          nombre: 'Alfonso Valdivieso Sarmiento – 1994/1997',
          link: 'https://www.youtube.com/embed/RaONe4B8dZM'
        },
        {
          nombre: 'Alfonso Gómez Méndez – 1997/2001',
          link: 'https://www.youtube.com/embed/_xWalXPs9jw'
        }
      ],
      fiscales2: [
        {
          nombre: 'Luis Camilo Osorio – 2001/2005',
          link: 'https://www.youtube.com/embed/yux4TAbpzq4'
        },
        {
          nombre: 'Mario German Iguaran – 2005/2011',
          link: 'https://www.youtube.com/embed/fGfn4QOnkmk'
        },
        {
          nombre: 'Viviane Aleyda Morales – 2011/2012',
          link: 'https://www.youtube.com/embed/ZEe6acDIV_0'
        }
      ],
      fiscales3: [
        {
          nombre: 'Luis Eduardo Montealegre – 2012/2016',
          link: 'https://www.youtube.com/embed/AYQEf3L1oDQ'
        },
        {
          nombre: 'Néstor Humberto Martínez – 2016/2020',
          link: 'https://www.youtube.com/embed/bvvxQ3TuTNQ'
        },
        {
          nombre: 'Francisco Barbosa – 2020/Actualidad',
          link: 'https://www.youtube.com/embed/CyQ1APkVpx8'
        }
      ],
      videos1: [
        {
          nombre: '¿Que es el habeas corpus?',
          link: 'https://www.youtube.com/embed/FNi1ZLG8JMM'
        },
        {
          nombre: '¿Qué es presunto?',
          link: 'https://www.youtube.com/embed/zB6FM5jEEGc'
        }
      ],
      videos2: [
        {
          nombre: 'Museo Fiscalía Corrupción',
          link: 'https://www.youtube.com/embed/TmNb-xwxyMY'
        },
        {
          nombre: 'Museo Fiscalía FARC',
          link: 'https://www.youtube.com/embed/o-PU_tOkZjc'
        },
        {
          nombre: 'Museo Fiscalía Narcotráfico',
          link: 'https://www.youtube.com/embed/DvefuypIuWs'
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
