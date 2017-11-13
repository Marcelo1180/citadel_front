
<template>
  <v-app dark>
    <v-navigation-drawer
      persistent
      v-model="drawer"
      app
    >
    <v-list>
                    <v-list-tile>
                        <v-list-tile-content>
                            <v-list-tile-title >
                                <span>Menu</span>
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider></v-divider>
                    <template v-for="(item, index) in items">
                        <v-list-tile :href="item.href" :to="{name: item.href}">
                            <v-list-tile-action>
                                <v-icon light v-html="item.icon"></v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </template>
                </v-list>
  </v-navigation-drawer>
    <v-toolbar
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <!-- <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn> -->
      <!-- <v-text-field
              name="input-1-3"
              label="Hint Text"
              single-line
              dark
            ></v-text-field> -->
            <!-- <v-text-field
            name="input-1-3"
            label="Buscar Libro"
            append-icon="search"
            single-line
            ligth
            class="pt-4"
            ></v-text-field> -->

            <autocomplete
            url="http://127.0.0.1:8000/api/v1/auto/?format=json&q=:palabras"
            ></autocomplete>


      <!-- <v-toolbar-title v-text="title">ddf</v-toolbar-title> -->
      <v-spacer></v-spacer>
      <!-- <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn> -->
    </v-toolbar>
    <main>
      <v-fade-transition mode="out-in">
        <router-view></router-view>
      </v-fade-transition>
  </main>
  <v-footer :fixed="fixed" app>
    <v-icon class="red--text">book</v-icon>
    <span>Citadel v1.0</span>
  </v-footer>
</v-app>
</template>

<script>
import Autocomplete from './components/Autocomplete.vue'

  export default {
    data () {
      return {
        clipped: false,
        drawer: false,
        fixed: true,
        items: [
          { icon: 'bubble_chart', title: 'Inspire' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js',
        items: [{
          href: 'home',
          router: true,
          title: 'Home',
          icon: 'home',
        }, {
          href: 'examples',
          router: true,
          title: 'Example',
          icon: 'extension',
        }, {
          href: 'about',
          router: true,
          title: 'About',
          icon: 'domain',
        }],
      }
    },
    components: {
      Autocomplete
    }
  }
</script>
