<template>
  <div>
    <b-container variant="light">
      Lorem ipsum
      <br>
      <br>
      // Cambiar fondo
    </b-container>
    <b-navbar toggleable="lg" sticky fixed="top" type="light" variant="light">
      <b-navbar-brand href="/">
        *Inserte Logo y/o titulo aca*
      </b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item v-for="(item, key) in navbarItems" :key="key" :href="item.link">
          {{ item.title }}
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <Nuxt />
  </div>
</template>

<script>
export default {
  data () {
    return {
      navbarItems: [
        {
          title: 'Equipo',
          link: 'team'
        },
        {
          title: 'Asamblea Nacional Constituyente',
          link: 'anc'
        },
        {
          title: 'Multimedia',
          link: 'gallery'
        },
        {
          title: 'Materiales',
          link: 'materials'
        },
        {
          title: 'Libro',
          link: 'book'
        },
        {
          title: 'Iniciativas',
          link: 'initiatives'
        },
        {
          title: 'Eventos',
          link: 'events'
        },
        {
          title: 'Contactanos',
          link: 'contact'
        }
      ]
    }
  }
}
</script>

<style>

</style>
