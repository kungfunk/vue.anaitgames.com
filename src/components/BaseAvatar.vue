<template>
  <div class="avatar" :class="getSize">
    <img :src="url" :alt="alt">
  </div>
</template>

<script>
const SIZE_BIG = "big";
const SIZE_SMALL = "small";
const CLASSNAME_BIG = "avatar--big";
const CLASSNAME_SMALL = "avatar--small";

export default {
  name: "base-avatar",
  props: {
    url: String,
    alt: String,
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
.avatar {
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  overflow: hidden;
}

.avatar--big {
  width: 40px;
  height: 40px;
}
</style>
