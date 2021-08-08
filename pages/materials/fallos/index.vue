<template>
  <div class="container py-5">
    <b-container>
      <h2 class="text-center">
        Sentencias relevantes de la Corte Constitucional
      </h2>
      <b-jumbotron
        v-for="(item, key) in sentencias"
        :key="key"
        :header="item.titulo"
      >
        <b-container
          v-for="(elemento, llave) in item.numeros"
          :key="llave"
          class="but"
        >
          <p class="text-muted">
            {{ elemento }}
          </p>
        </b-container>
        <b-button
          v-for="(enlace, lla) in item.links"
          :key="lla"
          variant="primary"
          target="_blank"
          :href="enlace"
          class="jumboCardButtons"
          size="lg"
        >
          {{ item.numeros[lla] }}
        </b-button>
      </b-jumbotron>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sentencias: [
        {
          titulo: 'Despenalización parcial del aborto; interrupción voluntaria del embarazo como derecho reproductivo',
          numeros: ['C-355 de 2006'],
          miembros: ['M.P. Jaime Araujo Rentería', 'M.P. Clara Ines Vargas'],
          links: ['https://drive.google.com/file/d/1KPWIRGHMnuJ-SYXakWeLR_9WjvyLQUGp/view?usp=sharing']
        },
        {
          titulo: 'Derecho al agua como derecho social fundamental',
          numeros: ['T-740 de 2011'],
          miembros: ['M.P Humberto Sierra'],
          links: ['https://drive.google.com/file/d/1mzZr0171u4Uxd3FamVTDZ63nz7s8dQ-i/view?usp=sharing']
        },
        {
          titulo: 'Derecho a la consulta previa',
          numeros: ['C-702 de 2010', 'C-608 de 2010'],
          miembros: ['M.P Jorge Pretelt', 'M.P Humberto Sierra'],
          links: ['https://drive.google.com/file/d/14eMlayq9wuJiV5o0Z_wapT2msgJTEqU6/view?usp=sharing', 'https://drive.google.com/file/d/1txw-C3fyHb0I_7AE2wvBydzVusQ49sdr/view?usp=sharing']
        },
        {
          titulo: 'Derecho de las victimas del conflicto armado colombiano',
          numeros: ['C-936 de 2010'],
          miembros: ['M.P Luis Vargas'],
          links: ['https://drive.google.com/file/d/1Acrm6tJ3scIKxb42RT0hhXlkslnzw3uk/view?usp=sharing']
        },
        {
          titulo: 'Constitucionalidad de la Ley de cuotas',
          numeros: ['C-371/2000'],
          miembros: ['M.P Carlos Gaviria Díaz'],
          links: ['https://drive.google.com/file/d/1Hgl5u9bZ5zIVOqKieEhlFXZQYs8yt8WU/preview']
        },
        {
          titulo: 'Libre desarrollo de la personalidad en colegios',
          numeros: ['T-065/1993'],
          miembros: ['M.P. Ciro Angarita Baron'],
          links: ['https://drive.google.com/file/d/1yXCxcgZlzUOpiCd2OMMyVUK7ATaI8itv/preview']
        },
        {
          titulo: 'Estado de Cosas Iconstituconales (Sistema Carcelario)',
          numeros: ['T-153/1998', 'T-388/2013'],
          miembros: ['M.P. Eduardo Cifuente Muñoz', 'Maria Victoria Calle'],
          links: ['https://drive.google.com/file/d/1amjkskkaDT30A9WiKvF1J7hlC2VL_Hry/view?usp=sharing', 'https://drive.google.com/file/d/1JSJBKXQpfrVuFEmj7Wu99WhQVRTH7kf5/view?usp=sharing']
        }
      ]
    }
  }
}
</script>

<style>
.but{
  background-color: transparent;
}
</style>
