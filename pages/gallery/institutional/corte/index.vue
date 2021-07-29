<template>
  <div class="container py-5">
    <h2 class="text-center">
      Magistrados Corte Constitucional
    </h2>
    <div class="py-5">
      <h3>
        Inauguración Corte Constituciónal
      </h3>
      <b-embed
        type="iframe"
        aspect="16by9"
        src="https://www.youtube.com/embed/aBwOw3hxdWs"
        allowfullscreen
      />
    </div>
    <b-card-group deck>
      <b-card
        v-for="(item, key) in etapas1"
        :key="key"
        :title="item.titulo"
        :img-src="item.link"
        :img-alt="item.titulo"
        img-top
        tag="article"
        class="mb-2"
      >
        <b-card-text>
          <h5>Magistrados</h5>
          <b-list-group class="border-0">
            <b-list-group-item v-for="(elemento, llave) in item.magistrados" :key="llave" class="border-0">
              {{ elemento }}
            </b-list-group-item>
          </b-list-group>
        </b-card-text>
      </b-card>
    </b-card-group>
    <b-card-group deck>
      <b-card
        v-for="(item, key) in etapas2"
        :key="key"
        :title="item.titulo"
        :img-src="item.link"
        :img-alt="item.titulo"
        img-top
        tag="article"
        class="mb-2"
      >
        <b-card-text>
          <h5>Magistrados</h5>
          <b-list-group class="border-0">
            <b-list-group-item v-for="(elemento, llave) in item.magistrados" :key="llave" class="border-0">
              {{ elemento }}
            </b-list-group-item>
          </b-list-group>
        </b-card-text>
      </b-card>
    </b-card-group>
    <h3>
      Entrevistas a diferentes magistrados de la Corte Constitucional
    </h3>
    <b-row class="py-3">
      <b-col
        v-for="(item, key) in entrevistas"
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
        v-for="(item, key) in entrevistas"
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
      etapas1: [
        {
          titulo: 'Primera Etapa',
          link: '/Mutimedia/Institucional/corte/1.jpeg',
          magistrados: ['Simón Rodríguez Rodríguez (1991 - 1993)',
            'Jaime Sanín Greiffenstein (1991 - 1993)',
            'Ciro Angarita Barón (1992 - 1993)']
        },
        {
          titulo: 'Segunda Etapa',
          link: '/Mutimedia/Institucional/corte/2.jpeg',
          magistrados: ['Jorge Arango Mejía (1991 -1998)',
            'Eduardo Cifuentes Muñoz (1991 - 2000)',
            'José Gregorio Hernández (1991 - 2001)',
            'Fabio Morón Díaz (1991 - 2001)',
            'Alejandro Martínez Caballero (1991 - 2001)',
            'Hernando Herrera Vergara (1993 - 1999)',
            'Vladimiro Naranjo Mesa (1993 - 2000)',
            'Antonio Barrera Carbonell (1993 - 2000)',
            'Carlos Gaviria Díaz (1993 - 2001)']
        }
      ],
      etapas2: [
        {
          titulo: 'Tercera Etapa',
          link: '/Mutimedia/Institucional/corte/3.jpeg',
          magistrados: ['Alfredo Beltrán Sierra (1998 - 2006)',
            'Álvaro Tafur Galvis  (1999 - 2007)',
            'Luis Eduardo Montealegre (2001 - 2004)',
            'Manuel José Cepeda Espinosa (2001 - 2009)',
            'Jaime Córdoba Triviño (2001 - 2009)',
            'Marco Gerardo Monroy (2001 - 2009)',
            'Jaime Araujo Rentería (2001 - 2009)',
            'Rodrigo Escobar Gil (2001 - 2009)',
            'Clara Inés Vargas (2001- 2009)',
            'Humberto Antonio Sierra (2004 -2012)']
        },
        {
          titulo: 'Cuarta Etapa',
          link: '/Mutimedia/Institucional/corte/4.jpeg',
          magistrados: ['Nilson Pinilla Pinilla (2006 - 2014)',
            'Juan Carlos Henao (2009 -2012)',
            'Mauricio González Cuervo (2007 - 2015)',
            'Maria Victoria Calle (2009 - 2017)',
            'Jorge Iván Palacio (2009 - 2017)',
            'Gabriel Eduardo Mendoza (2009 - 2017)',
            'Jorge Ignacio Pretelt (2009 – 2017)',
            'Luis Ernesto Vargas Silva (2009- 2017)',
            'Luis Guillermo Guerrero (2012 - 2020)',
            'Alexei Egor Julio Estrada (2012- 2013)',
            'Alberto Rojas Ríos (2013 - 2021)',
            'Gloria Stella Ortiz (2014 - 2022)',
            'Alejandro Linares Cantillo (2015-2023)']
        }
      ],
      entrevistas: [
        {
          nombre: 'Ciro Angarita',
          link: 'https://www.youtube.com/embed/HRY0pJ9Dc1w'
        },
        {
          nombre: 'Carlos Gaviria',
          link: 'https://www.youtube.com/embed/C-4kImzH6hQ'
        },
        {
          nombre: 'Valdmiro Naranjo',
          link: 'https://www.youtube.com/embed/C-4kImzH6hQ'
        }
      ]
    }
  }
}
</script>

<style>
</style>
