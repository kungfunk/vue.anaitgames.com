<template>
    <nav class="nav-bar">
        <div class="top-search">
            <svg class="top-search__icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" class="top-search__field" placeholder="Buscar titular, usuario...">
        </div>
        <button class="nav-bar__logoff">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
        </button>
    </nav>
</template>

<script>
export default {
  name: "the-navbar"
};
</script>

<style scoped>
.top-search {
  display: flex;
  padding-left: 20px;
  align-items: center;
}

.top-search__icon {
  color: var(--color-hardgrey);
}

.top-search__field {
  border: 0;
  outline: none;
  padding: 20px 10px 20px;
  width: 100%;
}

.nav-bar {
  display: grid;
  grid-template-columns: 1fr 62px;
  border-bottom: 1px solid var(--color-lightgrey);
  background-color: var(--color-white);
}

.nav-bar__logoff {
  border: 0;
  border-left: 1px solid var(--color-lightgrey);
  background-color: transparent;
  cursor: pointer;
}

.nav-bar__logoff svg {
  color: var(--color-hardgrey);
}
</style>
