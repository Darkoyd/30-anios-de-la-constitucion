<template>
  <div class="container pt-5">
    <h1>Libro</h1>
    <br>
    <div v-for="(item, key) in libroParsed" :key="key">
      <b-jumbotron :header="key+1 + ' - ' +item.title">
        <hr class="my-4">
        <b-button :href="item.link" variant="primary" target="_blank" class="jumboCardButtons" size="lg">
          Ver más
        </b-button>
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const libro = await $content('libro').fetch()
    const libroParsed = libro[0].body
    return {
      libro,
      libroParsed
    }
  }
}
</script>

<style>
.jumboCardButtons {
  margin-left: 80%;
}
</style>
