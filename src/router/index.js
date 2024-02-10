import {createWebHistory, createRouter} from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../view/HomePage.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../view/HomePage.vue"),
    },
    {
      path: "/register/landlord",
      name: "register-landlord",
      component: () => import("../components/register/LandlordView.vue"),
    },
    {
      path: "/register/investor",
      name: "register-investor",
      component: () => import("../components/register/InvestorView.vue"),
    },
    {
      path: "/register/invesment",
      name: "register-invesment",
      component: () => import("../components/register/InvesmentView.vue"),
    },
  ],
});
export default router;
