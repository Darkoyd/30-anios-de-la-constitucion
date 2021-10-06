<template>
  <div>
    <b-navbar
      sticky
      fixed="top"
      class="mb-5"
    >
      <b-navbar-brand class="px-5" href="/">
        <b-row no-gutters align-v="center" align="center" class="pl-5">
          <b-col>
            <img src="/Logo.jpg" height="90%" width="90%" class="mr-3">
          </b-col>
          <b-col>
            <h5>Datos de la constitución politica de 1991</h5>
          </b-col>
        </b-row>
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto pr-5">
        <b-nav-item v-for="(item, key) in navbarItems" :key="key" :to="item.link" class="px-1">
          {{ item.title }}
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <Nuxt />
    <br>
    <div class="container-fluid footer py-5 mt-5">
      <b-row align-h="center">
        <b-col cols="3" style="display: block; margin: auto;">
          <img src="https://proyectopaz.uniandes.edu.co/wp-content/uploads/logo_andes_204.png">
        </b-col>
        <b-col cols="3" style="display: block; margin: auto;">
          <img src="https://proyectopaz.uniandes.edu.co/wp-content/uploads/cijus_footer_blanco_305.png">
        </b-col>
      </b-row>
      <hr>
      <b-row align="center" align-h="center" class="justify-content-center">
        Universidad de los Andes | Vigilada Mineducación
        <br>
        Reconocimiento como Universidad: Decreto 1297 del 30 de mayo de 1964.
        <br>
        Reconocimiento personería jurídica: Resolución 28 del 23 de febrero de 1949 Minjusticia.
        <br>
        Carrera 1# 18A-10, Edificio RGC, 2do piso. Bogotá, (Colombia) Tel:(57-1) 3394949 | Facultad de Derecho – Copyright ©
        <br>
      </b-row>
      <hr>
      <b-row>
        <b-col cols="12" align="center">
          <p class="h1">
            <b-icon-github
              @click="goToGitHub()"
            />
          </p>Made with ❤️ in Colombia
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navbarItems: [
        {
          title: 'Equipo',
          link: '/team'
        },
        {
          title: 'Asamblea Nacional Constituyente',
          link: '/anc'
        },
        {
          title: 'Multimedia',
          link: '/gallery'
        },
        {
          title: 'Materiales',
          link: '/materials'
        },
        {
          title: 'Libro',
          link: 'book'
        }
      ]
    }
  },
  methods: {
    goToGitHub () {
      window.open('https://github.com/Darkoyd/30-anios-de-la-constitucion', '_blank').focus()
    }
  }
}
</script>

<style>

.footer {
  background-color: navy;
  color: white;
}

.navUp {
  padding-top: 2em;
  padding-bottom: 2em;
}

.navbar {
  background-color: navy;
}
.navbar .navbar-brand {
  color: #ecf0f1;
  font-size: 2.25rem;
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
