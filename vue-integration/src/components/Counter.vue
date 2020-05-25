<template>
  <div>
    <h1>Counter</h1>
    <h2>{{ this.value }}</h2>
    <button @click="setValue(1)">+</button>
    <button @click="setValue(-1)">-</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      value: this.initialValue || 0
    };
  },

  methods: {
    setValue(delta: number) {
      this.value += delta;
    }
  },

  props: {
    initialValue: {
      type: Number
    }
  }
});
</script>

<style>
button {
  font-size: 50px;
  color: white;
  background-color: #66eeee;
  height: 70px;
  width: 70px;
  margin: 10px;
  border-radius: 35px;
  outline: none;
}
</style>