import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: "/",
    component: () => import("@/views/Client/HomeComponent.vue"),
  },
  {
    path: "/about-us",
    component: () => import("@/views/Client/AboutUs.vue"),
  },
  {
    path: "/term-of-use",
    component: () => import("@/views/Client/TermOfUse.vue"),
  },
  {
    path: "/privacy-statement",
    component: () => import("@/views/Client/PrivacyStatement.vue"),
  },
  {
    path: "/refund-policy",
    component: () => import("@/views/Client/RefundPolicy.vue"),
  },
  {
    path: "/cookie-policy",
    component: () => import("@/views/Client/CookiePolicy.vue"),
  },
  {
    path: "/community-guidelines",
    component: () => import("@/views/Client/CommunityGuidelines.vue"),
  },
  {
    path: "/dating-safety",
    component: () => import("@/views/Client/DatingSafety.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Client/Login.vue"),
  },
  {
    path: "/payment/upgrade",
    component: () => import("@/views/Client/UpgradePayment.vue"),
  },
  {
    path: "/payment/complete",
    component: () => import("@/views/Client/PaymentComplete.vue"),
  },
  {
    path: "/partner/suggest",
    component: () => import("@/views/Client/PartnerSuggestion.vue"),
  },
  {
    path: "/partner/suggest/complete",
    component: () => import("@/views/Client/PartnerSuggestionComplete.vue"),
  },
  {
    path: "/survey-question",
    component: () => import("@/views/Client/SurveyQuestion.vue"),
  },
  {
    path: "/analysic",
    component: Layout,
    meta: { icon: "el-icon-s-help" },
    children: [
      {
        path: "",
        name: "business-sales",
        component: () => import("@/views/business-sales/index"),
        meta: { title: "Manager business sales", icon: "dashboard", requireAdmin: true },
      },
    ],
  },
  {
    path: "/survey",
    component: Layout,
    meta: { title: "Survey", icon: "el-icon-s-help" },
    children: [
      {
        path: "list",
        name: "survey-list",
        component: () => import("@/views/survey-question/index"),
        meta: { title: "Survey question", icon: "list", requireAdmin: true },
      },
    ],
  },
  {
    path: "/manager",
    component: Layout,
    meta: { title: "Manager", icon: "el-icon-s-help" },
    children: [
      {
        path: "candidate",
        name: "candidate",
        component: () => import("@/views/candidate/index"),
        meta: { title: "Candidate", icon: "user", requireAdmin: true },
      },
      {
        path: "dating",
        name: "user-dating",
        component: () => import("@/views/manager-dating/index"),
        meta: { title: "Dating", icon: "wechat", requireAdmin: true },
      },
    ],
  },
  {
    path: "/payment-package",
    component: Layout,
    children: [
      {
        path: "payment-package",
        name: "payment-package",
        component: () => import("@/views/payment-package/index"),
        meta: { title: "Payment package", icon: "money", requireAdmin: true },
      },
    ],
  },
  {
    path: "/contact",
    component: Layout,
    children: [
      {
        path: "list",
        name: "contacts",
        component: () => import("@/views/contacts/index"),
        meta: { title: "Contact List", icon: "tree-table", requireAdmin: true },
      },
    ],
  },
  {
    path: "/marketing",
    component: Layout,
    children: [
      {
        path: "list",
        name: "contacts",
        component: () => import("@/views/marketing/index"),
        meta: { title: "Marketing strategy", icon: "international", requireAdmin: true },
      },
    ],
  },
  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true },
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
