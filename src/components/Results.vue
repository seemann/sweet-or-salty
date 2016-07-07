<template>
  <div class="results">
    <ul>
      <li>
        <h2>Title</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro sequi dolore, quo ratione. Quam id impedit blanditiis cumque esse sapiente nemo quisquam cum, vero voluptatum deserunt, excepturi ipsam error eius!</p>
      </li>
      <li>
        <h2>Title</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro sequi dolore, quo ratione. Quam id impedit blanditiis cumque esse sapiente nemo quisquam cum, vero voluptatum deserunt, excepturi ipsam error eius!</p>
      </li>
      <li>
        <h2>Title</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro sequi dolore, quo ratione. Quam id impedit blanditiis cumque esse sapiente nemo quisquam cum, vero voluptatum deserunt, excepturi ipsam error eius!</p>
      </li>
      <li>
        <h2>Title</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro sequi dolore, quo ratione. Quam id impedit blanditiis cumque esse sapiente nemo quisquam cum, vero voluptatum deserunt, excepturi ipsam error eius!</p>
      </li>
      <li>
        <h2>Title</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro sequi dolore, quo ratione. Quam id impedit blanditiis cumque esse sapiente nemo quisquam cum, vero voluptatum deserunt, excepturi ipsam error eius!</p>
      </li>
      <li>
        <h2>Title</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro sequi dolore, quo ratione. Quam id impedit blanditiis cumque esse sapiente nemo quisquam cum, vero voluptatum deserunt, excepturi ipsam error eius!</p>
      </li>
    </ul>
  </div>
</template>

<script>
import store from '../store';

export default {
  data() {
    return {
      privateState: {},
      sharedState: store.state
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../global';

  .results {
    font-size: 1rem;
  }

  ul {
    list-style: none;
    padding-left: 0;

    > li {
      border: 4px solid currentColor;
      border-radius: $border-radius-init;
      color: $color-tertiary;
      padding: 1em;
    }

    li + li {
      margin-top: 1em;
    }
  }

  h2 {
    color: currentColor;
    font-family: $font-inital;
    font-weight: 700;
  }
</style>
