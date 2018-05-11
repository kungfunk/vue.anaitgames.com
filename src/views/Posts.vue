<template>
  <div class="main__container">
    <section class="dashboard-statistics">
      <statistics-box
        v-for="(data, index) in statistics"
        :key="index"
        :number="data.number"
        :difference="data.difference"
        :sub-text="data.subText"
      ></statistics-box>
    </section>
    <div class="posts">
      <div class="c-filters-pannel">
        <div class="c-filters">
          <h4 class="c-filters__title">
            Filtrar por tipo
            <svg class="c-filters__title-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
          </h4>
          <ul class="c-filters__list">
            <li class="c-filter c-filter--selected">
              <a class="c-filter__name" href="">Artículos</a>
              <span class="c-filter__number">730</span>
            </li>
            <li class="c-filter">
              <a class="c-filter__name" href="">Noticias</a>
              <span class="c-filter__number">15342</span>
            </li>
            <li class="c-filter">
              <a class="c-filter__name" href="">Analisis</a>
              <span class="c-filter__number">1230</span>
            </li>
            <li class="c-filter">
              <a class="c-filter__name" href="">Streaming</a>
              <span class="c-filter__number">53</span>
            </li>
            <li class="c-filter">
              <a class="c-filter__name" href="">Podcast</a>
              <span class="c-filter__number">918</span>
            </li>
          </ul>
        </div>
        <hr class="c-filters-pannel__separator">
        <div class="c-filters">
          <h4 class="c-filters__title">
            Filtrar por estado
            <svg class="c-filters__title-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
          </h4>
          <ul class="c-filters__list">
            <li class="c-filter c-filter--selected">
              <a class="c-filter__name" href="">Publicado</a>
              <span class="c-filter__number">20001</span>
            </li>
            <li class="c-filter">
              <a class="c-filter__name" href="">Borrador</a>
              <span class="c-filter__number">310</span>
            </li>
            <li class="c-filter">
              <a class="c-filter__name" href="">Papelera</a>
              <span class="c-filter__number">11</span>
            </li>
          </ul>
        </div>
        <hr class="c-filters-pannel__separator">
        <div class="c-filters">
          <h4 class="c-filters__title">
            Filtrar por autor
            <svg class="c-filters__title-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </h4>
          <ul class="c-filters__list">
            <li class="c-filter">
              <a class="c-filter__name" href="">Solo los mios</a>
              <span class="c-filter__number">1123</span>
            </li>
            <li class="c-filter">
              <a class="c-filter__name" href="">Solo redactores</a>
              <span class="c-filter__number">42341</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="posts__results">
        <div class="c-box">
          <div class="c-box__header">
            <h3 class="c-box__title">Mostrando 20 de 21323 resultados</h3>
            <div class="c-box__action">
              <a href="" class="c-button">
                <svg class="c-button__icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                Busqueda avanzada
              </a>
            </div>
          </div>
          <div class="c-box__body">
            <table class="c-datatable">
              <thead class="c-datatable__header">
                <tr class="c-datatable__row">
                  <td class="c-datatable__cell">
                    <a class="c-datatable__link" href="">
                      Titular
                      <svg class="c-datatable__sort-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </a>
                  </td>
                  <td class="c-datatable__cell">
                    <a class="c-datatable__link" href="">Tipo</a>
                  </td>
                  <td class="c-datatable__cell">
                    <a class="c-datatable__link" href="">Estado</a>
                  </td>
                  <td class="c-datatable__cell">
                    <a class="c-datatable__link" href="">Autor</a>
                  </td>
                  <td class="c-datatable__cell">
                    <a class="c-datatable__link" href="">Visitas</a>
                  </td>
                  <td class="c-datatable__cell">
                    <a class="c-datatable__link" href="">Comentarios</a>
                  </td>
                  <td class="c-datatable__cell">
                    <a class="c-datatable__link" href="">Publicada</a>
                  </td>
                  <td class="c-datatable__cell">
                    <a class="c-datatable__link" href="">Creada</a>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr class="c-datatable__row">
                  <td class="c-datatable__cell">
                    <a class="c-datatable__link" href="">Sea of Thieves: Diario de a bordo (I)</a>
                  </td>
                  <td class="c-datatable__cell">Artículo</td>
                  <td class="c-datatable__cell">Publicada</td>
                  <td class="c-datatable__cell">Fran Pinto</td>
                  <td class="c-datatable__cell">3352</td>
                  <td class="c-datatable__cell">34</td>
                  <td class="c-datatable__cell">21/02/2018</td>
                  <td class="c-datatable__cell">22/03/2018</td>
                </tr>
                <tr class="c-datatable__row">
                  <td class="c-datatable__cell">
                    <a class="c-datatable__link" href="">Amanita trabaja en un juego de terror «muy perturbador»</a>
                  </td>
                  <td class="c-datatable__cell">Noticia</td>
                  <td class="c-datatable__cell">Publicada</td>
                  <td class="c-datatable__cell">Pep Sanchez</td>
                  <td class="c-datatable__cell">239</td>
                  <td class="c-datatable__cell">13</td>
                  <td class="c-datatable__cell">22/03/2018</td>
                  <td class="c-datatable__cell">22/03/2018</td>
                </tr>
                <tr class="c-datatable__row">
                  <td class="c-datatable__cell">
                    <a class="c-datatable__link" href="">Tráiler de lanzamiento de Assassin's Creed: Rogue Remastered</a>
                  </td>
                  <td class="c-datatable__cell">Noticia</td>
                  <td class="c-datatable__cell">Borrador</td>
                  <td class="c-datatable__cell">Muerte Martinez</td>
                  <td class="c-datatable__cell">-</td>
                  <td class="c-datatable__cell">-</td>
                  <td class="c-datatable__cell">-</td>
                  <td class="c-datatable__cell">20/03/2018</td>
                </tr>
                <tr class="c-datatable__row">
                  <td class="c-datatable__cell">
                    <a class="c-datatable__link" href="">Sigue aquí el Nindies Showcase de primavera</a>
                  </td>
                  <td class="c-datatable__cell">Noticia</td>
                  <td class="c-datatable__cell">Publicada</td>
                  <td class="c-datatable__cell">Pep Sanchez</td>
                  <td class="c-datatable__cell">5523</td>
                  <td class="c-datatable__cell">9</td>
                  <td class="c-datatable__cell">24/03/2018</td>
                  <td class="c-datatable__cell">21/03/2018</td>
                </tr>
                <tr class="c-datatable__row">
                  <td class="c-datatable__cell">
                    <a class="c-datatable__link" href="">Sea of Thieves: Diario de a bordo (I)</a>
                  </td>
                  <td class="c-datatable__cell">Artículo</td>
                  <td class="c-datatable__cell">Publicada</td>
                  <td class="c-datatable__cell">Fran Pinto</td>
                  <td class="c-datatable__cell">3352</td>
                  <td class="c-datatable__cell">34</td>
                  <td class="c-datatable__cell">21/02/2018</td>
                  <td class="c-datatable__cell">22/03/2018</td>
                </tr>
                <tr class="c-datatable__row">
                  <td class="c-datatable__cell">
                    <a class="c-datatable__link" href="">Amanita trabaja en un juego de terror «muy perturbador»</a>
                  </td>
                  <td class="c-datatable__cell">Noticia</td>
                  <td class="c-datatable__cell">Publicada</td>
                  <td class="c-datatable__cell">Pep Sanchez</td>
                  <td class="c-datatable__cell">239</td>
                  <td class="c-datatable__cell">13</td>
                  <td class="c-datatable__cell">22/03/2018</td>
                  <td class="c-datatable__cell">22/03/2018</td>
                </tr>
                <tr class="c-datatable__row">
                  <td class="c-datatable__cell">
                    <a class="c-datatable__link" href="">Tráiler de lanzamiento de Assassin's Creed: Rogue Remastered</a>
                  </td>
                  <td class="c-datatable__cell">Noticia</td>
                  <td class="c-datatable__cell">Borrador</td>
                  <td class="c-datatable__cell">Muerte Martinez</td>
                  <td class="c-datatable__cell">-</td>
                  <td class="c-datatable__cell">-</td>
                  <td class="c-datatable__cell">-</td>
                  <td class="c-datatable__cell">20/03/2018</td>
                </tr>
                <tr class="c-datatable__row">
                  <td class="c-datatable__cell">
                    <a class="c-datatable__link" href="">Sigue aquí el Nindies Showcase de primavera</a>
                  </td>
                  <td class="c-datatable__cell">Noticia</td>
                  <td class="c-datatable__cell">Publicada</td>
                  <td class="c-datatable__cell">Pep Sanchez</td>
                  <td class="c-datatable__cell">5523</td>
                  <td class="c-datatable__cell">9</td>
                  <td class="c-datatable__cell">24/03/2018</td>
                  <td class="c-datatable__cell">21/03/2018</td>
                </tr>
                <tr class="c-datatable__row">
                  <td class="c-datatable__cell">
                    <a class="c-datatable__link" href="">Sea of Thieves: Diario de a bordo (I)</a>
                  </td>
                  <td class="c-datatable__cell">Artículo</td>
                  <td class="c-datatable__cell">Publicada</td>
                  <td class="c-datatable__cell">Fran Pinto</td>
                  <td class="c-datatable__cell">3352</td>
                  <td class="c-datatable__cell">34</td>
                  <td class="c-datatable__cell">21/02/2018</td>
                  <td class="c-datatable__cell">22/03/2018</td>
                </tr>
                <tr class="c-datatable__row">
                  <td class="c-datatable__cell">
                    <a class="c-datatable__link" href="">Amanita trabaja en un juego de terror «muy perturbador»</a>
                  </td>
                  <td class="c-datatable__cell">Noticia</td>
                  <td class="c-datatable__cell">Publicada</td>
                  <td class="c-datatable__cell">Pep Sanchez</td>
                  <td class="c-datatable__cell">239</td>
                  <td class="c-datatable__cell">13</td>
                  <td class="c-datatable__cell">22/03/2018</td>
                  <td class="c-datatable__cell">22/03/2018</td>
                </tr>
                <tr class="c-datatable__row">
                  <td class="c-datatable__cell">
                    <a class="c-datatable__link" href="">Tráiler de lanzamiento de Assassin's Creed: Rogue Remastered</a>
                  </td>
                  <td class="c-datatable__cell">Noticia</td>
                  <td class="c-datatable__cell">Borrador</td>
                  <td class="c-datatable__cell">Muerte Martinez</td>
                  <td class="c-datatable__cell">-</td>
                  <td class="c-datatable__cell">-</td>
                  <td class="c-datatable__cell">-</td>
                  <td class="c-datatable__cell">20/03/2018</td>
                </tr>
                <tr class="c-datatable__row">
                  <td class="c-datatable__cell">
                    <a class="c-datatable__link" href="">Sigue aquí el Nindies Showcase de primavera</a>
                  </td>
                  <td class="c-datatable__cell">Noticia</td>
                  <td class="c-datatable__cell">Publicada</td>
                  <td class="c-datatable__cell">Pep Sanchez</td>
                  <td class="c-datatable__cell">5523</td>
                  <td class="c-datatable__cell">9</td>
                  <td class="c-datatable__cell">24/03/2018</td>
                  <td class="c-datatable__cell">21/03/2018</td>
                </tr>
                <tr class="c-datatable__row">
                  <td class="c-datatable__cell">
                    <a class="c-datatable__link" href="">Sea of Thieves: Diario de a bordo (I)</a>
                  </td>
                  <td class="c-datatable__cell">Artículo</td>
                  <td class="c-datatable__cell">Publicada</td>
                  <td class="c-datatable__cell">Fran Pinto</td>
                  <td class="c-datatable__cell">3352</td>
                  <td class="c-datatable__cell">34</td>
                  <td class="c-datatable__cell">21/02/2018</td>
                  <td class="c-datatable__cell">22/03/2018</td>
                </tr>
                <tr class="c-datatable__row">
                  <td class="c-datatable__cell">
                    <a class="c-datatable__link" href="">Amanita trabaja en un juego de terror «muy perturbador»</a>
                  </td>
                  <td class="c-datatable__cell">Noticia</td>
                  <td class="c-datatable__cell">Publicada</td>
                  <td class="c-datatable__cell">Pep Sanchez</td>
                  <td class="c-datatable__cell">239</td>
                  <td class="c-datatable__cell">13</td>
                  <td class="c-datatable__cell">22/03/2018</td>
                  <td class="c-datatable__cell">22/03/2018</td>
                </tr>
                <tr class="c-datatable__row">
                  <td class="c-datatable__cell">
                    <a class="c-datatable__link" href="">Tráiler de lanzamiento de Assassin's Creed: Rogue Remastered</a>
                  </td>
                  <td class="c-datatable__cell">Noticia</td>
                  <td class="c-datatable__cell">Borrador</td>
                  <td class="c-datatable__cell">Muerte Martinez</td>
                  <td class="c-datatable__cell">-</td>
                  <td class="c-datatable__cell">-</td>
                  <td class="c-datatable__cell">-</td>
                  <td class="c-datatable__cell">20/03/2018</td>
                </tr>
                <tr class="c-datatable__row">
                  <td class="c-datatable__cell">
                    <a class="c-datatable__link" href="">Sigue aquí el Nindies Showcase de primavera</a>
                  </td>
                  <td class="c-datatable__cell">Noticia</td>
                  <td class="c-datatable__cell">Publicada</td>
                  <td class="c-datatable__cell">Pep Sanchez</td>
                  <td class="c-datatable__cell">5523</td>
                  <td class="c-datatable__cell">9</td>
                  <td class="c-datatable__cell">24/03/2018</td>
                  <td class="c-datatable__cell">21/03/2018</td>
                </tr>
                <tr class="c-datatable__row">
                  <td class="c-datatable__cell">
                    <a class="c-datatable__link" href="">Sea of Thieves: Diario de a bordo (I)</a>
                  </td>
                  <td class="c-datatable__cell">Artículo</td>
                  <td class="c-datatable__cell">Publicada</td>
                  <td class="c-datatable__cell">Fran Pinto</td>
                  <td class="c-datatable__cell">3352</td>
                  <td class="c-datatable__cell">34</td>
                  <td class="c-datatable__cell">21/02/2018</td>
                  <td class="c-datatable__cell">22/03/2018</td>
                </tr>
                <tr class="c-datatable__row">
                  <td class="c-datatable__cell">
                    <a class="c-datatable__link" href="">Amanita trabaja en un juego de terror «muy perturbador»</a>
                  </td>
                  <td class="c-datatable__cell">Noticia</td>
                  <td class="c-datatable__cell">Publicada</td>
                  <td class="c-datatable__cell">Pep Sanchez</td>
                  <td class="c-datatable__cell">239</td>
                  <td class="c-datatable__cell">13</td>
                  <td class="c-datatable__cell">22/03/2018</td>
                  <td class="c-datatable__cell">22/03/2018</td>
                </tr>
                <tr class="c-datatable__row">
                  <td class="c-datatable__cell">
                    <a class="c-datatable__link" href="">Tráiler de lanzamiento de Assassin's Creed: Rogue Remastered</a>
                  </td>
                  <td class="c-datatable__cell">Noticia</td>
                  <td class="c-datatable__cell">Borrador</td>
                  <td class="c-datatable__cell">Muerte Martinez</td>
                  <td class="c-datatable__cell">-</td>
                  <td class="c-datatable__cell">-</td>
                  <td class="c-datatable__cell">-</td>
                  <td class="c-datatable__cell">20/03/2018</td>
                </tr>
                <tr class="c-datatable__row">
                  <td class="c-datatable__cell">
                    <a class="c-datatable__link" href="">Sigue aquí el Nindies Showcase de primavera</a>
                  </td>
                  <td class="c-datatable__cell">Noticia</td>
                  <td class="c-datatable__cell">Publicada</td>
                  <td class="c-datatable__cell">Pep Sanchez</td>
                  <td class="c-datatable__cell">5523</td>
                  <td class="c-datatable__cell">9</td>
                  <td class="c-datatable__cell">24/03/2018</td>
                  <td class="c-datatable__cell">21/03/2018</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="c-box__footer">
            <ul class="c-pagination">
              <li class="c-pagination__page">
                <a href="" class="c-pagination__link">1</a>
              </li>
              <li class="c-pagination__gap">...</li>
              <li class="c-pagination__page">
                <a href="" class="c-pagination__link">6</a>
              </li>
              <li class="c-pagination__page pagination__page--selected">7</li>
              <li class="c-pagination__page">
                <a href="" class="c-pagination__link">8</a>
              </li>
              <li class="c-pagination__page">
                <a href="" class="c-pagination__link">Siguente</a>
              </li>
              <li class="c-pagination__page">
                <a href="" class="c-pagination__link">Última</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "posts",
  data: function() {
    return {
      statistics: [
        { number: 3, difference: +1, subText: "Publicados hoy" },
        { number: 24, difference: +10, subText: "Publicados esta semana" },
        { number: 231, difference: +1, subText: "Publicados este mes" }
      ]
    };
  }
};
</script>

<style scoped>
.posts {
  display: grid;
  grid-template-columns: auto 1fr;
}

.posts__results {
  padding: 30px;
}
</style>
