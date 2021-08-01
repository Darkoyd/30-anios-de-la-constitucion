<template>
  <div class="container">
    <b-row align="center" align-h="center">
      <b-col cols="3">
        <b-jumbotron header="Derechos Fundamentales">
          xd
        </b-jumbotron>
      </b-col>
      <b-col cols="3">
        <b-jumbotron header="Aplicación de los derechos">
          xd
        </b-jumbotron>
      </b-col>
      <b-col cols="3">
        <b-jumbotron header="Deberes y Obligaciones">
          xd
        </b-jumbotron>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="3">
        <b-jumbotron header="Participación Política">
          xd
        </b-jumbotron>
      </b-col>
      <b-col cols="3">
        <b-jumbotron header="Organización del Estado">
          xd
        </b-jumbotron>
      </b-col>
      <b-col cols="3">
        <b-jumbotron header="Función Pública">
          xd
        </b-jumbotron>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="3">
        <b-jumbotron header="Rama Legislativa">
          xd
        </b-jumbotron>
      </b-col>
      <b-col cols="3">
        <b-jumbotron header="Rama Ejecutiva">
          xd
        </b-jumbotron>
      </b-col>
      <b-col cols="3">
        <b-jumbotron header="Función Pública">
          xd
        </b-jumbotron>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="3">
        <b-jumbotron header="Rama Judicial">
          xd
        </b-jumbotron>
      </b-col>
      <b-col cols="3">
        <b-jumbotron header="Elecciones">
          xd
        </b-jumbotron>
      </b-col>
      <b-col cols="3">
        <b-jumbotron header="Organismos de Control">
          xd
        </b-jumbotron>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="3">
        <b-jumbotron header="Organización Territorial">
          xd
        </b-jumbotron>
      </b-col>
      <b-col cols="3">
        <b-jumbotron header="Régimen Economico y de Hacienda Pública">
          xd
        </b-jumbotron>
      </b-col>
      <b-col cols="3">
        <b-jumbotron header="Normas para la terminación del conflicto armado y la construcción de una paz estable y duradera">
          xd
        </b-jumbotron>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const reformas = await $content('reformas').fetch()
    const reformasParsed = reformas[0].body
    return {
      reformas,
      reformasParsed
    }
  }
}
</script>

<style>
</style>
