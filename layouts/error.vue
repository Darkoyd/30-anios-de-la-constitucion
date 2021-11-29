<template>
  <div>
    <h1 class="text-center pb-5">
      {{ error.statusCode }}
    </h1>
    <h2 v-if="error.statusCode === 404" class="text-center">
      Lo sentimos, no hemos encontrado la pagina que buscas
    </h2>
    <h2 v-else class="text-center">
      Ha ocurrido un error
    </h2>
    <h4 class="text-center pt-5">
      <NuxtLink to="/">
        Volver a la pagina de inicio
      </NuxtLink>
    </h4>
  </div>
</template>

<script>
export default {
  layout: 'error',
  // eslint-disable-next-line vue/require-prop-types
  props: ['error'] // you can set a custom layout for the error page
}
</script>
