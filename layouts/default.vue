<template>
  <div>
    <div class="navUp">
      <b-container>
        Una iniciativa para mostrar material sobre la Constitución Política de Colombia
      </b-container>
    </div>
    <b-navbar
      sticky
      fixed="top"
    >
      <b-navbar-brand class="px-5" href="/">
        *Inserte Logo y/o titulo aca*
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto pr-5">
        <b-nav-item v-for="(item, key) in navbarItems" :key="key" :href="item.link" class="px-1">
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
          title: 'Contactanos',
          link: 'contact'
        }
      ]
    }
  }
}
</script>

<style>
.navUp {
  background-color: #f8f9fa;
  padding-top: 2em;
  padding-bottom: 2em;
}

.navbar {
  background-color: #5379d4;
}
.navbar .navbar-brand {
  color: #ecf0f1;
}
.navbar .navbar-brand:hover,
.navbar .navbar-brand:focus {
  color: #dbefff;
}
.navbar .navbar-text {
  color: #ecf0f1;
}
.navbar .navbar-text a {
  color: #dbefff;
}
.navbar .navbar-text a:hover,
.navbar .navbar-text a:focus {
  color: #dbefff;
}
.navbar .navbar-nav .nav-link {
  color: #ecf0f1;
  border-radius: .25rem;
  margin: 0 0.25em;
}
.navbar .navbar-nav .nav-link:not(.disabled):hover,
.navbar .navbar-nav .nav-link:not(.disabled):focus {
  color: #dbefff;
}
.navbar .navbar-nav .nav-item.active .nav-link,
.navbar .navbar-nav .nav-item.active .nav-link:hover,
.navbar .navbar-nav .nav-item.active .nav-link:focus,
.navbar .navbar-nav .nav-item.show .nav-link,
.navbar .navbar-nav .nav-item.show .nav-link:hover,
.navbar .navbar-nav .nav-item.show .nav-link:focus {
  color: #dbefff;
  background-color: #7b95d4;
}
.navbar .navbar-toggler {
  border-color: #7b95d4;
}
.navbar .navbar-toggler:hover,
.navbar .navbar-toggler:focus {
  background-color: #7b95d4;
}
.navbar .navbar-toggler .navbar-toggler-icon {
  color: #ecf0f1;
}
.navbar .navbar-collapse,
.navbar .navbar-form {
  border-color: #ecf0f1;
}
.navbar .navbar-link {
  color: #ecf0f1;
}
.navbar .navbar-link:hover {
  color: #dbefff;
}

@media (max-width: 575px) {
  .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item {
    color: #ecf0f1;
  }
  .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item:hover,
  .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item:focus {
    color: #dbefff;
  }
  .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item.active {
    color: #dbefff;
    background-color: #7b95d4;
  }
}

@media (max-width: 767px) {
  .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item {
    color: #ecf0f1;
  }
  .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item:hover,
  .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item:focus {
    color: #dbefff;
  }
  .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item.active {
    color: #dbefff;
    background-color: #7b95d4;
  }
}

@media (max-width: 991px) {
  .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item {
    color: #ecf0f1;
  }
  .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item:hover,
  .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item:focus {
    color: #dbefff;
  }
  .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item.active {
    color: #dbefff;
    background-color: #7b95d4;
  }
}

@media (max-width: 1199px) {
  .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item {
    color: #ecf0f1;
  }
  .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item:hover,
  .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item:focus {
    color: #dbefff;
  }
  .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item.active {
    color: #dbefff;
    background-color: #7b95d4;
  }
}

.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item {
  color: #ecf0f1;
}
.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item:hover,
.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item:focus {
  color: #dbefff;
}
.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item.active {
  color: #dbefff;
  background-color: #7b95d4;
}
</style>
