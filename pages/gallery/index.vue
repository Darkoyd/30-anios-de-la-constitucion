<template>
  <div class="container pt-5">
    <b-container>
      <b-row>
        <b-card no-body class="overflow-hidden">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0 imageCard" />
            </b-col>
            <b-col md="6">
              <b-card-body title="Previo a la constituyente">
                <b-card-text>
                  This is a wider card with supporting text as a natural lead-in to additional content.
                  This content is a little bit longer.
                </b-card-text>
                <b-button variant="outline-primary" to="gallery/previous">
                  Ver más
                </b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-row>
      <b-row>
        <b-card no-body class="overflow-hidden">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0 imageCard" />
            </b-col>
            <b-col md="6">
              <b-card-body title="Institucional">
                <b-card-text>
                  This is a wider card with supporting text as a natural lead-in to additional content.
                  This content is a little bit longer.
                </b-card-text>
                <b-button variant="outline-primary" to="gallery/institutional">
                  Ver más
                </b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-row>
      <b-row>
        <b-card no-body class="overflow-hidden">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0 imageCard" />
            </b-col>
            <b-col md="6">
              <b-card-body title="Documentales y foros">
                <b-card-text>
                  This is a wider card with supporting text as a natural lead-in to additional content.
                  This content is a little bit longer.
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
  max-width: 40%;
  margin-left: 30%;
}
</style>
