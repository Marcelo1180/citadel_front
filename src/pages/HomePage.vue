<template>
  <v-content>
    <v-card flat color="grey lighten-3" height="100%">
      <v-card-media
      height="100%"
      src="/public/section.jpeg"
      >
      <v-container fluid>
        <!-- <section>
        <v-parallax src="/public/biblioteca-wall1.jpg" height="600"> -->

        <v-layout row wrap text-xs-center>
          <!-- <v-layout fill-height> -->
          <v-flex lg4 offset-lg4 md6 offset-md3 sm12 offset-sm0>
            <img src="/public/python.png" alt="Python + Vuetify" style="width:auto"/>
            <!-- <v-tooltip left top>
              <v-text-field
              name="input-1-3"
              label="Buscar Libro"
              append-icon="search"
              single-line
              ligth
              slot="activator"
              ></v-text-field>
              <span>Presione &lt;enter&gt; para buscar</span>
            </v-tooltip> -->

            <autocomplete
            url="http://127.0.0.1:8000/api/v1/auto/?format=json&q=:palabras"
            ></autocomplete>
            <!-- <autocomplete :suggestions="cities" :selection.sync="value"></autocomplete> -->            
            <h1 class="mb-2 headline mt-5">Sistema de Gesti&oacute;n Bibliotecaria</h1>
            <div class="body-1 mt-2 grey--text">Powered by <span class="red--text lighten-2 v-badge:5">&straightepsilon;psilo&eta;</span></div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-media>
  </v-card>
  </v-content>
</template>

<script>
  import Autocomplete from '../components/Autocomplete.vue'
  export default {
    data() {
      return {
        a1: null,
        states: [
          'Alabama','Alaska','American Samoa','Arizona',

        ],
        cities : [
            'Bangalore','Chennai','Cochin',
            'Delhi','Kolkata','Mumbai'
        ],
        value: 'aaa',
        suggestions: [
          { city: 'Bangalore', state: 'Karnataka' },
          { city: 'Chennai', state: 'Tamil Nadu' },
          { city: 'Delhi', state: 'Delhi' },
          { city: 'Kolkata', state: 'West Bengal' },
          { city: 'Mumbai', state: 'Maharashtra' }
        ]
      };
    },
    components: {
      Autocomplete
    },
    mounted() {
    },
  };
</script>
