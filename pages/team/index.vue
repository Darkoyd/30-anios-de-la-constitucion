<template>
  <div class="container pt-5">
    <h1 class="text-center">
      Equipo de trabajo
    </h1>
    <br>
    <br>
    <h2>
      Director del proyecto
    </h2>
    <br>
    <br>
    <b-row align-h="center" class="my-2 niceRow">
      <b-card-group deck>
        <b-card
          title="René Ureña"
          img-src="/Equipo/Director/Rene Ureña.jpeg"
          img-alt="René Ureña"
          img-top
          class="mb-2 niceCard"
          border-variant="primary"
        >
          <b-card-text>
            Rene Ureña director del proyecto Constitución 1991 es abogado con especialización en  Economía en la Universidad de los Andes y con Phd en Derecho en la Universidad de Helsinki ubicada en Finlandia. Asimismo ha sido profesor en la Universidad de los Andes desde el 2003 y desde el 2005 se desempeña como director del área internacional de la facultad.
          </b-card-text>
          <template #footer />
        </b-card>
      </b-card-group>
    </b-row>
    <h2>
      Autores
    </h2>
    <br>
    <br>
    <b-row align-h="center" class="my-2 niceRow">
      <b-card-group deck>
        <b-card
          title="Manuel José Cepeda"
          img-src="/Equipo/Autores/Jose Manuel Cepeda.jpeg"
          img-alt="Autor #2"
          img-top
          class="mb-2 niceCard"
          border-variant="primary"
        >
          <b-card-text>
            Manuel Jose Cepeda es un abogado colombiano graduado en la Universidad de los Andes y con maestría en Derecho en la Universidad de Harvard ubicada en los Estados Unidos. Fue una persona que se desempeñó en muchos ámbitos laborales, desde asesor de varios políticos colombianos hasta magistrado de la Corte Constitucional en el 2001.
          </b-card-text>
          <template #footer />
        </b-card>
      </b-card-group>
    </b-row>
    <h2>
      Equipo
    </h2>
    <br>
    <br>
    <b-row align-h="center" class="py-2 my-2">
      <b-card-group deck>
        <b-card
          title="Laura Sofía León Vega"
          img-src="/Equipo/Investigadores/Laura Sofía León Vega.jpeg"
          img-alt="Laura Sofía León Vega"
          img-top
          class="mb-2 niceCard"
          border-variant="primary"
        >
          <b-card-text>
            Abogada con opción en politica colombiana.
          </b-card-text>
          <template #footer />
        </b-card>

        <b-card
          title="Juan Felipe Lizarazo Villamizar"
          img-src="Equipo\Investigadores\Juan Felipe Lizarazo Villamizar.jpg"
          img-alt="Juan Felipe Lizarazo Villamizar"
          img-top
          class="mb-2 niceCard"
          border-variant="primary"
        >
          <b-card-text>
            Estudiante de Derecho y Gobierno y Asuntos Públicos en la Universidad de los Andes.
          </b-card-text>
          <template #footer />
        </b-card>

        <b-card
          title="Maria Paula Varcarcel"
          img-src="/Equipo/Investigadores/Maria Paula Varcarcel.jpeg"
          img-alt="Maria Paula Varcarcel"
          img-top
          class="mb-2 niceCard"
          border-variant="primary"
        >
          <b-card-text>
            Abogada con opción en gestión pública, gobierno y políticas públicas. Estudiante de la Maestría en Derecho, gobierno y Gestión Pública.
          </b-card-text>
          <template #footer />
        </b-card>

        <b-card
          title="Jaime Salgado López"
          img-src="/Equipo/Investigadores/Jaime Salgado Lopez.jpeg"
          img-alt="Jaime Salgado López"
          img-top
          class="mb-2 niceCard"
          border-variant="primary"
        >
          <b-card-text>
            Abogado de la Universidad de los Andes.
          </b-card-text>
          <template #footer />
        </b-card>

        <b-card
          title="Valeria Díaz Moya"
          img-src="/Equipo/Investigadores/Valeria Diaz Moya.jpeg"
          img-alt="Valeria Díaz Moya"
          img-top
          class="mb-2 niceCard"
          border-variant="primary"
        >
          <b-card-text>
            Estudiante de Derecho en Universidad de los Andes.
          </b-card-text>
          <template #footer />
        </b-card>
      </b-card-group>
    </b-row>
  </div>
</template>

<script>
export default {}
</script>

<style>

.niceCard {
  max-width: 20rem;
}

.niceRow {
  max-height:20%;
  overflow: auto;
}
</style>
