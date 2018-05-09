<template>
  <div class="statistics-box">
    <h3 class="statistics-box__big-number">{{ number }}
      <sup class="statistics-box__small-number statistics-box__small-number--color-positive">({{ difference }})</sup>
    </h3>
    <span class="statistics-box__sub-text">{{ subText }}</span>
  </div>
</template>

<script>
export default {
  name: "statistics-box",
  props: {
    number: Number,
    difference: Number,
    "sub-text": String
  }
};
</script>

<style scoped>
.statistics-box {
  text-align: center;
}

.statistics-box__big-number {
  font-size: var(--font-size-super);
}

.statistics-box__small-number {
  font-size: var(--font-size-big);
  top: -30px;
  left: -5px;
}

.statistics-box__small-number--color-positive {
  color: var(--color-positive);
}

.statistics-box__small-number--color-negative {
  color: var(--color-negative);
}

.statistics-box__sub-text {
  color: var(--color-subtext);
  text-transform: uppercase;
  font-weight: bold;
  font-size: var(--font-size-small);
}
</style>
