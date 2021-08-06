<template>
  <div class="container">
    <b-container class="px-5">
      <b-row class="py-2 px-5 mx-5">
        <b-card no-body class="overflow-hidden px-5 mx-5">
          <b-row no-gutters align-v="center" align="center">
            <b-col md="6">
              <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0 imageCard" />
            </b-col>
            <b-col md="6">
              <b-card-body title="Reformas constitucionales relevantes">
                <b-card-text>
                  Aquí se encuentran reformas constitucionales relevantes en los ultimos años en areas varias tales como aplicación de derechos, elecciones y el proceso de paz.
                </b-card-text>
                <b-button variant="outline-primary" to="materials/reformas">
                  Ver más
                </b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-row>
      <b-row class="py-2 px-5 mx-5">
        <b-card no-body class="overflow-hidden px-5 mx-5">
          <b-row no-gutters align-v="center" align="center">
            <b-col md="6">
              <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0 imageCard" />
            </b-col>
            <b-col md="6">
              <b-card-body title="Fallos relevantes de la corte constitucional">
                <b-card-text>
                  Aqui se encuentran sentencias relevantes de la corte constitucional en materia de derechos.
                </b-card-text>
                <b-button variant="outline-primary" to="materials/fallos">
                  Ver más
                </b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-row>
      <b-row class="py-2 px-5 mx-5">
        <b-card no-body class="overflow-hidden px-5 mx-5">
          <b-row no-gutters align-v="center" align="center">
            <b-col md="6">
              <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0 imageCard" />
            </b-col>
            <b-col md="6">
              <b-card-body title="Decreto convocatoria a la asamblea">
                <b-card-text>
                  Aquí se encuentra el proceso legal que llevó a la convocatoria de la asamblea nacional constituyente.
                </b-card-text>
                <b-button variant="outline-primary" to="materials/convocatoria">
                  Ver más
                </b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {}
</script>

<style>
.imageCard {
  width:75% !important;
  height:100%;
}
</style>
