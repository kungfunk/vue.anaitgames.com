<template>
  <div class="box">
    <div class="box__header">
      <h3 class="box__title">{{ title }}</h3>
      <div class="box__action">
        <slot name="action"></slot>
      </div>
    </div>
    <div class="box__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "box",
  props: {
    title: String
  }
};
</script>

<style scoped>
.box {
  border-radius: 3px;
  background-color: var(--color-white);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.box__header {
  border-bottom: 1px solid var(--color-lightgrey);
  padding: 12px 20px;
  display: grid;
  grid-template-columns: 1fr auto;
  min-height: 30px;
  align-items: center;
}

.box__footer {
  border-top: 1px solid var(--color-lightgrey);
  padding: 12px 20px;
  min-height: 30px;
  text-align: right;
}

.box__title {
  font-size: var(--font-size-medium);
}
</style>
