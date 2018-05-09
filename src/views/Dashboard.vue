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
    <section class="dashboard-boxes">
      <box title="Artículos pendientes">
        <template slot="action">
          <a href="" class="c-button">Ver todos</a>
        </template>
        <ul class="simplelist">
          <li v-for="(data, index) in pendingArticles" :key="index" class="simplelist__item">
            <a href="" class="simplelist__item-link">
              {{ data.title }}
            </a>
            <div class="simplelist__item-extra-info">
              <tag>{{ data.type }}</tag>
            </div>
          </li>
        </ul>
      </box>
      <box title="Ultimos usuarios registrados">
        <template slot="action">
          <a href="" class="c-button">Ver todos</a>
        </template>
        <ul class="simplelist">
          <li v-for="(data, index) in latestsUsers" :key="index" class="simplelist__item  simplelist__item--three-colums">
            <span class="c-avatar">
              <img :src="data.avatarUrl" :alt="data.name">
            </span>
            <span class="simplelist__item-link">
              {{ data.name }}
            </span>
            <div class="c-date">
              {{ data.registerDate }}
            </div>
          </li>
        </ul>
      </box>
      <box title="Drafts">
        <template slot="action">
          <a href="" class="c-button">Ver todos</a>
        </template>
        <ul class="simplelist">
          <li v-for="(data, index) in pendingArticles" :key="index" class="simplelist__item">
            <a href="" class="simplelist__item-link">
              {{ data.title }}
            </a>
            <div class="simplelist__item-extra-info">
              <tag>{{ data.type }}</tag>
            </div>
          </li>
        </ul>
      </box>
      <box title="Ultimas noticias">
        <template slot="action">
          <a href="" class="c-button">Ver todas</a>
        </template>
        <ul class="simplelist">
          <li v-for="(data, index) in pendingArticles" :key="index" class="simplelist__item">
            <a href="" class="simplelist__item-link">
              {{ data.title }}
            </a>
            <div class="simplelist__item-extra-info">
              <tag>{{ data.type }}</tag>
            </div>
          </li>
        </ul>
      </box>
    </section>
    <section class="dashboard-comments">
      <div class="c-box">
        <div class="c-box__header">
          <h3 class="c-box__title">Ultimos comentarios</h3>
          <div class="c-box__action">
            <a href="" class="c-button">Ver todos</a>
          </div>
        </div>
        <ul class="c-comments">
          <li class="c-comment">
            <span class="c-avatar c-avatar--big">
              <img src="https://api.adorable.io/avatars/40/1.png" alt="">
            </span>
            <div class="c-comment__container">
              <div class="c-comment__header">
                <div class="c-comment__identity">
                  <span class="c-comment__realname">
                    Fran Pinto
                  </span>
                  <span class="c-comment__username">
                    @pinjed
                  </span>
                </div>
                <div class="c-date">
                  25 de Mayo a las 11:40
                </div>
              </div>
              <div class="c-comment__body">
                Lorem fistrum eiusmod consectetur ex elit apetecan ese hombree occaecat ut tiene musho peligro a gramenawer. Caballo blanco
                caballo negroorl laboris exercitation qué dise usteer nostrud quis jarl incididunt...
                <span class="c-comment__text-break">(continua)</span>
              </div>
              <div class="c-comment__actions">
                <a class="c-button c-button--small" href="">Ver comentario</a>
              </div>
            </div>
          </li>
          <li class="c-comment c-comment--reported">
            <span class="c-avatar c-avatar--big">
              <img src="https://api.adorable.io/avatars/40/2.png" alt="">
            </span>
            <div class="c-comment__container">
              <div class="c-comment__header">
                <div class="c-comment__identity">
                  <span class="c-comment__realname">
                    Muerte Martinez
                  </span>
                  <span class="c-comment__username">
                    @chiconuclear
                  </span>
                </div>
                <div class="c-date">
                  24 de Mayo a las 10:51
                </div>
              </div>
              <div class="c-comment__body">
                No entiendo nada, hulio.
              </div>
              <div class="c-comment__actions">
                <a class="c-button c-button--small" href="">Ver comentario</a>
              </div>
            </div>
          </li>
          <li class="c-comment">
            <span class="c-avatar c-avatar--big">
              <img src="https://api.adorable.io/avatars/40/3.png" alt="">
            </span>
            <div class="c-comment__container">
              <div class="c-comment__header">
                <div class="c-comment__identity">
                  <span class="c-comment__realname">
                    Pep Sanchez
                  </span>
                  <span class="c-comment__username">
                    @pep_sanchez
                  </span>
                </div>
                <div class="c-date">
                  24 de Mayo a las 10:51
                </div>
              </div>
              <div class="c-comment__body">
                Lorem fistrum amatomaa te voy a borrar el cerito caballo blanco caballo negroorl ahorarr qué dise usteer me cago en tus muelas
                pecador no te digo trigo por no llamarte Rodrigor...
                <span class="c-comment__text-break">(continua)</span>
              </div>
              <div class="c-comment__actions">
                <a class="c-button c-button--small" href="">Ver comentario</a>
              </div>
            </div>
          </li>
          <li class="c-comment c-comment--reported">
            <span class="c-avatar c-avatar--big">
              <img src="https://api.adorable.io/avatars/40/4.png" alt="">
            </span>
            <div class="c-comment__container">
              <div class="c-comment__header">
                <div class="c-comment__identity">
                  <span class="c-comment__realname">
                    Vlanco de Vendetta
                  </span>
                  <span class="c-comment__username">
                    @vlanco
                  </span>
                </div>
                <div class="c-date">
                  22 de Mayo a las 23:30
                </div>
              </div>
              <div class="c-comment__body">
                Lorem fistrum a peich la caidita amatomaa te va a hasé pupitaa jarl la caidita sexuarl. Se calle ustée caballo blanco caballo
                negroorl la caidita se calle ustée a wan. Ese hombree a wan pecador...
                <span class="c-comment__text-break">(continua)</span>
              </div>
              <div class="c-comment__actions">
                <a class="c-button c-button--small" href="">Ver comentario</a>
              </div>
            </div>
          </li>
          <li class="c-comment">
            <span class="c-avatar c-avatar--big">
              <img src="https://api.adorable.io/avatars/40/1.png" alt="">
            </span>
            <div class="c-comment__container">
              <div class="c-comment__header">
                <div class="c-comment__identity">
                  <span class="c-comment__realname">
                    Fran Pinto
                  </span>
                  <span class="c-comment__username">
                    @pinjed
                  </span>
                </div>
                <div class="c-date">
                  25 de Mayo a las 11:40
                </div>
              </div>
              <div class="c-comment__body">
                Lorem fistrum eiusmod consectetur ex elit apetecan ese hombree occaecat ut tiene musho peligro a gramenawer. Caballo blanco
                caballo negroorl laboris exercitation qué dise usteer nostrud quis jarl incididunt...
                <span class="c-comment__text-break">(continua)</span>
              </div>
              <div class="c-comment__actions">
                <a class="c-button c-button--small" href="">Ver comentario</a>
              </div>
            </div>
          </li>
          <li class="c-comment">
            <span class="c-avatar c-avatar--big">
              <img src="https://api.adorable.io/avatars/40/2.png" alt="">
            </span>
            <div class="c-comment__container">
              <div class="c-comment__header">
                <div class="c-comment__identity">
                  <span class="c-comment__realname">
                    Muerte Martinez
                  </span>
                  <span class="c-comment__username">
                    @chiconuclear
                  </span>
                </div>
                <div class="c-date">
                  24 de Mayo a las 10:51
                </div>
              </div>
              <div class="c-comment__body">
                No entiendo nada, hulio.
              </div>
              <div class="c-comment__actions">
                <a class="c-button c-button--small" href="">Ver comentario</a>
              </div>
            </div>
          </li>
          <li class="c-comment">
            <span class="c-avatar c-avatar--big">
              <img src="https://api.adorable.io/avatars/40/3.png" alt="">
            </span>
            <div class="c-comment__container">
              <div class="c-comment__header">
                <div class="c-comment__identity">
                  <span class="c-comment__realname">
                    Pep Sanchez
                  </span>
                  <span class="c-comment__username">
                    @pep_sanchez
                  </span>
                </div>
                <div class="c-date">
                  24 de Mayo a las 10:51
                </div>
              </div>
              <div class="c-comment__body">
                Lorem fistrum amatomaa te voy a borrar el cerito caballo blanco caballo negroorl ahorarr qué dise usteer me cago en tus muelas
                pecador no te digo trigo por no llamarte Rodrigor...
                <span class="c-comment__text-break">(continua)</span>
              </div>
              <div class="c-comment__actions">
                <a class="c-button c-button--small" href="">Ver comentario</a>
              </div>
            </div>
          </li>
          <li class="c-comment">
            <span class="c-avatar c-avatar--big">
              <img src="https://api.adorable.io/avatars/40/4.png" alt="">
            </span>
            <div class="c-comment__container">
              <div class="c-comment__header">
                <div class="c-comment__identity">
                  <span class="c-comment__realname">
                    Vlanco de Vendetta
                  </span>
                  <span class="c-comment__username">
                    @vlanco
                  </span>
                </div>
                <div class="c-date">
                  22 de Mayo a las 23:30
                </div>
              </div>
              <div class="c-comment__body">
                Lorem fistrum a peich la caidita amatomaa te va a hasé pupitaa jarl la caidita sexuarl. Se calle ustée caballo blanco caballo
                negroorl la caidita se calle ustée a wan. Ese hombree a wan pecador...
                <span class="c-comment__text-break">(continua)</span>
              </div>
              <div class="c-comment__actions">
                <a class="c-button c-button--small" href="">Ver comentario</a>
              </div>
            </div>
          </li>
          <li class="c-comment">
            <span class="c-avatar c-avatar--big">
              <img src="https://api.adorable.io/avatars/40/1.png" alt="">
            </span>
            <div class="c-comment__container">
              <div class="c-comment__header">
                <div class="c-comment__identity">
                  <span class="c-comment__realname">
                    Fran Pinto
                  </span>
                  <span class="c-comment__username">
                    @pinjed
                  </span>
                </div>
                <div class="c-date">
                  25 de Mayo a las 11:40
                </div>
              </div>
              <div class="c-comment__body">
                Lorem fistrum eiusmod consectetur ex elit apetecan ese hombree occaecat ut tiene musho peligro a gramenawer. Caballo blanco
                caballo negroorl laboris exercitation qué dise usteer nostrud quis jarl incididunt...
                <span class="c-comment__text-break">(continua)</span>
              </div>
              <div class="c-comment__actions">
                <a class="c-button c-button--small" href="">Ver comentario</a>
              </div>
            </div>
          </li>
          <li class="c-comment">
            <span class="c-avatar c-avatar--big">
              <img src="https://api.adorable.io/avatars/40/2.png" alt="">
            </span>
            <div class="c-comment__container">
              <div class="c-comment__header">
                <div class="c-comment__identity">
                  <span class="c-comment__realname">
                    Muerte Martinez
                  </span>
                  <span class="c-comment__username">
                    @chiconuclear
                  </span>
                </div>
                <div class="c-date">
                  24 de Mayo a las 10:51
                </div>
              </div>
              <div class="c-comment__body">
                No entiendo nada, hulio.
              </div>
              <div class="c-comment__actions">
                <a class="c-button c-button--small" href="">Ver comentario</a>
              </div>
            </div>
          </li>
          <li class="c-comment">
            <span class="c-avatar c-avatar--big">
              <img src="https://api.adorable.io/avatars/40/3.png" alt="">
            </span>
            <div class="c-comment__container">
              <div class="c-comment__header">
                <div class="c-comment__identity">
                  <span class="c-comment__realname">
                    Pep Sanchez
                  </span>
                  <span class="c-comment__username">
                    @pep_sanchez
                  </span>
                </div>
                <div class="c-date">
                  24 de Mayo a las 10:51
                </div>
              </div>
              <div class="c-comment__body">
                Lorem fistrum amatomaa te voy a borrar el cerito caballo blanco caballo negroorl ahorarr qué dise usteer me cago en tus muelas
                pecador no te digo trigo por no llamarte Rodrigor...
                <span class="c-comment__text-break">(continua)</span>
              </div>
              <div class="c-comment__actions">
                <a class="c-button c-button--small" href="">Ver comentario</a>
              </div>
            </div>
          </li>
          <li class="c-comment">
            <span class="c-avatar c-avatar--big">
              <img src="https://api.adorable.io/avatars/40/4.png" alt="">
            </span>
            <div class="c-comment__container">
              <div class="c-comment__header">
                <div class="c-comment__identity">
                  <span class="c-comment__realname">
                    Vlanco de Vendetta
                  </span>
                  <span class="c-comment__username">
                    @vlanco
                  </span>
                </div>
                <div class="c-date">
                  22 de Mayo a las 23:30
                </div>
              </div>
              <div class="c-comment__body">
                Lorem fistrum a peich la caidita amatomaa te va a hasé pupitaa jarl la caidita sexuarl. Se calle ustée caballo blanco caballo
                negroorl la caidita se calle ustée a wan. Ese hombree a wan pecador...
                <span class="c-comment__text-break">(continua)</span>
              </div>
              <div class="c-comment__actions">
                <a class="c-button c-button--small" href="">Ver comentario</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import StatisticsBox from "@/components/StatisticsBox.vue";
import Box from "@/components/Box.vue";
import Tag from "@/components/Tag.vue";

export default {
  name: "dashboard",
  components: {
    StatisticsBox,
    Box,
    Tag
  },
  data: function() {
    return {
      statistics: [
        { number: 42, difference: +12, subText: "Usuarios registrados hoy" },
        { number: 12, difference: +12, subText: "Noticias publicadas" },
        { number: 123, difference: +12, subText: "Comentarios nuevos" }
      ],
      pendingArticles: [
        {
          id: 1,
          title: "Sea of Thieves: Diario de a bordo (I)",
          type: "Articulo"
        },
        {
          id: 2,
          title: "Amanita trabaja en un juego de terror «muy perturbador»",
          type: "Opinión"
        },
        {
          id: 3,
          title: "Tráiler de lanzamiento de Assassin's Creed: Rogue Remastered",
          type: "Noticia"
        },
        {
          id: 4,
          title: "Sigue aquí el Nindies Showcase de primavera",
          type: "Noticia"
        },
        {
          id: 5,
          title: "Sea of Thieves: Diario de a bordo (II)",
          type: "Articulo"
        }
      ],
      latestsUsers: [
        {
          id: 1,
          name: "Pinjed",
          avatarUrl: "https://api.adorable.io/avatars/40/1.png",
          registerDate: "Hoy a las 12:03"
        },
        {
          id: 2,
          name: "Muete Martinez",
          avatarUrl: "https://api.adorable.io/avatars/40/2.png",
          registerDate: "Hoy a las 12:03"
        },
        {
          id: 3,
          name: "V de Vlanco",
          avatarUrl: "https://api.adorable.io/avatars/40/3.png",
          registerDate: "Hoy a las 12:03"
        },
        {
          id: 4,
          name: "Pep Sanchez",
          avatarUrl: "https://api.adorable.io/avatars/40/4.png",
          registerDate: "Hoy a las 12:03"
        },
        {
          id: 5,
          name: "Free",
          avatarUrl: "https://api.adorable.io/avatars/40/5.png",
          registerDate: "Hoy a las 12:03"
        }
      ]
    };
  }
};
</script>

<style scoped>
.dashboard-statistics {
  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-lightgrey);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 160px;
  align-items: center;
  justify-items: center;
}

.dashboard-boxes {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
  padding: 30px;
}

.dashboard-comments {
  padding: 0 30px 30px;
}

.simplelist {
  list-style: none;
  margin: 0;
  padding: 0;
}

.simplelist__item {
  padding: 0 10px;
  border-bottom: 1px solid var(--color-lightgrey);
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 10px;
  font-size: var(--font-size-medium);
  min-height: 40px;
  align-items: center;
}

.simplelist__item--three-colums {
  grid-template-columns: auto 1fr auto;
}

.simplelist__item-link {
  cursor: pointer;
  text-decoration: none;
}

.simplelist__item-link:hover {
  text-decoration: underline;
}

.simplelist__item:last-child {
  border: 0;
}
</style>
