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
    resultId: {
      type: Number
    },
    show: {
      type: Boolean
    }
  },
  compiled() {
    this.$http.get(`shows/${this.resultId}/seasons?extended=episodes`).then(response => {
      this.seasons = response.json();
    }, response => {
      console.error(response.statusText);
    });
  }
};
</script>

<style lang="sass" scoped>
  @import '../variables';
  @import '../transitions';

  .seasons {
    font-size: 1rem;
  }

  .seasons__table {
    border-collapse: collapse;
    vertical-align: middle;
    table-layout: fixed;
    width: 100%;

    thead > tr > th {
      background-color: darken($color-primary, 40%);
      padding: 0.5em 2em; /* 32px */
    }

    tbody > tr {

      &:nth-child(odd) {
        background-color: darken($color-primary, 10%);
      }

      &:nth-child(even) {
        background-color: arken($color-primary, 5%)
      }

      > td {
        padding: 0.5em 2em; /* 32px */
      }
    }
  }
</style>
