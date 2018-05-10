<template>
  <div id="app" class="content">
    <the-side-menu selected=""></the-side-menu>
    <section class="main">
      <the-navbar></the-navbar>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import TheSideMenu from "@/components/TheSideMenu.vue";
import TheNavbar from "@/components/TheNavbar.vue";

export default {
  components: {
    TheSideMenu,
    TheNavbar
  }
};
</script>

<style>
:root {
  /* colors */
  --color-white: rgb(255, 255, 255);
  --color-whitefade: rgba(255, 255, 255, 0.3);
  --color-lightgrey: rgb(219, 223, 234);
  --color-hardgrey: rgb(123, 133, 148);
  --color-background: rgb(241, 241, 243);
  --color-text: rgb(78, 81, 94);
  --color-subtext: rgb(160, 163, 177);
  --color-primary: rgb(228, 68, 69);
  --color-darkprimary: rgb(215, 51, 51);
  --color-positive: green;
  --color-negative: red;
  --color-warning: orange;

  /* font sizes */
  --font-size-base: 16px;
  --font-size-medium: 0.9rem;
  --font-size-small: 0.8rem;
  --font-size-big: 1.25rem;
  --font-size-super: 3.75rem;
}

html {
  font-size: var(--font-size-base);
}

body {
  font-family: "Open Sans", sans-serif;
  color: var(--color-text);
  line-height: 1.2;
}

h1,
h2,
h3,
h4 {
  margin: 0;
}

img {
  max-width: 100%;
}

a {
  color: inherit;
}

.content {
  display: grid;
  grid-template-columns: 80px 1fr;
  height: 100vh;
}

.main {
  background-color: var(--color-background);
}
</style>
