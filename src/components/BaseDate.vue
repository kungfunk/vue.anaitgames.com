<template>
  <span class="date">
    {{ date }}
  </span>
</template>

<script>
export default {
  name: "base-date",
  props: {
    date: String
  }
};
</script>

<style scoped>
.date {
  color: var(--color-subtext);
  font-weight: bold;
  font-size: var(--font-size-small);
}
</style>
