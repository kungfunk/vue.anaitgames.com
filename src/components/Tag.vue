<template>
  <span class="tag" v-bind:class="styleModifier">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: "tag",
  props: {
    type: String
  },
  computed: {
    styleModifier: function() {
      return {
        "tag--negative": true,
        "tag--warning": false
      };
    }
  }
};
</script>

<style scoped>
.tag {
  color: var(--color-white);
  font-size: var(--font-size-small);
  background-color: var(--color-hardgrey);
  padding: 4px 8px;
  border-radius: 3px;
  display: inline-block;
}

.tag--negative {
  background: var(--color-negative);
}

.tag--warning {
  background: var(--color-warning);
}
</style>
