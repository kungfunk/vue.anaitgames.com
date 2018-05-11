import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/Dashboard.vue";
import Posts from "./views/Posts.vue";
import Post from "./views/Post.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/posts",
      name: "posts",
      component: Posts
    },
    {
      path: "/posts/:id",
      name: "post",
      component: Post
    }
  ]
});
