<template>
  <div class="container mt-3 p-3">
    <b-row align="center" align-h="center" class="wideRow">
      <b-col cols="3">
        <b-jumbotron header="Aplicación de los derechos">
          <hr>
          <div v-for="(item, index) in arr2" :key="index">
            <h5>{{ item.title }}</h5>
            <br>
            <p>{{ item.description }}</p>
            <b-btn :href="item.link" target="_blank" variant="primary">
              Ver Acto
            </b-btn>
            <br>
            <hr>
          </div>
        </b-jumbotron>
      </b-col>
      <b-col cols="3">
        <b-jumbotron header="Deberes y Obligaciones">
          <hr>
          <div v-for="(item, index) in arr3" :key="index">
            <h5>{{ item.title }}</h5>
            <br>
            <p>{{ item.description }}</p>
            <b-btn :href="item.link" target="_blank" variant="primary">
              Ver Acto
            </b-btn>
            <br>
            <hr>
          </div>
        </b-jumbotron>
      </b-col>
      <b-col cols="3">
        <b-jumbotron header="Función Pública">
          <hr>
          <div v-for="(item, index) in arr9" :key="index">
            <h5>{{ item.title }}</h5>
            <br>
            <p>{{ item.description }}</p>
            <b-btn :href="item.link" target="_blank" variant="primary">
              Ver Acto
            </b-btn>
            <br>
            <hr>
          </div>
        </b-jumbotron>
      </b-col>
    </b-row>
    <b-row align="center" align-h="center" class="wideRow">
      <b-col cols="3">
        <b-jumbotron header="Participación Política">
          <hr>
          <div v-for="(item, index) in arr4" :key="index">
            <h5>{{ item.title }}</h5>
            <br>
            <p>{{ item.description }}</p>
            <b-btn :href="item.link" target="_blank" variant="primary">
              Ver Acto
            </b-btn>
            <br>
            <hr>
          </div>
        </b-jumbotron>
      </b-col>
      <b-col cols="3">
        <b-jumbotron header="Elecciones">
          <hr>
          <div v-for="(item, index) in arr11" :key="index">
            <h5>{{ item.title }}</h5>
            <br>
            <p>{{ item.description }}</p>
            <b-btn :href="item.link" target="_blank" variant="primary">
              Ver Acto
            </b-btn>
            <br>
            <hr>
          </div>
        </b-jumbotron>
      </b-col>
      <b-col cols="3">
        <b-jumbotron header="Normas para la terminación del conflicto armado y la construcción de una paz estable y duradera">
          <hr>
          <div v-for="(item, index) in arr15" :key="index">
            <h5>{{ item.title }}</h5>
            <br>
            <p>{{ item.description }}</p>
            <b-btn :href="item.link" target="_blank" variant="primary">
              Ver Acto
            </b-btn>
            <br>
            <hr>
          </div>
        </b-jumbotron>
      </b-col>
    </b-row>
    <b-row align="center" align-h="center" class="wideRow">
      <b-col cols="3">
        <b-jumbotron header="Función Pública">
          <hr>
          <div v-for="(item, index) in arr6" :key="index">
            <h5>{{ item.title }}</h5>
            <br>
            <p>{{ item.description }}</p>
            <b-btn :href="item.link" target="_blank" variant="primary">
              Ver Acto
            </b-btn>
            <br>
            <hr>
          </div>
        </b-jumbotron>
      </b-col>
      <b-col cols="3">
        <b-jumbotron header="Rama Judicial">
          <hr>
          <div v-for="(item, index) in arr10" :key="index">
            <h5>{{ item.title }}</h5>
            <br>
            <p>{{ item.description }}</p>
            <b-btn :href="item.link" target="_blank" variant="primary">
              Ver Acto
            </b-btn>
            <br>
            <hr>
          </div>
        </b-jumbotron>
      </b-col>
      <b-col cols="3">
        <b-jumbotron header="Régimen Economico y de Hacienda Pública">
          <hr>
          <div v-for="(item, index) in arr14" :key="index">
            <h5>{{ item.title }}</h5>
            <br>
            <p>{{ item.description }}</p>
            <b-btn :href="item.link" target="_blank" variant="primary">
              Ver Acto
            </b-btn>
            <br>
            <hr>
          </div>
        </b-jumbotron>
      </b-col>
    </b-row>
    <b-row align="center" align-h="center" class="wideRow">
      <b-col cols="3">
        <b-jumbotron header="Organización del Estado">
          <hr>
          <div v-for="(item, index) in arr5" :key="index">
            <h5>{{ item.title }}</h5>
            <br>
            <p>{{ item.description }}</p>
            <b-btn :href="item.link" target="_blank" variant="primary">
              Ver Acto
            </b-btn>
            <br>
            <hr>
          </div>
        </b-jumbotron>
      </b-col>
      <b-col cols="3">
        <b-jumbotron header="Rama Ejecutiva">
          <hr>
          <div v-for="(item, index) in arr8" :key="index">
            <h5>{{ item.title }}</h5>
            <br>
            <p>{{ item.description }}</p>
            <b-btn :href="item.link" target="_blank" variant="primary">
              Ver Acto
            </b-btn>
            <br>
            <hr>
          </div>
        </b-jumbotron>
      </b-col>
      <b-col cols="3">
        <b-jumbotron header="Organismos de Control">
          <hr>
          <div v-for="(item, index) in arr12" :key="index">
            <h5>{{ item.title }}</h5>
            <br>
            <p>{{ item.description }}</p>
            <b-btn :href="item.link" target="_blank" variant="primary">
              Ver Acto
            </b-btn>
            <br>
            <hr>
          </div>
        </b-jumbotron>
      </b-col>
    </b-row>
    <b-row align="center" align-h="center" class="wideRow">
      <b-col cols="3">
        <b-jumbotron header="Derechos Fundamentales">
          <hr>
          <div v-for="(item, index) in arr1" :key="index">
            <h5>{{ item.title }}</h5>
            <br>
            <p>{{ item.description }}</p>
            <b-btn :href="item.link" target="_blank" variant="primary">
              Ver Acto
            </b-btn>
            <br>
            <hr>
          </div>
        </b-jumbotron>
      </b-col>
      <b-col cols="3">
        <b-jumbotron header="Rama Legislativa">
          <hr>
          <div v-for="(item, index) in arr7" :key="index">
            <h5>{{ item.title }}</h5>
            <br>
            <p>{{ item.description }}</p>
            <b-btn :href="item.link" target="_blank" variant="primary">
              Ver Acto
            </b-btn>
            <br>
            <hr>
          </div>
        </b-jumbotron>
      </b-col>
      <b-col cols="3">
        <b-jumbotron header="Organización Territorial">
          <hr>
          <div v-for="(item, index) in arr13" :key="index">
            <h5>{{ item.title }}</h5>
            <br>
            <p>{{ item.description }}</p>
            <b-btn :href="item.link" target="_blank" variant="primary">
              Ver Acto
            </b-btn>
            <br>
            <hr>
          </div>
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
    const arr1 = reformasParsed.filter(item => item.section === 'Derechos Fundametales')
    const arr2 = reformasParsed.filter(item => item.section === 'Aplicación de los Derechos')
    const arr3 = reformasParsed.filter(item => item.section === 'Deberes y Obligaciones')
    const arr4 = reformasParsed.filter(item => item.section === 'Participación Política')
    const arr5 = reformasParsed.filter(item => item.section === 'Organización del Estado')
    const arr6 = reformasParsed.filter(item => item.section === 'Función Pública')
    const arr7 = reformasParsed.filter(item => item.section === 'Rama Legislativa')
    const arr8 = reformasParsed.filter(item => item.section === 'Rama Ejecutiva')
    const arr9 = reformasParsed.filter(item => item.section === 'Fuerza Pública')
    const arr10 = reformasParsed.filter(item => item.section === 'Rama Judicial')
    const arr11 = reformasParsed.filter(item => item.section === 'Elecciones')
    const arr12 = reformasParsed.filter(item => item.section === 'Organismos de Control')
    const arr13 = reformasParsed.filter(item => item.section === 'Organización territorial')
    const arr14 = reformasParsed.filter(item => item.section === 'Régimen Economico y de Hacienda Pública')
    const arr15 = reformasParsed.filter(item => item.section === 'Normas para la terminación del conflicto armado y la construcción de una paz estable y duradera')
    return {
      reformas,
      reformasParsed,
      arr1,
      arr2,
      arr3,
      arr4,
      arr5,
      arr6,
      arr7,
      arr8,
      arr9,
      arr10,
      arr11,
      arr12,
      arr13,
      arr14,
      arr15
    }
  }
}
</script>

<style>
h1 {
  font-size: 2em !important;
}
.wideRow {
  margin-left: -17%;
  margin-right: -17%;
}
</style>
