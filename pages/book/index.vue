<template>
  <div class="container">
    <h1>Libro</h1>
    <br>
    <br>
    En este enlace están recopilados todos los cuadros, con información relevante sobre los impactos de la constitución, que se elaboraron y están expuestos en el libro.
    <hr class="separador">
    <br>
    <br>
    <b-row align="center" align-h="center" class="wideRow">
      <div v-for="(item, key) in libroParsed.slice(0, 3)" :key="key">
        <b-col class="pagina">
          <b-jumbotron class="paginaCont">
            <hr>
            <h5>{{ key+1 + ' - ' +item.title }}</h5>
            <br>
            <b-btn :href="item.link" target="_blank" variant="primary">
              Abrir cuadro
            </b-btn>
            <br>
            <hr>
          </b-jumbotron>
        </b-col>
      </div>
    </b-row>
    <b-row v-for="(number, llave) in numCol" :key="llave" align="center" align-h="center" class="wideRow">
      <div v-for="(item, key) in libroParsed.slice(number*3, number*3 + 3)" :key="key">
        <b-col class="pagina">
          <b-jumbotron class="paginaCont">
            <hr>
            <h5>{{ number*3+key+1 + ' - ' +item.title }}</h5>
            <br>
            <b-btn :href="item.link" target="_blank" variant="primary">
              Abrir cuadro
            </b-btn>
            <br>
            <hr>
          </b-jumbotron>
        </b-col>
      </div>
    </b-row>
    <div v-for="(item, key) in libroParsed" :key="key">
      <b-jumbotron :header="key+1 + ' - ' +item.title" class="jumboCard">
        <b-button :href="item.link" variant="primary" target="_blank" class="jumboCardButtons">
          Abrir cuadro
        </b-button>
        <hr class="my-2">
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const libro = await $content('libro').fetch()
    const libroParsed = libro[0].body
    const numCol = ((libroParsed.length / 3) | 0) + 1
    return {
      libro,
      libroParsed,
      numCol
    }
  }
}
</script>

<style>
.wideRow {
  margin-left: -17%;
  margin-right: -17%;
}
.jumboCardButtons {
  margin-left: 80%;
}
h1 {
  font-size: 2em !important;
}
.jumboCard {
  padding: 2em !important;
}
.pagina {
  height: 25rem;
  width: 25rem;
}
.paginaCont{
  height: 20rem;
  width: 20rem;
}
</style>
