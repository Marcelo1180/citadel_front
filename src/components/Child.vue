<template>
<a href="#"><span v-for="(s, i) in parsedMsg" v-bind:class="getClass(i%2)">{{s}}</span></a>
</template>
<style>
.encontrado {  
  color: #F00;
}
</style>
<script>
export default {
  props: ['msg', 'search'],
  methods: {
      getClass: function(i) {
        var myClass = {};
        myClass["encontrado"] = !!i;
        return myClass;
      },
    },
    computed: {
      parsedSearch : function () {
          return '(' + this.search.trim().replace(/ +/g, '|') + ')';
      },
      parsedMsg: function() {
          return this.msg.split(
          new RegExp(this.parsedSearch , 'gi'));
      }
    }
}
</script>
