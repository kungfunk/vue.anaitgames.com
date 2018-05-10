<template>
  <span class="button">
    <slot></slot>
  </span>
</template>

<script>
const SIZE_BIG = "big";
const SIZE_SMALL = "small";
const CLASSNAME_BIG = "button--big";
const CLASSNAME_SMALL = "button--small";

export default {
  name: "base-button",
  props: {
    size: String
  },
  computed: {
    getSize: function() {
      switch(this.size) {
        case SIZE_BIG:
          return CLASSNAME_BIG;
        case SIZE_SMALL:
          return CLASSNAME_SMALL;
      }
    }
  }
};
</script>

<style scoped>
.button {
  cursor: pointer;
  border: 1px solid var(--color-lightgrey);
  padding: 5px 10px;
  border-radius: 3px;
  text-decoration: none;
  color: var(--color-text);
  font-size: var(--font-size-medium);
  background: var(--color-white);
  vertical-align: middle;
  line-height: 1.2;
  display: inline-block;
}

.button:hover {
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
}

.button--small {
  font-size: var(--font-size-small);
}

.button__icon {
  margin: 0 1px -2px 0;
  color: var(--color-hardgrey);
}
</style>
