<template>
  <nav class="side-menu">
      <div class="side-menu__logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
          </svg>
      </div>
      <ul class="side-menu__items">
          <li class="side-menu__item side-menu__item--selected">
              <router-link to="/" class="side-menu__link" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <line x1="18" y1="20" x2="18" y2="10"></line>
                      <line x1="12" y1="20" x2="12" y2="4"></line>
                      <line x1="6" y1="20" x2="6" y2="14"></line>
                  </svg>
              </router-link>
          </li>
          <li class="side-menu__item">
              <router-link to="/" class="side-menu__link" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="3" y1="9" x2="21" y2="9"></line>
                      <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
              </router-link>
          </li>
          <li class="side-menu__item">
              <router-link to="/posts" class="side-menu__link" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
              </router-link>
          </li>
          <li class="side-menu__item">
              <a class="side-menu__link" href="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
              </a>
          </li>
          <li class="side-menu__item">
              <a class="side-menu__link" href="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
              </a>
          </li>
          <li class="side-menu__item">
              <a class="side-menu__link" href="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                      <line x1="4" y1="22" x2="4" y2="15"></line>
                  </svg>
              </a>
          </li>
          <li class="side-menu__item">
              <a class="side-menu__link" href="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                  </svg>
              </a>
          </li>
      </ul>
  </nav>
</template>

<script>
export default {
  name: "the-side-menu",
  props: {
    selected: String
  }
};
</script>

<style scoped>
.side-menu {
  background-color: var(--color-primary);
}

.side-menu__logo {
  background-color: var(--color-darkprimary);
  color: var(--color-white);
  height: 59px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.side-menu__items {
  list-style: none;
  margin: 22px 0;
  padding: 0;
  text-align: center;
}

.side-menu__item {
  color: var(--color-whitefade);
  position: relative;
  margin-bottom: 20px;
}

.side-menu__link:hover {
  color: var(--color-white);
}

.side-menu__link svg {
  border-radius: 50%;
  border: 2px solid var(--color-whitefade);
  padding: 5px;
}

.side-menu__item--selected {
  color: var(--color-white);
}

.side-menu__item--selected svg {
  border-color: var(--color-white);
}
</style>
