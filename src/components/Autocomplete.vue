<template>
  <div style="position:relative;flex:1" v-bind:class="{'open':openSuggestion}">
    <!-- <input class="form-control" type="text"
    @keydown.enter = 'enter'
    @keydown.down = 'down'
    @keydown.up = 'up'
    @input = 'change'
    /> -->
    <v-text-field
    v-model="selection"
    name="input-1-3"
    label="Buscar Libro"
    append-icon="search"
    single-line
    hide-details
    ligth
    @keydown.enter = 'enter'
    @keydown.down = 'down'
    @keydown.up = 'up'
    @input = 'change'
    ></v-text-field>
    <ul class="dropdown-menu sub-menu" style="width:100%">
      <li v-for="(sugerido, index) in sugeridos"
      v-bind:class="{'active': isActive(index)}"
      @click="suggestionClick(index)">
        <!-- <a href="#">{{ sugerido }}</a> -->
        <child :msg="sugerido" :search="selection" effect='highlight'>ddd</child>
      </li>
  </ul>
</div>
</template>

<style>
.sub-menu {
  display: none;
}
.open .sub-menu {
  display: block;
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: #FFF;
  position: absolute;
  box-shadow:0px 2px 3px rgba(0,0,0,0.2);
  z-index: 1;
}

.open .sub-menu li a {
  display: block;
  color: #444 !important;
  padding: 8px 16px;
  text-decoration: none;
  text-align: left;
}

.open .sub-menu li a:hover,  .open .sub-menu li.active{
  background-color: #EEE;
}
</style>

<script>
import child from './Child.vue'
import getArtists from '../api'

export default {
  data() {
    return {
      open: false,
      current: 0,
      selection: this.value || "",
      sugeridos:[]
    }
  },
  components: {
    child
  },
  props: {
    /*suggestions: {
      type: Array,
      required: true
    },*/
    url: {
      type: String,
      twoWay: true
    },
    value: {
      type: String,
      twoWay: true
    }
  },
  computed: {
    matches() {
      // console.log("aaaaaaaaaaaaaaaaa",this.url);
      const self = this
      return this.getSugeridosREST(this.selection)
      .then(function(items) {
        self.sugeridos = items
      })
    },
    openSuggestion() {
      return this.selection !== "" &&
      this.matches.length != 0 &&
      this.open === true;

    }
  },
  methods: {
    getSugeridosREST(palabras){
      const xurl = this.url.replace(':palabras', palabras)
      return fetch(xurl)
        .then(res => res.json())
    },
    enter() {
      this.selection = this.sugeridos[this.current];
      this.open = false;
    },
    up() {
      if(this.current > 0)
      this.current--;
    },
    down() {
      if(this.current < this.sugeridos.length - 1)
      this.current++;
    },
    isActive(index) {
      console.log(index);
      return index === this.current;
    },
    change() {
      if (this.open == false) {
        this.open = true;
        this.current = 0;
      }
    },
    suggestionClick(index) {
      this.selection = this.sugeridos[index];
      this.open = false;
    },
  }
}
</script>
