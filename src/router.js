import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/mempool",
      name: "mempool",
      // route level code-splitting
      // this generates a separate chunk (mempool.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "mempool" */ "./views/Mempool.vue")
    },
    {
      path: "/statistics",
      name: "statistics",
      component: () =>
        import(/* webpackChunkName: "statistics" */ "./views/Statistics.vue")
    }
  ]
});
