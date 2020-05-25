<template>
  <div>
    <h1>Counter Using Class</h1>
    <h2>{{ value }}</h2>
    <h2>{{ EvenOrOdd }}</h2>
    <button @click="setValue(1)">+</button>
    <button @click="setValue(-1)">-</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class CounterUsingClass extends Vue {
  // Required Prop
  // @Prop(Number) private readonly initialValue!: number;
  // Optional Prop
  @Prop(Number) private readonly initialValue?: number;

  private value = this.initialValue || 0;

  public setValue(delta: number) {
    this.value += delta;
  }

  public get EvenOrOdd(): string {
    return this.value % 2 === 0 ? "Even" : "Odd";
  }
}
</script>

<style scoped></style>
