<template>
  <div class="seasons" v-if="show" transition="fade">
    <table class="seasons__table" v-for="season in seasons">
      <thead>
        <tr>
          <th colspan="2">Season {{season.number}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="episode in season.episodes">
          <td>{{episode.number}}</td>
          <td>{{episode.title}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
  data() {
    return {
      seasons: []
    };
  },
  props: {
    showId: {
      type: Number
    },
    show: {
      type: Boolean
    }
  },
  compiled() {
    this.$http.get(`shows/${this.showId}/seasons?extended=episodes`).then(response => {
      this.seasons = response.json();
    }, response => {
      console.error(response.statusText);
    });
  }
};
</script>

<style lang="sass" scoped>
  @import '../variables';
  @import '../animations';

  .seasons {
    font-size: 1rem;
  }

  .seasons__table {
    border-collapse: collapse;
    vertical-align: middle;
    table-layout: fixed;
    width: 100%;

    thead > tr > th {
      background-color: darken($color-quaternary, 40%);
      padding: 1em; /* 32px */
    }

    tbody > tr {

      &:nth-child(odd) {
        background-color: darken($color-quaternary, 10%);
      }

      &:nth-child(even) {
        background-color: arken($color-quaternary, 5%)
      }

      > td {
        padding: 1em; /* 32px */
      }
    }
  }
</style>
