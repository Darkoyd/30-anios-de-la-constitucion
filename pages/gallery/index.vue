<template>
  <div class="container">
    <h2>
      Galeria
    </h2>
    <br>
    En el presente apartado se encontrarán diferentes videos e imágenes conmemorativas de la constitución de 1991. Pasando desde los momentos previos hasta las instituciones que fueron creadas por la Carta Política del 91. Asimismo, hay una recolección de algunos de los foros y documentales que se han realizado sobre la Constitución de 1991.
    <hr class="separador">
    <br>
    <br>
    <b-container class="px-5">
      <b-row class="px-5 mx-5">
        <b-card no-body class="overflow-hidden px-5 mx-5">
          <b-row no-gutters align-v="center" align="center">
            <b-col md="6">
              <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0 imageCard" />
            </b-col>
            <b-col md="6">
              <b-card-body title="Previo a la constituyente">
                <b-card-text>
                  Sucesos y acontecimientos que llevaron a la formación de la constituyente.
                </b-card-text>
                <b-button variant="outline-primary" to="gallery/previous">
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
              <b-card-body title="Institucional">
                <b-card-text>
                  Galerias varias de las instituciones gubernamentales.
                </b-card-text>
                <b-button variant="outline-primary" to="gallery/institutional">
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
              <b-card-body title="Documentales y foros">
                <b-card-text>
                  Documentales varios y videos de interes con respecto a la constitución.
                </b-card-text>
                <b-button variant="outline-primary" to="gallery/documental">
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
.separador{
  height: 0.08rem;
  width: 20rem;
  background-color: grey;
}
</style>
